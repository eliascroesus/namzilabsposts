#!/usr/bin/env node
// Build the preview + download page from what's in the repo.
//
//   node tools/build-preview.mjs                              → preview.html (everything; open it through a local server)
//   node tools/build-preview.mjs --artifact DIR --kit content → DIR/page.html + DIR/files.json: posts, videos, docs
//   node tools/build-preview.mjs --artifact DIR --kit brand   → the same for logos, banners, Namzi
//
// For the published Content Kit, post images are served as visually lossless JPGs
// and videos as web-compressed copies (both made into DIR/web/), so the page fits
// one artifact version. The PNG and full-quality MP4 masters stay in the repo.
//
// Everything on the page comes from the files themselves: post.md captions, image
// sizes, video lengths, logo SVGs, the sticker list. Re-run it after adding content.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { ffmpegPath, flag } from "./lib.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");
const read = (p) => readFileSync(path.join(ROOT, p), "utf8");
const size = (p) => statSync(path.join(ROOT, p)).size;
const argv = process.argv.slice(2);
const artifactDir = flag(argv, "artifact", null);
const kit = flag(argv, "kit", "all");
const KITS = {
  content: { url: "https://claude.ai/artifact/NaEiTHhgzhRd5EMTTh5syU", title: "Content Kit" },
  brand: { url: "https://claude.ai/artifact/8wEv8d2VnWHqqmHusbJHvh", title: "Brand Kit" },
};

const REPO = {
  url: "https://github.com/eliascroesus/namzilabsposts/tree/claude/elegant-davinci-yicuma",
  zip: "https://github.com/eliascroesus/namzilabsposts/archive/refs/heads/claude/elegant-davinci-yicuma.zip",
};

/* who each piece is for (the filter chips), and where Namzi appears */
const POST_AUD = {
  "01-three-answers": ["sales"], "02-seven-numbers": ["everyone"], "03-monday-pov": ["everyone"], "04-held-not-booked": ["agencies"],
  "05-creators-no-total": ["creators"], "06-ecom-credit": ["ecommerce"], "07-speed-to-lead": ["sales"], "08-receipt": ["everyone"],
  "09-four-ways": ["sales"], "10-build-receipt": ["founders"], "11-sources-wall": ["everyone"], "12-ask-your-ai-HOLD": ["everyone"],
  "13-meet-namzi": ["everyone"], "14-group-chat": ["ecommerce"], "15-launch-bingo": ["creators"], "16-red-flags": ["founders"],
  "17-where-monday-goes": ["agencies"], "18-crm-believes": ["sales"], "19-red-string": ["founders", "ecommerce"], "20-screenshot-vs-receipt": ["creators"],
  "21-how-many-showed": ["sales"], "22-dictionary": ["everyone"], "23-eod-report": ["sales"], "24-reply-rate": ["agencies"],
  "25-horror-stories": ["founders"], "26-monday-scorecard": ["sales"], "27-namzi-never-says": ["everyone"], "28-tier-list": ["everyone"],
  "29-how-many-members": ["creators"], "30-list-vs-buyers": ["ecommerce"], "31-cost-per-held": ["agencies"], "32-book-sooner": ["sales"],
  "33-three-hours-later": ["founders"], "34-namzi-first-week": ["everyone"], "35-how-it-works": ["everyone"],
};
const POST_NAMZI = new Set(["13-meet-namzi", "14-group-chat", "16-red-flags", "21-how-many-showed", "27-namzi-never-says", "34-namzi-first-week"]);
const PINNED = new Set(["35-how-it-works", "11-all-your-data"]);
const VIDEO_AUD = {
  "01-three-answers": ["sales"], "02-three-steps": ["everyone"], "03-monday-907": ["everyone"], "04-receipts": ["everyone"],
  "05-ask-your-ai": ["everyone"], "06-logo-sting": ["everyone"], "07-meet-namzi": ["everyone"], "08-group-chat": ["ecommerce"],
  "09-eod-report": ["sales"], "10-launch-receipt": ["creators"], "11-all-your-data": ["everyone"],
  "12-funnel-breaks": ["sales", "everyone"], "13-true-numbers": ["everyone"],
};
const VIDEO_NAMZI = new Set(["07-meet-namzi", "08-group-chat"]);

