#!/usr/bin/env node
// Build every logo concept as clean, self-contained SVG:
//   symbol-ink / symbol-white / symbol-color, app-icon (ink) / app-icon-sky,
//   lockup-light / lockup-dark — with the wordmark outlined from Inter 800,
//   so no file depends on a font being installed.
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import opentype from "opentype.js";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "brand/logos");
const INK = "#14141C";
const WHITE = "#FFFFFF";
const BLUE = "#568CFF";      // accent on dark
const BLUE_DEEP = "#2F5FD8"; // accent on light (more contrast)

/* Each concept draws on a 64×64 grid. fg = the strokes/body, ac = the one blue
   element, bg = the colour behind it (used where a shape is cut out). */
export const CONCEPTS = [
  {
    id: "01-between",
    skyAc: "#FFFFFF",
    name: "Between",
    idea: "Your tools are the circles. The number you need lives in the overlap — the same person, seen by two tools at once. The blue lens is literally “the number between your tools”.",
    draw: ({ fg, ac }) => `
      <path d="M32 18.73A15 15 0 0 1 32 45.27A15 15 0 0 1 32 18.73Z" fill="${ac}"/>
      <circle cx="25" cy="32" r="15" fill="none" stroke="${fg}" stroke-width="4.6"/>
      <circle cx="39" cy="32" r="15" fill="none" stroke="${fg}" stroke-width="4.6"/>`,
  },
  {
    id: "02-converge",
    skyAc: "#FFFFFF",
    name: "Converge",
    idea: "Three sources run in from the left and leave as one. Many tools in, one defensible number out — the whole product in one gesture.",
    draw: ({ fg, ac }) => `
      <path d="M10 18C23 18 25.5 32 38 32M10 46C23 46 25.5 32 38 32M10 32H38" fill="none" stroke="${fg}" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="48" cy="32" r="7.5" fill="${ac}"/>`,
  },
  {
    id: "03-receipt",
    skyAc: "#2F5FD8",
    name: "Receipt",
    idea: "Every number shows its working. A receipt: the lines that went in, and the total that came out — in blue. Ownable in a category of pie charts.",
    draw: ({ fg, ac, bg }) => `
      <path d="M17 9h30a4 4 0 0 1 4 4v42l-4.75-4-4.75 4-4.75-4-4.75 4-4.75-4-4.75 4-4.75-4-4.75 4V13a4 4 0 0 1 4-4Z" fill="${fg}"/>
      <rect x="21" y="17" width="17" height="3.8" rx="1.9" fill="${bg}"/>
      <rect x="21" y="25" width="11" height="3.8" rx="1.9" fill="${bg}"/>
      <rect x="21" y="37" width="22" height="7" rx="3.5" fill="${ac}"/>`,
  },
  {
    id: "04-bridge",
    skyAc: "#FFFFFF",
    name: "Bridge",
    idea: "A lowercase n standing on two tools. The arch is the metric that spans them — and it spells the first letter of the name.",
    draw: ({ fg, ac }) => `
      <path d="M19.5 45V31.5a12.5 12.5 0 0 1 25 0V45" fill="none" stroke="${fg}" stroke-width="7.2" stroke-linecap="round"/>
      <circle cx="19.5" cy="46" r="7.4" fill="${ac}"/>
      <circle cx="44.5" cy="46" r="7.4" fill="${ac}"/>`,
  },
  {
    id: "05-merge",
    skyAc: "#2F5FD8",
    name: "Merge",
    idea: "The current mark's two dots, finally touching: two records become one person. Continuity with the site today, with the story built into the shape.",
    draw: ({ fg, ac }) => `
      <path d="M22 23.5A8.5 8.5 0 1 0 22 40.5C27 40.5 28.8 35.6 32 35.6C35.2 35.6 37 40.5 42 40.5A8.5 8.5 0 1 0 42 23.5C37 23.5 35.2 28.4 32 28.4C28.8 28.4 27 23.5 22 23.5Z" fill="${fg}"/>
      <circle cx="32" cy="32" r="2.6" fill="${ac}"/>`,
  },
  {
    id: "06-namzi",
    skyAc: "#9DBDFF",
    name: "Namzi",
    idea: "The mascot's face as a mark: the lens from 01, looking back at you. Warmer than 01 — made for avatars, stickers and replies.",
    draw: ({ ac }) => `
      <path d="M32 9A24.06 24.06 0 0 1 32 55A24.06 24.06 0 0 1 32 9Z" fill="${ac}" stroke="${ac}" stroke-width="3" stroke-linejoin="round"/>
      <ellipse cx="25.6" cy="29.5" rx="5" ry="6" fill="#FFFFFF"/><ellipse cx="38.4" cy="29.5" rx="5" ry="6" fill="#FFFFFF"/>
      <circle cx="26.3" cy="30.6" r="2.7" fill="${INK}"/><circle cx="39.1" cy="30.6" r="2.7" fill="${INK}"/>
      <path d="M27.8 39.4Q32 43.2 36.2 39.4" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>`,
  },
  {
    id: "07-hash",
    skyAc: "#FFFFFF",
    name: "Hash",
    idea: "# is the number. The blue square is the space between the lines: the number between your tools, as a symbol everyone already reads.",
    draw: ({ fg, ac }) => `
      <path d="M28.14 26.6H38.94L37.86 37.4H27.06Z" fill="${ac}"/>
      <path d="M27 12L23 52M43 12L39 52M12 24H52M12 40H52" fill="none" stroke="${fg}" stroke-width="5.2" stroke-linecap="round"/>`,
  },
  {
    id: "08-wire",
    skyAc: "#FFFFFF",
    name: "Wire",
    idea: "A flow wire from a tool to the answer, bent into a Z for Namzi. The product's flow builder, in one stroke.",
    draw: ({ fg, ac }) => `
      <circle cx="14.5" cy="18" r="5.4" fill="none" stroke="${fg}" stroke-width="4.2"/>
      <path d="M20 18H44L20.5 46H42" fill="none" stroke="${fg}" stroke-width="4.8" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="49.5" cy="46" r="7" fill="${ac}"/>`,
  },
  {
    id: "09-pillars",
    skyAc: "#FFFFFF",
    name: "Pillars",
    idea: "An N for Namzilabs: two tools standing apart, and the blue line that finally connects them.",
    draw: ({ fg, ac }) => `
      <rect x="13" y="11" width="10" height="42" rx="5" fill="${fg}"/>
      <rect x="41" y="11" width="10" height="42" rx="5" fill="${fg}"/>
      <path d="M19.5 17L44.5 47" stroke="${ac}" stroke-width="9" stroke-linecap="round"/>`,
  },
  {
    id: "10-tittle",
    skyAc: "#FFFFFF",
    name: "Tittle",
    lower: true,
    idea: "A lowercase wordmark whose i is dotted with the Between mark. Quiet at a glance; a small reward up close.",
    draw: ({ fg, ac }) => `
      <path d="M32 8.46A8 8 0 0 1 32 22.54A8 8 0 0 1 32 8.46Z" fill="${ac}"/>
      <circle cx="28.2" cy="15.5" r="8" fill="none" stroke="${fg}" stroke-width="3.6"/>
      <circle cx="35.8" cy="15.5" r="8" fill="none" stroke="${fg}" stroke-width="3.6"/>
      <rect x="27.3" y="29" width="9.4" height="26" rx="4.7" fill="${fg}"/>`,
  },
];

