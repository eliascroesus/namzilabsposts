/* ─────────────────────────────────────────────────────────────────────────
   The pop-culture banners: ten famous games, films and series, played by
   Namzilabs. Each one borrows a format everybody knows (a maze chase, a
   pixel platformer, a fighting-game VS screen, an emergency meeting, a
   crafting grid, a pill choice, an opening crawl, a jet at sunset, a
   shark fin, a wall of Christmas lights) and never the characters,
   sprites, logos, names or fonts. Namzi and the two rings play the leads.

   Each design gives the banner page:
     bg(W, H, pid)   the full-bleed scene, for any size
     art(box, pid)   the hero picture, fitted into box {x, y, w, h}
     text            the words: kicker, head, short (for the narrow LinkedIn cover), sub
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const POP = (window.POP = {});
  const f = (n) => Math.round(n * 100) / 100;
  let seed = 1;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const MARK = (c, w) => NZ.MARK(c, w);
  const mark = (t, size, style = "") => `<span class="mark" data-src="${t}" style="width:${size}px;height:${size}px;${style}"></span>`;
  const abs = (x, y, w, h, inner, style = "") => `<div style="position:absolute;left:${f(x)}px;top:${f(y)}px;${w != null ? `width:${f(w)}px;` : ""}${h != null ? `height:${f(h)}px;` : ""}${style}">${inner}</div>`;
  const svg = (W, H, body, style = "") => `<svg style="position:absolute;left:0;top:0;overflow:visible;${style}" width="${f(W)}" height="${f(H)}" viewBox="0 0 ${f(W)} ${f(H)}">${body}</svg>`;
  // fit an art board of natural size aw×ah into box (contain), anchored to the box's centre or bottom
  function place(box, aw, ah, inner, valign = "center") {
    const s = Math.min(box.w / aw, box.h / ah);
    const x = box.x + (box.w - aw * s) / 2, y = valign === "bottom" ? box.y + box.h - ah * s : box.y + (box.h - ah * s) / 2;
    return `<div style="position:absolute;left:${f(x)}px;top:${f(y)}px;width:${aw}px;height:${ah}px;transform:scale(${Math.round(s * 10000) / 10000});transform-origin:0 0">${inner}</div>`;
  }
  POP.place = place;
  // like place(), but when the box has a floor (the ground or the sea line, in canvas pixels), the art's own
  // floor line (artFloor, in art pixels) lands exactly on it
  function fit(box, aw, ah, inner, artFloor) {
    if (box.floor == null || artFloor == null) return place(box, aw, ah, inner);
    const s = Math.min(box.w / aw, (box.floor - box.y) / artFloor, box.h / ah * 1.25);
    const x = box.x + (box.w - aw * s) / 2, y = box.floor - artFloor * s;
    return `<div style="position:absolute;left:${f(x)}px;top:${f(y)}px;width:${aw}px;height:${ah}px;transform:scale(${Math.round(s * 10000) / 10000});transform-origin:0 0">${inner}</div>`;
  }

  // a pixel-art copy of any SVG (Namzi, mostly): drawn tiny, alpha snapped, then scaled up without smoothing
  const pix = (svgText, cols, w, h, style = "") => `<canvas class="pix" data-cols="${cols}" data-svg="${encodeURIComponent(svgText)}" width="${Math.round(w * 2)}" height="${Math.round(h * 2)}" style="position:absolute;width:${f(w)}px;height:${f(h)}px;${style}"></canvas>`;
  POP.pixelate = async function () {
    for (const c of document.querySelectorAll("canvas.pix")) {
      const img = new Image();
      img.src = "data:image/svg+xml;charset=utf-8," + c.dataset.svg;
      await img.decode();
      const cols = Number(c.dataset.cols), rows = Math.round((cols * c.height) / c.width);
      const o = document.createElement("canvas");
      o.width = cols; o.height = rows;
      const g = o.getContext("2d");
      g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
      g.drawImage(img, 0, 0, cols, rows);
      const d = g.getImageData(0, 0, cols, rows);
      for (let i = 3; i < d.data.length; i += 4) d.data[i] = d.data[i] > 110 ? 255 : 0;
      g.putImageData(d, 0, 0);
      const gg = c.getContext("2d");
      gg.imageSmoothingEnabled = false;
      gg.drawImage(o, 0, 0, c.width, c.height);
    }
  };
  const namziSvg = (o) => NZ.mascot({ shadow: false, size: 320, ...o });
  // YouTube shows TVs the whole 2560×1440 but desktops only the middle band (y 508 to 931), so on YouTube a
  // scene's ground, sea or horizon sits just inside that band and its scenery is sized to the band
  const YT = { top: 508, floor: 905, h: 423 };
  const band = (H, pid) => (pid === "youtube" ? { top: YT.top, h: YT.h } : { top: 0, h: H });
  POP.YT = YT;

  /* ── 1 · arcade: a maze chase ─────────────────────────────────────────── */
  {
    const Y = "#FFD23F", BLUE = "#2946ff";
    const wall = (x, y, w, h, r = 14) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="none" stroke="${BLUE}" stroke-width="9"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="none" stroke="#05050f" stroke-width="3.2"/>`;
    // our ring, as a chomper: a thick yellow ring with a mouth
    const chomper = (cx, cy, r, sw, open = 34) => {
      const a0 = (open * Math.PI) / 180, P = (a) => `${f(cx + r * Math.cos(a))} ${f(cy + r * Math.sin(a))}`;
      return `<path d="M${P(a0)}A${r} ${r} 0 1 1 ${P(-a0)}" fill="none" stroke="${Y}" stroke-width="${sw}" stroke-linecap="round" filter="url(#arcglow)"/>`;
    };
    const dotRing = (cx, cy, r, n, size) => Array.from({ length: n }, (_, i) => { const a = (i / n) * Math.PI * 2 + 0.2; return `<rect x="${f(cx + r * Math.cos(a) - size / 2)}" y="${f(cy + r * Math.sin(a) - size / 2)}" width="${size}" height="${size}" fill="#ffd9c2"/>`; }).join("");
    // the enemies are ours: little spreadsheet cells with legs, scared stiff now the power-up's been eaten
    const bug = (x, y, lab, c) => `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="58" height="48" rx="7" fill="${c}" stroke="#fff" stroke-width="2.5"/><path d="M0 14H58M19 14V48M39 14V48M0 31H58" stroke="#fff" stroke-width="1.6" opacity=".45"/>
        <rect x="12" y="18" width="10" height="10" fill="#fff"/><rect x="36" y="18" width="10" height="10" fill="#fff"/><rect x="16" y="23" width="4" height="4" fill="#05050f"/><rect x="40" y="23" width="4" height="4" fill="#05050f"/>
        <path d="M14 40l5-4 5 4 5-4 5 4 5-4 5 4" fill="none" stroke="#fff" stroke-width="2.5"/><path d="M12 48v7M26 48v7M40 48v7M52 48v5" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
        <text x="29" y="-10" text-anchor="middle" font-family="'Press Start 2P'" font-size="11" fill="#fff">${lab}</text></g>`;
    POP.arcade = {
      surface: "#05050f", fg: Y, subColor: "rgba(214,222,255,.86)", lockColor: "#fff", headClass: "ph-pixel", scrim: "rgba(5,5,15,.92)",
      kicker: "1 PLAYER · FREE TO START", head: "Eat the duplicates.", short: "Eat the duplicates.", sub: "Namzilabs matches every customer across your tools and counts them once.", subShort: "Every customer, counted once.",
      bg(W, H) {
        // a maze on a grid: rounded wall blocks in cells, pellets down the corridors between them
        seed = 3;
        const g = Math.max(46, Math.round(H / 5.5)), m = g * 0.22;
        let walls = "", pel = "";
        for (let y = 0; y < H; y += g) for (let x = 0; x < W; x += g) {
          if (rnd() < 0.42) { const w = (rnd() < 0.35 ? 2 : 1) * g - 2 * m, h = g - 2 * m; walls += `<rect x="${f(x + m)}" y="${f(y + m)}" width="${f(w)}" height="${f(h)}" rx="${f(m * 0.9)}" fill="none" stroke="${BLUE}" stroke-width="${f(Math.max(3, g * 0.08))}"/><rect x="${f(x + m)}" y="${f(y + m)}" width="${f(w)}" height="${f(h)}" rx="${f(m * 0.9)}" fill="none" stroke="#05050f" stroke-width="${f(Math.max(1, g * 0.028))}"/>`; }
          else if (rnd() < 0.6) pel += `<rect x="${f(x - 2.5)}" y="${f(y + g / 2 - 2.5)}" width="5" height="5" fill="#ffd9c2"/>`;
        }
        return svg(W, H, `<defs><radialGradient id="arcvig" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".65"/></radialGradient></defs><rect width="${W}" height="${H}" fill="#05050f"/><g opacity=".42">${walls}${pel}</g><rect width="${W}" height="${H}" fill="url(#arcvig)"/>`);
      },
      art(box) {
        const W = 720, H = 440;
        let pel = "";
        for (let x = 380; x <= 700; x += 30) if (![420, 540, 630].some((b) => Math.abs(x - b - 28) < 34)) pel += `<rect x="${x - 5}" y="245" width="10" height="10" fill="#ffd9c2"/>`;
        for (let x = 40; x <= 680; x += 30) pel += `<rect x="${x - 4}" y="84" width="8" height="8" fill="#ffd9c2"/><rect x="${x - 4}" y="398" width="8" height="8" fill="#ffd9c2"/>`;
        const body = `<defs><filter id="arcglow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <filter id="arcglow2" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
          <text x="20" y="30" font-family="'Press Start 2P'" font-size="15" fill="#ff4b3e">1UP</text><text x="78" y="30" font-family="'Press Start 2P'" font-size="15" fill="#fff">00061</text>
          <text x="${W / 2 + 60}" y="30" text-anchor="middle" font-family="'Press Start 2P'" font-size="15" fill="#fff">HIGH SCORE: TRUE NUMBERS</text>
          <g filter="url(#arcglow2)">${wall(8, 50, W - 16, H - 58, 22)}${wall(52, 118, 616, 30, 15)}${wall(52, 346, 616, 30, 15)}</g>
          ${pel}
          <rect x="${W - 60}" y="76" width="22" height="22" rx="11" fill="#ffd9c2" filter="url(#arcglow)"/>
          ${dotRing(247, 250, 74, 16, 9)}${chomper(178, 250, 74, 26)}
          ${bug(418, 226, "DUPE", "#e5487a")}${bug(528, 236, "TEST $1", "#f08a24")}${bug(626, 218, "#REF!", "#e2352b")}`;
        return place(box, W, H, svg(W, H, body));
      },
    };
  }

  /* ── 2 · platformer: a pixel level ─────────────────────────────────────── */
  {
    const SKY = "#6b9cff";
    const cloud = (x, y, s) => { const u = 8 * s; return `<g transform="translate(${f(x)} ${f(y)})" shape-rendering="crispEdges">${[[2, 0, 4, 1], [1, 1, 7, 1], [0, 2, 10, 2], [1, 4, 8, 1]].map(([a, b, w, h]) => `<rect x="${f(a * u)}" y="${f(b * u)}" width="${f(w * u)}" height="${f(h * u)}" fill="#fff"/>`).join("")}<rect x="${f(1 * u)}" y="${f(5 * u)}" width="${f(8 * u)}" height="${f(0.5 * u)}" fill="#c8dcff"/></g>`; };
    const hill = (x, base, w, h) => `<path d="M${f(x)} ${f(base)}Q${f(x + w / 2)} ${f(base - h * 2)} ${f(x + w)} ${f(base)}Z" fill="#3fbf55" stroke="#1d7a2e" stroke-width="4"/><circle cx="${f(x + w * 0.38)}" cy="${f(base - h * 0.5)}" r="${f(h * 0.08)}" fill="#1d7a2e"/><circle cx="${f(x + w * 0.58)}" cy="${f(base - h * 0.7)}" r="${f(h * 0.08)}" fill="#1d7a2e"/>`;
    const bricks = (W, y, h, t) => { let s = `<rect x="0" y="${f(y)}" width="${W}" height="${f(h)}" fill="#c96a32"/>`; for (let r = 0; r * t < h; r++) { s += `<rect x="0" y="${f(y + r * t)}" width="${W}" height="2.5" fill="#6e2d0c"/>`; for (let x = (r % 2) * t; x < W; x += t * 2) s += `<rect x="${f(x)}" y="${f(y + r * t)}" width="2.5" height="${t}" fill="#6e2d0c"/>`; s += `<rect x="0" y="${f(y + r * t + 2.5)}" width="${W}" height="2" fill="#f0a068" opacity=".6"/>`; } return s; };
    const blockSvg = (x, y, s) => `<g transform="translate(${x} ${y})"><rect width="${s}" height="${s}" fill="#e39a2b" stroke="#5a2a06" stroke-width="4"/><rect x="4" y="4" width="${s - 8}" height="4" fill="#ffd27a"/><rect x="4" y="4" width="4" height="${s - 8}" fill="#ffd27a"/><rect x="${s - 8}" y="8" width="4" height="${s - 12}" fill="#a85e10"/><rect x="8" y="${s - 8}" width="${s - 12}" height="4" fill="#a85e10"/>${[[7, 7], [s - 11, 7], [7, s - 11], [s - 11, s - 11]].map(([a, b]) => `<rect x="${a}" y="${b}" width="4" height="4" fill="#5a2a06"/>`).join("")}</g>`;
    POP.platformer = {
      surface: SKY, fg: "#fff", subColor: "#0d1b4a", lockColor: "#0d1b4a", headClass: "ph-dialog", ground: true,
      // the dialog box carries the joke and the answer: the second line is the pitch, in yellow
      kicker: "", head: `Thank you! But your revenue is in another tab.<span class="dl2">Not anymore: Namzilabs puts all your data in one place.</span>`,
      short: `Your revenue's in another tab?<span class="dl2">Not anymore: it's all in one place.</span>`,
      sub: "Stripe, your CRM, your calls and forms, cross-referenced. Any metric, the true numbers.", subShort: "", subSizes: ["facebook", "facebook-group"],
      bg(W, H, pid) {
        seed = 9;
        const g = POP.platformer.groundH(H, pid), B = band(H, pid), top = H - g;
        let s = `<rect width="${W}" height="${H}" fill="${SKY}"/>`;
        const n = Math.max(3, Math.round(W / 420)), rows = pid === "youtube" ? 2 : 1;
        for (let r = 0; r < rows; r++) for (let i = 0; i < n; i++) s += cloud((i + 0.2 + rnd() * 0.5) * (W / n), (r ? B.top : pid === "youtube" ? H * 0.06 : 0) + B.h * (0.08 + rnd() * 0.22), Math.max(1.2, B.h / 260) * (0.8 + rnd() * 0.4));
        for (let i = 0; i < Math.round(W / 500) + 1; i++) { const w = Math.max(160, B.h * 0.9) * (0.7 + rnd() * 0.6); s += hill(i * (W / (Math.round(W / 500) + 1)) + rnd() * 80 - 40, top, w, w * 0.22); }
        s += bricks(W, top, g, Math.max(13, Math.round(B.h * 0.05)));
        return svg(W, H, s);
      },
      groundH: (H, pid) => (pid === "youtube" ? H - YT.floor : Math.max(26, Math.round(H * 0.1))),
      art(box) {
        // Namzi head-butts a row of app blocks; each tool pops out and flies down the pipe into one place
        const W = 620, H = 400, bs = 64, bx = 14, by = 112, hit = 2;
        const row = [["stripe", "used"], ["calendly", "used"], ["close", "hit"], ["shopify"], ["gsheets"]];
        const hx = bx + hit * bs + bs / 2;
        const P0 = [hx, 42], C = [400, -70], P1 = [530, 232];
        const q = (t) => [0, 1].map((k) => (1 - t) ** 2 * P0[k] + 2 * (1 - t) * t * C[k] + t * t * P1[k]);
        let dots = "";
        for (let t = 0.06; t < 0.97; t += 0.036) { const [x, y] = q(t); dots += `<rect x="${f(x - 3)}" y="${f(y - 3)}" width="6" height="6" fill="#fff"/>`; }
        const used = (x, y, s) => `<g transform="translate(${x} ${y})"><rect width="${s}" height="${s}" fill="#9a5424" stroke="#3a1a04" stroke-width="4"/>${[[7, 7], [s - 11, 7], [7, s - 11], [s - 11, s - 11]].map(([a, b]) => `<rect x="${a}" y="${b}" width="4" height="4" fill="#3a1a04"/>`).join("")}</g>`;
        const svgPart = row.map(([, st], i) => (st === "used" ? used : blockSvg)(bx + i * bs, by - (st === "hit" ? 12 : 0), bs)).join("") +
          `<path d="M${hx - 38} ${by - 30}l-10-10M${hx} ${by - 36}v-14M${hx + 38} ${by - 30}l10-10" stroke="#fff" stroke-width="5"/>${dots}
          <g><rect x="478" y="280" width="104" height="120" fill="#2f5fd8" stroke="#0d1b4a" stroke-width="4"/><rect x="488" y="286" width="14" height="112" fill="#86a9ff"/><rect x="466" y="240" width="128" height="42" fill="#2f5fd8" stroke="#0d1b4a" stroke-width="4"/><rect x="474" y="246" width="16" height="30" fill="#86a9ff"/><rect x="470" y="236" width="120" height="6" fill="#0d1b4a" opacity=".35"/></g>
          <text x="530" y="384" text-anchor="middle" font-family="'Press Start 2P'" font-size="11" fill="#fff" stroke="#0d1b4a" stroke-width="4" paint-order="stroke">ONE PLACE</text>
          <text x="${hx + 34}" y="30" font-family="'Press Start 2P'" font-size="15" fill="#fff" stroke="#0d1b4a" stroke-width="4" paint-order="stroke">+1</text>`;
        // app tiles: in the blocks still waiting, popping out of the one being hit, and in flight
        const tile = (t, cx, cy, sz, rot = 0, edge = "#0d1b4a") => abs(cx - sz / 2, cy - sz / 2, sz, sz, `<div style="width:100%;height:100%;background:#fff;border-radius:${f(sz * 0.2)}px;box-shadow:0 0 0 3px ${edge}${edge === "#0d1b4a" ? ", 4px 4px 0 3px #0d1b4a" : ""};display:grid;place-items:center;transform:rotate(${rot}deg)">${mark(t, sz * 0.66)}</div>`);
        const htmlPart = row.map(([t, st], i) => (st ? "" : tile(t, bx + i * bs + bs / 2, by + bs / 2, bs * 0.7, 0, "#5a2a06"))).join("") +
          tile("close", hx, 26, 50, -6) + tile("calendly", ...q(0.45), 46, 8) + tile("stripe", ...q(0.76), 46, 14) +
          abs(506, 300, 48, 48, MARK("#fff", 5.2)) + pix(namziSvg({ mood: "joy", pose: "up", fx: [] }), 34, 150, 160, `left:${hx - 75}px;top:${by - 12 + bs + 2}px`);
        return fit(box, W, H, svg(W, H, svgPart) + htmlPart, H);
      },
      hud: (W, H, pid) => pid === "linkedin-company" ? "" : `<div style="position:absolute;left:${pid === "youtube" ? 507 : 0}px;right:${pid === "youtube" ? 507 : 0}px;top:${f(pid === "youtube" ? YT.top + 14 : Math.max(10, H * 0.035))}px;display:flex;justify-content:space-around;font-family:'Press Start 2P';font-size:${f(Math.max(9, Math.min(20, band(H, pid).h * 0.03)))}px;color:#fff;text-shadow:2px 2px 0 #0d1b4a;white-space:nowrap"><span>NAMZI 000064</span><span>◎×33 TOOLS</span><span>LEVEL 1-1</span><span>TIME 907</span></div>`,
    };
  }

  /* ── 3 · versus: a fighting-game VS screen ─────────────────────────────── */
  {
    POP.versus = {
      surface: "#1a0f3a", fg: "#fff", subColor: "rgba(255,236,214,.9)", lockColor: "#fff", headClass: "ph-fight", scrim: "rgba(20,8,40,.55)",
      kicker: "ROUND 1 · FIGHT!", head: "Stripe vs your CRM.", short: "Stripe vs your CRM.", sub: "64 customers vs 71. Namzilabs settles it: 61, cross-referenced and counted once.", subShort: "Namzilabs settles it: 61, counted once.",
      bg(W, H, pid, A) {
        seed = 4;
        const cut = A ? A.x + A.w / 2 : W * 0.52; // the red side and the blue side meet at the VS
        let lines = "";
        for (let i = 0; i < 60; i++) { const y = rnd() * H, x = rnd() * W, l = 60 + rnd() * 240; lines += `<rect x="${f(x)}" y="${f(y)}" width="${f(l)}" height="${f(1 + rnd() * 3)}" fill="#fff" opacity="${f(0.05 + rnd() * 0.12)}"/>`; }
        return svg(W, H, `<defs><linearGradient id="vsL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a2e"/><stop offset=".6" stop-color="#e2311d"/><stop offset="1" stop-color="#8e0f14"/></linearGradient><linearGradient id="vsR" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f7dff"/><stop offset=".6" stop-color="#2f4fd8"/><stop offset="1" stop-color="#151f6b"/></linearGradient>
            <pattern id="half" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="2.6" fill="#000" opacity=".18"/></pattern></defs>
          <rect width="${W}" height="${H}" fill="url(#vsR)"/><path d="M0 0H${f(cut + H * 0.18)}L${f(cut - H * 0.18)} ${H}H0Z" fill="url(#vsL)"/><rect width="${W}" height="${H}" fill="url(#half)"/>${lines}
          <path d="M${f(cut + H * 0.18)} 0L${f(cut - H * 0.02)} ${f(H * 0.46)}L${f(cut + H * 0.06)} ${f(H * 0.5)}L${f(cut - H * 0.18)} ${H}" fill="none" stroke="#fff6c2" stroke-width="${f(Math.max(3, H * 0.012))}" opacity=".9"/>`);
      },
      art(box) {
        const W = 720, H = 440;
        const bar = (x, dir, name, n, lost) => `<g transform="translate(${x} 22)"><rect width="300" height="30" fill="#2a0d0d" stroke="#fff" stroke-width="3"/><rect x="${dir < 0 ? 3 : 3 + 294 * lost}" y="3" width="${294 * (1 - lost)}" height="24" fill="#ffd23f"/><rect x="${dir < 0 ? 3 + 294 * (1 - lost) : 3}" y="3" width="${294 * lost}" height="24" fill="#e2311d"/>
            <text x="${dir < 0 ? 0 : 300}" y="62" text-anchor="${dir < 0 ? "start" : "end"}" font-family="Inter" font-weight="900" font-style="italic" font-size="22" fill="#fff" stroke="#14141c" stroke-width="5" paint-order="stroke" letter-spacing="1">${name}</text>
            <text x="${dir < 0 ? 300 : 0}" y="62" text-anchor="${dir < 0 ? "end" : "start"}" font-family="Inter" font-weight="900" font-size="20" fill="#ffd23f" stroke="#14141c" stroke-width="5" paint-order="stroke">${n}</text></g>`;
        const card = (x, rot, tool, label, n, tint) => abs(x, 104, 220, 260, `<div style="width:100%;height:100%;transform:rotate(${rot}deg);background:linear-gradient(160deg, ${tint}, #14141c 85%);border:4px solid #fff;border-radius:22px;box-shadow:0 26px 50px -20px rgba(0,0,0,.7);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px">
            <div style="width:120px;height:120px;border-radius:28px;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 5px rgba(255,255,255,.25)">${mark(tool, 84)}</div>
            <div style="font:italic 900 26px Inter;letter-spacing:.5px;color:#fff">${label}</div><div style="font:800 17px Inter;color:#ffd23f">${n} customers</div></div>`);
        const vs = `<text x="360" y="270" text-anchor="middle" font-family="Inter" font-weight="900" font-style="italic" font-size="118" fill="url(#vsGold)" stroke="#14141c" stroke-width="10" paint-order="stroke" filter="url(#vsGlow)" letter-spacing="-4">VS</text>`;
        const body = svg(W, H, `<defs><linearGradient id="vsGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6c2"/><stop offset=".5" stop-color="#ffc93a"/><stop offset="1" stop-color="#e2641d"/></linearGradient><filter id="vsGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10" result="b"/><feFlood flood-color="#ff7a2e" flood-opacity=".9"/><feComposite in2="b" operator="in" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            ${bar(10, -1, "STRIPE", 64, 0.22)}${bar(410, 1, "YOUR CRM", 71, 0.14)}<text x="360" y="48" text-anchor="middle" font-family="'Press Start 2P'" font-size="26" fill="#fff" stroke="#14141c" stroke-width="6" paint-order="stroke">99</text>`) +
          card(40, -5, "stripe", "STRIPE", 64, "#ff7a2e") + card(460, 5, "close", "YOUR CRM", 71, "#4f7dff") + svg(W, H, vs) +
          abs(236, 380, 248, 44, `<div style="height:100%;border-radius:999px;background:#fff;color:#14141c;display:flex;align-items:center;justify-content:center;gap:8px;font:800 17px Inter;box-shadow:0 12px 26px -12px rgba(0,0,0,.6)"><span style="width:26px;height:26px">${MARK("#2f5fd8", 6)}</span>REFEREE: 61</div>`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 4 · meeting: an emergency meeting ─────────────────────────────────── */
  {
    POP.meeting = {
      surface: "#0a0f2c", fg: "#fff", subColor: "rgba(214,222,255,.82)", lockColor: "#fff", headClass: "ph-inter", kickerClass: "pk-alarm", kickerScale: 2.3,
      kicker: "EMERGENCY MEETING", head: "Who's double counting your customers?", short: "Who's double counting?", sub: "3 test payments were the impostor. Namzilabs finds them and counts everyone once.", subShort: "3 test payments were the impostor.",
      bg(W, H) {
        seed = 12;
        let st = "";
        for (let i = 0; i < Math.round((W * H) / 3500); i++) { const r = rnd() < 0.92 ? 0.6 + rnd() * 1.2 : 1.8 + rnd() * 1.6; st += `<circle cx="${f(rnd() * W)}" cy="${f(rnd() * H)}" r="${f(r)}" fill="#fff" opacity="${f(0.3 + rnd() * 0.7)}"/>`; }
        return svg(W, H, `<defs><radialGradient id="mtg" cx=".85" cy="1.1" r=".9"><stop offset="0" stop-color="#3a2a8a" stop-opacity=".8"/><stop offset="1" stop-color="#0a0f2c" stop-opacity="0"/></radialGradient></defs><rect width="${W}" height="${H}" fill="#0a0f2c"/><rect width="${W}" height="${H}" fill="url(#mtg)"/>${st}
          <circle cx="${f(W * 0.94)}" cy="${f(H * 1.25)}" r="${f(H * 0.62)}" fill="#1b2a6b"/><circle cx="${f(W * 0.94)}" cy="${f(H * 1.25)}" r="${f(H * 0.62)}" fill="none" stroke="#6f8cff" stroke-width="${f(Math.max(2, H * 0.008))}" opacity=".55"/>`);
      },
      art(box) {
        const W = 640, H = 440;
        const row = (i, tool, name, votes, tag) => abs(34 + (i % 2) * 290, 96 + Math.floor(i / 2) * 104, 272, 88, `<div style="position:relative;height:100%;background:${tag ? "#ffe3de" : "#fff"};border:3px solid ${tag ? "#f0553d" : "#14141c"};border-radius:14px;display:flex;align-items:center;gap:12px;padding:0 12px;box-shadow:0 4px 0 rgba(20,20,28,.5)">
            <div style="width:52px;height:52px;border-radius:12px;background:#eef1f8;display:grid;place-items:center;flex:none">${tool ? mark(tool, 34) : `<svg viewBox="0 0 24 24" width="34" height="34"><rect x="5" y="2" width="14" height="20" rx="2" fill="#fff" stroke="#14141c" stroke-width="1.6"/><path d="M8 7H16M8 11H16M8 15H13" stroke="#f0553d" stroke-width="1.6"/></svg>`}</div>
            <div style="flex:1;min-width:0"><div style="font:800 18px Inter;color:#14141c;white-space:nowrap">${name}</div><div style="display:flex;gap:4px;margin-top:6px">${Array.from({ length: votes }, (_, k) => `<span style="width:14px;height:14px;border-radius:50%;background:${["#f0553d", "#2f5fd8", "#22c55e", "#f5a524"][k % 4]};border:2px solid #14141c"></span>`).join("")}</div></div>
            ${tag ? `<div style="position:absolute;right:-10px;top:-14px;font:900 13px Inter;color:#fff;background:#f0553d;border:2px solid #14141c;border-radius:8px;padding:4px 8px;transform:rotate(6deg)">IMPOSTOR</div>` : ""}</div>`);
        const body = abs(0, 0, W, H, `<div style="position:absolute;inset:0;background:#c9d4ef;border:5px solid #14141c;border-radius:28px;box-shadow:0 30px 60px -30px rgba(0,0,0,.8), inset 0 0 0 8px #aebbe0"></div>
            <div style="position:absolute;left:34px;right:34px;top:26px;height:52px;background:#14141c;border-radius:12px;display:flex;align-items:center;justify-content:center;font:900 22px Inter;letter-spacing:.5px;color:#fff">WHO'S DOUBLE COUNTING?</div>`) +
          row(0, "stripe", "Stripe", 2) + row(1, "close", "Your CRM", 1) + row(2, "gsheets", "The spreadsheet", 3) + row(3, null, "3 test payments", 4, true) +
          abs(34, 322, 572, 90, `<div style="display:flex;justify-content:space-between;align-items:center;height:100%"><div style="font:800 16px Inter;color:#14141c;background:#fff;border:3px solid #14141c;border-radius:12px;padding:10px 16px">SKIP VOTE</div><div style="font:700 15px Inter;color:#14141c;opacity:.7">Voting ends in: 9s</div></div>`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 5 · crafting: a crafting grid ─────────────────────────────────────── */
  {
    const px = (x, y, w, h, c) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${c}"/>`;
    POP.crafting = {
      surface: "#7ec3ff", fg: "#fff", subColor: "#1c2b12", lockColor: "#1c2b12", headClass: "ph-pixel-shadow", ground: true, scrim: "rgba(255,255,255,.0)",
      kicker: "", head: "Craft any metric.", short: "Craft any metric.", sub: "Stripe revenue ÷ Fathom held calls = $182 per held call. Any tool, any metric.", subShort: "Any tool. Any metric.",
      groundH: (H, pid) => (pid === "youtube" ? H - YT.floor : Math.max(30, Math.round(H * 0.12))),
      bg(W, H, pid) {
        seed = 5;
        const g = POP.crafting.groundH(H, pid), B = band(H, pid), t = Math.max(10, Math.round(B.h * 0.04)), gy = H - g;
        let s = `<defs><linearGradient id="csky" x1="0" y1="0" x2="0" y2="${gy}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5aa8ff"/><stop offset="1" stop-color="#a9dcff"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#csky)"/>`;
        s += px(W * 0.84, B.top + B.h * 0.08, B.h * 0.12, B.h * 0.12, "#fff6a8") + px(W * 0.84 + B.h * 0.02, B.top + B.h * 0.1, B.h * 0.08, B.h * 0.08, "#ffe65c");
        for (let i = 0; i < Math.max(3, Math.round(W / 380)) * (pid === "youtube" ? 2 : 1); i++) { const x = rnd() * W, y = pid === "youtube" ? H * 0.04 + rnd() * (gy - B.h * 0.55) : H * (0.06 + rnd() * 0.3), w = B.h * (0.25 + rnd() * 0.3), h = w * 0.22; s += px(x, y, w, h, "#fff") + px(x + w * 0.15, y - h * 0.6, w * 0.5, h * 0.7, "#fff"); }
        // grass-topped blocks, then dirt, then (where there's room) stone with the odd bit of gold ore
        for (let x = 0; x < W; x += t) for (let r = 0, y = gy; y < H; y += t, r++) {
          const c = r === 0 ? ["#5cbf3a", "#4aa82f", "#6fd04a"][Math.floor(rnd() * 3)] : r < 4 ? ["#8a5a35", "#7a4d2c", "#9a6a42", "#6d4326"][Math.floor(rnd() * 4)] : ["#7d7d7d", "#707070", "#8a8a8a", "#666"][Math.floor(rnd() * 4)];
          s += px(x, y, t, t, c);
          if (r >= 4 && rnd() < 0.05) s += px(x + t * 0.25, y + t * 0.25, t * 0.2, t * 0.2, "#ffd23f") + px(x + t * 0.55, y + t * 0.5, t * 0.2, t * 0.2, "#ffd23f");
        }
        return svg(W, H, s, "shape-rendering:crispEdges");
      },
      art(box) {
        const W = 700, H = 400, S = 74;
        const bevel = (x, y, w, h, out = true) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${out ? "#c6c6c6" : "#8b8b8b"}"/><path d="M${x} ${y + h}V${y}H${x + w}" fill="none" stroke="${out ? "#fff" : "#373737"}" stroke-width="5"/><path d="M${x + w} ${y}V${y + h}H${x}" fill="none" stroke="${out ? "#555" : "#fff"}" stroke-width="5"/>`;
        let slots = "";
        for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) slots += bevel(60 + c * S, 90 + r * S, S - 4, S - 4, false);
        const item = (c, r, tool, n) => abs(60 + c * S + 6, 90 + r * S + 4, S - 16, S - 16, `<div style="width:100%;height:100%;display:grid;place-items:center">${mark(tool, S - 30)}</div><div style="position:absolute;right:-2px;bottom:-6px;font:400 11px 'Press Start 2P';color:#fff;text-shadow:2px 2px 0 #3f3f3f">${n}</div>`);
        const body = svg(W, H, `${bevel(10, 10, W - 20, H - 20, true)}<text x="40" y="62" font-family="'Press Start 2P'" font-size="18" fill="#3f3f3f">Crafting</text>${slots}
            <path d="M318 196h34v-20l34 34-34 34v-20h-34z" fill="#8b8b8b" stroke="#3f3f3f" stroke-width="4"/>${bevel(418, 150, 110, 110, false)}`, "shape-rendering:crispEdges") +
          item(1, 0, "stripe", "$11k") + item(1, 1, "fathom", "61") +
          abs(436, 168, 74, 74, `<svg viewBox="0 0 16 16" width="74" height="74" shape-rendering="crispEdges"><rect x="3" y="2" width="10" height="12" fill="#ffd23f"/><rect x="2" y="3" width="12" height="10" fill="#ffd23f"/><rect x="4" y="3" width="3" height="2" fill="#fff6c2"/><rect x="3" y="12" width="10" height="1" fill="#c98a00"/><rect x="12" y="4" width="1" height="8" fill="#c98a00"/><text x="8" y="10.6" text-anchor="middle" font-family="Inter" font-weight="900" font-size="5.4" fill="#7a4a00">$182</text></svg>`) +
          abs(360, 280, 300, 90, `<div style="background:#100010;border:3px solid #2d0a5e;box-shadow:inset 0 0 0 2px #5a1fc0;padding:12px 14px;font:400 14px/1.6 'Press Start 2P';color:#fff">Revenue per<br>held call<div style="color:#8f8f8f;font-size:11px;margin-top:4px">$182 · this month</div></div>`);
        return fit(box, W, H, body, H);
      },
    };
  }

  /* ── 6 · redpill: the pill choice ──────────────────────────────────────── */
  {
    POP.redpill = {
      surface: "#020604", fg: "#eafff0", subColor: "rgba(170,255,200,.82)", lockColor: "#b8ffcf", headClass: "ph-inter-glow", scrim: "rgba(2,6,4,.9)",
      kicker: "YOUR CHOICE", head: "Take the red pill. See your real numbers.", short: "Take the red pill.", sub: "Blue pill: keep guessing across 14 tabs. Red pill: every tool in one place, cross-referenced.", subShort: "See your real numbers.",
      bg(W, H) {
        seed = 8;
        const cw = Math.min(26, Math.max(14, Math.round(H / 26))), chars = "0123456789$%.,+-=<>".split(""), words = ["71%", "$46,180", "61", "8m39s", "$182", "412", "263", "64"];
        let s = `<rect width="${W}" height="${H}" fill="#020604"/>`;
        for (let x = cw / 2; x < W; x += cw) {
          const len = 6 + Math.floor(rnd() * 22), start = rnd() * H * 1.2 - H * 0.2;
          const word = rnd() < 0.25 ? words[Math.floor(rnd() * words.length)] : null;
          for (let k = 0; k < len; k++) {
            const y = start + k * cw * 1.1; if (y < -cw || y > H + cw) continue;
            const ch = word && k < word.length ? word[k] : chars[Math.floor(rnd() * chars.length)];
            const head = k === len - 1, a = head ? 1 : 0.15 + (k / len) * 0.7;
            s += `<text x="${f(x)}" y="${f(y)}" text-anchor="middle" font-family="ui-monospace, 'SFMono-Regular', Menlo, monospace" font-weight="700" font-size="${f(cw * 0.95)}" fill="${head ? "#e8ffe9" : "#27e36b"}" opacity="${f(a)}">${ch}</text>`;
          }
        }
        return svg(W, H, s);
      },
      art(box) {
        const W = 640, H = 440;
        const pill = (cx, cy, rot, c1, c2, glow) => `<g transform="translate(${cx} ${cy}) rotate(${rot})"${glow ? ` filter="url(#pillGlow)"` : ""}><rect x="-86" y="-36" width="172" height="72" rx="36" fill="url(#${c1})"/><path d="M-86 0V0a36 36 0 0 1 36-36H0V36H-50a36 36 0 0 1-36-36Z" fill="url(#${c2})"/><rect x="-66" y="-26" width="120" height="14" rx="7" fill="#fff" opacity=".55"/></g>`;
        const hand = (cx, flip) => `<g transform="translate(${cx} 300) scale(${flip ? -1 : 1} 1)"><path d="M-120 60C-120 10-96-10-60-14C-30-18 10-16 40-10C70-4 100 6 118 22C128 32 122 44 108 44C80 44 52 38 30 36C10 34-10 40-20 60Z" fill="#161816" stroke="#3b423c" stroke-width="3"/><path d="M-90 20C-60 8-20 6 20 10" fill="none" stroke="#4c554d" stroke-width="3" opacity=".7"/></g>`;
        const body = svg(W, H, `<defs><linearGradient id="pRed" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff6a5a"/><stop offset=".55" stop-color="#e2190f"/><stop offset="1" stop-color="#7a0600"/></linearGradient><linearGradient id="pRed2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8f82"/><stop offset=".55" stop-color="#f0321f"/><stop offset="1" stop-color="#8e0a02"/></linearGradient>
              <linearGradient id="pBlue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fb3ff"/><stop offset=".55" stop-color="#2f5fd8"/><stop offset="1" stop-color="#0d1f6b"/></linearGradient><linearGradient id="pBlue2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b3ccff"/><stop offset=".55" stop-color="#4c7dff"/><stop offset="1" stop-color="#16308f"/></linearGradient>
              <radialGradient id="pHaloB"><stop offset="0" stop-color="#4c7dff" stop-opacity=".35"/><stop offset="1" stop-color="#4c7dff" stop-opacity="0"/></radialGradient><radialGradient id="pHaloR"><stop offset="0" stop-color="#ff2a1a" stop-opacity=".45"/><stop offset="1" stop-color="#ff2a1a" stop-opacity="0"/></radialGradient>
              <filter id="pillGlow" x="-60%" y="-80%" width="220%" height="260%"><feGaussianBlur stdDeviation="14" result="b"/><feFlood flood-color="#ff2a1a" flood-opacity=".75"/><feComposite in2="b" operator="in" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <radialGradient id="pDark" cx=".5" cy=".5" r=".5"><stop offset=".55" stop-color="#020604" stop-opacity=".92"/><stop offset="1" stop-color="#020604" stop-opacity="0"/></radialGradient>
            <ellipse cx="320" cy="210" rx="360" ry="220" fill="url(#pDark)"/>
            <ellipse cx="170" cy="330" rx="120" ry="16" fill="#27e36b" opacity=".12"/><ellipse cx="470" cy="330" rx="120" ry="16" fill="#ff2a1a" opacity=".16"/>
            <circle cx="170" cy="258" r="120" fill="url(#pHaloB)"/><circle cx="470" cy="258" r="130" fill="url(#pHaloR)"/>
            ${pill(170, 258, -16, "pBlue", "pBlue2", false)}${pill(470, 258, 16, "pRed", "pRed2", true)}
            <text x="170" y="112" text-anchor="middle" font-family="Inter" font-weight="900" font-size="20" letter-spacing="3" fill="#8fb3ff">BLUE PILL</text><text x="170" y="142" text-anchor="middle" font-family="Inter" font-weight="600" font-size="19" fill="#cfe0ff">Keep guessing</text><text x="170" y="166" text-anchor="middle" font-family="Inter" font-weight="600" font-size="19" fill="#cfe0ff">in 14 tabs</text>
            <text x="470" y="112" text-anchor="middle" font-family="Inter" font-weight="900" font-size="20" letter-spacing="3" fill="#ff8f82">RED PILL</text><text x="470" y="142" text-anchor="middle" font-family="Inter" font-weight="700" font-size="19" fill="#fff">See the true</text><text x="470" y="166" text-anchor="middle" font-family="Inter" font-weight="700" font-size="19" fill="#fff">numbers</text>`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 7 · crawl: an opening crawl in space ──────────────────────────────── */
  {
    const crawl = (w, big) => `<div style="position:absolute;inset:0;perspective:${big ? 340 : 300}px;perspective-origin:50% 0%;overflow:hidden;-webkit-mask-image:linear-gradient(to bottom, transparent 0%, #000 24%, #000 92%, transparent 100%);mask-image:linear-gradient(to bottom, transparent 0%, #000 24%, #000 92%, transparent 100%)">
        <div style="position:absolute;left:10%;right:10%;bottom:-4%;transform:rotateX(52deg);transform-origin:50% 100%;color:#ffd84d;font-family:Inter;font-weight:700;text-align:justify;text-align-last:center;font-size:${f(w * 0.052)}px;line-height:1.3">
          <div style="text-align:center;font-size:1.02em;letter-spacing:.06em">EPISODE IV</div><div style="text-align:center;font-weight:900;font-size:1.55em;letter-spacing:.04em;margin:.18em 0 .5em">A NEW DASHBOARD</div>
          ${big ? "It is a period of data chaos. Founders, striking from fourteen open tabs, have won their first victory against the evil DOUBLE COUNT. During the battle, rebel analysts connected all 33 tools into ONE PLACE, a dashboard with enough power to show the true numbers of an entire funnel…" : "Rebel founders have connected all 33 tools into ONE PLACE, and the evil DOUBLE COUNT is no more…"}</div></div>`;
    POP.crawl = {
      surface: "#000", fg: "#58c8f0", subColor: "rgba(255,216,77,.9)", lockColor: "#ffd84d", headClass: "ph-intro",
      kicker: "", head: "A long time ago, in a spreadsheet far, far away…", short: "A long time ago, in a spreadsheet far, far away…", sub: "Episode IV: a new dashboard. All your data, one place.", subShort: "",
      bg(W, H) {
        seed = 21;
        let st = "";
        for (let i = 0; i < Math.round((W * H) / 2600); i++) st += `<circle cx="${f(rnd() * W)}" cy="${f(rnd() * H)}" r="${f(rnd() < 0.95 ? 0.5 + rnd() : 1.4 + rnd() * 1.2)}" fill="#fff" opacity="${f(0.35 + rnd() * 0.65)}"/>`;
        return svg(W, H, `<rect width="${W}" height="${H}" fill="#000"/>${st}`);
      },
      art(box, pid) { const W = 700, H = 440; return place(box, W, H, crawl(W, pid !== "linkedin-company")); },
    };
  }

  /* ── 8 · speed: a jet at sunset, and the need for speed to lead ─────────── */
  {
    POP.speed = {
      surface: "#2a0f3a", fg: "#fff", subColor: "rgba(255,230,210,.9)", lockColor: "#fff", headClass: "ph-speed", scrim: "rgba(30,6,40,.4)",
      kickerClass: "pk-serif", kickerScale: 2.5, kickColor: "#ffe0b8",
      kicker: "I feel the need…", head: "The need for speed to lead.", short: "The need for speed to lead.", sub: "Namzilabs times every lead from form to first call, across your tools.", subShort: "Form to first call, timed.",
      bg(W, H, pid) {
        seed = 6;
        const B = band(H, pid), hz = pid === "youtube" ? YT.floor : H * 0.8;
        let m = `M0 ${f(hz)}`;
        for (let x = 0; x <= W + 40; x += 40) m += `L${f(x)} ${f(hz - (Math.sin(x / 90) * 0.5 + 0.5) * B.h * 0.05 - rnd() * B.h * 0.03)}`;
        m += `L${W} ${H}L0 ${H}Z`;
        const jet = (x, y, s, r) => `<g transform="translate(${f(x)} ${f(y)}) rotate(${r}) scale(${f(s)})"><path d="M0 0L60 -6L96 -4L104 0L96 4L60 6Z M40 -4L70 -30L80 -30L64 -4Z M40 4L70 30L80 30L64 4Z M8 -2L-6 -16L2 -16L20 -2Z M8 2L-6 16L2 16L20 2Z" fill="#170a1c"/></g>`;
        return svg(W, H, `<defs><linearGradient id="spSky" x1="0" y1="${B.top}" x2="0" y2="${f(B.top + (hz - B.top) / 0.8)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2a0f3a"/><stop offset=".45" stop-color="#9c2a56"/><stop offset=".75" stop-color="#ff7a3a"/><stop offset="1" stop-color="#ffc26a"/></linearGradient><radialGradient id="spSun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3c8"/><stop offset=".45" stop-color="#ffd27a"/><stop offset="1" stop-color="#ff9a4a" stop-opacity="0"/></radialGradient></defs>
          <rect width="${W}" height="${H}" fill="url(#spSky)"/><circle cx="${f(W * 0.72)}" cy="${f(hz - B.h * 0.02)}" r="${f(B.h * 0.42)}" fill="url(#spSun)"/><circle cx="${f(W * 0.72)}" cy="${f(hz - B.h * 0.02)}" r="${f(B.h * 0.16)}" fill="#fff0c0" opacity=".9"/>
          <path d="${m}" fill="#1c0b22"/>
          <path d="M${f(W * 0.08)} ${f(B.top + B.h * 0.3)}C${f(W * 0.3)} ${f(B.top + B.h * 0.2)} ${f(W * 0.5)} ${f(B.top + B.h * 0.26)} ${f(W * 0.78)} ${f(B.top + B.h * 0.12)}" fill="none" stroke="#fff" stroke-width="${f(Math.max(2, B.h * 0.012))}" opacity=".55" stroke-linecap="round"/>
          ${jet(W * 0.78, B.top + B.h * 0.12, Math.max(0.35, B.h / 700), -14)}${jet(W * 0.86, B.top + B.h * 0.2, Math.max(0.28, B.h / 900), -14)}`);
      },
      art(box) {
        const W = 560, H = 440, G = "#8dffb4";
        const body = svg(W, H, `<g fill="none" stroke="${G}" stroke-width="3" opacity=".95" filter="url(#hud)"><defs><filter id="hud" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <circle cx="280" cy="222" r="118"/><circle cx="280" cy="222" r="6" fill="${G}"/><path d="M280 88V124M280 320V356M146 222H182M378 222H414"/>
            <path d="M120 150H200M360 150H440M120 294H200M360 294H440" stroke-dasharray="12 8"/>
            <rect x="300" y="170" width="70" height="44"/><path d="M300 170l-8-8M370 170l8-8M300 214l-8 8M370 214l8 8"/>
            <path d="M70 40H490" stroke-dasharray="2 18"/></g>
          <text x="335" y="198" text-anchor="middle" font-family="'Press Start 2P'" font-size="11" fill="${G}">LEAD</text>
          <rect x="8" y="376" width="212" height="66" rx="8" fill="#12051a" opacity=".66"/><rect x="424" y="376" width="128" height="66" rx="8" fill="#12051a" opacity=".66"/>
          <text x="20" y="400" font-family="'Press Start 2P'" font-size="14" fill="${G}">SPEED TO LEAD</text><text x="20" y="432" font-family="'Press Start 2P'" font-size="24" fill="#fff">8m 39s</text>
          <text x="540" y="400" text-anchor="end" font-family="'Press Start 2P'" font-size="14" fill="${G}">TARGET</text><text x="540" y="432" text-anchor="end" font-family="'Press Start 2P'" font-size="24" fill="#fff">&lt; 5m</text>
          <text x="280" y="30" text-anchor="middle" font-family="'Press Start 2P'" font-size="14" fill="${G}">FORM &gt; FIRST CALL</text>`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 9 · bigger: a shark fin made of a chart ───────────────────────────── */
  {
    POP.bigger = {
      surface: "#062033", fg: "#fff", subColor: "rgba(210,236,255,.9)", lockColor: "#fff", headClass: "ph-inter", scrim: "rgba(4,20,34,.62)",
      kicker: "", head: "You're gonna need a bigger spreadsheet.", short: "You're gonna need a bigger spreadsheet.", sub: "Or one place for all of it: 33 tools, connected and cross-referenced.", subShort: "Or one place for all of it.",
      bg(W, H) {
        seed = 14;
        const sea = H * 0.56;
        let waves = "";
        for (let r = 0; r < 14; r++) { const y = sea + (r + 0.5) * ((H - sea) / 14); let d = `M0 ${f(y)}`; for (let x = 0; x <= W; x += 60) d += `q30 ${f(-4 - r * 0.5)} 60 0`; waves += `<path d="${d}" fill="none" stroke="#9fd6ff" stroke-width="${f(1 + r * 0.12)}" opacity="${f(0.05 + r * 0.012)}"/>`; }
        return svg(W, H, `<defs><linearGradient id="bgSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e2a47"/><stop offset=".7" stop-color="#3a6f95"/><stop offset="1" stop-color="#7fa8c2"/></linearGradient><linearGradient id="bgSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c4a6e"/><stop offset="1" stop-color="#031623"/></linearGradient></defs>
          <rect width="${W}" height="${f(sea)}" fill="url(#bgSky)"/><rect y="${f(sea)}" width="${W}" height="${f(H - sea)}" fill="url(#bgSea)"/>${waves}<rect y="${f(sea - 1)}" width="${W}" height="2" fill="#cfe9ff" opacity=".5"/>`);
      },
      seaY: (H) => H * 0.56,
      art(box) {
        const W = 700, H = 420, sea = 250;
        // the chart runs along the water, then spikes into a fin
        const line = `M20 ${sea - 8}L80 ${sea - 14}L140 ${sea - 6}L200 ${sea - 20}L270 ${sea - 10}L336 ${sea - 22}L372 ${sea - 12}`;
        const fin = `M372 ${sea}C400 ${sea - 60} 432 ${sea - 150} 470 ${sea - 196}C476 ${sea - 150} 492 ${sea - 70} 540 ${sea}Z`;
        let ripple = "";
        for (let i = 1; i <= 3; i++) ripple += `<ellipse cx="456" cy="${sea + 4}" rx="${f(100 + i * 40)}" ry="${f(8 + i * 5)}" fill="none" stroke="#cfe9ff" stroke-width="2.5" opacity="${f(0.5 - i * 0.12)}"/>`;
        const boat = `<g transform="translate(34 ${sea - 18})"><path d="M-6 0H120L100 26H12Z" fill="#6b3f22" stroke="#2b160a" stroke-width="3"/><path d="M52 0V-110" stroke="#2b160a" stroke-width="4"/><rect x="54" y="-104" width="70" height="84" fill="#fff" stroke="#2b160a" stroke-width="3"/>${[0, 1, 2, 3].map((r) => `<path d="M54 ${-104 + (r + 1) * 17}H124" stroke="#9fb4c6" stroke-width="1.5"/>`).join("")}<path d="M77 -104V-20M100 -104V-20" stroke="#9fb4c6" stroke-width="1.5"/><rect x="54" y="-104" width="70" height="17" fill="#1f9d55"/><text x="89" y="-91" text-anchor="middle" font-family="Inter" font-weight="800" font-size="9" fill="#fff">FINAL_v7</text></g>`;
        // under the water, the rest of it: a whole spreadsheet the size of a shark
        const under = `<path d="M262 ${sea + 44}C330 ${sea + 14} 560 ${sea + 8} 648 ${sea + 58}C606 ${sea + 104} 380 ${sea + 128} 262 ${sea + 92}L196 ${sea + 128}L212 ${sea + 70}L186 ${sea + 20}Z" fill="#021320" opacity=".7"/><path d="M262 ${sea + 44}C330 ${sea + 14} 560 ${sea + 8} 648 ${sea + 58}C606 ${sea + 104} 380 ${sea + 128} 262 ${sea + 92}L196 ${sea + 128}L212 ${sea + 70}L186 ${sea + 20}Z" fill="url(#cells)" opacity=".5"/>`;
        const body = svg(W, H, `<defs><linearGradient id="finG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1b2a38"/><stop offset=".55" stop-color="#3a4f63"/><stop offset="1" stop-color="#16222e"/></linearGradient>
              <pattern id="cells" width="26" height="14" patternUnits="userSpaceOnUse"><path d="M26 0V14M0 14H26" fill="none" stroke="#6fb2dd" stroke-width="1.4"/></pattern></defs>
            ${under}${ripple}<path d="${fin}" fill="url(#finG)" stroke="#0b141c" stroke-width="3"/><path d="M470 ${sea - 196}C476 ${sea - 150} 492 ${sea - 70} 540 ${sea}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
            <path d="${line}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M540 ${sea - 8}L600 ${sea - 18}L680 ${sea - 12}" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 14"/>
            ${[[200, "tab 3", 20], [270, "export", 10], [336, "v7", 22]].map(([x, t, d]) => `<circle cx="${x}" cy="${sea - d}" r="6" fill="#fff"/><text x="${x}" y="${sea - d - 18}" text-anchor="middle" font-family="Inter" font-weight="700" font-size="15" fill="#cfe9ff">${t}</text>`).join("")}
            ${boat}<text x="470" y="${sea - 214}" text-anchor="middle" font-family="Inter" font-weight="800" font-size="17" fill="#fff">all your data</text>`);
        return fit(box, W, H, body, sea);
      },
    };
  }

  /* ── 10 · lights: a wall of Christmas lights ───────────────────────────── */
  {
    const LIT = new Set("WHERISTO".split(""));
    const COL = ["#ff4b3e", "#ffd23f", "#3ee07a", "#4fa8ff", "#ff6fcf", "#ff9a2e"];
    POP.lights = {
      surface: "#2b2a1c", fg: "#fff5dc", subColor: "rgba(255,240,210,.86)", lockColor: "#fff5dc", headClass: "ph-inter", scrim: "rgba(20,16,8,.78)",
      kicker: "MONDAY, 9:07", head: "Still asking the walls where your numbers are?", short: "Where are your numbers?", sub: "Right here. Namzilabs puts every tool in one place, with the true numbers.", subShort: "Right here: all in one place.",
      bg(W, H) {
        seed = 17;
        const t = Math.max(60, H / 5);
        let pat = "";
        for (let y = 0; y < H + t; y += t) for (let x = ((y / t) % 2) * (t / 2); x < W + t; x += t) {
          pat += `<g transform="translate(${f(x)} ${f(y)})" opacity=".55"><circle r="${f(t * 0.16)}" fill="#8a6a3a"/><circle r="${f(t * 0.07)}" fill="#c9a060"/>${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="${f(Math.cos((a * Math.PI) / 180) * t * 0.22)}" cy="${f(Math.sin((a * Math.PI) / 180) * t * 0.22)}" rx="${f(t * 0.1)}" ry="${f(t * 0.06)}" transform="rotate(${a} ${f(Math.cos((a * Math.PI) / 180) * t * 0.22)} ${f(Math.sin((a * Math.PI) / 180) * t * 0.22)})" fill="#5d6b3a"/>`).join("")}</g>`;
        }
        return svg(W, H, `<defs><radialGradient id="lvig" cx=".5" cy=".45" r=".8"><stop offset=".4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".7"/></radialGradient><pattern id="stripe" width="${f(t * 0.5)}" height="10" patternUnits="userSpaceOnUse"><rect width="${f(t * 0.25)}" height="10" fill="#fff" opacity=".04"/></pattern></defs>
          <rect width="${W}" height="${H}" fill="#3b3a26"/><rect width="${W}" height="${H}" fill="url(#stripe)"/>${pat}<rect width="${W}" height="${H}" fill="url(#lvig)"/>`);
      },
      art(box) {
        // two lines painted on the wallpaper, a Christmas bulb over every letter, all of them lit
        const rows = ["WHERE IS IT?", "RIGHT HERE"];
        const W = 720, H = 360;
        let wire = "", bulbs = "", letters = "";
        rows.forEach((row, r) => {
          const y0 = 18 + r * 176, chars = [...row], n = chars.length, dx = (W - 70) / (n - 1);
          let d = `M6 ${y0 + 8}`, k = 0;
          chars.forEach((ch, i) => {
            const x = 35 + i * dx;
            d += `Q${f(x - dx / 2)} ${y0 + 26} ${f(x)} ${y0 + 8}`;
            if (ch === " ") return;
            const c = COL[(k++ + r * 2) % COL.length];
            bulbs += `<g transform="translate(${f(x)} ${y0 + 10}) rotate(${(i % 3) * 9 - 9})"><rect x="-5" y="-3" width="10" height="10" fill="#2a2a2a"/><ellipse cx="0" cy="20" rx="11" ry="16" fill="${c}" filter="url(#bulb)"/><ellipse cx="-3" cy="14" rx="3" ry="5" fill="#fff" opacity=".75"/></g>`;
            letters += `<text x="${f(x)}" y="${y0 + 128}" text-anchor="middle" font-family="'Permanent Marker'" font-size="${r ? 84 : 76}" fill="#15110c" opacity=".93" transform="rotate(${((i * 37) % 7) - 3} ${f(x)} ${y0 + 100})">${ch}</text>`;
          });
          wire += `<path d="${d}Q${W - 16} ${y0 + 26} ${W - 4} ${y0 + 6}" fill="none" stroke="#1b1a14" stroke-width="3.4"/>`;
        });
        const body = svg(W, H, `<defs><filter id="bulb" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="9" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>${letters}${wire}${bulbs}`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 11 · quest: two fires in a cave, and something to take with you ──── */
  {
    const FL = ["....R.....", "...RR....R", "...ROR..RR", "..ROOR.RR.", ".RROYORRR.", ".ROYYOOR..", "RROYWYOR..", "ROYWWYOOR.", "ROYWWWYOR.", "RROYWWYORR", ".RROYYORR.", "..RROORR.."];
    const FC = { R: "#d6260f", O: "#ff6a1f", Y: "#ffc93a", W: "#fff1b0" };
    const flame = (x, y, u, flip) => `<g transform="translate(${x} ${y})${flip ? ` translate(${10 * u} 0) scale(-1 1)` : ""}" shape-rendering="crispEdges">${FL.map((r, j) => [...r].map((ch, i) => (FC[ch] ? `<rect x="${i * u}" y="${j * u}" width="${u}" height="${u}" fill="${FC[ch]}"/>` : "")).join("")).join("")}</g>`;
    // our two rings, in gold, as the item on the floor
    const rings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 44" width="64" height="44"><g fill="none"><circle cx="23" cy="22" r="14" stroke="#8a5a10" stroke-width="8"/><circle cx="41" cy="22" r="14" stroke="#8a5a10" stroke-width="8"/><circle cx="23" cy="22" r="14" stroke="#ffd23f" stroke-width="5"/><circle cx="41" cy="22" r="14" stroke="#ffd23f" stroke-width="5"/></g></svg>`;
    const rock = (W, y, h) => { let s = ""; const u = Math.max(8, Math.round(h / 3)); for (let yy = y; yy < y + h; yy += u) for (let x = 0; x < W; x += u) s += `<rect x="${x}" y="${f(yy)}" width="${u}" height="${u}" fill="${["#5a2f17", "#6b3a1e", "#7d4726", "#4a2612"][Math.floor(rnd() * 4)]}"/>`; return s; };
    POP.quest = {
      surface: "#000", fg: "#fff", subColor: "rgba(255,236,200,.82)", lockColor: "#fff", headClass: "ph-inter",
      kicker: "", head: "Take this: all your data in one place.", short: "Take this: all your data, one place.", sub: "33 tools connected read-only, every customer matched, any metric you like. Free to start.", subShort: "33 tools. One place.",
      bg(W, H, pid) {
        seed = 23;
        const B = band(H, pid), h = Math.max(16, Math.round(B.h * 0.06));
        let s = `<rect width="${W}" height="${H}" fill="#000"/>`;
        for (let i = 0; i < Math.round((W * H) / 9000); i++) s += `<rect x="${f(rnd() * W)}" y="${f(rnd() * H)}" width="3" height="3" fill="#3a2a20" opacity="${f(0.4 + rnd() * 0.6)}"/>`;
        s += rock(W, B.top, h) + rock(W, B.top + B.h - h, h);
        return svg(W, H, s, "shape-rendering:crispEdges");
      },
      art(box) {
        const W = 640, H = 400;
        const body = svg(W, H, `<defs><radialGradient id="qGlow"><stop offset="0" stop-color="#ffb13a" stop-opacity=".32"/><stop offset="1" stop-color="#ffb13a" stop-opacity="0"/></radialGradient></defs>
            <text x="320" y="44" text-anchor="middle" font-family="'Press Start 2P'" font-size="19" fill="#fff">IT'S DANGEROUS TO REPORT</text>
            <text x="320" y="80" text-anchor="middle" font-family="'Press Start 2P'" font-size="19" fill="#fff">ALONE! TAKE THIS.</text>
            <circle cx="138" cy="200" r="96" fill="url(#qGlow)"/><circle cx="502" cy="200" r="96" fill="url(#qGlow)"/><ellipse cx="320" cy="330" rx="96" ry="44" fill="url(#qGlow)"/>
            ${flame(108, 158, 6, false)}${flame(472, 158, 6, true)}`) +
          pix(namziSvg({ mood: "happy", pose: "both", fx: [] }), 32, 146, 156, "left:247px;top:116px") +
          pix(rings, 24, 120, 82, "left:260px;top:288px");
        return place(box, W, H, body);
      },
    };
  }

  /* ── 12 · wild: a turn-based battle ────────────────────────────────────── */
  {
    const INK = "#22223a", PAPER = "#fffbea";
    const px = (t, x, y, size, fill = INK, anchor = "start") => `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="'Press Start 2P'" font-size="${size}" fill="${fill}">${t}</text>`;
    const info = (x, y, w, name, lv, hp, col, extra) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${extra ? 98 : 76}" rx="12" fill="${PAPER}" stroke="${INK}" stroke-width="5"/>
        ${px(name, 18, 32, 16)}${px(`Lv${lv}`, w - 18, 32, 12, INK, "end")}${px("HP", 18, 60, 11, "#e0a21a")}
        <rect x="50" y="48" width="${w - 68}" height="14" rx="7" fill="#dcd6c0" stroke="${INK}" stroke-width="2.5"/><rect x="53" y="51" width="${f((w - 74) * hp)}" height="8" rx="4" fill="${col}"/>${extra || ""}</g>`;
    // the wild one: a calendar invite with legs and a temper
    const noShow = `<g transform="translate(420 30)"><ellipse cx="62" cy="142" rx="66" ry="12" fill="#000" opacity=".13"/>
        <path d="M32 124v16M92 124v16" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
        <rect x="4" y="22" width="116" height="106" rx="16" fill="#fff" stroke="${INK}" stroke-width="5"/>
        <path d="M4 40q0-18 18-18h80q18 0 18 18v12H4z" fill="#e2352b" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
        <rect x="30" y="6" width="12" height="30" rx="6" fill="${INK}"/><rect x="82" y="6" width="12" height="30" rx="6" fill="${INK}"/>
        <path d="M30 68l22 9M94 68l-22 9" stroke="${INK}" stroke-width="6" stroke-linecap="round"/><circle cx="44" cy="88" r="7" fill="${INK}"/><circle cx="80" cy="88" r="7" fill="${INK}"/>
        <path d="M44 114q18-13 36 0" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
        <path d="M-10 62l-16-7M-10 80h-18M134 62l16-7M134 80h18" stroke="${INK}" stroke-width="4" stroke-linecap="round" opacity=".45"/></g>`;
    POP.wild = {
      surface: "#f6f1de", fg: INK, subColor: "#4a4a63", lockColor: INK, headClass: "ph-pixel-plain",
      kicker: "", head: `A wild <span style="white-space:nowrap">no-show</span> appeared!`, short: `A wild <span style="white-space:nowrap">no-show</span> appeared!`, sub: "Namzilabs follows every lead from booked to held to paid, across your tools, and shows you exactly where the funnel breaks.", subShort: "See where the funnel breaks.",
      bg(W, H) {
        let lines = "";
        for (let y = 0; y < H; y += 12) lines += `<rect y="${y}" width="${W}" height="2" fill="#e6dcbc" opacity=".55"/>`;
        return svg(W, H, `<defs><linearGradient id="wBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf7e8"/><stop offset="1" stop-color="#e8f2d6"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#wBg)"/>${lines}`);
      },
      art(box) {
        const W = 660, H = 460;
        const tri = (x, y) => `<path d="M${x} ${y - 8}l10 8-10 8z" fill="${INK}"/>`;
        const body = svg(W, H, `<ellipse cx="482" cy="176" rx="132" ry="28" fill="#cfe8b4" stroke="#9cc47f" stroke-width="5"/><ellipse cx="176" cy="326" rx="150" ry="30" fill="#cfe8b4" stroke="#9cc47f" stroke-width="5"/>
            ${noShow}
            ${info(20, 22, 300, "NO-SHOW", 36, 0.36, "#e2352b")}
            ${info(346, 208, 296, "NAMZI", 33, 1, "#3fae5a", `${px("33/33 TOOLS", 278, 86, 10, INK, "end")}`)}
            <rect x="4" y="352" width="652" height="104" rx="14" fill="${PAPER}" stroke="${INK}" stroke-width="5"/><rect x="336" y="352" width="320" height="104" rx="14" fill="#fff" stroke="${INK}" stroke-width="5"/>
            ${px("What will", 28, 394, 15)}${px("NAMZI do?", 28, 428, 15)}
            ${tri(354, 390)}${px("FIND LEAK", 372, 397, 13)}${px("MATCH", 530, 397, 13)}${px("COUNT ONCE", 372, 433, 13)}${px("RUN", 530, 433, 13)}`) +
          pix(namziSvg({ mood: "stern", pose: "point", fx: [] }), 32, 136, 146, "left:104px;top:186px");
        return place(box, W, H, body);
      },
    };
  }

  /* ── 13 · guess: the daily word puzzle, played with revenue ────────────── */
  {
    const G = "#3fae5a", Yl = "#d9a93a", X = "#3a3d4d", ANSWER = "46180";
    // the usual rules: right digit in the right place first, then right digit elsewhere, each digit used once
    const score = (g) => {
      const res = Array(5).fill(X), left = {};
      [...ANSWER].forEach((c, i) => { if (g[i] === c) res[i] = G; else left[c] = (left[c] || 0) + 1; });
      [...g].forEach((c, i) => { if (res[i] !== G && left[c]) { res[i] = Yl; left[c]--; } });
      return res;
    };
    const ROWS = [["44902", "close", "your CRM"], ["46995", "gsheets", "the sheet"], ["46118", "notion", "the board deck"], ["46180", null, "Namzilabs"]];
    POP.guess = {
      surface: "#121318", fg: "#fff", subColor: "rgba(214,220,235,.84)", lockColor: "#fff", headClass: "ph-inter", scrim: "rgba(18,19,24,.85)",
      kicker: "TODAY'S PUZZLE", head: "Stop guessing your revenue.", short: "Stop guessing your revenue.", sub: "Your CRM, the sheet and the board deck all disagree. Namzilabs cross-references your tools and gets it in one.", subShort: "One true number, first try.",
      bg(W, H) {
        seed = 31;
        const t = Math.max(40, Math.min(92, Math.round(H / 7))), g = t * 0.14;
        let s = `<rect width="${W}" height="${H}" fill="#121318"/>`;
        for (let y = g; y < H; y += t) for (let x = g; x < W; x += t) { const r = rnd(); s += `<rect x="${f(x)}" y="${f(y)}" width="${f(t - 2 * g)}" height="${f(t - 2 * g)}" rx="4" fill="${r < 0.05 ? G : r < 0.08 ? Yl : "none"}" stroke="#262833" stroke-width="2" opacity="${r < 0.08 ? 0.22 : 0.7}"/>`; }
        return svg(W, H, s);
      },
      art(box) {
        const W = 600, H = 420, T = 52, P = 58, x0 = 40, y0 = 72;
        let tiles = "";
        for (let r = 0; r < 6; r++) {
          const row = ROWS[r], cols = row ? score(row[0]) : null;
          for (let c = 0; c < 5; c++) {
            const x = x0 + c * P, y = y0 + r * P;
            tiles += row ? `<rect x="${x}" y="${y}" width="${T}" height="${T}" rx="4" fill="${cols[c]}"${r === 3 ? ` filter="url(#gGlow)"` : ""}/><text x="${x + T / 2}" y="${y + T / 2 + 11}" text-anchor="middle" font-family="Inter" font-weight="800" font-size="30" fill="#fff">${row[0][c]}</text>`
              : `<rect x="${x + 1.5}" y="${y + 1.5}" width="${T - 3}" height="${T - 3}" rx="4" fill="none" stroke="#3a3d4d" stroke-width="3"/>`;
          }
        }
        const labels = ROWS.map(([, t, l], r) => abs(334, y0 + r * P + 8, 260, 36, `<div style="display:flex;align-items:center;gap:10px;height:100%;font:${r === 3 ? "800" : "600"} 19px Inter;letter-spacing:-.01em;color:${r === 3 ? "#fff" : "#aab0c0"};white-space:nowrap">${t ? mark(t, 26) : `<span style="width:30px;height:30px;border-radius:8px;background:#2f5fd8;display:grid;place-items:center">${MARK("#fff", 5.4)}</span>`}${l}${r === 3 ? `<span style="color:${G};font-weight:900">✓</span>` : ""}</div>`)).join("");
        const body = svg(W, H, `<defs><filter id="gGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" result="b"/><feFlood flood-color="${G}" flood-opacity=".7"/><feComposite in2="b" operator="in" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <text x="${x0}" y="36" font-family="Inter" font-weight="900" font-size="24" letter-spacing="3" fill="#fff">REVENUE</text><text x="${W - 20}" y="36" text-anchor="end" font-family="Inter" font-weight="700" font-size="20" fill="#aab0c0">4/6</text>
            <rect x="20" y="52" width="${W - 40}" height="2" fill="#2d2f3a"/>${tiles}`) + labels;
        return place(box, W, H, body);
      },
    };
  }

  /* ── 14 · achievement: the unlock toast ────────────────────────────────── */
  {
    const trophy = `<svg viewBox="0 0 24 24" width="38" height="38"><path d="M7 3h10v5a5 5 0 0 1-10 0z" fill="#6b3f00"/><path d="M7 5H4.2a3 3 0 0 0 3.3 4.6M17 5h2.8a3 3 0 0 1-3.3 4.6" fill="none" stroke="#6b3f00" stroke-width="1.8" stroke-linecap="round"/><path d="M10.5 13h3v3.2h-3zM8 16.5h8v3H8z" fill="#6b3f00"/></svg>`;
    const toast = (y, title, pts, op, sc, hero) => abs(30, y, 560, 96, `<div style="height:100%;display:flex;align-items:center;gap:18px;border-radius:48px;padding:0 30px 0 12px;box-sizing:border-box;background:linear-gradient(180deg,#2b303e,#171a22);border:2px solid rgba(255,255,255,.14);box-shadow:0 22px 40px -18px rgba(0,0,0,.85)${hero ? ",0 0 0 3px rgba(255,210,63,.7),0 0 46px rgba(255,186,60,.5)" : ""};opacity:${op};transform:scale(${sc})">
        <div style="width:72px;height:72px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff3b8,#ffc93a 45%,#c98a00);display:grid;place-items:center;box-shadow:inset 0 -4px 0 rgba(0,0,0,.18)">${trophy}</div>
        <div style="min-width:0"><div style="font:700 13px Inter;letter-spacing:.16em;text-transform:uppercase;color:#aab3c5">Achievement unlocked</div><div style="font:750 25px Inter;letter-spacing:-.02em;color:#fff;margin-top:5px;white-space:nowrap">${title}</div></div>
        <div style="margin-left:auto;font:800 19px Inter;color:#ffd23f;white-space:nowrap">+${pts}</div></div>`);
    const spark = (x, y, r, o = 1) => `<path d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z" fill="#ffd23f" opacity="${o}"/>`;
    POP.achievement = {
      surface: "#0d1024", fg: "#fff", subColor: "rgba(214,222,255,.84)", lockColor: "#fff", headClass: "ph-inter", scrim: "rgba(13,16,36,.7)",
      kicker: "", head: "Achievement unlocked: the true numbers.", short: "Achievement unlocked: the true numbers.", sub: "All your tools in one place, every customer counted once, and the exact step where your funnel breaks.", subShort: "All your tools, one place.",
      bg(W, H) {
        seed = 41;
        let b = "";
        for (let i = 0; i < Math.round(W / 60); i++) { const r = 10 + rnd() * Math.min(H * 0.12, 64); b += `<circle cx="${f(rnd() * W)}" cy="${f(rnd() * H)}" r="${f(r)}" fill="${rnd() < 0.5 ? "#5b6cff" : "#ffc93a"}" opacity="${f(0.04 + rnd() * 0.08)}"/>`; }
        return svg(W, H, `<defs><radialGradient id="acBg" cx=".7" cy=".5" r=".8"><stop offset="0" stop-color="#232a66"/><stop offset="1" stop-color="#0d1024"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#acBg)"/>${b}`);
      },
      art(box) {
        const W = 620, H = 400;
        const body = toast(18, "Every customer counted once", 10, 0.5, 0.9) + toast(142, "All 33 tools in one place", 33, 0.78, 0.95) + toast(272, "Found where the funnel breaks", 100, 1, 1, true) +
          svg(W, H, `${spark(606, 262, 14)}${spark(20, 360, 10, 0.8)}${spark(580, 384, 8, 0.7)}${spark(52, 262, 7, 0.6)}`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 15 · gameover: continue? ──────────────────────────────────────────── */
  {
    const px = (t, x, y, size, fill, extra = "") => `<text x="${x}" y="${y}" text-anchor="middle" font-family="'Press Start 2P'" font-size="${size}" fill="${fill}"${extra}>${t}</text>`;
    POP.gameover = {
      surface: "#000", fg: "#fff", subColor: "rgba(214,222,255,.82)", lockColor: "#fff", headClass: "ph-inter", scrim: "rgba(0,0,0,.85)",
      kicker: "", head: "Your funnel just lost a life.", short: "Your funnel just lost a life.", sub: "Namzilabs shows the exact step where leads drop out, across every tool. Continue? It's free to start.", subShort: "Continue? Free to start.",
      bg(W, H) {
        return svg(W, H, `<defs><pattern id="scan" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="2" fill="#fff" opacity=".04"/></pattern><radialGradient id="crt" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".8"/></radialGradient><radialGradient id="glow0" cx=".62" cy=".45" r=".5"><stop offset="0" stop-color="#3a0d12" stop-opacity=".9"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs>
          <rect width="${W}" height="${H}" fill="#000"/><rect width="${W}" height="${H}" fill="url(#glow0)"/><rect width="${W}" height="${H}" fill="url(#scan)"/><rect width="${W}" height="${H}" fill="url(#crt)"/>`);
      },
      art(box) {
        const W = 600, H = 420;
        const body = svg(W, H, `<defs><filter id="goGlow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            ${px("GAME OVER", 304, 116, 58, "#6e0b06")}${px("GAME OVER", 300, 112, 58, "#ff3b30", ` filter="url(#goGlow)"`)}
            ${px("YOUR FUNNEL LOST A LIFE", 300, 164, 15, "#fff")}
            ${px("BOOKED 412 &gt; HELD 263 (-36%)", 300, 206, 13, "#9fb0c8")}
            ${px("CONTINUE?", 262, 276, 28, "#fff")}${px("9", 452, 280, 40, "#ffd23f", ` filter="url(#goGlow)"`)}
            ${px("INSERT COIN: FREE TO START", 300, 334, 15, "#5ee6ff")}
            ${px("EXAMPLE DATA - NAMZILABS 2026", 300, 398, 10, "#6b7280")}`);
        return place(box, W, H, body);
      },
    };
  }

  /* ── 16 · blocks: the falling-block puzzle, where everything fits ──────── */
  {
    const C = { P: "#8b5cf6", B: "#2f5fd8", O: "#f59e0b", G: "#22c55e", Y: "#eab308", R: "#ef4444", K: "#06b6d4" };
    const STACK = { 9: "..BB......", 10: "P.BBO...GG", 11: "PPYOOO.RRG", 12: "PYYKKRRRBB" };
    const MARKS = { "11,2": "calendly", "10,2": "close", "11,4": "shopify", "10,9": "gsheets" };
    const cell = (x, y, s, c) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${c}"/><path d="M${x} ${y + s}V${y}H${x + s}" fill="none" stroke="#fff" stroke-opacity=".38" stroke-width="3"/><path d="M${x + s} ${y}V${y + s}H${x}" fill="none" stroke="#000" stroke-opacity=".28" stroke-width="3"/>`;
    POP.blocks = {
      surface: "#0b0e1a", fg: "#fff", subColor: "rgba(214,222,255,.84)", lockColor: "#fff", headClass: "ph-inter", scrim: "rgba(11,14,26,.8)",
      kicker: "", head: "Finally, everything fits.", short: "Finally, everything fits.", sub: "33 tools in one place, every number cross-referenced. No more exports that don't line up.", subShort: "33 tools, one place.",
      bg(W, H) {
        seed = 44;
        const u = Math.max(18, Math.round(H / 16)), shapes = [[[0, 0], [1, 0], [2, 0], [1, 1]], [[0, 0], [0, 1], [0, 2], [1, 2]], [[0, 0], [1, 0], [0, 1], [1, 1]], [[0, 0], [1, 0], [1, 1], [2, 1]], [[0, 0], [1, 0], [2, 0], [3, 0]]];
        let s = `<rect width="${W}" height="${H}" fill="#0b0e1a"/>`;
        for (let i = 0; i < Math.round((W * H) / 40000); i++) { const sh = shapes[Math.floor(rnd() * shapes.length)], x = rnd() * W, y = rnd() * H, c = Object.values(C)[Math.floor(rnd() * 7)]; s += sh.map(([a, b]) => `<rect x="${f(x + a * u)}" y="${f(y + b * u)}" width="${u - 3}" height="${u - 3}" rx="2" fill="none" stroke="${c}" stroke-width="2" opacity=".16"/>`).join(""); }
        return svg(W, H, s);
      },
      art(box) {
        const W = 540, H = 440, S = 30, fx = 24, fy = 20;
        let field = `<rect x="${fx - 6}" y="${fy - 6}" width="${10 * S + 12}" height="${13 * S + 12}" rx="6" fill="#0d1120" stroke="#8b93a8" stroke-width="5"/>`;
        for (let c = 1; c < 10; c++) field += `<rect x="${fx + c * S}" y="${fy}" width="1" height="${13 * S}" fill="#1c2238"/>`;
        for (let r = 1; r < 13; r++) field += `<rect x="${fx}" y="${fy + r * S}" width="${10 * S}" height="1" fill="#1c2238"/>`;
        for (const [r, row] of Object.entries(STACK)) [...row].forEach((ch, c) => { if (C[ch]) field += cell(fx + c * S, fy + r * S, S, C[ch]); });
        // the falling piece, its ghost where it lands, and the line that's clearing
        const T = [[5, 3], [6, 3], [7, 3], [6, 4]], ghost = [[5, 10], [6, 10], [7, 10], [6, 11]];
        field += ghost.map(([c, r]) => `<rect x="${fx + c * S + 2}" y="${fy + r * S + 2}" width="${S - 4}" height="${S - 4}" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-dasharray="5 4"/>`).join("");
        field += T.map(([c, r]) => cell(fx + c * S, fy + r * S, S, C.P)).join("") + `<path d="M${fx + 5.5 * S} ${fy + 2.6 * S}v-40M${fx + 6.5 * S} ${fy + 2.6 * S}v-56M${fx + 7.5 * S} ${fy + 2.6 * S}v-40" stroke="#c4b5fd" stroke-width="3" stroke-linecap="round" opacity=".5"/>`;
        field += `<rect x="${fx}" y="${fy + 12 * S}" width="${10 * S}" height="${S}" fill="#fff" opacity=".82" filter="url(#bkGlow)"/><text x="${fx + 5 * S}" y="${fy + 12 * S + 21}" text-anchor="middle" font-family="'Press Start 2P'" font-size="13" fill="#0d1120">LINE CLEAR!</text>`;
        const side = `<rect x="352" y="14" width="170" height="118" rx="6" fill="#0d1120" stroke="#8b93a8" stroke-width="4"/><text x="368" y="40" font-family="'Press Start 2P'" font-size="12" fill="#aab3c5">NEXT</text>
            ${cell(404, 84, 28, C.O)}${cell(432, 84, 28, C.O)}${cell(460, 84, 28, C.O)}${cell(460, 56, 28, C.O)}
            <text x="352" y="180" font-family="'Press Start 2P'" font-size="12" fill="#aab3c5">TOOLS</text><text x="352" y="212" font-family="'Press Start 2P'" font-size="22" fill="#fff">33</text>
            <text x="352" y="256" font-family="'Press Start 2P'" font-size="12" fill="#aab3c5">SCORE</text><text x="352" y="288" font-family="'Press Start 2P'" font-size="22" fill="#fff">000061</text>`;
        const marks = Object.entries(MARKS).map(([k, t]) => { const [r, c] = k.split(",").map(Number); return abs(fx + c * S + 4, fy + r * S + 4, S - 8, S - 8, `<div style="width:100%;height:100%;border-radius:5px;background:#fff;display:grid;place-items:center">${mark(t, S * 0.52)}</div>`); }).join("") +
          abs(fx + 6 * S + 4, fy + 3 * S + 4, S - 8, S - 8, `<div style="width:100%;height:100%;border-radius:5px;background:#fff;display:grid;place-items:center">${mark("stripe", S * 0.52)}</div>`) +
          abs(436, 88, 20, 20, `<div style="width:100%;height:100%;border-radius:4px;background:#fff;display:grid;place-items:center">${mark("calendly", 14)}</div>`) +
          abs(352, 330, 170, 56, `<div style="display:flex;align-items:center;gap:12px;height:100%"><span style="width:52px;height:52px;border-radius:14px;background:#2f5fd8;display:grid;place-items:center;flex:none">${MARK("#fff", 5.6)}</span><span style="font:400 12px/1.6 'Press Start 2P';color:#fff">ONE<br>PLACE</span></div>`);
        const body = svg(W, H, `<defs><filter id="bkGlow" x="-10%" y="-100%" width="120%" height="300%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>${field}${side}`) + marks;
        return place(box, W, H, body);
      },
    };
  }

  POP.IDS = ["arcade", "platformer", "versus", "meeting", "crafting", "redpill", "crawl", "speed", "bigger", "lights", "quest", "wild", "guess", "achievement", "gameover", "blocks"];
})();