function pngSize(p) {
  const b = readFileSync(path.join(ROOT, p));
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}

/* ── post.md → structured captions ─────────────────────────────────────── */
const unquote = (lines) => lines.map((l) => l.replace(/^>\s?/, "")).join("\n").replace(/\n{3,}/g, "\n\n").trim();
function parsePost(dir) {
  const md = read(`posts/${dir}/post.md`);
  const lines = md.split("\n");
  const h1 = (lines.find((l) => l.startsWith("# ")) || "").slice(2);
  const [num, ...t] = h1.split(" · ");
  const meta = {};
  for (const l of lines) {
    const m = l.match(/^\|\s*\*\*(For|Job|Format|Files)\*\*\s*\|\s*(.*?)\s*\|\s*$/);
    if (m) meta[m[1].toLowerCase()] = m[2].replace(/`/g, "");
  }
  // split into ## sections
  const secs = [];
  let curr = null;
  for (const l of lines) {
    if (l.startsWith("## ")) { curr = { title: l.slice(3).trim(), body: [] }; secs.push(curr); continue; }
    if (curr) curr.body.push(l);
  }
  const sections = secs.map((s) => {
    const body = s.body.join("\n").trim();
    if (/^Instagram caption/i.test(s.title)) return { kind: "caption", title: s.title, text: unquote(s.body.filter((l) => l.startsWith(">"))) };
    if (/^X\b/.test(s.title)) {
      // **Label** … then one or more blockquotes; each blockquote is one post
      const blocks = [];
      let label = "Post", quote = [];
      const flush = () => { if (quote.length) { blocks.push({ label, text: unquote(quote) }); quote = []; } };
      for (const l of s.body) {
        const lab = l.match(/^\*\*(.+?)\*\*\s*(.*)$/);
        if (lab && !l.startsWith(">")) { flush(); label = (lab[1] + " " + lab[2]).replace(/`/g, "").replace(/:\s*$/, "").replace(/\s+/g, " ").trim(); continue; }
        if (l.startsWith(">")) quote.push(l);
        else if (!l.trim()) flush();
      }
      flush();
      // a thread written as one quote ("1/ …", "2/ …") becomes one block per post
      for (let i = blocks.length - 1; i >= 0; i--) {
        const parts = blocks[i].text.split(/\n(?=\d+\/\s)/);
        if (parts.length > 1) blocks.splice(i, 1, ...parts.map((t) => ({ label: blocks[i].label, text: t.trim() })));
      }
      // number the posts of a thread
      const byLabel = {};
      for (const b of blocks) byLabel[b.label] = (byLabel[b.label] || 0) + 1;
      const seen = {};
      for (const b of blocks) if (byLabel[b.label] > 1) { seen[b.label] = (seen[b.label] || 0) + 1; b.label = `${b.label} ${seen[b.label]}/${byLabel[b.label]}`; }
      return { kind: "x", title: s.title, blocks };
    }
    if (/^Alt text/i.test(s.title)) return { kind: "alt", title: s.title, text: body.split("\n").map((l) => l.replace(/^\s*-\s*/, "").replace(/\*\*/g, "")).filter(Boolean).join("\n\n") };
    if (/^Claims check/i.test(s.title)) return { kind: "claims", title: s.title, text: body };
    return { kind: "md", title: s.title, text: body };
  });
  const files = readdirSync(path.join(ROOT, "posts", dir)).filter((f) => /\.(png)$/.test(f) && !f.includes("@2x"));
  const order = (f) => (f.startsWith("ig-") ? 0 : 1) + f;
  const images = files.sort((a, b) => order(a).localeCompare(order(b))).map((name) => {
    const p = `posts/${dir}/${name}`;
    return { name, path: p, size: size(p), ...pngSize(p) };
  });
  const ig = images.filter((i) => i.name.startsWith("ig-")).length;
  return {
    dir, num: num.trim(), title: t.join(" · ").trim(), for: meta.for || "", job: meta.job || "", format: meta.format || "",
    formatShort: ig > 1 ? `Carousel · ${ig} slides` : "Single image",
    audiences: POST_AUD[dir] || ["everyone"], mascot: POST_NAMZI.has(dir), hold: /HOLD/.test(dir), pinned: PINNED.has(dir),
    images, md, sections,
    pdf: existsSync(path.join(ROOT, "posts", dir, "linkedin-carousel.pdf")) ? { name: "linkedin-carousel.pdf", path: `posts/${dir}/linkedin-carousel.pdf`, size: size(`posts/${dir}/linkedin-carousel.pdf`) } : null,
  };
}

