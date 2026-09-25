/* ─────────────────────────────────────────────────────────────────────────
   The highlight icons: one per Instagram highlight, and the highlight covers
   are nothing but these. Drawn on one 96-unit grid with one stroke weight and
   round caps. Every icon has the same three layers: an outline, a soft fill
   inside it, and one solid accent (the tallest bar, the badge, the total).
   Sized to the same keylines so they read as one set in the row.

     NZ.HL_ICON("funnel", { p: "#fff", t: "rgba(255,255,255,.2)", a: "#fff", bad: "#ffb1a1" })  → <svg>
   p: the outline · t: the soft fill · a: the accent · bad: the leak (Funnel only)
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const SW = 6;
  let uid = 0;
  const L = (d, c, w = SW, cap = "round") => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="${cap}" stroke-linejoin="round"/>`;
  const S = (d, c, t, w = SW) => `<path d="${d}" fill="${t}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const F = (d, c, o = 1) => `<path d="${d}" fill="${c}"${o < 1 ? ` opacity="${o}"` : ""}/>`;
  const O = (x, y, r) => `M${x - r} ${y}A${r} ${r} 0 1 0 ${x + r} ${y}A${r} ${r} 0 1 0 ${x - r} ${y}Z`;
  const rr = (x, y, w, h, r) => `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
  const drop = (x, y, r) => `M${x} ${y}C${x} ${y} ${x - r} ${y + r * 1.25} ${x - r} ${y + r * 1.75}A${r} ${r} 0 0 0 ${x + r} ${y + r * 1.75}C${x + r} ${y + r * 1.25} ${x} ${y} ${x} ${y}Z`;
  // a torn edge: the receipt's bottom, as a zigzag from right to left
  const torn = (x0, x1, y, n, d) => { let s = ""; const w = (x1 - x0) / n; for (let i = 1; i <= n; i++) s += `L${(x1 - w * i).toFixed(2)} ${i % 2 ? y - d : y}`; return s; };

  const ICONS = {
    // the mark itself: two rings, overlapping exactly like the logo, nothing in between
    "start-here": (c) => L(O(37.27, 48, 23), c.p, SW + 0.5) + L(O(58.73, 48, 23), c.p, SW + 0.5),
    // three rising bars on a baseline; the tallest is the accent
    "any-kpi": (c) => F(rr(18.5, 49, 15, 25, 5), c.p, 0.42) + F(rr(40.5, 33, 15, 41, 5), c.p, 0.72) + F(rr(62.5, 15, 15, 59, 5), c.a) + L("M15 82H81", c.p),
    // a funnel, and the drop it's losing
    funnel: (c) => S("M15 13H81L57.5 41V59L38.5 67V41Z", c.p, c.t) + F(drop(48, 71, 7.5), c.bad),
    // one person, with a 1: the same customer, counted once
    "count-once": (c) => {
      const m = `hlm${++uid}`, k = `hlk${uid}`;
      return `<defs><mask id="${m}"><rect width="96" height="96" fill="#fff"/><circle cx="66.5" cy="67" r="22" fill="#000"/></mask>` +
        `<mask id="${k}"><rect width="96" height="96" fill="#fff"/>${L("M62 60.5L67.5 57V77", "#000", 5.6)}</mask></defs>` +
        `<g mask="url(#${m})">${S(O(38, 30, 14), c.p, c.t)}${S("M12 81C12 64.5 23.5 54 38 54C52.5 54 64 64.5 64 81Z", c.p, c.t)}</g>` +
        `<circle cx="66.5" cy="67" r="17.5" fill="${c.a}" mask="url(#${k})"/>`;
    },
    // a receipt with its lines, the total in the accent
    receipts: (c) => S(`M22 11H74V85${torn(22, 74, 85, 8, 5.5)}Z`, c.p, c.t) + L("M34 28H62M34 40H62M34 52H51", c.p, 5.2) + L("M34 67H62", c.a, 7),
    // a plug: connect your tools
    connect: (c) => `<g transform="translate(-2.5 3) rotate(45 48 48)">${L("M38 9V23M58 9V23", c.p)}${S("M25 23H71V36A23 23 0 0 1 48 59A23 23 0 0 1 25 36Z", c.p, c.t)}${L("M48 59V89", c.a)}</g>`,
    // a headset, the mic in the accent
    "sales-teams": (c) => L("M21 48V46A27 27 0 0 1 75 46V48", c.p) + S(rr(13, 47, 16, 27, 7), c.p, c.t) + S(rr(67, 47, 16, 27, 7), c.p, c.t) + L("M75 74C75 81.5 69.5 85.5 61 85.5", c.p) + F(O(55.5, 85.5, 6), c.a),
    // a client report on an easel, the trend in the accent
    agencies: (c) => L("M36 63L28.5 85M60 63L67.5 85", c.p) + S(rr(12, 13, 72, 50, 8), c.p, c.t) + L("M25 50L38 38.5L50 44.5L69 26", c.a, 6.5),
    // a phone with play
    creators: (c) => S(rr(24.5, 9.5, 47, 77, 12), c.p, c.t) + F("M42 37Q42 33.6 45 35.3L60.2 44.5Q63 46.2 60.2 47.9L45 57.1Q42 58.8 42 55.4Z", c.a) + L("M44 19H52", c.p, 5),
    // a shopping bag, the handle in the accent
    "e-com": (c) => S("M19.5 35H76.5L72 84H24Z", c.p, c.t) + L("M35.5 45V28.5A12.5 12.5 0 0 1 60.5 28.5V45", c.a),
    // a speech bubble with a question
    faq: (c) => S("M22 13H74A8 8 0 0 1 82 21V58A8 8 0 0 1 74 66H46.5L29.5 81V66H22A8 8 0 0 1 14 58V21A8 8 0 0 1 22 13Z", c.p, c.t) + L("M40 31.5A8.2 8.2 0 1 1 52.3 38.6C49.6 40.2 48 42 48 45.8", c.a, 6) + F(O(48, 54.8, 4.1), c.a),
  };
  const NAMES = { "start-here": "Start here", "any-kpi": "Any KPI", funnel: "Funnel", "count-once": "Count once", receipts: "Receipts", connect: "Connect", "sales-teams": "Sales teams", agencies: "Agencies", creators: "Creators", "e-com": "E-com", faq: "FAQ" };

  const WHITE = { p: "#fff", t: "rgba(255,255,255,.2)", a: "#fff", bad: "#ffb1a1" };
  const HL_ICON = (id, c = WHITE) => `<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${ICONS[id]({ ...WHITE, ...c })}</svg>`;
  window.NZ = Object.assign(window.NZ || {}, { HL_ICON, HL_IDS: Object.keys(ICONS), HL_NAMES: NAMES });
})();