/* ── the wordmark, outlined ────────────────────────────────────────────── */
const font = opentype.loadSync(path.join(ROOT, "node_modules/@fontsource/inter/files/inter-latin-800-normal.woff"));
function wordmark(text, size, tracking = -0.045) {
  const glyphs = font.stringToGlyphs(text);
  const scale = size / font.unitsPerEm;
  let x = 0;
  const parts = [];
  glyphs.forEach((g, i) => {
    const p = g.getPath(x, 0, size);
    parts.push(p.toPathData(2));
    const kern = i < glyphs.length - 1 ? font.getKerningValue(g, glyphs[i + 1]) : 0;
    x += (g.advanceWidth + kern) * scale + (i < glyphs.length - 1 ? tracking * size : 0);
  });
  const capHeight = (font.tables.os2.sCapHeight || 0.727 * font.unitsPerEm) * scale;
  return { d: parts.join(" "), width: x, capHeight };
}

/* "namzılabs" with the i's dot replaced by a tiny Between mark (concept 10) */
function tittleWordmark(size, tracking = -0.04) {
  const text = "namzılabs";
  const glyphs = font.stringToGlyphs(text);
  const scale = size / font.unitsPerEm;
  let x = 0;
  const parts = [];
  let stemX = 0;
  glyphs.forEach((g, i) => {
    parts.push(g.getPath(x, 0, size).toPathData(2));
    if (text[i] === "ı") {
      const bb = g.getBoundingBox();
      stemX = x + ((bb.x1 + bb.x2) / 2) * scale;
    }
    const kern = i < glyphs.length - 1 ? font.getKerningValue(g, glyphs[i + 1]) : 0;
    // a little air either side of the ı, so the tittle clears the z and the l
    const air = text[i] === "z" || text[i] === "ı" ? size * 0.05 : 0;
    x += (g.advanceWidth + kern) * scale + (i < glyphs.length - 1 ? tracking * size : 0) + air;
  });
  const stemTop = font.charToGlyph("ı").getBoundingBox().y2 * scale;
  const r = size * 0.118, off = r * 0.46, sw = size * 0.05;
  const cy = -(stemTop + size * 0.06 + r + sw / 2);
  const half = Math.sqrt(r * r - off * off);
  const f = (n) => Math.round(n * 100) / 100;
  const tittle = (fg, ac) =>
    `<path d="M${f(stemX)} ${f(cy - half)}A${f(r)} ${f(r)} 0 0 1 ${f(stemX)} ${f(cy + half)}A${f(r)} ${f(r)} 0 0 1 ${f(stemX)} ${f(cy - half)}Z" fill="${ac}"/>` +
    `<circle cx="${f(stemX - off)}" cy="${f(cy)}" r="${f(r)}" fill="none" stroke="${fg}" stroke-width="${f(sw)}"/>` +
    `<circle cx="${f(stemX + off)}" cy="${f(cy)}" r="${f(r)}" fill="none" stroke="${fg}" stroke-width="${f(sw)}"/>`;
  return { d: parts.join(" "), width: x, top: cy - r - sw / 2, tittle };
}

