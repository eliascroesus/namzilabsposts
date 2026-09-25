/* ─────────────────────────────────────────────────────────────────────────
   The highlight icons: one per Instagram highlight, drawn on one 96-unit
   grid with one stroke weight, round caps and one accent each. Used by the
   covers (highlights/icons.html) and by the chip on every story frame.

     NZ.HL_ICON("funnel", "#fff", "#bcd1ff", "#ff9a86", "#2f5fd8")  → <svg>
   (primary, accent, the "bad" colour for the leak, and the badge cut-out)
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const SW = 6;
  const L = (d, c, w = SW) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const F = (d, c, o = 1) => `<path d="${d}" fill="${c}" opacity="${o}"/>`;
  const C = (x, y, r, c, fill = false, w = SW) => fill ? `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>` : `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="${w}"/>`;
  const rr = (x, y, w, h, r) => `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;

  const ICONS = {
    // the mark itself: two rings, overlapping like the logo (centres 14/15 of the radius apart)
    "start-here": (p, a) => C(38.7, 48, 21, p) + C(57.3, 48, 21, a),
    // three bars, the tallest in the accent, on a baseline
    "any-kpi": (p, a) => F(rr(19, 54, 14, 22, 4.5), p, 0.55) + F(rr(41, 40, 14, 36, 4.5), p, 0.85) + F(rr(63, 22, 14, 54, 4.5), a) + L("M14 84H82", p),
    // a funnel, and the drop it's losing
    funnel: (p, a, bad) => L("M16 18H80L57 46V64L39 72V46Z", p) + F("M48 76C48 76 41 84.5 41 88A7 7 0 0 0 55 88C55 84.5 48 76 48 76Z", bad),
    // one person, with a 1
    "count-once": (p, a, bad, cut) => C(40, 32, 13, p) + L("M16 80C16 64 27 55 40 55C47 55 53 57.5 57 62", p) + C(66, 70, 17, a, true) + L("M62.5 63.5L67.5 60V80", cut, 5.2),
    // a receipt, torn, with its total in the accent
    receipts: (p, a) => L("M24 12H72V84L66 79L60 84L54 79L48 84L42 79L36 84L30 79L24 84Z", p) + L("M34 28H62M34 40H62M34 52H50", p, 5) + L("M34 66H62", a, 6.5),
    // a hub: every tool into one place
    connect: (p, a) => {
      let s = C(48, 48, 11, a, true);
      for (let i = 0; i < 5; i++) {
        const t = ((-90 + i * 72) * Math.PI) / 180, cx = 48 + Math.cos(t) * 32, cy = 48 + Math.sin(t) * 32;
        s += L(`M${48 + Math.cos(t) * 17} ${48 + Math.sin(t) * 17}L${48 + Math.cos(t) * 24} ${48 + Math.sin(t) * 24}`, p) + C(cx, cy, 7.5, p);
      }
      return s;
    },
    // a headset, mic in the accent
    "sales-teams": (p, a) => L("M22 56V48A26 26 0 0 1 74 48V56", p) + F(rr(15, 50, 15, 25, 7), p) + F(rr(66, 50, 15, 25, 7), p) + L("M74 74C74 82 68 86 58 86", p) + C(53, 86, 5.5, a, true),
    // a client report on an easel, the trend in the accent
    agencies: (p, a) => L(rr(14, 14, 68, 48, 7), p) + L("M36 62L28 84M60 62L68 84", p) + L("M26 50L38 40L50 45L68 28", a, 6),
    // a phone with play
    creators: (p, a) => L(rr(27, 10, 42, 76, 11), p) + F("M42 37.5Q42 34 45 35.8L59 44.3Q62 46 59 47.8L45 56.3Q42 58 42 54.5Z", a) + L("M44 19H52", p, 5),
    // a shopping bag, the handle in the accent
    "e-com": (p, a) => L("M21 34H75L71 82H25Z", p) + L("M36 42V28A12 12 0 0 1 60 28V42", a),
    // a speech bubble with a question
    faq: (p, a) => L("M22 16H74A8 8 0 0 1 82 24V58A8 8 0 0 1 74 66H46L30 80V66H22A8 8 0 0 1 14 58V24A8 8 0 0 1 22 16Z", p) + L("M40.5 34A7.5 7.5 0 1 1 52 40.5C49.5 42 48 43.6 48 47", a, 5.6) + C(48, 55.5, 3.6, a, true),
  };
  const NAMES = { "start-here": "Start here", "any-kpi": "Any KPI", funnel: "Funnel", "count-once": "Count once", receipts: "Receipts", connect: "Connect", "sales-teams": "Sales teams", agencies: "Agencies", creators: "Creators", "e-com": "E-com", faq: "FAQ" };
  // each highlight's hue: the 3D cover's room and the "colour" icon set
  const HUE = { "start-here": 222, "any-kpi": 150, funnel: 24, "count-once": 268, receipts: 38, connect: 190, "sales-teams": 350, agencies: 172, creators: 320, "e-com": 44, faq: 245 };

  const HL_ICON = (id, p, a, bad, cut) => `<svg viewBox="0 0 96 96">${ICONS[id](p, a, bad ?? a, cut ?? "#fff")}</svg>`;
  window.NZ = Object.assign(window.NZ || {}, { HL_ICON, HL_IDS: Object.keys(ICONS), HL_NAMES: NAMES, HL_HUE: HUE });
})();
