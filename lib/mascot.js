/* ─────────────────────────────────────────────────────────────────────────
   Namzi — the Namzilabs mascot, drawn in code.

   Namzi is the blue lens from the logo (the overlap between two tools, where
   the number lives) given eyes, noodle arms and a stack of receipts. One
   function returns a self-contained SVG string, so the same character renders
   in posts, in videos (redrawn every frame) and as exported stickers.

     NZ.mascot({ mood: "happy", pose: "wave" })
     NZ.mascot({ mood: "suspicious", pose: "hold", prop: "magnifier" })
     NZ.mascot({ pose: "sign", sign: ["COUNT", "ONCE."] })

   mood     neutral happy joy suspicious sideeye shocked smug sleepy sad stern nervous dreamy obsessed
   pose     down wave up hip shrug point hold holdL think facepalm sign carry raise both pointup nope
   prop     receipt magnifier redflag greenflag coffee donut ring   (in the right hand; propHand "L")
   fx       ["zzz", "sweat", "sparkle", "exclaim", "question", "anger", "hearts", "drool", "tears"]
   look     [dx, dy], each -1…1: where the pupils point
   blink    0…1          talk   0…1 (open mouth, for speech)
   squash   -1…1 (squash and stretch, anchored at the feet)
   tilt     degrees of lean     lift   px off the ground     wave  -1…1 (hand swing)
   step     walk phase in radians
   dark     true on dark surfaces: limbs turn light
   sticker  white die-cut outline + soft shadow (for sticker exports)
   shadow   ground shadow, default true      crop  "face" for avatars

   Personality: lives between your tools, counts everyone once, deadpan
   honest, allergic to vanity metrics. Social only: never in the product UI.
   ───────────────────────────────────────────────────────────────────────── */