/* ── videos: the README table, its captions, and the files ─────────────── */
function videoMeta() {
  const md = read("videos/README.md");
  const rows = {};
  for (const l of md.split("\n")) {
    const m = l.match(/^\|\s*(\d\d)[^|]*\|\s*\*\*(.+?)\*\*/);
    if (m) rows[m[1]] = m[2].replace(/\.$/, "");
  }
  const caps = {};
  const parts = md.split(/\n(?=\*\*\d\d · )/);
  for (const part of parts) {
    const m = part.match(/^\*\*(\d\d) · (.+?)\*\*/);
    if (!m) continue;
    const body = part.split("\n").slice(1).join("\n").split(/\n## /)[0];
    const blocks = [];
    let label = null, quote = [];
    const flush = () => { if (label && quote.length) blocks.push({ label, text: unquote(quote.map((q) => q.trim())) }); quote = []; };
    for (const l of body.split("\n")) {
      const lab = l.match(/^\s*-\s*\*\*(.+?):\*\*/);
      if (lab) { flush(); label = lab[1]; continue; }
      if (l.trim().startsWith(">")) quote.push(l.trim());
    }
    flush();
    const note = part.split("\n")[0].replace(/^\*\*[^*]+\*\*\s*—?\s*/, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/`/g, "").trim();
    if (!blocks.length && note) blocks.push({ label: "Note", text: note });
    caps[m[1]] = blocks;
  }
  return { rows, caps, md };
}
function duration(p) {
  let out = "";
  try { execFileSync(ffmpegPath(), ["-hide_banner", "-i", path.join(ROOT, p)], { stdio: ["ignore", "ignore", "pipe"] }); }
  catch (e) { out = String(e.stderr || ""); }
  const m = out.match(/Duration:\s*(\d+):(\d+):([\d.]+)/);
  return m ? Math.round(Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])) + "s" : "";
}

function build({ web }) {
  const posts = readdirSync(path.join(ROOT, "posts")).filter((d) => existsSync(path.join(ROOT, "posts", d, "post.md"))).sort().map(parsePost);

  const vm = videoMeta();
  const CUT = (f) => (f.includes("16x9") ? "16:9" : f.includes("1x1") ? "1:1" : "9:16") + (f.includes("ai-live") ? " · AI live" : "");
  const videos = readdirSync(path.join(ROOT, "videos")).filter((d) => /^\d\d-/.test(d)).sort().flatMap((dir) => {
    const mp4s = readdirSync(path.join(ROOT, "videos", dir)).filter((f) => f.endsWith(".mp4"))
      .sort((a, b) => (a.includes("ai-live") - b.includes("ai-live")) || (b.includes("9x16") - a.includes("9x16")));
    if (!mp4s.length) return [];
    const files = mp4s.map((f) => {
      const p = `videos/${dir}/${f}`;
      const webCopy = web && artifactDir ? path.join(artifactDir, "web", p) : null;
      return { name: f, path: p, size: webCopy && existsSync(webCopy) ? statSync(webCopy).size : size(p), label: CUT(f) };
    });
    const num = dir.slice(0, 2);
    return [{
      dir, num, title: vm.rows[num] || dir.slice(3).replace(/-/g, " "), duration: duration(files[0].path),
      file: files[0], files, poster: { name: "poster.jpg", path: `videos/${dir}/poster.jpg`, size: size(`videos/${dir}/poster.jpg`) },
      audiences: VIDEO_AUD[dir] || ["everyone"], mascot: VIDEO_NAMZI.has(dir), hold: dir === "05-ask-your-ai", square: dir === "06-logo-sting", pinned: PINNED.has(dir),
      caption: vm.caps[num] || [],
    }];
  });

  const concepts = JSON.parse(read("brand/logos/concepts.json")).map((c) => {
    const dir = `brand/logos/${c.id}`;
    const orderList = ["symbol-color", "symbol-white", "symbol-ink", "app-icon", "app-icon-sky", "app-icon-blue", "app-icon-ink", "app-icon-paper", "lockup-light", "lockup-dark", "lockup-ink", "lockup-white", "profile"];
    const svgs = readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".svg"))
      .sort((a, b) => (orderList.indexOf(a.replace(".svg", "")) + 1 || 99) - (orderList.indexOf(b.replace(".svg", "")) + 1 || 99) || a.localeCompare(b))
      .map((name) => ({ name, text: read(`${dir}/${name}`).trim() }));
    const prof = `${dir}/profile-1024.png`;
    const board = `brand/logos/boards/${c.id}.png`;
    const pngs = readdirSync(path.join(ROOT, dir)).filter((f) => f.endsWith(".png")).sort((a, b) => a.includes("eclipse") - b.includes("eclipse") || a.localeCompare(b)).map((f) => ({ name: f, path: `${dir}/${f}`, size: size(`${dir}/${f}`) }));
    const profile = pngs.find((p) => p.name === "profile-1024.png" || p.name === "profile-blue-1024.png") || null;
    return { ...c, svgs, pngs, profile, primary: c.id === "01-between-mono", board: existsSync(path.join(ROOT, board)) ? { name: `${c.id}.png`, path: board, size: size(board) } : null };
  });
  const overviews = ["01-between-mono.png", "00-overview.png", "00-overview-2.png"].filter((f) => existsSync(path.join(ROOT, "brand/logos/boards", f))).map((f) => ({ name: f, path: `brand/logos/boards/${f}`, size: size(`brand/logos/boards/${f}`) }));
  const wordmarks = ["wordmark-ink.svg", "wordmark-white.svg"].map((name) => ({ name, text: read(`brand/logos/${name}`).trim() }));

  const stickers = JSON.parse(read("brand/mascot/stickers.json")).map((s) => {
    const p = `brand/mascot/${s.file}`;
    return { label: s.label, png: { name: path.basename(p), path: p, size: size(p) }, svg: read(`brand/mascot/${s.svg}`).trim() };
  });
  const AV = { "namzi-avatar-light.png": "Avatar · light", "namzi-avatar-sky.png": "Avatar · sky", "namzi-avatar-ink.png": "Avatar · ink" };
  const avatars = Object.keys(AV).filter((f) => existsSync(path.join(ROOT, "brand/mascot/avatars", f))).map((f) => ({ name: f, label: AV[f], path: `brand/mascot/avatars/${f}`, size: size(`brand/mascot/avatars/${f}`) }));
  const mboards = readdirSync(path.join(ROOT, "brand/mascot/boards")).filter((f) => f.endsWith(".png")).sort().map((f) => ({ name: `namzi-${f}`, path: `brand/mascot/boards/${f}`, size: size(`brand/mascot/boards/${f}`) }));

  const BN = [["electric", "Electric", "All your data. One place."], ["funnel", "Funnel", "See where your funnel breaks."], ["sources", "Sources", "33 tools. One place."], ["namzi", "Namzi", "True numbers, not blurry ones."], ["minimal", "Minimal", "The lockup and the line"]];
  const PLAT = [["x", "X header", "1500×500"], ["linkedin", "LinkedIn company", "1128×191"], ["linkedin-profile", "LinkedIn profile", "1584×396"], ["facebook", "Facebook page", "1640×624"], ["facebook-group", "Facebook group", "1640×856"], ["youtube", "YouTube", "2560×1440"], ["og", "Link preview", "1200×630"], ["email", "Email signature", "1200×300"]];
  const banners = existsSync(path.join(ROOT, "brand/banners")) ? {
    concepts: BN.filter(([id]) => existsSync(path.join(ROOT, "brand/banners", id))).map(([id, name, head]) => ({
      id, name, head,
      mockup: existsSync(path.join(ROOT, `brand/banners/mockups/x-${id}.png`)) ? { name: `x-${id}.png`, path: `brand/banners/mockups/x-${id}.png`, size: size(`brand/banners/mockups/x-${id}.png`) } : null,
      files: PLAT.filter(([pid]) => existsSync(path.join(ROOT, `brand/banners/${id}/${pid}.png`))).map(([pid, label, dims]) => ({ name: `${pid}.png`, path: `brand/banners/${id}/${pid}.png`, size: size(`brand/banners/${id}/${pid}.png`), label, dims })),
    })),
    highlights: ["blue", "ink"].flatMap((bg) => existsSync(path.join(ROOT, `brand/banners/highlights/${bg}`)) ? readdirSync(path.join(ROOT, `brand/banners/highlights/${bg}`)).filter((f) => f.endsWith(".png")).sort().map((f) => ({ name: `${bg}-${f}`, label: f.replace(".png", "").replace("-", " "), bg, path: `brand/banners/highlights/${bg}/${f}`, size: size(`brand/banners/highlights/${bg}/${f}`) })) : []),
    readme: existsSync(path.join(ROOT, "brand/banners/README.md")) ? read("brand/banners/README.md") : "",
  } : null;

  const DOCS = [
    ["STRATEGY.md", "Content strategy", "Positioning, ICPs, pillars, cadence, hooks, CTAs, the first 30 days, claims rules"],
    ["brand/BRAND_KIT.md", "Brand kit", "Logo, colour, type, layout, message, motion and voice"],
    ["brand/banners/README.md", "Banners and bios", "Every banner size, which kit to use where, and bio copy for each platform"],
    ["research/01-framer-and-base44.md", "Research 01 · Framer & Base44", "How the fastest-growing product companies make content"],
    ["research/02-attio-mochi-premium-saas.md", "Research 02 · Attio, Mochi & premium SaaS", "Brand, tone and motion of premium SaaS"],
    ["research/03-growth-content-playbook.md", "Research 03 · Growth playbook", "What converts on X, Instagram and TikTok"],
    ["research/04-icp-and-competitor-positioning.md", "Research 04 · Customers & competitors", "ICPs, their words, and where Namzilabs wins"],
    ["README.md", "README", "What's in the repo and how to re-render"],
  ];
  const docs = DOCS.filter(([p]) => existsSync(path.join(ROOT, p))).map(([p, title, desc]) => ({ name: path.basename(p), path: p, title, desc, size: size(p) }));

  const all = {
    built: new Date().toISOString().slice(0, 10), repo: REPO, kit, kits: KITS, posts, videos,
    logos: { concepts, overviews, wordmarks }, banners, mascot: { stickers, avatars, boards: mboards }, docs, videoReadme: vm.md,
  };
  if (kit === "content") return { ...all, logos: { concepts: [], overviews: [], wordmarks: [] }, banners: null, mascot: { stickers: [], avatars: [], boards: [] }, docs: docs.filter((d) => !d.path.startsWith("brand/")) };
  if (kit === "brand") return { ...all, posts: [], videos: [], docs: docs.filter((d) => d.path.startsWith("brand/") || d.name === "STRATEGY.md") };
  return all;
}

function page(manifest) {
  const tpl = read("tools/preview/template.html");
  const json = JSON.stringify(manifest).replace(/</g, "\\u003c");
  const title = manifest.kit === "brand" ? "Namzilabs Brand Kit" : "Namzilabs Content Kit";
  return tpl.replace("<title>Namzilabs Content Kit</title>", `<title>${title}</title>`).replace("<!--MANIFEST-->", `<script type="application/json" id="manifest">${json}</script>`);
}

// the repo copy: a full document, for opening through a local server
const repoManifest = kit === "all" ? build({ web: false }) : null;
if (repoManifest) {
  writeFileSync(path.join(ROOT, "preview.html"), `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n${page(repoManifest)}\n</body>\n</html>\n`);
  console.log(`preview.html: ${repoManifest.posts.length} posts, ${repoManifest.videos.length} videos, ${repoManifest.logos.concepts.length} logos, ${repoManifest.banners ? repoManifest.banners.concepts.length : 0} banner kits, ${repoManifest.mascot.stickers.length} stickers`);
}

if (artifactDir) {
  mkdirSync(artifactDir, { recursive: true });
  const FF = ffmpegPath();
  const webPath = (p) => path.join(artifactDir, "web", p);
  if (kit === "content") {
    // visually lossless JPGs for the post images; web-sized videos
    for (const dir of readdirSync(path.join(ROOT, "posts"))) {
      if (!existsSync(path.join(ROOT, "posts", dir, "post.md"))) continue;
      for (const f of readdirSync(path.join(ROOT, "posts", dir)).filter((f) => /^(ig|x)-\d+\.png$/.test(f))) {
        const src = path.join(ROOT, "posts", dir, f), dst = webPath(`posts/${dir}/${f.replace(".png", ".jpg")}`);
        if (existsSync(dst) && statSync(dst).mtimeMs > statSync(src).mtimeMs) continue;
        mkdirSync(path.dirname(dst), { recursive: true });
        execFileSync(FF, ["-y", "-loglevel", "error", "-i", src, "-q:v", "2", "-pix_fmt", "yuvj444p", dst]);
      }
    }
    for (const dir of readdirSync(path.join(ROOT, "videos")).filter((d) => /^\d\d-/.test(d))) {
      for (const f of readdirSync(path.join(ROOT, "videos", dir)).filter((f) => f.endsWith(".mp4"))) {
        const src = path.join(ROOT, "videos", dir, f), dst = webPath(`videos/${dir}/${f}`);
        if (existsSync(dst) && statSync(dst).mtimeMs > statSync(src).mtimeMs) continue;
        mkdirSync(path.dirname(dst), { recursive: true });
        execFileSync(FF, ["-y", "-loglevel", "error", "-i", src, "-c:v", "libx264", "-preset", "slow", "-crf", "23", "-profile:v", "high", "-x264-params", "aq-mode=3", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", dst]);
        console.log(`web copy: ${dir}/${f}`);
      }
    }
  }
  const m = build({ web: true });
  if (kit === "content") {
    for (const p of m.posts) p.images = p.images.map((i) => {
      const jp = i.path.replace(/\.png$/, ".jpg");
      return { ...i, name: i.name.replace(/\.png$/, ".jpg"), path: jp, size: statSync(webPath(jp)).size };
    });
  }
  writeFileSync(path.join(artifactDir, "page.html"), page(m));
  // every binary the page fetches, published at the same relative path
  const files = {};
  const add = (p) => { files[p] = existsSync(webPath(p)) ? webPath(p) : p; };
  for (const p of m.posts) { p.images.forEach((i) => add(i.path)); if (p.pdf) add(p.pdf.path); }
  for (const v of m.videos) { v.files.forEach((f) => add(f.path)); add(v.poster.path); }
  for (const c of m.logos.concepts) { c.pngs.forEach((p) => add(p.path)); if (c.board) add(c.board.path); }
  m.logos.overviews.forEach((b) => add(b.path));
  if (m.banners) { m.banners.concepts.forEach((c) => { c.files.forEach((f) => add(f.path)); if (c.mockup) add(c.mockup.path); }); m.banners.highlights.forEach((h) => add(h.path)); }
  m.mascot.stickers.forEach((s) => add(s.png.path));
  m.mascot.avatars.forEach((a) => add(a.path));
  m.mascot.boards.forEach((b) => add(b.path));
  m.docs.forEach((d) => add(d.path));
  writeFileSync(path.join(artifactDir, "files.json"), JSON.stringify(files, null, 1));
  const total = Object.values(files).reduce((n, src) => n + statSync(path.isAbsolute(src) ? src : path.join(ROOT, src)).size, 0) + statSync(path.join(artifactDir, "page.html")).size;
  console.log(`${kit} kit: ${Object.keys(files).length} files + page, ${(total / 1e6).toFixed(1)} MB → ${artifactDir}`);
}
