/* ─────────────────────────────────────────────────────────────────────────
   Props for the 3D highlight covers (highlights/covers.html): simple,
   glossy, toy-like pieces built from primitives, so they sit with Namzi.
   Each returns a THREE.Group positioned at the origin; the scene places it.
   ───────────────────────────────────────────────────────────────────────── */
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export function props(THREE) {
  const glossy = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: 0.26, clearcoat: 1, clearcoatRoughness: 0.12, ...o });
  const metal = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness: 0.22, clearcoat: 0.6, ...o });
  const glow = (color, i = 3) => new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: i });
  const box = (w, h, d, r, mat) => new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 6, r), mat);
  const tube = (pts, r, mat, seg = 64) => new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p))), seg, r, 14, false), mat);
  const ball = (r, mat) => new THREE.Mesh(new THREE.SphereGeometry(r, 32, 24), mat);
  const canvasTex = (w, h, draw) => {
    const cv = document.createElement("canvas");
    cv.width = w; cv.height = h;
    draw(cv.getContext("2d"), w, h);
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  };
  const round = (g, x, y, w, h, r) => { g.beginPath(); g.roundRect(x, y, w, h, r); };

  return {
    glossy, metal, glow, box, tube, ball, canvasTex,

    /* the logo, as two glowing rings lying on the floor, overlapping exactly like the mark */
    floorRings(rad = 1.25, color = 0x9cc0ff) {
      const g = new THREE.Group();
      const m = glow(color, 2.6);
      const gap = (14 / 15) * rad;
      for (const x of [-gap / 2, gap / 2]) {
        const t = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.06, 24, 200), m);
        t.rotation.x = -Math.PI / 2;
        t.position.set(x, 0.06, 0);
        g.add(t);
      }
      return g;
    },

    /* a bar chart of glossy blocks, the tallest one lit */
    bars(heights = [0.9, 1.5, 2.2], colors = [0xc0d5ff, 0x8fb2ff, 0x2f5fd8]) {
      const g = new THREE.Group();
      heights.forEach((h, i) => {
        const b = box(0.56, h, 0.56, 0.1, glossy(colors[i], i === heights.length - 1 ? { emissive: 0x1d46c9, emissiveIntensity: 0.35 } : {}));
        b.position.set(i * 0.72, h / 2, 0);
        g.add(b);
      });
      return g;
    },

    /* an up arrow, glowing */
    arrowUp(color = 0x4ade80, s = 1) {
      const g = new THREE.Group();
      const m = glossy(color, { emissive: color, emissiveIntensity: 0.5 });
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.07 * s, 0.07 * s, 0.5 * s, 24), m);
      const head = new THREE.Mesh(new THREE.ConeGeometry(0.18 * s, 0.3 * s, 32), m);
      head.position.y = 0.38 * s;
      g.add(shaft, head);
      return g;
    },

    /* a funnel: wide mouth, cone, spout */
    funnel(color = 0xf2f5ff) {
      const pts = [];
      const P = [[0.13, -0.6], [0.14, -0.1], [0.17, 0.0], [0.9, 1.0], [0.96, 1.08], [0.96, 1.16], [0.9, 1.1], [0.16, 0.08], [0.1, -0.1], [0.09, -0.6]];
      for (const [x, y] of P) pts.push(new THREE.Vector2(x, y));
      const geo = new THREE.LatheGeometry(pts, 96);
      const m = glossy(color, { side: THREE.DoubleSide });
      const f = new THREE.Mesh(geo, m);
      const g = new THREE.Group();
      g.add(f);
      return g;
    },

    /* a drop: a sphere pulled to a point */
    drop(color, r = 0.09, o = {}) {
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const t = i / 24, a = Math.PI * t;
        const rr = r * Math.sin(a) * (t < 0.5 ? 1 : 1 - (t - 0.5) * 0.9);
        pts.push(new THREE.Vector2(Math.max(0.0001, rr * (t > 0.6 ? 1 - (t - 0.6) * 1.8 : 1)), -Math.cos(a) * r * (t > 0.5 ? 1.6 : 1)));
      }
      return new THREE.Mesh(new THREE.LatheGeometry(pts, 32), glossy(color, o));
    },

    /* a magnifying glass, handle down */
    magnifier() {
      const g = new THREE.Group();
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.04, 20, 64), metal(0xd9b36a));
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.25, 48), new THREE.MeshPhysicalMaterial({ color: 0xcfe3ff, transparent: true, opacity: 0.28, roughness: 0.02, clearcoat: 1, side: THREE.DoubleSide }));
      const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.42, 20), glossy(0x1b1d2a));
      handle.position.y = -0.47;
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.07, 20), metal(0xd9b36a));
      collar.position.y = -0.27;
      g.add(rim, lens, handle, collar);
      return g;
    },

    /* a big numeral one, glossy */
    one(color = 0xf4f1ff) {
      const g = new THREE.Group();
      const m = glossy(color);
      const stem = box(0.5, 2.3, 0.44, 0.14, m);
      stem.position.set(0, 1.45, 0);
      const flag = box(0.62, 0.34, 0.44, 0.14, m);
      flag.position.set(-0.3, 2.42, 0);
      flag.rotation.z = -0.62;
      const base = box(1.2, 0.34, 0.5, 0.14, m);
      base.position.set(0, 0.17, 0);
      g.add(stem, flag, base);
      return g;
    },

    /* a long receipt: a ribbon along a curve, printed with lines, zigzag at the end */
    receipt(spine, width = 0.62) {
      const curve = new THREE.CatmullRomCurve3(spine.map((p) => new THREE.Vector3(...p)));
      const L = curve.getLength();
      const N = 240, pos = [], uv = [], idx = [];
      const side = new THREE.Vector3(1, 0, 0);
      for (let i = 0; i <= N; i++) {
        const t = i / N, p = curve.getPointAt(t);
        for (const s of [-1, 1]) { pos.push(p.x + (s * width) / 2 * side.x, p.y, p.z); uv.push(s < 0 ? 0 : 1, 1 - t); }
        if (i < N) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      const H = Math.round(256 * (L / width));
      const tex = canvasTex(256, H, (g, w, h) => {
        g.fillStyle = "#fbfaf6"; g.fillRect(0, 0, w, h);
        g.fillStyle = "#c9ccd6";
        let y = 34;
        g.fillStyle = "#9aa0b4"; round(g, 70, y, 116, 14, 7); g.fill(); y += 40;
        for (let i = 0; y < h - 70; i++) {
          if (i % 7 === 6) { g.strokeStyle = "#cfd3de"; g.setLineDash([8, 7]); g.lineWidth = 3; g.beginPath(); g.moveTo(24, y); g.lineTo(232, y); g.stroke(); y += 26; continue; }
          g.fillStyle = "#b8bdcc"; round(g, 24, y, 70 + ((i * 37) % 60), 10, 5); g.fill();
          g.fillStyle = i % 5 === 3 ? "#2f5fd8" : "#7d8397"; round(g, 190 - ((i * 13) % 20), y, 42 + ((i * 13) % 20), 10, 5); g.fill();
          y += 30;
        }
        // the zigzag tear at the end
        g.globalCompositeOperation = "destination-out";
        g.beginPath(); g.moveTo(0, h);
        for (let x = 0; x <= w; x += 16) g.lineTo(x, h - (x / 16) % 2 * 14);
        g.lineTo(w, h); g.closePath(); g.fill();
      });
      const m = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.62, side: THREE.DoubleSide, alphaTest: 0.5, transparent: false });
      return new THREE.Mesh(geo, m);
    },

    /* an app block: a glossy rounded cube with a white glyph on the front */
    appBlock(color, glyph, s = 0.5) {
      const g = new THREE.Group();
      const b = box(s, s, s, s * 0.22, glossy(color));
      g.add(b);
      const tex = canvasTex(256, 256, (c) => {
        c.strokeStyle = "#fff"; c.fillStyle = "#fff"; c.lineWidth = 18; c.lineCap = "round"; c.lineJoin = "round";
        if (glyph === "bars") { for (const [x, h] of [[70, 70], [128, 120], [186, 160]]) { round(c, x - 18, 208 - h, 36, h, 10); c.fill(); } }
        else if (glyph === "cal") { round(c, 50, 64, 156, 140, 26); c.stroke(); c.beginPath(); c.moveTo(50, 108); c.lineTo(206, 108); c.stroke(); for (const x of [92, 164]) { c.beginPath(); c.moveTo(x, 44); c.lineTo(x, 80); c.stroke(); } }
        else if (glyph === "card") { round(c, 40, 72, 176, 118, 20); c.stroke(); c.beginPath(); c.moveTo(40, 110); c.lineTo(216, 110); c.stroke(); c.beginPath(); c.moveTo(70, 158); c.lineTo(120, 158); c.stroke(); }
        else if (glyph === "mail") { round(c, 44, 70, 168, 120, 20); c.stroke(); c.beginPath(); c.moveTo(52, 80); c.lineTo(128, 140); c.lineTo(204, 80); c.stroke(); }
        else if (glyph === "form") { round(c, 60, 44, 136, 168, 20); c.stroke(); for (const y of [92, 128, 164]) { c.beginPath(); c.moveTo(88, y); c.lineTo(168, y); c.stroke(); } }
        else if (glyph === "phone") { c.beginPath(); c.moveTo(78, 60); c.quadraticCurveTo(60, 150, 170, 200); c.stroke(); for (const [x, y] of [[82, 58], [172, 196]]) { c.beginPath(); c.arc(x, y, 20, 0, Math.PI * 2); c.fill(); } }
        else if (glyph === "cart") { c.beginPath(); c.moveTo(40, 64); c.lineTo(70, 64); c.lineTo(96, 164); c.lineTo(196, 164); c.lineTo(214, 96); c.lineTo(80, 96); c.stroke(); for (const x of [104, 184]) { c.beginPath(); c.arc(x, 200, 14, 0, Math.PI * 2); c.fill(); } }
      });
      const face = new THREE.Mesh(new THREE.PlaneGeometry(s * 0.66, s * 0.66), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
      face.position.z = s / 2 + 0.002;
      g.add(face);
      return g;
    },

    /* a sales bell on its base */
    bell() {
      const g = new THREE.Group();
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.47, 0.12, 64), glossy(0x16182a));
      base.position.y = 0.06;
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.38, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2), metal(0xf0c35a, { roughness: 0.18 }));
      dome.position.y = 0.12;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.12, 16), metal(0xd6d9e4));
      stem.position.y = 0.55;
      const btn = new THREE.Mesh(new THREE.SphereGeometry(0.07, 24, 16), metal(0xd6d9e4));
      btn.scale.y = 0.6;
      btn.position.y = 0.62;
      g.add(base, dome, stem, btn);
      return g;
    },

    /* a headset that sits on Namzi: band over the top, cups at the sides, mic at the mouth */
    headset(color = 0x1b1d2a) {
      const g = new THREE.Group();
      const m = glossy(color), pad = glossy(0x2b2e44);
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.05, 20, 96, Math.PI), m);
      band.position.set(0, 1.95, 0);
      g.add(band);
      for (const s of [-1, 1]) {
        const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.14, 40), pad);
        cup.rotation.z = Math.PI / 2;
        cup.position.set(s * 0.71, 1.93, 0);
        g.add(cup);
      }
      const boom = tube([[0.74, 1.88, 0.08], [0.66, 1.56, 0.42], [0.36, 1.36, 0.7], [0.2, 1.33, 0.76]], 0.022, m);
      const mic = ball(0.06, glossy(0x2b2e44));
      mic.position.set(0.18, 1.33, 0.77);
      g.add(boom, mic);
      return g;
    },

    /* an easel with a client report on it */
    easel(chartColor = "#14b8a6") {
      const g = new THREE.Group();
      const tex = canvasTex(1024, 720, (c, w, h) => {
        c.fillStyle = "#ffffff"; c.fillRect(0, 0, w, h);
        c.fillStyle = "#14141c"; round(c, 70, 64, 330, 34, 17); c.fill();
        c.fillStyle = "#c9ccd6"; round(c, 70, 120, 220, 22, 11); c.fill();
        const bars = [0.35, 0.5, 0.46, 0.68, 0.82];
        bars.forEach((v, i) => { c.fillStyle = i === bars.length - 1 ? chartColor : "#bfe7e2"; round(c, 110 + i * 170, h - 80 - v * 420, 110, v * 420, 18); c.fill(); });
        c.strokeStyle = "#14141c"; c.lineWidth = 12; c.lineCap = "round"; c.lineJoin = "round";
        c.beginPath(); bars.forEach((v, i) => { const x = 165 + i * 170, y = h - 150 - v * 440; i ? c.lineTo(x, y) : c.moveTo(x, y); }); c.stroke();
      });
      const board = box(1.9, 1.34, 0.06, 0.04, glossy(0xffffff));
      const face = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.26), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }));
      face.position.z = 0.032;
      const top = new THREE.Group();
      top.add(board, face);
      top.position.set(0, 1.92, 0);
      top.rotation.x = -0.08;
      g.add(top);
      const wood = glossy(0xc8955c, { clearcoat: 0.3, roughness: 0.5 });
      for (const [x, z, rx, rz] of [[-0.62, 0.18, -0.08, 0.12], [0.62, 0.18, -0.08, -0.12], [0, -0.45, 0.28, 0]]) {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 2.6, 16), wood);
        leg.position.set(x, 1.28, z);
        leg.rotation.set(rx, 0, rz);
        g.add(leg);
      }
      const ledge = box(1.7, 0.06, 0.14, 0.02, wood);
      ledge.position.set(0, 1.22, 0.1);
      g.add(ledge);
      return g;
    },

    /* a ring light on a stand */
    ringLight(color = 0xffffff, i = 3.2) {
      const g = new THREE.Group();
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.1, 32, 160), glow(color, i));
      ring.position.y = 2.0;
      const back = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.13, 24, 160), glossy(0x1b1d2a));
      back.position.set(0, 2.0, -0.06);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.9, 16), metal(0x9aa0b4));
      pole.position.y = 0.45;
      g.add(ring, back, pole);
      for (let k = 0; k < 3; k++) {
        const a = (k / 3) * Math.PI * 2 + 0.4;
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.8, 12), metal(0x9aa0b4));
        leg.position.set(Math.cos(a) * 0.3, 0.2, Math.sin(a) * 0.3);
        leg.rotation.set(Math.sin(a) * 0.8, 0, -Math.cos(a) * 0.8);
        g.add(leg);
      }
      return g;
    },

    /* a phone, screen lit */
    phone(screen = "#ff6fb5") {
      const g = new THREE.Group();
      const body = box(0.38, 0.74, 0.05, 0.06, glossy(0x14141c));
      const tex = canvasTex(256, 500, (c, w, h) => {
        const gr = c.createLinearGradient(0, 0, w, h); gr.addColorStop(0, "#ffd1e8"); gr.addColorStop(1, screen); c.fillStyle = gr; c.fillRect(0, 0, w, h);
        c.fillStyle = "rgba(255,255,255,.9)"; c.beginPath(); c.arc(w / 2, h * 0.42, 56, 0, Math.PI * 2); c.fill();
        c.fillStyle = screen; c.beginPath(); c.moveTo(w / 2 - 16, h * 0.42 - 26); c.lineTo(w / 2 + 28, h * 0.42); c.lineTo(w / 2 - 16, h * 0.42 + 26); c.fill();
      });
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.66), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
      scr.position.z = 0.027;
      g.add(body, scr);
      return g;
    },

    /* a shopping bag with rope handles */
    bag(color, handle = 0x14141c, w = 0.62, h = 0.7) {
      const g = new THREE.Group();
      const b = box(w, h, 0.3, 0.05, glossy(color, { roughness: 0.42, clearcoat: 0.5 }));
      b.position.y = -h / 2 - 0.2;
      g.add(b);
      for (const s of [-1, 1]) {
        const hdl = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 12, 40, Math.PI), glossy(handle));
        hdl.position.set(s * 0.1, -0.2, 0);
        hdl.rotation.y = Math.PI / 2;
        g.add(hdl);
      }
      return g;
    },

    /* a parcel */
    parcel(s = 0.7) {
      const g = new THREE.Group();
      const b = box(s, s * 0.8, s, 0.04, glossy(0xc8955c, { clearcoat: 0.2, roughness: 0.7 }));
      b.position.y = s * 0.4;
      const tape = new THREE.Mesh(new THREE.BoxGeometry(s * 0.22, 0.012, s + 0.004), new THREE.MeshStandardMaterial({ color: 0xe8d3a8, roughness: 0.4 }));
      tape.position.y = s * 0.8 + 0.004;
      g.add(b, tape);
      return g;
    },

    /* a question mark, glossy tube with a ball */
    question(color = 0xffffff, r = 0.17) {
      const g = new THREE.Group();
      const pts = [];
      for (let i = 0; i <= 40; i++) { const a = Math.PI * 1.05 - (i / 40) * Math.PI * 1.55; pts.push([Math.cos(a) * 0.62, 2.1 + Math.sin(a) * 0.62, 0]); }
      pts.push([0.08, 1.3, 0], [0, 1.08, 0], [0, 0.9, 0]);
      const m = glossy(color);
      const t = tube(pts, r, m, 160);
      const cap1 = ball(r, m); cap1.position.set(...pts[0]);
      const cap2 = ball(r, m); cap2.position.set(...pts[pts.length - 1]);
      const dot = ball(r * 1.3, m); dot.position.set(0, 0.38, 0);
      g.add(t, cap1, cap2, dot);
      return g;
    },

    /* a cable from a to b, sagging a little */
    cable(a, b, color = 0x7de8ff, r = 0.022) {
      const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
      const mid = A.clone().lerp(B, 0.5); mid.y -= 0.25;
      return new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(A, mid, B), 48, r, 10, false), glow(color, 1.6));
    },
  };
}
