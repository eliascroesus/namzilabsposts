/* The fiery mountain and the gold rings, for the "precious" meme (logo variant, banners, posts).
 *
 *   NZ.volcano({ W, H, cx, peak, base, bw, ground, seed })  → an <svg> string, W×H, absolutely positioned:
 *     an ash sky lit from below, far ridges, a volcano with a glowing crater, a smoke plume and lava
 *     running down its flanks, a dark plain with lava in its cracks, and embers in the air.
 *     A generic volcano: no tower, no eye, nothing from the films but the mood.
 *   NZ.oneRings({ view, cx, cy, w, base })  → HTML for the 3D gold rings (brand/logos/one-ring/rings.html),
 *     centred on (cx, cy) and w wide, with their inscription blooming like hot metal.
 */
(function () {
  const NZ = (window.NZ = window.NZ || {});
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const f = (n) => Math.round(n * 10) / 10;
  const mix = (a, b, t) => a + (b - a) * t;
  let uid = 0;

  // a jagged line between two points (midpoint displacement), as [[x, y], …]
  function jag(x0, y0, x1, y1, amp, depth = 5) {
    let pts = [[x0, y0], [x1, y1]];
    for (let d = 0; d < depth; d++, amp *= 0.56) {
      const out = [pts[0]];
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i];
        const len = Math.hypot(bx - ax, by - ay) || 1, nx = -(by - ay) / len, ny = (bx - ax) / len, k = (rnd() * 2 - 1) * amp;
        out.push([(ax + bx) / 2 + nx * k, (ay + by) / 2 + ny * k], [bx, by]);
      }
      pts = out;
    }
    return pts;
  }
  const poly = (pts) => pts.map(([x, y], i) => `${i ? "L" : "M"}${f(x)} ${f(y)}`).join("");
  // a ribbon along a polyline, width tapering from w0 to w1
  function ribbon(pts, w0, w1) {
    const L = [], R = [];
    pts.forEach(([x, y], i) => {
      const [ax, ay] = pts[Math.max(0, i - 1)], [bx, by] = pts[Math.min(pts.length - 1, i + 1)];
      const len = Math.hypot(bx - ax, by - ay) || 1, nx = -(by - ay) / len, ny = (bx - ax) / len;
      const w = mix(w0, w1, i / (pts.length - 1)) * (0.75 + rnd() * 0.5) / 2;
      L.push([x + nx * w, y + ny * w]); R.push([x - nx * w, y - ny * w]);
    });
    return poly([...L, ...R.reverse()]) + "Z";
  }

  NZ.volcano = function (o) {
    const { W, H } = o;
    seed = o.seed || 7;
    const u = ++uid;
    const cx = o.cx ?? W * 0.68, peak = o.peak ?? H * 0.3, base = o.base ?? H * 0.84;
    const vh = base - peak, bw = o.bw ?? vh * 2.7, cw = o.cw ?? bw * 0.1;
    const ground = o.ground ?? base - vh * 0.04;
    const S = vh / 400; // detail scale: strokes, blurs and embers grow with the mountain

    // the mountain's outline: concave flanks (steep near the top), a notched crater, rough edges
    const half = (h) => cw / 2 + (bw / 2 - cw / 2) * Math.pow(1 - h, 1.9);
    const flank = (side) => {
      const pts = [];
      for (let i = 0; i <= 9; i++) {
        const h = i / 9;
        pts.push([cx + side * (half(h) + (i && i < 9 ? (rnd() - 0.5) * vh * 0.05 : 0)), base - h * vh + (i && i < 9 ? (rnd() - 0.5) * vh * 0.03 : 0)]);
      }
      return pts;
    };
    const Lf = flank(-1), Rf = flank(1).reverse();
    const crater = [[cx - cw / 2, peak], [cx - cw * 0.22, peak + cw * 0.16], [cx + cw * 0.12, peak + cw * 0.2], [cx + cw / 2, peak - cw * 0.03]];
    let outline = [];
    const chain = [...Lf, ...crater.slice(1, -1), ...Rf];
    for (let i = 1; i < chain.length; i++) {
      const seg = jag(chain[i - 1][0], chain[i - 1][1], chain[i][0], chain[i][1], Math.hypot(chain[i][0] - chain[i - 1][0], chain[i][1] - chain[i - 1][1]) * 0.12, 4);
      outline = outline.concat(i === 1 ? seg : seg.slice(1));
    }
    const mountain = poly(outline) + `L${f(cx + bw / 2 + vh)} ${f(H)}L${f(cx - bw / 2 - vh)} ${f(H)}Z`;

    // far ridges across the whole width, lower than the volcano
    const ridge = (y, amp, col, op) => `<path d="${poly(jag(-20, y + (rnd() - 0.5) * amp, W + 20, y + (rnd() - 0.5) * amp, amp, 7))}L${W + 20} ${H}L-20 ${H}Z" fill="${col}" opacity="${op}"/>`;

    // gullies scoring the flanks
    let gullies = "";
    for (let i = 0; i < 26; i++) {
      const side = rnd() < 0.5 ? -1 : 1, h0 = 0.9 - rnd() * 0.25, h1 = rnd() * 0.3, r0 = 0.15 + rnd() * 0.8;
      const pts = [];
      for (let k = 0; k <= 6; k++) { const h = mix(h0, h1, k / 6); pts.push([cx + side * half(h) * mix(r0, r0 * 1.05, k / 6) + (rnd() - 0.5) * 6 * S, base - h * vh]); }
      gullies += `<path d="${poly(pts)}" fill="none" stroke="${rnd() < 0.55 ? "#3b1a10" : "#050202"}" stroke-width="${f((1 + rnd() * 1.6) * S)}" opacity="${f(0.35 + rnd() * 0.4)}" stroke-linecap="round"/>`;
    }

    // lava: rivers from the crater down the flanks (a hot core inside a wider, redder flow)
    const rivers = (o.rivers || [[-0.55, 0.7], [0.3, 1.02], [0.72, 0.5]]).map(([r, len]) => {
      const side = Math.sign(r) || 1, pts = [];
      for (let k = 0; k <= 16; k++) {
        const h = 1 - (k / 16) * len;
        const wob = Math.sin(k * 0.9 + rnd() * 2) * 0.06;
        pts.push([cx + side * half(Math.max(0, h)) * Math.min(0.97, Math.abs(r) + wob) * (h < 0 ? 1 + -h * 0.6 : 1), base - Math.max(h, -0.08) * vh + (h < 0 ? -h * vh * 0.4 : 0)]);
      }
      pts[0] = [cx + r * cw * 0.45, peak + cw * 0.14];
      return pts;
    });
    const lava = (w0, w1, col, op) => rivers.map((p) => `<path d="${ribbon(p, w0 * S, w1 * S)}" fill="${col}" opacity="${op}"/>`).join("");

    // the plume: dark billows rising from the crater and bending with the wind, lit from below near the vent
    let plume = "", plumeLit = "";
    const drift = o.drift ?? 1;
    for (let i = 0; i < 46; i++) {
      const t = Math.pow(i / 45, 0.9);
      const r = cw * (0.5 + t * 2.4) * (0.8 + rnd() * 0.4);
      const x = cx + drift * Math.pow(t, 1.7) * vh * 0.85 + (rnd() - 0.5) * r * 0.7;
      const y = peak - cw * 0.3 - t * (peak + vh * 0.3) + (rnd() - 0.5) * r * 0.3;
      plume += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${t < 0.3 ? "#3a1a12" : "#231310"}" opacity="${f(0.92 - t * 0.3)}"/>`;
      if (t < 0.55) plumeLit += `<circle cx="${f(x - r * 0.1)}" cy="${f(y + r * 0.35)}" r="${f(r * 0.72)}" fill="${t < 0.2 ? "#ff7a2a" : "#b8401a"}" opacity="${f((0.55 - t) * 1.3)}"/>`;
    }

    // cracks of lava across the plain: angular, branching, finer towards the horizon
    let cracks = "";
    for (let i = 0; i < 22; i++) {
      const d = Math.pow(rnd(), 1.4), y = ground + 6 * S + d * (H - ground), x = rnd() * W, k = 0.35 + d * 1.6;
      const len = (60 + rnd() * 150) * S * k, a = (rnd() - 0.5) * 0.5;
      const main = jag(x - (len / 2) * Math.cos(a), y - (len / 2) * Math.sin(a) * 0.3, x + (len / 2) * Math.cos(a), y + (len / 2) * Math.sin(a) * 0.3, len * 0.09, 3);
      const w = f((0.7 + rnd() * 1.4) * S * k), col = rnd() < 0.5 ? "#ff7a22" : "#ff4a0f", op = f(0.55 + rnd() * 0.45);
      cracks += `<path d="${poly(main)}" fill="none" stroke="${col}" stroke-width="${w}" opacity="${op}" stroke-linejoin="round"/>`;
      if (rnd() < 0.6) { const [bx, by] = main[Math.floor(main.length / 2)], bl = len * (0.2 + rnd() * 0.3); cracks += `<path d="${poly(jag(bx, by, bx + (rnd() - 0.5) * bl, by + bl * 0.25 * (rnd() < 0.5 ? -1 : 1) * 0.5, bl * 0.12, 2))}" fill="none" stroke="${col}" stroke-width="${f(w * 0.6)}" opacity="${op}"/>`; }
    }

    // a lava river winding across the plain, from the mountain's foot towards us
    let flow = "";
    if (o.flow !== false) {
      const pts = [], x0 = cx + bw * 0.12, y0 = base - vh * 0.02;
      for (let k = 0; k <= 22; k++) {
        const t = k / 22;
        pts.push([x0 - t * W * (o.flowDir ?? 0.55) + Math.sin(t * 7 + 1) * vh * 0.1 * t, mix(y0, H + 20, Math.pow(t, 1.35))]);
      }
      flow = `<path d="${ribbon(pts, 10 * S, 70 * S)}" fill="#ff3d0a" opacity=".55" filter="url(#vbA${u})"/><path d="${ribbon(pts, 5 * S, 42 * S)}" fill="#ff7a1f"/><path d="${ribbon(pts, 1.6 * S, 16 * S)}" fill="#ffcf5a" opacity=".9"/>`;
    }

    // embers: sparks drifting up, more of them low and near the mountain
    let embers = "";
    const nE = o.embers ?? Math.round((W * H) / 9000);
    for (let i = 0; i < nE; i++) {
      const x = rnd() * W, y = H * (0.15 + Math.pow(rnd(), 0.7) * 0.85), z = (0.6 + Math.pow(rnd(), 3) * 3) * Math.max(0.8, S * 0.9);
      const col = ["#ffe39a", "#ffb04a", "#ff7a2a", "#ff5a1a"][Math.floor(rnd() * 4)], op = f(0.35 + rnd() * 0.65);
      embers += rnd() < 0.3
        ? `<path d="M${f(x)} ${f(y)}l${f(z * 2.4)} ${f(-z * 6)}" stroke="${col}" stroke-width="${f(z * 0.9)}" stroke-linecap="round" opacity="${op}"/>`
        : `<circle cx="${f(x)}" cy="${f(y)}" r="${f(z)}" fill="${col}" opacity="${op}"/>`;
    }

    const hw = Math.max(W, H);
    return `<svg class="volcano" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" style="position:absolute;left:0;top:0;display:block">
<defs>
  <linearGradient id="vsky${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#060203"/><stop offset="${f((peak / H) * 100) / 100}" stop-color="#1d0806"/><stop offset="${f((base / H) * 100) / 100}" stop-color="#6a1e0a"/><stop offset="1" stop-color="#2a0a05"/></linearGradient>
  <radialGradient id="vglow${u}" gradientUnits="userSpaceOnUse" cx="${f(cx)}" cy="${f(peak + vh * 0.5)}" r="${f(Math.max(vh * 1.6, W * 0.45))}"><stop offset="0" stop-color="#ff6a1a" stop-opacity=".62"/><stop offset=".35" stop-color="#c2320c" stop-opacity=".32"/><stop offset="1" stop-color="#5a1206" stop-opacity="0"/></radialGradient>
  <radialGradient id="vcrat${u}"><stop offset="0" stop-color="#fff2b0"/><stop offset=".22" stop-color="#ffb347" stop-opacity=".9"/><stop offset=".55" stop-color="#ff5a1a" stop-opacity=".4"/><stop offset="1" stop-color="#ff3d0a" stop-opacity="0"/></radialGradient>
  <radialGradient id="vhaze${u}"><stop offset="0" stop-color="#ff6a22" stop-opacity=".5"/><stop offset=".5" stop-color="#c2360e" stop-opacity=".22"/><stop offset="1" stop-color="#8a2008" stop-opacity="0"/></radialGradient>
  <linearGradient id="vmtn${u}" gradientUnits="userSpaceOnUse" x1="0" y1="${f(peak)}" x2="0" y2="${f(base)}"><stop offset="0" stop-color="#1e0b07"/><stop offset=".6" stop-color="#120605"/><stop offset="1" stop-color="#0b0404"/></linearGradient>
  <linearGradient id="vfar${u}" gradientUnits="userSpaceOnUse" x1="0" y1="${f(base - vh * 0.35)}" x2="0" y2="${f(H)}"><stop offset="0" stop-color="#4a160b"/><stop offset=".4" stop-color="#220a07"/><stop offset="1" stop-color="#140605"/></linearGradient>
  <radialGradient id="vvig${u}" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".7"/></radialGradient>
  <linearGradient id="vcm${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="${f((base / H) * 90) / 100}" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <mask id="vcmask${u}"><rect width="${W}" height="${H}" fill="url(#vcm${u})"/></mask>
  <filter id="vcl${u}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${(1.6 / H).toFixed(5)} ${(4.2 / H).toFixed(5)}" numOctaves="5" seed="${seed % 97}"/><feColorMatrix values="0 0 0 0 .12  0 0 0 0 .045  0 0 0 0 .035  2.6 0 0 0 -1.05"/></filter>
  <filter id="vcl2${u}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="${(2.4 / H).toFixed(5)} ${(6 / H).toFixed(5)}" numOctaves="4" seed="${(seed * 3) % 97}"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 .42  0 0 0 0 .14  2.6 0 0 0 -1.3"/></filter>
  <radialGradient id="vlit${u}" gradientUnits="userSpaceOnUse" cx="${f(cx)}" cy="${f(peak)}" r="${f(vh * 1.3)}"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <mask id="vlm${u}"><rect width="${W}" height="${H}" fill="url(#vlit${u})"/></mask>
  <filter id="vpl${u}" x="-50%" y="-50%" width="200%" height="200%"><feTurbulence type="fractalNoise" baseFrequency="${(0.012 / S).toFixed(4)}" numOctaves="3" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="${f(60 * S)}" xChannelSelector="R" yChannelSelector="G"/><feGaussianBlur stdDeviation="${f(7 * S)}"/></filter>
  <filter id="vbA${u}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${f(9 * S)}"/></filter>
  <filter id="vbB${u}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="${f(2.2 * S)}"/></filter>
  <filter id="vemb${u}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${f(Math.max(1.2, 2.4 * S))}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="vgr${u}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 .07 0"/></filter>
</defs>
<rect width="${W}" height="${H}" fill="url(#vsky${u})"/>
<rect width="${W}" height="${H}" fill="url(#vglow${u})"/>
<g mask="url(#vcmask${u})"><rect width="${W}" height="${H}" filter="url(#vcl${u})"/><g mask="url(#vlm${u})"><rect width="${W}" height="${H}" filter="url(#vcl2${u})" opacity=".55"/></g></g>
<g filter="url(#vpl${u})">${plume}</g>
<g filter="url(#vpl${u})" style="mix-blend-mode:screen">${plumeLit}</g>
${ridge(base - vh * 0.2, vh * 0.16, "url(#vfar" + u + ")", 0.9)}
${ridge(base - vh * 0.08, vh * 0.1, "#120605", 1)}
<path d="${mountain}" fill="none" stroke="#ff5a1a" stroke-width="${f(5 * S)}" opacity=".5" filter="url(#vbA${u})"/>
<path d="${mountain}" fill="url(#vmtn${u})"/>
${gullies}
<g filter="url(#vbA${u})">${lava(22, 12, "#ff3d0a", 0.7)}</g>
${lava(9, 4, "#ff6a1a", 1)}
<g filter="url(#vbB${u})">${lava(3.4, 1.4, "#ffd36b", 1)}</g>
<ellipse cx="${f(cx)}" cy="${f(peak + cw * 0.05)}" rx="${f(cw * 2.6)}" ry="${f(cw * 1.5)}" fill="url(#vcrat${u})" style="mix-blend-mode:screen"/>
<path d="${poly(jag(-20, ground, W + 20, ground + (rnd() - 0.5) * vh * 0.05, vh * 0.04, 7))}L${W + 20} ${H}L-20 ${H}Z" fill="#0a0404"/>
<path d="${poly(jag(-20, ground, W + 20, ground, vh * 0.02, 6))}" fill="none" stroke="#ff5a1a" stroke-width="${f(3 * S)}" opacity=".35" filter="url(#vbB${u})"/>
<ellipse cx="${f(cx)}" cy="${f(ground)}" rx="${f(Math.max(W, vh * 3) * 0.7)}" ry="${f(vh * 0.16)}" fill="url(#vhaze${u})" style="mix-blend-mode:screen"/>
<g filter="url(#vbB${u})">${cracks}</g>
${flow}
<g filter="url(#vemb${u})">${embers}</g>
<rect width="${W}" height="${H}" fill="url(#vvig${u})"/>
<rect width="${W}" height="${H}" filter="url(#vgr${u})"/>
</svg>`;
  };

  // where the rings sit in each render (fractions of the image), so they can be placed by their own bounds
  const VIEWS = { hero: { size: [2400, 1500], box: [0.0738, 0.1867, 0.9267, 0.8807] }, square: { size: [1600, 1600], box: [0.0738, 0.2744, 0.9262, 0.7506] } };
  NZ.oneRings = function ({ view = "hero", cx, cy, w, base = "", glow = 1, under = true }) {
    const v = VIEWS[view], [x0, y0, x1, y1] = v.box;
    const k = w / ((x1 - x0) * v.size[0]), iw = v.size[0] * k, ih = v.size[1] * k, bh = (y1 - y0) * v.size[1] * k;
    const left = cx - w / 2 - x0 * iw, top = cy - bh / 2 - y0 * ih;
    const at = `position:absolute;left:${f(left)}px;top:${f(top)}px;width:${f(iw)}px;height:${f(ih)}px`;
    return (under ? `<div style="position:absolute;left:${f(cx - w * 0.62)}px;top:${f(cy - bh * 0.2)}px;width:${f(w * 1.24)}px;height:${f(bh * 0.9)}px;border-radius:50%;background:radial-gradient(closest-side, rgba(255,120,30,.5), rgba(255,70,10,.18) 60%, transparent);mix-blend-mode:screen"></div>` : "") +
      `<img src="${base}rings-${view}.png" alt="" style="${at}">` +
      `<img src="${base}rings-${view}-glow.png" alt="" style="${at};mix-blend-mode:screen;filter:blur(${f(w * 0.004)}px);opacity:${glow}">` +
      `<img src="${base}rings-${view}-glow.png" alt="" style="${at};mix-blend-mode:screen;filter:blur(${f(w * 0.016)}px);opacity:${glow}">`;
  };
})();