(function (root) {
  "use strict";

  const INK = "#14141c";
  const RED = "#f0553d";
  const GREEN = "#22c55e";
  const AMBER = "#f5a524";
  const BLUE = "#568cff";
  const LID = "#1f3d9b";
  const W = 320;
  const H = 340;
  let uid = 0;

  const f = (n) => Math.round(n * 100) / 100;
  const mirror = ([x, y]) => [W - x, y];

  /* the body: the logo's lens, plumper, standing on its tip */
  const BODY = "M160 52A105.5 105.5 0 0 1 160 254A105.5 105.5 0 0 1 160 52Z";
  const EYES = { L: [137, 135], R: [183, 135] };
  const SHOULDER = { L: [97, 186], R: [223, 186] };
  const HIP = { L: [146, 238], R: [174, 238] };
  const FOOT = { L: [138, 302], R: [182, 302] };

  /* moods: brows [inner, outer] offsets (px, negative = up), lids, mouth */
  const MOODS = {
    neutral: { brow: [0, 0], mouth: "smile-small", look: [0, 0.15] },
    happy: { brow: [-3, -1], lidB: 0.3, mouth: "grin", blush: true, look: [0, 0.1] },
    joy: { brow: [-7, -3], eyes: "happy", mouth: "grin-big", blush: true, fx: ["sparkle"] },
    suspicious: { brow: [7, -1], browR: [-7, -9], lid: 0.42, tilt: 7, mouth: "hmm", look: [0.8, 0.05] },
    sideeye: { brow: [3, 1], lid: 0.52, lidB: 0.12, mouth: "flat", look: [1, 0.2] },
    shocked: { brow: [-15, -12], big: true, pupil: 5.6, mouth: "o", fx: ["exclaim"], look: [0, 0] },
    smug: { brow: [-1, -4], browR: [3, 1], lid: 0.48, lidB: 0.16, mouth: "smirk", blush: true, look: [-0.4, 0.1] },
    sleepy: { brow: [3, 5], eyes: "closed", mouth: "o-small", fx: ["zzz"] },
    sad: { brow: [-9, 4], lid: 0.2, tilt: -9, mouth: "frown", look: [0, 0.55], glint: 1.35 },
    stern: { brow: [5, 3], lid: 0.38, mouth: "flat", look: [0, 0.1] },
    nervous: { brow: [-8, 3], lid: 0.06, mouth: "wavy", fx: ["sweat"], look: [-0.65, 0.2] },
    // for the parodies: day-dreaming about a donut, and far too attached to a ring
    dreamy: { brow: [-6, -3], eyes: "closed", mouth: "smile", blush: true, fx: ["drool"] },
    obsessed: { brow: [-12, -3], big: true, pupil: 4.2, mouth: "grin", look: [0.55, -0.45] },
  };

  /* poses: hand position h, bend control c, drawn in front of the body or behind */
  const DOWN = { h: [70, 240], c: [74, 212] };
  const POSES = {
    down: { L: DOWN },
    wave: { L: DOWN, R: { h: [266, 108], c: [272, 176], wave: true } },
    up: { L: { h: [60, 100], c: [58, 164] } },
    hip: { L: { h: [102, 224], c: [42, 214] } },
    shrug: { L: { h: [50, 158], c: [62, 226] } },
    point: { L: DOWN, R: { h: [290, 170], c: [254, 188], finger: true } },
    hold: { L: DOWN, R: { h: [252, 206], c: [262, 240] } },
    holdL: { L: { h: [68, 206], c: [58, 240] }, R: { h: mirror(DOWN.h), c: mirror(DOWN.c) } },
    think: { L: DOWN, R: { h: [186, 206], c: [266, 250], front: true } },
    facepalm: { L: DOWN, R: { h: [184, 136], c: [256, 168], front: true, r: 17 } },
    sign: { L: { h: [100, 208], c: [78, 204], front: true } },
    carry: { L: { h: [128, 210], c: [96, 240], front: true } },
    raise: { L: DOWN, R: { h: [238, 128], c: [270, 196] } },
    both: { L: { h: [66, 200], c: [52, 236] }, R: { h: [254, 200], c: [268, 236] } },
    pointup: { L: DOWN, R: { h: [284, 112], c: [262, 170], finger: true } },
    nope: { L: DOWN, R: { h: [240, 138], c: [276, 200], front: true, r: 15 } },
  };

  function arm(pose, side) {
    const def = pose[side] || (side === "R" && pose.L ? mirrorArm(pose.L) : DOWN);
    return { ...def };
  }
  function mirrorArm(a) {
    return { ...a, h: mirror(a.h), c: mirror(a.c) };
  }
  function rotateAround([x, y], [ox, oy], deg) {
    const r = (deg * Math.PI) / 180;
    const dx = x - ox, dy = y - oy;
    return [ox + dx * Math.cos(r) - dy * Math.sin(r), oy + dx * Math.sin(r) + dy * Math.cos(r)];
  }

  /* ── mouths (centre ≈ 160,176) ───────────────────────────────────────── */
  function mouth(kind, talk, id) {
    const S = `fill="none" stroke="${INK}" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"`;
    if (talk > 0.02) {
      const h = 5 + 17 * talk;
      const d = `M146 171Q160 175 174 171Q171 ${f(171 + h)} 160 ${f(172 + h)}Q149 ${f(171 + h)} 146 171Z`;
      return `<clipPath id="${id}m"><path d="${d}"/></clipPath><path d="${d}" fill="${INK}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><ellipse cx="160" cy="${f(172 + h)}" rx="9" ry="${f(3 + 3 * talk)}" fill="#ff7b8e" clip-path="url(#${id}m)"/>`;
    }
    switch (kind) {
      case "smile": return `<path d="M147 172Q160 185 173 172" ${S}/>`;
      case "smile-small": return `<path d="M151 173Q160 181 169 173" ${S}/>`;
      case "grin":
      case "grin-big": {
        const big = kind === "grin-big";
        const d = big ? "M139 166Q160 171 181 166Q178 199 160 199Q142 199 139 166Z" : "M144 169Q160 173 176 169Q173 193 160 193Q147 193 144 169Z";
        return `<clipPath id="${id}m"><path d="${d}"/></clipPath><path d="${d}" fill="${INK}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/><ellipse cx="160" cy="${big ? 197 : 191}" rx="${big ? 12 : 9}" ry="${big ? 8 : 6}" fill="#ff7b8e" clip-path="url(#${id}m)"/>`;
      }
      case "o": return `<ellipse cx="160" cy="181" rx="8" ry="10.5" fill="${INK}"/>`;
      case "o-small": return `<ellipse cx="160" cy="179" rx="4.6" ry="5.6" fill="${INK}"/>`;
      case "flat": return `<path d="M150 177H170" ${S}/>`;
      case "hmm": return `<path d="M150 179L171 174" ${S}/>`;
      case "smirk": return `<path d="M149 178Q162 181 173 170" ${S}/>`;
      case "frown": return `<path d="M148 183Q160 172 172 183" ${S}/>`;
      case "wavy": return `<path d="M144 178q4 -5 8 0t8 0t8 0t8 0" ${S} stroke-width="4.6"/>`;
      default: return "";
    }
  }

  /* ── eyes, lids and brows ────────────────────────────────────────────── */
  function eyes(m, o, id) {
    const big = !!m.big;
    const rx = big ? 20.5 : 18.5;
    const ry = big ? 24.5 : 22.5;
    const pr = m.pupil ?? 9.5;
    const look = o.look || m.look || [0, 0.1];
    const blink = o.blink || 0;
    let style = o.eyes || m.eyes || "open";
    if (style === "open" && blink >= 0.97) style = "closed";
    let out = "";
    for (const side of ["L", "R"]) {
      const [ex, ey] = EYES[side];
      if (style === "happy") {
        out += `<path d="M${ex - 13} ${ey + 7}Q${ex} ${ey - 15} ${ex + 13} ${ey + 7}" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
        continue;
      }
      if (style === "closed") {
        out += `<path d="M${ex - 14} ${ey + 2}Q${ex} ${ey + 13} ${ex + 14} ${ey + 2}" fill="none" stroke="${INK}" stroke-width="5.5" stroke-linecap="round"/>`;
        continue;
      }
      const cid = `${id}e${side}`;
      const px = ex + look[0] * (rx - pr - 2.5);
      const py = ey + 2 + look[1] * (ry - pr - 3.5);
      const g = m.glint ?? 1;
      out += `<clipPath id="${cid}"><ellipse cx="${ex}" cy="${ey}" rx="${rx}" ry="${ry}"/></clipPath>`;
      out += `<g clip-path="url(#${cid})"><ellipse cx="${ex}" cy="${ey}" rx="${rx}" ry="${ry}" fill="#fff"/>`;
      out += `<circle cx="${f(px)}" cy="${f(py)}" r="${pr}" fill="${INK}"/>`;
      out += `<circle cx="${f(px - pr * 0.36)}" cy="${f(py - pr * 0.4)}" r="${f(3.3 * g * (pr / 9.5) ** 0.5)}" fill="#fff"/>`;
      out += `<circle cx="${f(px + pr * 0.36)}" cy="${f(py + pr * 0.38)}" r="${f(1.6 * g)}" fill="#fff"/>`;
      // lids: body-coloured, with one deep-blue edge line
      const lid = Math.max(m.lid || 0, blink);
      const lidB = Math.max(m.lidB || 0, blink);
      const tilt = (m.tilt || 0) * (lid > 0 ? 1 : 0);
      const inner = side === "L" ? ex + rx + 4 : ex - rx - 4;
      const outer = side === "L" ? ex - rx - 4 : ex + rx + 4;
      if (lid > 0.01) {
        const y = ey - ry + lid * ry * 1.22;
        const yi = y + tilt / 2, yo = y - tilt / 2;
        out += `<path d="M${outer} ${ey - ry - 6}H${inner}V${f(yi)}L${outer} ${f(yo)}Z" fill="url(#${id}b)"/>`;
        out += `<path d="M${outer} ${f(yo)}L${inner} ${f(yi)}" stroke="${LID}" stroke-width="3.4" stroke-linecap="round"/>`;
      }
      if (lidB > 0.01) {
        const y = ey + ry - lidB * ry * 0.8;
        const bow = 7 * lidB;
        out += `<path d="M${outer} ${ey + ry + 6}H${inner}V${f(y)}Q${ex} ${f(y - bow * 2)} ${outer} ${f(y)}Z" fill="url(#${id}b)"/>`;
        out += `<path d="M${outer} ${f(y)}Q${ex} ${f(y - bow * 2)} ${inner} ${f(y)}" fill="none" stroke="${LID}" stroke-width="3" stroke-linecap="round"/>`;
      }
      out += `</g>`;
    }
    return out;
  }

  function brows(m, o) {
    if (o.brows === false) return "";
    const [li, lo] = o.brow || m.brow || [0, 0];
    const [ri, ro] = o.browR || m.browR || [li, lo];
    const base = m.big ? 97 : 102;
    const one = (ix, ox, iy, oy) =>
      `<path d="M${ox} ${f(oy)}Q${(ix + ox) / 2} ${f(Math.min(iy, oy) - 4)} ${ix} ${f(iy)}" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
    return one(150, 124, base + li, base + lo) + one(170, 196, base + ri, base + ro);
  }

  /* ── props: drawn in local space, (0,0) = the gripping hand ─────────── */
  function prop(kind, [hx, hy], flip, id) {
    const T = (inner, rot = 0) => `<g transform="translate(${f(hx)} ${f(hy)})${flip ? " scale(-1 1)" : ""}${rot ? ` rotate(${rot})` : ""}">${inner}</g>`;
    switch (kind) {
      case "receipt": {
        const zig = "l-3.5 5l-3.5 -5".repeat(8); // eight teeth back to x = -8
        return T(
          `<path d="M-8 -12H48V66${zig}Z" fill="#fff" stroke="#d9dcea" stroke-width="1.6" stroke-linejoin="round"/>` +
          `<rect x="0" y="-2" width="30" height="4" rx="2" fill="#c9cddc"/><rect x="0" y="8" width="40" height="4" rx="2" fill="#c9cddc"/><rect x="0" y="18" width="24" height="4" rx="2" fill="#c9cddc"/>` +
          `<path d="M0 30H40" stroke="#c9cddc" stroke-width="2" stroke-dasharray="3 3"/><rect x="0" y="38" width="40" height="8" rx="4" fill="#2f5fd8"/>`,
          -9,
        );
      }
      case "magnifier":
        return T(
          `<path d="M0 6L22 -22" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>` +
          `<circle cx="36" cy="-40" r="20" fill="#dbe7ff" fill-opacity=".62" stroke="${INK}" stroke-width="6.5"/>` +
          `<path d="M26 -48A12 12 0 0 1 36 -53" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
        );
      case "redflag":
      case "greenflag": {
        const c = kind === "redflag" ? RED : GREEN;
        return T(
          `<path d="M0 26V-94" stroke="${INK}" stroke-width="5.5" stroke-linecap="round"/>` +
          `<path d="M2 -92C16 -100 30 -84 52 -92V-58C30 -50 16 -66 2 -58Z" fill="${c}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`,
        );
      }
      case "coffee":
        return T(
          `<path d="M12 -44q-6 -8 0 -16M22 -44q-6 -8 0 -16" fill="none" stroke="#b8c7e6" stroke-width="3.5" stroke-linecap="round"/>` +
          `<path d="M-2 -36H34V-6Q34 4 24 4H8Q-2 4 -2 -6Z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>` +
          `<path d="M34 -28Q46 -28 46 -18Q46 -8 34 -10" fill="none" stroke="${INK}" stroke-width="4"/>` +
          `<rect x="-2" y="-26" width="36" height="8" fill="${BLUE}"/>`,
        );
      case "donut": {
        // a pink-frosted donut with sprinkles, held by its edge
        let icing = "";
        for (let i = 0; i <= 48; i++) { const a = (i / 48) * Math.PI * 2, r = 25.5 + 2.6 * Math.sin(a * 7 + 0.6) + 1.2 * Math.sin(a * 13); icing += `${i ? "L" : "M"}${f(Math.cos(a) * r)} ${f(Math.sin(a) * r)}`; }
        const SP = [[-15, -9, 20, "#fff"], [-1, -19, 70, "#ffd23f"], [13, -13, -30, "#4dc9ff"], [18, 3, 45, "#6be07a"], [5, 17, -60, "#ff5a5a"], [-12, 13, 10, "#b28cff"], [-19, 1, 85, "#4dc9ff"], [11, 15, -15, "#fff"], [-6, -21, -45, "#ff5a5a"], [20, -6, 60, "#b28cff"]];
        return T(`<g transform="translate(22 -30)">
          <circle r="33" fill="#d99a52" stroke="${INK}" stroke-width="3.6"/><circle r="10.5" fill="none" stroke="${INK}" stroke-width="3.6"/>
          <path d="${icing}ZM0 -12.5A12.5 12.5 0 1 0 0 12.5A12.5 12.5 0 1 0 0 -12.5Z" fill="#ff7eb3" fill-rule="evenodd" stroke="#e0579a" stroke-width="1.6"/>
          <path d="M-17 -15A23 23 0 0 1 3 -23" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3.2" stroke-linecap="round"/>
          ${SP.map(([x, y, r, c]) => `<rect x="-4" y="-1.5" width="8" height="3" rx="1.5" fill="${c}" transform="translate(${x} ${y}) rotate(${r})"/>`).join("")}
          <circle r="10.5" fill="#fff" fill-opacity="0"/></g>`, -8);
      }
      case "ring":
        // a gold band, held up to the light (the hole stays open, so it never reads as a coin)
        return T(`<defs><linearGradient id="${id}gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1b0"/><stop offset=".45" stop-color="#e3a832"/><stop offset="1" stop-color="#8a5a10"/></linearGradient></defs>
          <g transform="translate(3 -33)"><ellipse rx="21" ry="24" fill="none" stroke="#ffb347" stroke-width="18" opacity=".2"/>
          <ellipse rx="21" ry="24" fill="none" stroke="#6b4208" stroke-width="9"/><ellipse rx="21" ry="24" fill="none" stroke="url(#${id}gd)" stroke-width="6.2"/>
          <path d="M-14 -13A17 20 0 0 1 1 -21.5" fill="none" stroke="#fffbe6" stroke-width="2.4" stroke-linecap="round"/></g>`);
      default:
        return "";
    }
  }

  function sign(lines, id) {
    const L = (Array.isArray(lines) ? lines : String(lines || "").split("|")).slice(0, 3);
    const longest = Math.max(1, ...L.map((s) => s.length));
    const fs = Math.min(38, 178 / (longest * 0.6));
    const lh = fs * 1.02;
    const top = 206, h = Math.max(96, 30 + lh * L.length);
    const y0 = top + h / 2 - (lh * (L.length - 1)) / 2 + fs * 0.35;
    const text = L.map((s, i) => `<text x="160" y="${f(y0 + i * lh)}" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-weight="800" font-size="${f(fs)}" letter-spacing="${f(-fs * 0.03)}" fill="${INK}">${esc(s)}</text>`).join("");
    return `<g transform="rotate(-2 160 ${top + h / 2})"><rect x="58" y="${top}" width="204" height="${f(h)}" rx="12" fill="#fff" stroke="${INK}" stroke-width="5"/>${text}</g>`;
  }
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ── effects around the head ─────────────────────────────────────────── */
  function fx(list) {
    let out = "";
    const star = (x, y, s, c) => `<path transform="translate(${x} ${y}) scale(${s / 12})" d="M0 -12Q2 -2 12 0Q2 2 0 12Q-2 2 -12 0Q-2 -2 0 -12Z" fill="${c}"/>`;
    for (const k of list || []) {
      if (k === "zzz") {
        const z = (x, y, s) => `<path d="M${x - s} ${y - s}H${x + s}L${x - s} ${y + s}H${x + s}" fill="none" stroke="${BLUE}" stroke-width="${f(2.2 + s * 0.18)}" stroke-linecap="round" stroke-linejoin="round"/>`;
        out += z(214, 86, 7) + z(236, 60, 9.5) + z(260, 32, 12);
      }
      if (k === "sweat") out += `<path transform="translate(218 92) rotate(18)" d="M0 -15C6 -5 10 0 10 6A10 10 0 0 1 -10 6C-10 0 -6 -5 0 -15Z" fill="#a9d4ff" stroke="#4d8ef0" stroke-width="2.5"/>`;
      if (k === "sparkle") out += star(64, 74, 15, AMBER) + star(258, 62, 12, AMBER) + star(270, 120, 8, AMBER);
      if (k === "exclaim") out += `<g transform="translate(244 58) rotate(14)"><rect x="-6" y="-32" width="12" height="30" rx="6" fill="${RED}"/><circle cx="0" cy="10" r="6.5" fill="${RED}"/></g>`;
      if (k === "question") out += `<path transform="translate(240 50) rotate(12)" d="M-11 -12A12 12 0 1 1 3 0Q0 2 0 9" fill="none" stroke="${BLUE}" stroke-width="7" stroke-linecap="round"/><circle transform="translate(240 50) rotate(12)" cx="0" cy="22" r="4.6" fill="${BLUE}"/>`;
      if (k === "anger") out += `<g transform="translate(222 80)" stroke="${RED}" stroke-width="5" stroke-linecap="round" fill="none"><path d="M-4 -13Q-4 -4 -13 -4"/><path d="M4 -13Q4 -4 13 -4"/><path d="M-4 13Q-4 4 -13 4"/><path d="M4 13Q4 4 13 4"/></g>`;
      if (k === "tears") for (const [x, dx] of [[128, -7], [192, 7]]) out += `<path d="M${x} 150Q${x + dx * 0.4} 172 ${x + dx} 196" fill="none" stroke="#9fd0ff" stroke-width="6.5" stroke-linecap="round" opacity=".95"/><path transform="translate(${x + dx} 204)" d="M0 -9C3 -4 5.5 0 5.5 3.5A5.5 5.5 0 0 1 -5.5 3.5C-5.5 0 -3 -4 0 -9Z" fill="#9fd0ff" stroke="#4d8ef0" stroke-width="1.8"/>`;
      if (k === "drool") out += `<path transform="translate(175 183) rotate(-8)" d="M0 0C1.5 7 3.5 11 3.5 16A4.5 4.5 0 0 1 -5.5 16C-5.5 11 -2 6 0 0Z" fill="#bfe3ff" stroke="#4d8ef0" stroke-width="2.4" stroke-linejoin="round"/>`;
      if (k === "hearts") {
        const heart = (x, y, s, r) => `<path transform="translate(${x} ${y}) rotate(${r}) scale(${s})" d="M0 6C-10 -2 -10 -10 -4 -11C-1 -11.5 0 -9 0 -8C0 -9 1 -11.5 4 -11C10 -10 10 -2 0 6Z" fill="#ff6b8b"/>`;
        out += heart(70, 84, 1.9, -14) + heart(252, 70, 1.5, 12) + heart(266, 118, 1.1, 20);
      }
    }
    return out;
  }

  /* ── the character ──────────────────────────────────────────────────── */
  function mascot(opts = {}) {
    const o = typeof opts === "string" ? { mood: opts } : opts;
    const id = `nz${(++uid).toString(36)}`;
    const m = { ...(MOODS[o.mood] || MOODS.neutral) };
    const pose = POSES[o.pose] || POSES.down;
    const dark = !!o.dark;
    const limb = dark ? "#e6edff" : INK;
    const glove = "#fff";
    const gloveLine = dark ? "#e6edff" : INK;
    const shoe = dark ? "#e6edff" : INK;

    const armL = arm(pose, "L");
    const armR = arm(pose, "R");
    if (armR.wave) {
      const a = (o.wave ?? 0) * 18;
      armR.h = rotateAround(armR.h, SHOULDER.R, a);
      armR.c = rotateAround(armR.c, SHOULDER.R, a * 0.6);
    }
    if (armL.wave) {
      const a = -(o.wave ?? 0) * 18;
      armL.h = rotateAround(armL.h, SHOULDER.L, a);
      armL.c = rotateAround(armL.c, SHOULDER.L, a * 0.6);
    }
    const armPath = (side, a) => {
      const [sx, sy] = SHOULDER[side];
      return `<path d="M${sx} ${sy}Q${f(a.c[0])} ${f(a.c[1])} ${f(a.h[0])} ${f(a.h[1])}" fill="none" stroke="${limb}" stroke-width="7.5" stroke-linecap="round"/>`;
    };
    const hand = (a) => {
      let s = "";
      if (a.finger) {
        const dx = a.h[0] - a.c[0], dy = a.h[1] - a.c[1];
        const k = 15 / Math.hypot(dx, dy);
        const fx2 = a.h[0] + dx * k, fy2 = a.h[1] + dy * k;
        s += `<path d="M${f(a.h[0])} ${f(a.h[1])}L${f(fx2)} ${f(fy2)}" stroke="${gloveLine}" stroke-width="10.5" stroke-linecap="round"/><path d="M${f(a.h[0])} ${f(a.h[1])}L${f(fx2)} ${f(fy2)}" stroke="${glove}" stroke-width="4" stroke-linecap="round"/>`;
      }
      return s + `<circle cx="${f(a.h[0])}" cy="${f(a.h[1])}" r="${a.r || 10.5}" fill="${glove}" stroke="${gloveLine}" stroke-width="3.6"/>`;
    };

    // legs + shoes, with an optional walk cycle
    const step = o.step;
    const foot = (side) => {
      let [x, y] = FOOT[side];
      if (step !== undefined) {
        const ph = side === "L" ? step : step + Math.PI;
        x += Math.sin(ph) * 9;
        y -= Math.max(0, Math.cos(ph)) * 9;
      }
      return [x, y];
    };
    const [flx, fly] = foot("L");
    const [frx, fry] = foot("R");
    const legs =
      `<path d="M${HIP.L[0]} ${HIP.L[1]}Q${f(flx + 2)} ${f((HIP.L[1] + fly) / 2 + 8)} ${f(flx)} ${f(fly)}" fill="none" stroke="${limb}" stroke-width="8" stroke-linecap="round"/>` +
      `<path d="M${HIP.R[0]} ${HIP.R[1]}Q${f(frx - 2)} ${f((HIP.R[1] + fry) / 2 + 8)} ${f(frx)} ${f(fry)}" fill="none" stroke="${limb}" stroke-width="8" stroke-linecap="round"/>` +
      `<ellipse cx="${f(flx - 7)}" cy="${f(fly + 3)}" rx="15.5" ry="8.5" fill="${shoe}"/><ellipse cx="${f(frx + 7)}" cy="${f(fry + 3)}" rx="15.5" ry="8.5" fill="${shoe}"/>` +
      (dark ? "" : `<ellipse cx="${f(flx - 11)}" cy="${f(fly)}" rx="5" ry="2.2" fill="#fff" opacity=".35"/><ellipse cx="${f(frx + 3)}" cy="${f(fry)}" rx="5" ry="2.2" fill="#fff" opacity=".35"/>`);

    const defs =
      `<linearGradient id="${id}b" gradientUnits="userSpaceOnUse" x1="112" y1="60" x2="214" y2="252"><stop offset="0" stop-color="#a3c1ff"/><stop offset=".48" stop-color="#6593ff"/><stop offset="1" stop-color="#3566e0"/></linearGradient>` +
      `<radialGradient id="${id}r" gradientUnits="userSpaceOnUse" cx="140" cy="122" r="152"><stop offset=".6" stop-color="#14286e" stop-opacity="0"/><stop offset="1" stop-color="#14286e" stop-opacity=".3"/></radialGradient>` +
      (o.sticker
        ? `<filter id="${id}s" x="-25%" y="-25%" width="150%" height="150%"><feMorphology in="SourceAlpha" operator="dilate" radius="9" result="d"/><feFlood flood-color="#fff"/><feComposite in2="d" operator="in" result="w"/><feDropShadow in="w" dx="0" dy="6" stdDeviation="7" flood-color="#0f1e5a" flood-opacity=".22" result="ws"/><feMerge><feMergeNode in="ws"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`
        : "");

    const body =
      `<path d="${BODY}" fill="url(#${id}b)" stroke="url(#${id}b)" stroke-width="14" stroke-linejoin="round"/>` +
      `<path d="${BODY}" fill="url(#${id}r)" stroke="url(#${id}r)" stroke-width="14" stroke-linejoin="round"/>` +
      `<path d="M124.8 90A91 91 0 0 0 103 128" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="8" stroke-linecap="round"/>` +
      `<circle cx="137" cy="80" r="4.2" fill="#fff" fill-opacity=".5"/>`;

    const blush = (o.blush ?? m.blush) ? `<ellipse cx="116" cy="166" rx="11.5" ry="6.5" fill="#ff8fa8" opacity=".55"/><ellipse cx="204" cy="166" rx="11.5" ry="6.5" fill="#ff8fa8" opacity=".55"/>` : "";
    const face = blush + eyes(m, o, id) + brows(m, o) + mouth(o.mouth || m.mouth, o.talk || 0, id);

    const propHand = o.propHand === "L" || o.pose === "holdL" ? "L" : "R";
    const propAt = propHand === "L" ? armL.h : armR.h;
    let propSvg = o.prop ? prop(o.prop, propAt, propHand === "L", id) : "";
    if (o.prop && o.pose === "carry") propSvg = `<g transform="translate(136 219) rotate(-3) scale(1.3)">${prop(o.prop, [0, 0], false, id).replace(/ rotate\(-9\)/, "")}</g>`;

    const back = [armL.front ? "" : armPath("L", armL), armR.front ? "" : armPath("R", armR)].join("");
    const front = [armL.front ? armPath("L", armL) : "", armR.front ? armPath("R", armR) : ""].join("");
    const signSvg = o.pose === "sign" ? sign(o.sign || ["COUNT", "ONCE."], id) : "";

    const sq = Math.max(-1, Math.min(1, o.squash || 0));
    const sx = 1 + 0.12 * sq, sy = 1 - 0.12 * sq;
    const lift = o.lift || 0;
    const tilt = o.tilt || 0;
    const xform = `translate(0 ${f(-lift)}) rotate(${f(tilt)} 160 312) translate(160 312) scale(${f(sx)} ${f(sy)}) translate(-160 -312)`;

    const shadowK = Math.max(0.35, 1 - lift / 160);
    const shadow = o.shadow === false ? "" : `<ellipse cx="160" cy="316" rx="${f(64 * shadowK)}" ry="${f(9 * shadowK)}" fill="${dark ? "#000" : "#141e50"}" opacity="${dark ? 0.35 : 0.13}"/>`;

    const char = `<g transform="${xform}">${legs}${back}${body}${face}${propSvg}${front}${signSvg}${hand(armL)}${hand(armR)}${fx(o.fx || m.fx)}</g>`;
    // stickers get room around the edge for the die-cut outline
    const vb = o.crop === "face" ? "72 44 176 176" : o.sticker ? `-18 -18 ${W + 36} ${H + 36}` : `0 0 ${W} ${H}`;
    const inner = o.sticker ? `<g filter="url(#${id}s)">${char}</g>` : shadow + char;
    const [, , vw, vh] = vb.split(" ").map(Number);
    const size = o.size ? ` width="${o.size}" height="${Math.round((o.size * vh) / vw)}"` : "";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}"${size} role="img" aria-label="Namzi, the Namzilabs mascot"><defs>${defs}</defs>${inner}</svg>`;
  }

  /** <div class="namzi" data-mood="happy" data-pose="wave" data-prop="receipt" data-fx="sparkle" data-sign="COUNT|ONCE." data-look="1,0"></div> */
  function hydrateMascots(rootEl = document) {
    for (const el of rootEl.querySelectorAll(".namzi[data-mood], .namzi[data-pose]")) {
      const d = el.dataset;
      const num = (s) => s.split(",").map(Number);
      el.innerHTML = mascot({
        mood: d.mood,
        pose: d.pose,
        prop: d.prop,
        propHand: d.propHand,
        fx: d.fx ? d.fx.split(",") : undefined,
        sign: d.sign ? d.sign.split("|") : undefined,
        look: d.look ? num(d.look) : undefined,
        blink: d.blink ? Number(d.blink) : undefined,
        tilt: d.tilt ? Number(d.tilt) : undefined,
        mouth: d.mouth,
        eyes: d.eyes,
        blush: d.blush ? d.blush === "true" : undefined,
        dark: d.dark === "true",
        sticker: d.sticker === "true",
        shadow: d.shadow === "false" ? false : undefined,
        crop: d.crop,
      });
    }
  }

  root.NZ = Object.assign(root.NZ || {}, { mascot, hydrateMascots, MASCOT_MOODS: Object.keys(MOODS), MASCOT_POSES: Object.keys(POSES) });
})(typeof window !== "undefined" ? window : globalThis);