function svg(viewBox, body, w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"${w ? ` width="${w}" height="${h}"` : ""}>${body.replace(/\n\s*/g, "")}</svg>\n`;
}
const tile = (fill, defs = "") => `${defs}<rect width="64" height="64" rx="14.5" fill="${fill}"/>`;
const skyDefs = `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1B3C9E"/><stop offset=".55" stop-color="#2F5FD8"/><stop offset="1" stop-color="#4C80F0"/></linearGradient><radialGradient id="h" cx="0" cy="0" r="1" gradientTransform="translate(8 6) scale(46)"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`;
const inTile = (inner) => `<g transform="translate(32 32) scale(0.82) translate(-32 -32)">${inner}</g>`;

mkdirSync(OUT, { recursive: true });
const WM = wordmark("Namzilabs", 40);
writeFileSync(path.join(OUT, "wordmark-ink.svg"), svg(`0 -${Math.ceil(WM.capHeight + 2)} ${Math.ceil(WM.width + 2)} ${Math.ceil(WM.capHeight + 12)}`, `<path d="${WM.d}" fill="${INK}"/>`));
writeFileSync(path.join(OUT, "wordmark-white.svg"), svg(`0 -${Math.ceil(WM.capHeight + 2)} ${Math.ceil(WM.width + 2)} ${Math.ceil(WM.capHeight + 12)}`, `<path d="${WM.d}" fill="${WHITE}"/>`));

for (const c of CONCEPTS) {
  const dir = path.join(OUT, c.id);
  mkdirSync(dir, { recursive: true });
  const onLight = c.draw({ fg: INK, ac: BLUE_DEEP, bg: WHITE });
  const onDark = c.draw({ fg: WHITE, ac: BLUE, bg: INK });
  const mono = (col, bgc) => c.draw({ fg: col, ac: col, bg: bgc });
  writeFileSync(path.join(dir, "symbol-color.svg"), svg("0 0 64 64", onLight));
  writeFileSync(path.join(dir, "symbol-white.svg"), svg("0 0 64 64", onDark));
  writeFileSync(path.join(dir, "symbol-ink.svg"), svg("0 0 64 64", mono(INK, WHITE)));
  writeFileSync(path.join(dir, "app-icon.svg"), svg("0 0 64 64", tile(INK) + inTile(c.draw({ fg: WHITE, ac: BLUE, bg: INK }))));
  writeFileSync(path.join(dir, "app-icon-sky.svg"), svg("0 0 64 64", tile("url(#g)", skyDefs) + `<rect width="64" height="64" rx="14.5" fill="url(#h)"/>` + inTile(c.draw({ fg: WHITE, ac: c.skyAc, bg: "#2A56C8" }))));
  // a full-bleed square for profile pictures (X and Instagram crop it to a circle)
  writeFileSync(path.join(dir, "profile.svg"), svg("0 0 64 64", `<rect width="64" height="64" fill="${INK}"/>` + `<g transform="translate(32 32) scale(0.66) translate(-32 -32)">${c.draw({ fg: WHITE, ac: BLUE, bg: INK })}</g>`));
  if (c.lower) {
    // the wordmark is the logo: lowercase, with the tittle as the dot on the i
    const T = tittleWordmark(40);
    const top = Math.floor(T.top) - 2;
    const vb = `-2 ${top} ${Math.ceil(T.width + 4)} ${Math.ceil(12 - top)}`;
    writeFileSync(path.join(dir, "lockup-light.svg"), svg(vb, `<path d="${T.d}" fill="${INK}"/>${T.tittle(INK, BLUE_DEEP)}`));
    writeFileSync(path.join(dir, "lockup-dark.svg"), svg(vb, `<path d="${T.d}" fill="${WHITE}"/>${T.tittle(WHITE, BLUE)}`));
    continue;
  }
  // lockup: symbol + 14u gap + wordmark, cap height centred on the symbol
  const baseline = 32 + WM.capHeight / 2;
  const width = Math.ceil(64 + 12 + WM.width + 4);
  const lock = (sym, text) => `${sym}<path transform="translate(${64 + 12} ${baseline})" d="${WM.d}" fill="${text}"/>`;
  writeFileSync(path.join(dir, "lockup-light.svg"), svg(`0 0 ${width} 64`, lock(onLight, INK)));
  writeFileSync(path.join(dir, "lockup-dark.svg"), svg(`0 0 ${width} 64`, lock(onDark, WHITE)));
}
writeFileSync(
  path.join(OUT, "concepts.json"),
  JSON.stringify(CONCEPTS.map(({ id, name, idea }) => ({ id, name, idea })), null, 2) + "\n",
);
console.log(`built ${CONCEPTS.length} concepts + wordmark → ${path.relative(ROOT, OUT)}`);
