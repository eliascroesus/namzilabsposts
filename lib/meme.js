/* ─────────────────────────────────────────────────────────────────────────
   Pieces for the parody posts (36–44) and the donut banner: clouds, a comic
   thought cloud, the two-donut mark, a donut chart that is an actual donut,
   flames, and a spreadsheet you can carry up the stairs.
     NZ.meme.clouds(W, H, spots)         soft white clouds (spots: [x, y, size] as fractions)
     NZ.meme.thought(cx, cy, w, h)       an outlined thought cloud, as an absolutely placed <svg>
     NZ.meme.donutRings()                two donuts overlapping like the mark's rings (64-unit viewBox)
     NZ.meme.donutChart(size, segs)      a donut chart iced in segments: segs = [[value, colour], …]
     NZ.meme.flames(W, H, seed)          a wall of cartoon fire along the bottom of a W×H box
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const NZ = (window.NZ = window.NZ || {});
  let seed = 7, uid = 0;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const f = (n) => Math.round(n * 100) / 100;
  const SPR = ["#ffffff", "#ffd23f", "#4dc9ff", "#6be07a", "#ff5a5a", "#b28cff"];

  function clouds(W, H, spots, k = 1) {
    seed = 7;
    let s = "";
    for (const [x, y, z] of spots) {
      const w = z * Math.min(H, 900) * 1.5 * k, h = w * 0.45, cx = x * W, cy = y * H;
      let c = "";
      for (let i = 0; i < 6; i++) { const t = i / 5, r = h * (0.36 + Math.sin(t * Math.PI) * 0.3 + rnd() * 0.08); c += `<circle cx="${f(cx - w / 2 + r + t * (w - 2 * r))}" cy="${f(cy + h * 0.1 - Math.sin(t * Math.PI) * h * 0.16)}" r="${f(r)}" fill="#fff"/>`; }
      s += `<svg style="position:absolute;left:0;top:0;overflow:visible;opacity:.88" width="1" height="1">${c}<rect x="${f(cx - w / 2 + h * 0.3)}" y="${f(cy)}" width="${f(w - h * 0.6)}" height="${f(h * 0.46)}" rx="${f(h * 0.23)}" fill="#fff"/></svg>`;
    }
    return s;
  }

  function thought(cx, cy, w, h, ink = "#0f1d4a") {
    seed = 41;
    const n = 11, rx = w / 2, ry = h / 2, C = [];
    for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2, r = Math.min(rx, ry) * (0.3 + rnd() * 0.08); C.push([cx + Math.cos(a) * (rx - r * 0.7), cy + Math.sin(a) * (ry - r * 0.7), r]); }
    const sw = Math.max(2.5, w * 0.014);
    const shape = (fill, stroke) => C.map(([x, y, r]) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw * 2}"` : ""}/>`).join("") + `<ellipse cx="${cx}" cy="${cy}" rx="${f(rx * 0.8)}" ry="${f(ry * 0.72)}" fill="${fill}"${stroke ? ` stroke="${stroke}" stroke-width="${sw * 2}"` : ""}/>`;
    return `<svg style="position:absolute;left:0;top:0;overflow:visible" width="1" height="1"><g style="filter:drop-shadow(0 ${f(w * 0.03)}px ${f(w * 0.04)}px rgba(15,29,74,.25))">${shape(ink, ink)}${shape("#fff")}</g></svg>`;
  }

  // a dotted trail of little thought bubbles from (x0, y0) to (x1, y1)
  function trail(x0, y0, x1, y1, size, ink = "#0f1d4a") {
    return [[0.25, 0.05], [0.5, 0.075], [0.75, 0.1]].map(([t, r]) => { const x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t, d = size * r; return `<div style="position:absolute;left:${f(x - d / 2)}px;top:${f(y - d / 2)}px;width:${f(d)}px;height:${f(d)}px;border-radius:50%;background:#fff;box-shadow:0 0 0 ${f(Math.max(2.5, size * 0.014))}px ${ink}"></div>`; }).join("");
  }

  function donutRings() {
    const u = ++uid;
    seed = 31;
    const dn = (cx, icing, hi) => {
      let s = "";
      for (let i = 0; i < 30; i++) { const a = rnd() * Math.PI * 2, rr = 12 + rnd() * 6, x = cx + Math.cos(a) * rr, y = 32 + Math.sin(a) * rr; s += `<rect x="${f(x - 0.9)}" y="${f(y - 0.32)}" width="1.8" height=".64" rx=".32" fill="${SPR[i % SPR.length]}" transform="rotate(${f(rnd() * 180)} ${f(x)} ${f(y)})"/>`; }
      return `<g filter="url(#msh${u})"><circle cx="${cx}" cy="32" r="15" fill="none" stroke="#000" stroke-width="11.8" opacity=".3"/></g><circle cx="${cx}" cy="32" r="15" fill="none" stroke="url(#mdd${u})" stroke-width="11.8"/>` +
        `<g filter="url(#mdi${u})"><circle cx="${cx}" cy="32" r="15" fill="none" stroke="${icing}" stroke-width="9.2"/></g><circle cx="${cx}" cy="32" r="15" fill="none" stroke="${hi}" stroke-width=".9" stroke-dasharray="12 90" stroke-dashoffset="24" transform="translate(-.8 -1)"/>${s}`;
    };
    return `<svg viewBox="0 0 64 64" style="width:100%;height:100%;overflow:visible"><defs>
        <radialGradient id="mdd${u}" gradientUnits="userSpaceOnUse" cx="24.2" cy="32" r="20.9"><stop offset=".43" stop-color="#A8652A"/><stop offset=".6" stop-color="#E7B37A"/><stop offset=".78" stop-color="#DDA25F"/><stop offset="1" stop-color="#9C5B22"/></radialGradient>
        <filter id="mdi${u}" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".3" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="2.2"/></filter>
        <filter id="msh${u}" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="1.6"/><feOffset dy="2"/></filter></defs>
      ${dn(24.2, "#FF8FB3", "rgba(255,255,255,.55)")}${dn(39.8, "#6B3E26", "rgba(255,255,255,.35)")}</svg>`;
  }

  // a donut chart that is a donut: baked dough, iced in one arc per segment, with a sliver of dough
  // showing between arcs (the chart's spacer) and sprinkles on top
  function donutChart(size, segs) {
    const u = ++uid;
    seed = 17;
    const c = size / 2, R = size * 0.34, dough = size * 0.3, icing = size * 0.23;
    const total = segs.reduce((n, [v]) => n + v, 0);
    let a0 = -Math.PI / 2, arcs = "", sprinkles = "";
    const gap = (0.018 * 2 * Math.PI);
    for (const [v, col] of segs) {
      const a1 = a0 + (v / total) * 2 * Math.PI;
      const s = a0 + gap / 2, e = a1 - gap / 2, large = e - s > Math.PI ? 1 : 0;
      const P = (a) => `${f(c + Math.cos(a) * R)} ${f(c + Math.sin(a) * R)}`;
      arcs += `<path d="M${P(s)}A${R} ${R} 0 ${large} 1 ${P(e)}" fill="none" stroke="${col}" stroke-width="${icing}" stroke-linecap="butt"/>`;
      a0 = a1;
    }
    for (let i = 0; i < 70; i++) { const a = rnd() * Math.PI * 2, r = R + (rnd() - 0.5) * icing * 0.78, x = c + Math.cos(a) * r, y = c + Math.sin(a) * r, l = size * 0.022; sprinkles += `<rect x="${f(x - l / 2)}" y="${f(y - l * 0.18)}" width="${f(l)}" height="${f(l * 0.36)}" rx="${f(l * 0.18)}" fill="${SPR[i % SPR.length]}" transform="rotate(${f(rnd() * 180)} ${f(x)} ${f(y)})" opacity=".95"/>`; }
    return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" style="display:block;overflow:visible"><defs>
        <radialGradient id="cdd${u}" gradientUnits="userSpaceOnUse" cx="${c}" cy="${c}" r="${R + dough / 2}"><stop offset="${f((R - dough / 2) / (R + dough / 2))}" stop-color="#A8652A"/><stop offset="${f((R - dough * 0.15) / (R + dough / 2))}" stop-color="#E7B37A"/><stop offset="${f((R + dough * 0.25) / (R + dough / 2))}" stop-color="#DDA25F"/><stop offset="1" stop-color="#9C5B22"/></radialGradient>
        <filter id="cdi${u}" filterUnits="userSpaceOnUse" x="0" y="0" width="${size}" height="${size}"><feTurbulence type="fractalNoise" baseFrequency="${f(6 / size)}" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="${f(size * 0.03)}"/></filter>
        <filter id="csh${u}" filterUnits="userSpaceOnUse" x="${-size * 0.1}" y="${-size * 0.1}" width="${size * 1.2}" height="${size * 1.25}"><feGaussianBlur stdDeviation="${f(size * 0.025)}"/><feOffset dy="${f(size * 0.03)}"/></filter></defs>
      <g filter="url(#csh${u})"><circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="#1d2a5a" stroke-width="${dough}" opacity=".35"/></g>
      <circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="url(#cdd${u})" stroke-width="${dough}"/>
      <g filter="url(#cdi${u})">${arcs}</g>
      <circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="${f(size * 0.012)}" stroke-dasharray="${f(R * 0.9)} ${f(R * 9)}" stroke-dashoffset="${f(R * 3.6)}" transform="translate(${f(-size * 0.01)} ${f(-size * 0.012)})"/>
      ${sprinkles}</svg>`;
  }

  // cartoon flames along the bottom of a W×H box: three layers, red to yellow
  function flames(W, H, s0 = 5, k = 1) {
    seed = s0;
    const layer = (col, hMax, step) => {
      let d = `M0 ${H}`;
      for (let x = 0; x <= W + step; x += step) {
        const h = hMax * (0.55 + rnd() * 0.45), w = step * (0.9 + rnd() * 0.3);
        d += `Q${f(x - w * 0.1)} ${f(H - h * 0.45)} ${f(x + w * 0.2)} ${f(H - h)}Q${f(x + w * 0.35)} ${f(H - h * 0.4)} ${f(x + w * 0.6)} ${f(H - h * 0.15)}`;
      }
      return `<path d="${d}L${W} ${H}Z" fill="${col}"/>`;
    };
    return `<svg style="position:absolute;left:0;top:0" width="${W}" height="${H}">${layer("#e8421c", H * 0.62 * k, 120 * k)}${layer("#ff7a1a", H * 0.44 * k, 96 * k)}${layer("#ffc23a", H * 0.26 * k, 80 * k)}</svg>`;
  }

  NZ.meme = { clouds, thought, trail, donutRings, donutChart, flames };
})();
