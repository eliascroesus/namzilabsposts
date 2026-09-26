/* ─────────────────────────────────────────────────────────────────────────
   Stories and feature carousels: the pieces, as HTML strings, and the frame
   that holds them (styles in lib/story.css). One definition renders as a
   9:16 story or a 4:5 feed slide.

     const { C, frame } = NZ.STORY;
     frame({ still: "any-kpi/story-02", hl: "any-kpi", i: 2, n: 6, bg: "paper",
             h: "Build one in three *steps.*", viz: C.steps([...]), demo: true })

   *word* in a headline is the one Instrument Serif italic word.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const em = (s) => esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  const rich = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  const mk = (k) => `<span class="mark" data-src="${k}"></span>`;
  const I = {
    right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    down: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M6 14l6 6 6-6"/></svg>`,
    x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    rule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h10M4 18h7"/><path d="M16 16l2 2 4-4"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="3"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>`,
    ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9Z"/><path d="M19 15l.8 1.9 1.9.8-1.9.8L19 20.4l-.8-1.9-1.9-.8 1.9-.8Z"/></svg>`,
    chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4Z"/></svg>`,
    webhook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7.5a3.5 3.5 0 1 1 5 3.2l2.6 4.8"/><path d="M6.2 13.4a3.5 3.5 0 1 0 4.8 3.1h5.6"/><path d="M17.8 13.1a3.5 3.5 0 1 1-1.2 6.8"/></svg>`,
  };
  // the highlight's icon (lib/hlicons.js): white on the blue disc, or blue on a white one where the frame itself is dark
  const BLUE = { p: "#2f5fd8", t: "rgba(47,95,216,.16)", a: "#2f5fd8", bad: "#f0553d" };
  const icon = (id, onWhite) => window.NZ.HL_ICON(id, onWhite ? BLUE : undefined);
  const iconChip = (id, dark) => `<i class="${dark ? "w" : ""}">${icon(id, dark)}</i>`;

  /* A real screenshot (screenshots/shots.js), cropped, in a clean app window. o: { src, crop: a named crop or
     [x, y, w, h] in the image's pixels, title, bar: false, w (px, default the frame's full 912: a fixed width lets the fit scale it), rings: [{ at: a named item or [x, y, w, h], n }] }.
     Masks listed for the image are blurred wherever the crop takes them in. */
  const shot = (o) => {
    const s = (window.NZ.SHOTS || {})[o.src];
    if (!s) return "";
    const [x, y, w, h] = Array.isArray(o.crop) ? o.crop : (s.crops || {})[o.crop] || [0, 0, s.w, s.h];
    const p = (v, of) => `${((v / of) * 100).toFixed(4)}%`;
    const box = ([bx, by, bw, bh]) => `left:${p(bx - x, w)};top:${p(by - y, h)};width:${p(bw, w)};height:${p(bh, h)}`;
    const hits = ([bx, by, bw, bh]) => bx < x + w && bx + bw > x && by < y + h && by + bh > y;
    const masks = (s.mask || []).filter(hits).map((m) => `<i class="mask" style="${box(m)}"></i>`).join("");
    const rings = (o.rings || []).map((r) => `<b class="ring" style="${box(typeof r.at === "string" ? s.items[r.at] : r.at)}">${r.n ? `<span class="n">${esc(r.n)}</span>` : ""}</b>`).join("");
    const bar = o.bar === false ? "" : `<div class="wbar"><i></i><i></i><i></i><span>${esc(o.title || s.title)}</span></div>`;
    return `<div class="shot" style="width:${o.w || 912}px">${bar}<div class="vp" style="aspect-ratio:${w} / ${h}"><img src="${window.NZ.ROOT ?? "../"}${s.file}" alt="" style="width:${p(s.w, w)};left:${p(-x, w)};top:${p(-y, h)}">${masks}${rings}</div></div>`;
  };

  /* ── the pieces ───────────────────────────────────────────────────────── */
  const C = {
    kpis: (items) => `<div class="kg">${items.map((it) => `<div class="kt${it.hero ? " hero" : ""}${it.wide ? " wide" : ""}"><div><div class="l">${esc(it.l)}<span class="mk">${(it.src || []).map(mk).join("")}</span></div>${it.wide ? "" : `<div class="v">${esc(it.v)}</div>`}${it.d ? `<div class="d ${it.dd || ""}">${esc(it.d)}</div>` : ""}</div>${it.wide ? `<div class="v">${esc(it.v)}</div>` : ""}</div>`).join("")}</div>`,

    // rows: [{src, l, v, w (0-100), bad}], each followed by an optional {cv, bad} pill
    funnel: (items) => `<div class="fnl">${items.map((it) => it.cv ? `<span class="cv${it.bad ? " bad" : ""}">${esc(it.cv)}</span>` : `<div class="row${it.bad ? " bad" : ""}" style="width:${it.w ?? 100}%">${mk(it.src)}<span class="l">${esc(it.l)}</span><span class="v">${esc(it.v)}</span></div>`).join("")}</div>`,

    formula: (f) => `<div class="fxc"><div class="nm">${esc(f.name)}<span class="tag">No code</span></div><div class="terms"><span class="term">${mk(f.a.src)}${esc(f.a.l)}<span class="src">${esc(f.a.s)}</span></span><span class="op">${esc(f.op || "÷")}</span><span class="term">${mk(f.b.src)}${esc(f.b.l)}<span class="src">${esc(f.b.s)}</span></span></div>${f.filters ? `<div class="flt">${f.filters.map((x) => `<span class="${x.out ? "out" : ""}">${esc(x.t)}</span>`).join("")}</div>` : ""}<div class="ans"><span class="k">${esc(f.ans.k)}</span><span class="v">${esc(f.ans.v)}</span></div></div>`,

    steps: (list) => `<div class="stp">${list.map((s, i) => `<div class="s"><b>${i + 1}</b><div><div class="t">${esc(s.t)}</div>${s.d ? `<div class="d">${esc(s.d)}</div>` : ""}</div></div>`).join("")}</div>`,

    receipt: (r) => `<div class="rcp-wrap"><div class="rcp"><div class="hd">${esc(r.hd)}</div><div class="dash"></div>${r.rows.map((x) => x.dash ? `<div class="dash"></div>` : `<div class="ln${x.sub ? " sub" : ""}${x.total ? " total" : ""}"><span class="k">${esc(x.k)}</span><span class="v">${x.src ? mk(x.src) : ""}${esc(x.v)}</span></div>`).join("")}${r.foot ? `<div class="foot2">${esc(r.foot)}</div>` : ""}</div></div>`,

    // records that are the same person, and (optionally) the person they become
    match: (m) => `<div class="mt">${m.recs.map((r) => `<span class="rec" style="margin-left:${r.ind || 0}px">${mk(r.src)}${esc(r.t)}${r.s ? `<small>${esc(r.s)}</small>` : ""}</span>`).join("")}${m.person ? `<span class="arrow">${I.down}</span><div class="pc"><div class="who"><span class="av">${esc(m.person.av)}</span><div class="nm">${esc(m.person.nm)}<small>${esc(m.person.sub)}</small></div></div><div class="facts">${m.person.facts.map(([k, v]) => `<span>${esc(k)}<b>${esc(v)}</b></span>`).join("")}</div></div>` : ""}</div>`,

    rows: (list) => `<div class="rp">${list.map((r) => `<div class="r"><div class="k">${esc(r.k)}<small>${esc(r.s)}</small></div><span class="a">${esc(r.a)}</span><span class="ar">${I.right}</span><span class="b">${esc(r.b)}<small>${esc(r.u || "people")}</small></span></div>`).join("")}</div>`,

    journey: (list) => `<div class="jr">${list.map((e) => `<div class="e ${e.st || ""}">${mk(e.src)}<span class="t">${esc(e.t)}<small>${esc(e.s)}</small></span>${e.v ? `<span class="v">${esc(e.v)}</span>` : ""}</div>`).join("")}</div>`,

    table: (t) => `<div class="tb"><div class="th"><span>${esc(t.th[0])}</span><span>${esc(t.th[1])}</span></div>${t.rows.map((r) => `<div class="tr${r.bad ? " bad" : ""}"><span class="av" style="background:${r.color || "var(--blue)"}">${esc(r.av || r.nm[0])}</span><div><div class="nm">${esc(r.nm)}<small>${esc(r.sub)}</small></div><div class="bar"><i style="width:${r.pct}%"></i></div></div><span class="val">${esc(r.v)}</span></div>`).join("")}</div>`,

    // a chat: [{from: "in"|"out", who, text}]
    chat: (list) => `<div class="qa">${list.map((m) => `${m.who ? `<div class="who${m.from === "out" ? " r" : ""}">${esc(m.who)}</div>` : ""}<div class="${m.from === "out" ? "q" : "a"}">${rich(m.text)}</div>`).join("")}</div>`,

    answer: (text) => `<div class="qa"><div class="a" style="font-size:46px;line-height:1.3;max-width:100%;padding:44px 46px">${rich(text)}</div></div>`,

    badges: (list) => `<div class="bd">${list.map((b) => `<div class="b"><span class="ic">${I[b.ic] || ""}</span><div class="t">${esc(b.t)}<small>${esc(b.s)}</small></div></div>`).join("")}</div>`,

    grid33: () => {
      const LIVE = ["calendly", "calcom", "oncehub", "savvycal", "gcal", "close", "pipedrive", "attio", "helpscout", "instantly", "smartlead", "lemlist", "customerio", "mailchimp", "klaviyo", "stripe", "paddle", "whop", "thinkific", "thrivecart", "woocommerce", "shopify", "typeform", "tally", "aircall", "justcall", "retell", "fathom", "gsheets", "ganalytics", "airtable", "notion"];
      const names = window.NZ_MARKS || {};
      const short = { close: "Close", ganalytics: "Analytics", gcal: "Google Cal", gsheets: "Sheets" };
      return `<div class="g33" style="grid-template-columns:repeat(5,1fr)">${LIVE.map((k) => `<div class="t">${mk(k)}${esc(short[k] || (names[k] ? names[k].name : k))}</div>`).join("")}<div class="t wh"><span class="ic">${I.webhook}</span>Any webhook</div></div>`;
    },

    // your tools, scattered: [key, x, y, size, rot]
    cloud: (list) => `<div class="cloud">${list.map(([k, x, y, s, r]) => `<span class="d mark-disc" style="left:${x}px;top:${y}px;width:${s}px;height:${s}px;transform:rotate(${r || 0}deg)">${mk(k)}</span>`).join("")}</div>`,

    // your tools, into one place: marks on a ring around the logo
    hub: (keys, R = 330) => {
      const W = 912, H = 800, cx = W / 2, cy = H / 2;
      const pts = keys.map((k, i) => { const a = (-90 + (i * 360) / keys.length) * Math.PI / 180; return [k, cx + Math.cos(a) * R, cy + Math.sin(a) * R * 0.9]; });
      return `<div class="hub"><svg class="lines" viewBox="0 0 ${W} ${H}">${pts.map(([, x, y]) => `<path d="M${x} ${y}L${cx} ${cy}" stroke="rgba(143,178,255,.55)" stroke-width="3" stroke-dasharray="2 12" stroke-linecap="round"/>`).join("")}</svg>${pts.map(([k, x, y]) => `<span class="d mark-disc" style="left:${x}px;top:${y}px">${mk(k)}</span>`).join("")}<span class="core">${window.NZ.MARK ? window.NZ.MARK("#fff") : ""}</span></div>`;
    },

    // three tools, three answers: [{src, n1, n2, v}], then the question
    disagree: (rows, q) => `<div class="dg">${rows.map((r) => `<div class="srcrow">${mk(r.src)}<div class="who"><div class="n1">${esc(r.n1)}</div><div class="n2">${esc(r.n2)}</div></div><div class="val">${esc(r.v)}</div></div>`).join("")}${q ? `<div class="q">${esc(q)}</div>` : ""}</div>`,

    big: (b) => `<div class="big ${b.light ? "card" : "panel-sky"}" style="${b.light ? "" : ""}"><div class="l">${esc(b.l)}</div><div class="v">${esc(b.v)}</div>${b.s ? `<div class="s">${esc(b.s)}</div>` : ""}</div>`,

    msg: (m) => `<div class="msg"><span class="av" style="background:${m.color || "#f5a524"}">${esc(m.av)}</span><div><div class="nm">${esc(m.nm)}<small>${esc(m.sub)}</small></div><div class="tx">${esc(m.tx)}</div></div></div>`,

    // the old way: crossed-out chores
    chores: (list) => `<div class="lines" style="gap:22px">${list.map((t) => `<div class="li" style="font-size:36px"><span class="bx no">${I.x}</span><div>${esc(t)}</div></div>`).join("")}</div>`,

    // ideas, grouped by team: [{t, items}]
    ideas: (groups) => `<div style="display:flex;flex-direction:column;gap:30px">${groups.map((g) => `<div><div style="font-size:26px;font-weight:750;color:var(--faint);letter-spacing:.02em;text-transform:uppercase;margin-bottom:14px">${esc(g.t)}</div><div style="display:flex;flex-wrap:wrap;gap:12px">${g.items.map((x) => `<span class="chip" style="height:66px;font-size:28px;padding:0 26px">${esc(x)}</span>`).join("")}</div></div>`).join("")}</div>`,

    // a tool sending an event into Namzilabs
    flow: (a, b) => `<div style="display:flex;flex-direction:column;gap:18px"><div class="node"><span class="ic" style="background:var(--blue-50);color:var(--blue)">${I.webhook}</span><div><div class="t">${esc(a.t)}</div><div class="s">${esc(a.s)}</div></div></div><span style="align-self:center;width:64px;height:64px;color:rgba(214,226,255,.8)">${I.down}</span><div class="node"><span class="ic" style="background:var(--ink)">${window.NZ.MARK ? window.NZ.MARK("#fff") : ""}</span><div><div class="t">${esc(b.t)}</div><div class="s">${esc(b.s)}</div></div></div></div>`,

    soon: (list) => `<div class="soon2">${list.map((s) => `<div class="s"><span class="ic">${s.src ? mk(s.src) : I[s.ic] || ""}</span>${esc(s.t)}<span class="tag">Coming soon</span></div>`).join("")}</div>`,

    // real screenshots: one, or several in a column
    shot,
    shots: (list, o = {}) => `<div class="shots" style="gap:${o.gap ?? 26}px">${list.map(shot).join("")}</div>`,

    twoup: (a, b) => `<div class="kg">${[a, b].map((x) => `<div class="kt${x.hero ? " hero" : ""}${x.ghost ? " ghost" : ""}" style="padding:40px 38px 42px"><div class="l">${esc(x.l)}<span class="mk">${(x.src || []).map(mk).join("")}</span></div><div class="v${x.blue ? " blue" : ""}" style="font-size:150px">${esc(x.v)}</div>${x.d ? `<div class="d ${x.dd || ""}">${esc(x.d)}</div>` : ""}</div>`).join("")}</div>`,
  };

  /* ── the frame ────────────────────────────────────────────────────────── */
  function frame(o) {
    const feed = o.fmt === "feed";
    const size = feed ? "s-portrait" : o.fmt === "x" ? "s-x" : "s-story";
    const id = o.hl;
    const name = (window.NZ.HL_NAMES || {})[id] || "";
    const bg = o.bg || (o.title ? "sky" : "paper"), dark = bg !== "paper";
    const chip = `<span class="hlchip">${iconChip(id, dark)}${esc(o.chip || name)}${o.n ? `<span class="n">${o.i}/${o.n}</span>` : ""}</span>`;
    let inner = "";
    if (o.title) {
      inner = `${chip}<div class="hero"><span class="disc${bg === "electric" ? " w" : ""}">${icon(id, bg === "electric")}</span></div><div class="ttl"><h2 class="sth" style="${o.tsize ? `font-size:${o.tsize}px` : ""}">${em(o.h)}</h2>${o.sub ? `<p class="sb">${em(o.sub)}</p>` : ""}</div><div class="foot"><span></span><span class="tap">Tap through ${I.right}</span></div>`;
    } else if (o.cta) {
      const mark = window.NZ.MARK ? window.NZ.MARK("#fff") : "";
      const kw = o.kw ? `<div style="margin-top:70px"><span class="kw"><span class="ic">${I.chat}</span>${esc(o.kw)}</span></div>` : "";
      const cue = o.cue && !feed && o.fmt !== "x" ? `<div class="linkcue"><span>${esc(o.cue)}</span>${I.down}</div>` : "";
      const ticks = o.ticks ? `<div class="ctl">${o.ticks.map((t) => `<div><i>${I.check}</i>${esc(t)}</div>`).join("")}</div>` : "";
      inner = `<div class="bigmark">${mark}</div>${chip}<div class="main cta"><h2 class="sth" style="${o.tsize ? `font-size:${o.tsize}px` : ""}">${em(o.h)}</h2>${o.sub ? `<p class="sb">${em(o.sub)}</p>` : ""}${kw}${o.offer ? `<div class="offer">${esc(o.offer)}</div>` : ""}${ticks}</div>${cue}<div class="foot"><span class="site" style="color:#fff">namzilabs.co</span><span></span></div>`;
    } else {
      const demo = o.demo ? `<span class="demo">${esc(o.demo === true ? "Example data" : o.demo)}</span>` : "<span></span>";
      const swipe = o.swipe && feed ? `<span class="swipe">Swipe ${I.right}</span>` : "<span></span>";
      const viz = o.viz ? `<div class="viz"${o.zmax ? ` data-max="${o.zmax}"` : ""} style="${o.vizTop != null && o.fmt !== "x" ? `margin-top:${o.vizTop}px` : ""}">${o.viz}</div>` : "";
      if (o.fmt === "x") {
        inner = `<div class="xl">${chip}<h2 class="sth">${em(o.h)}</h2>${o.sub ? `<p class="sb">${em(o.sub)}</p>` : ""}<div class="xfoot">${o.demo ? demo : ""}<span class="site">Free to start · namzilabs.co</span></div></div><div class="main center">${viz}</div>`;
      } else {
        inner = `${chip}<div class="main${o.center ? " center" : ""}"><h2 class="sth${o.hsm ? " sm" : ""}">${em(o.h)}</h2>${o.sub ? `<p class="sb">${em(o.sub)}</p>` : ""}${viz}</div><div class="foot">${demo}${swipe}</div>`;
      }
    }
    return `<div class="canvas ${size} st ${feed ? "feed " : ""}${o.fmt === "x" ? "x " : ""}${bg}" data-still="${o.still}">${bg === "paper" ? '<div class="ruled"></div>' : bg === "sky" ? '<div class="ruled"></div>' : ""}${inner}</div>`;
  }

  /* Scale each frame's visual so the frame is full but nothing reaches the platform's UI:
     stories keep clear of the reply bar, feed slides of the footer. Run after fonts and marks load. */
  function fit(root = document) {
    for (const el of root.querySelectorAll(".st")) {
      const main = el.querySelector(".main:not(.cta)"), viz = main && main.querySelector(".viz");
      if (!viz) continue;
      const feed = el.classList.contains("feed"), x = el.classList.contains("x");
      const bottom = x ? el.clientHeight - 56 : feed ? el.clientHeight - 150 : el.clientHeight - 390;   // the footer line sits just below
      viz.style.zoom = 1;
      const kids = [...main.children], first = kids[0], last = kids[kids.length - 1];
      const top = main.offsetTop, h = last.offsetTop + last.offsetHeight - first.offsetTop + (first.offsetTop - top > 2 && !main.classList.contains("center") ? first.offsetTop - top : 0), vh = viz.offsetHeight;
      const room = (bottom - top) * (feed || x ? 0.97 : 0.95);
      let z = 1 + (room - h) / vh;
      z = Math.max(0.72, Math.min(viz.dataset.max ? +viz.dataset.max : 1.42, z));
      viz.style.zoom = z.toFixed(3);
      // zooming re-wraps text and chips, so check what actually rendered: nothing past the bottom line,
      // and nothing wider than the frame (big numbers grow faster than their cards)
      const box = el.getBoundingClientRect();
      const limit = bottom + (feed || x ? 0 : 20);
      const over = () => [viz, ...viz.querySelectorAll("*")].some((n) => n.scrollWidth > n.clientWidth + 2 && n.clientWidth > 0 && !n.matches("svg, svg *, .hub, .hub *, .cloud, .cloud *, .shot .vp, .shot .vp *"));
      const fits = () => viz.getBoundingClientRect().bottom - box.top <= limit && !(viz.scrollWidth > viz.clientWidth + 2 || over());
      while (z > 0.72 && !fits()) { z -= 0.02; viz.style.zoom = z.toFixed(3); }
    }
  }

  /* A feature or use-case post: the carousel (ig-01…) and the X image (x-01), from story frames. */
  function post(hl, slides, o = {}) {
    slides.forEach((sl, i) => document.body.insertAdjacentHTML("beforeend", frame({ ...sl, title: false, fmt: "feed", hl, chip: o.chip, i: i + 1, n: slides.length, swipe: i === 0 && slides.length > 1, still: `ig-${String(i + 1).padStart(2, "0")}` })));
    if (o.x) document.body.insertAdjacentHTML("beforeend", frame({ ...o.x, fmt: "x", hl, chip: o.chip, still: "x-01" }));
    ready();
  }
  /* hydrate marks, wait for the real fonts (not just the ones already requested), then fit */
  function ready() {
    window.NZ.still();
    const fonts = ["800 90px Inter", "650 30px Inter", "500 30px Inter", "italic 400 90px 'Instrument Serif'"].map((f) => document.fonts.load(f));
    window.__ready = window.__ready.then(() => Promise.all(fonts)).then(() => document.fonts.ready).then(() => { fit(); return true; });
  }

  window.NZ = Object.assign(window.NZ || {}, { STORY: { C, frame, fit, post, ready, em, esc, mk, I } });
})();
