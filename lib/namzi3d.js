/* ─────────────────────────────────────────────────────────────────────────
   Namzi in 3D: the mascot as a glossy toy, for the highlight covers.

   The same character as lib/mascot.js, built in three.js: the logo's lens
   (the overlap of the two rings) turned into a plump body standing on its
   tip, with big eyes, noodle arms, white gloves and little shoes. Light
   limbs, because the covers are dark (the brand rule: ink limbs on light
   surfaces, light limbs on dark).

     import { namzi, surfaceZ, onBody } from "../lib/namzi3d.js";
     const n = namzi(THREE, { mood: "grin", look: [0.3, 0.1], arms: { R: "wave" } });
     scene.add(n.group);      // feet on y = 0, facing +z, about 2.6 units tall
     n.hand.R                 // world position of the right hand, for props

   Units: the 2D mascot's pixels / 100, so its drawings map straight across.
   ───────────────────────────────────────────────────────────────────────── */

const CY = 1.57;          // the body's centre height
const R = 1.055;          // the lens is two arcs of this radius…
const A = 0.305;          // …whose centres sit this far either side of the axis
const RHO = 0.28;         // the tips are rounded with a ball this size
const D = Math.sqrt((R - RHO) ** 2 - A ** 2);
const PHI1 = Math.atan2(D, A);
const ZS = 0.9;           // a touch flatter front to back than side to side

export const BODY = { top: CY + D + RHO, bottom: CY - D - RHO, cy: CY };

/* radius of the body at height y (0 outside it) */
export function radius(y) {
  const dy = Math.abs(y - CY);
  if (dy <= R * Math.sin(PHI1)) return Math.max(0, Math.sqrt(R * R - dy * dy) - A);
  const t = dy - D;
  return t >= RHO ? 0 : Math.sqrt(RHO * RHO - t * t);
}
/* the front surface's z at (x, y), or 0 past the silhouette */
export function surfaceZ(x, y) {
  const r = radius(y);
  return r > Math.abs(x) ? ZS * Math.sqrt(r * r - x * x) : 0;
}
/* outward normal of the body at a front point (x, y) */
function normalAt(THREE, x, y) {
  const r = radius(y), e = 1e-3;
  const dr = (radius(y + e) - radius(y - e)) / (2 * e);
  const z = surfaceZ(x, y);
  return new THREE.Vector3(x, -r * dr, z / (ZS * ZS)).normalize();
}
/* the lens profile, bottom tip to top tip, for LatheGeometry */
function profile(THREE, n = 90) {
  const pts = [];
  const arc = (cx, cy, rr, a0, a1, k) => { for (let i = 0; i <= k; i++) { const a = a0 + ((a1 - a0) * i) / k; pts.push(new THREE.Vector2(Math.max(0, cx + rr * Math.cos(a)), cy + rr * Math.sin(a))); } };
  arc(0, CY - D, RHO, -Math.PI / 2, -PHI1, 18);
  pts.pop();
  arc(-A, CY, R, -PHI1, PHI1, n);
  pts.pop();
  arc(0, CY + D, RHO, PHI1, Math.PI / 2, 18);
  return pts;
}
/* bend a flat geometry (built at z = 0 in body space) onto the front of the body */
export function onBody(geo, lift = 0.004) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setZ(i, surfaceZ(p.getX(i), p.getY(i)) + p.getZ(i) + lift);
  p.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

/* 2D mascot pixels → 3D body space */
const px = (x, y) => [(x - 160) / 100, (310 - y) / 100];

export const COLORS = {
  body: 0x3f72ff, limb: 0xe4ebff, glove: 0xffffff, shoe: 0xe4ebff, ink: 0x14141c, blush: 0xff8fa8, tongue: 0xff7b8e,
};

/* arm poses: hand position and the curve's control point, in body space (x toward Namzi's left = +x on screen right) */
export const ARMS = {
  down: { h: [0.74, 0.66, 0.16], c: [0.86, 0.98, 0.08] },
  wave: { h: [1.02, 2.12, 0.28], c: [1.16, 1.42, 0.1] },
  up: { h: [0.9, 2.3, 0.2], c: [1.1, 1.6, 0.05] },
  hip: { h: [0.62, 0.96, 0.42], c: [1.02, 1.08, 0.2] },
  front: { h: [0.36, 1.02, 0.86], c: [0.86, 1.02, 0.5] },
  hold: { h: [0.9, 1.0, 0.6], c: [0.96, 1.02, 0.18] },
  holdHigh: { h: [0.84, 1.52, 0.64], c: [1.02, 1.12, 0.3] },
  point: { h: [1.34, 1.56, 0.34], c: [1.0, 1.34, 0.2] },
  chin: { h: [0.16, 1.16, 0.8], c: [0.88, 0.9, 0.6] },
  out: { h: [1.28, 1.12, 0.3], c: [0.98, 1.16, 0.12] },
};

/**
 * Build Namzi.
 * opts.mood   "smile" | "grin" | "o" | "flat" | "smirk"   (the mouth)
 * opts.brows  [innerLift, outerLift] in px like the 2D mascot (negative = up); false for none
 * opts.look   [x, y] -1…1, where the pupils point
 * opts.lids   0…1 top lids (sleepy / smug)
 * opts.blush  true for pink cheeks
 * opts.arms   { L: pose|{h,c}, R: pose|{h,c} }  (L mirrors to the other side)
 * opts.feet   [dxL, dxR] nudges; opts.lean degrees; opts.turn radians about y
 */
export function namzi(THREE, opts = {}) {
  const g = new THREE.Group();
  const body = new THREE.Group();
  g.add(body);

  const mat = {
    body: new THREE.MeshPhysicalMaterial({ color: opts.color ?? COLORS.body, roughness: 0.34, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.14, sheen: 0.25, sheenRoughness: 0.6, sheenColor: new THREE.Color(0xa9c3ff) }),
    white: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05 }),
    pupil: new THREE.MeshPhysicalMaterial({ color: 0x0b0d18, roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 }),
    glint: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    ink: new THREE.MeshStandardMaterial({ color: COLORS.ink, roughness: 0.45 }),
    mouth: new THREE.MeshStandardMaterial({ color: 0x1a1024, roughness: 0.6 }),
    tongue: new THREE.MeshStandardMaterial({ color: COLORS.tongue, roughness: 0.5 }),
    limb: new THREE.MeshPhysicalMaterial({ color: opts.limb ?? COLORS.limb, roughness: 0.38, clearcoat: 0.6, clearcoatRoughness: 0.3 }),
    glove: new THREE.MeshPhysicalMaterial({ color: COLORS.glove, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.25 }),
    shoe: new THREE.MeshPhysicalMaterial({ color: opts.shoe ?? COLORS.shoe, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.2 }),
    blush: new THREE.MeshBasicMaterial({ color: COLORS.blush, transparent: true, opacity: 0.5, depthWrite: false }),
  };
  const shadowy = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };

  /* the body: the lens, turned */
  const lathe = new THREE.LatheGeometry(profile(THREE), 120);
  lathe.scale(1, 1, ZS);
  body.add(shadowy(new THREE.Mesh(lathe, mat.body)));

  /* eyes */
  const look = opts.look ?? [0, 0.1];
  for (const side of [-1, 1]) {
    const [ex, ey] = px(160 + side * 23, 135);
    const n = normalAt(THREE, ex, ey);
    const eye = new THREE.Group();
    eye.position.set(ex, ey, surfaceZ(ex, ey) - 0.035);
    eye.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    const white = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), mat.white);
    white.scale.set(0.168, 0.205, 0.105);
    eye.add(white);
    const pr = opts.pupil ?? 0.088;
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 24), mat.pupil);
    const lx = look[0] * 0.055, ly = look[1] * 0.075;
    pupil.scale.set(pr, pr, 0.05);
    pupil.position.set(lx, ly - 0.01, 0.068);
    eye.add(pupil);
    const glint = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 12), mat.glint);
    glint.scale.set(0.03, 0.03, 0.012);
    glint.position.set(lx - 0.032, ly + 0.03, 0.118);
    eye.add(glint);
    const glint2 = glint.clone();
    glint2.scale.set(0.014, 0.014, 0.008);
    glint2.position.set(lx + 0.03, ly - 0.035, 0.117);
    eye.add(glint2);
    if (opts.lids) {
      // a body-coloured lid over the top of the eye
      const lid = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 24, 0, Math.PI * 2, 0, Math.PI * (0.18 + 0.32 * opts.lids)), mat.body);
      lid.scale.set(0.176, 0.214, 0.114);
      lid.rotation.x = -Math.PI / 2 + 0.2;
      eye.add(lid);
    }
    body.add(eye);
  }

  /* brows */
  if (opts.brows !== false) {
    const [bi, bo] = opts.brows ?? [0, 0];
    for (const side of [-1, 1]) {
      const ix = 160 + side * 10, ox = 160 + side * 36;
      const iy = 102 + bi, oy = 102 + bo;
      const a = px(ox, oy), b = px((ix + ox) / 2, Math.min(iy, oy) - 4), c = px(ix, iy);
      const curve = new THREE.QuadraticBezierCurve3(...[a, b, c].map(([x, y]) => new THREE.Vector3(x, y, surfaceZ(x, y) + 0.012)));
      const tube = new THREE.TubeGeometry(curve, 16, 0.024, 8, false);
      body.add(new THREE.Mesh(tube, mat.ink));
      for (const p of [curve.v0, curve.v2]) { const cap = new THREE.Mesh(new THREE.SphereGeometry(0.024, 10, 8), mat.ink); cap.position.copy(p); body.add(cap); }
    }
  }

  /* mouth and cheeks: painted onto a patch that hugs the face, from the 2D mascot's own paths,
     so they stay crisp and on-model (an open mouth built from flat geometry cuts into the curve) */
  {
    const size = 1024, k = size / 200;
    const cv = document.createElement("canvas");
    cv.width = cv.height = size;
    const c = cv.getContext("2d");
    c.setTransform(k, 0, 0, k, -60 * k, -80 * k);   // mascot pixels 60…260 × 80…280
    c.lineCap = "round"; c.lineJoin = "round";
    if (opts.blush) {
      c.fillStyle = "rgba(255,143,168,.6)";
      for (const x of [116, 204]) { c.beginPath(); c.ellipse(x, 166, 11.5, 6.5, 0, 0, Math.PI * 2); c.fill(); }
    }
    const INK = "#14141c";
    const stroke = (d, w = 5.5) => { c.strokeStyle = INK; c.lineWidth = w; c.stroke(new Path2D(d)); };
    const mood = opts.mood ?? "smile";
    const open = (d, ty, rx, ry) => {
      const p = new Path2D(d);
      c.fillStyle = "#1a1024"; c.fill(p);
      c.save(); c.clip(p); c.fillStyle = "#ff7b8e"; c.beginPath(); c.ellipse(160, ty, rx, ry, 0, 0, Math.PI * 2); c.fill(); c.restore();
      c.strokeStyle = "#1a1024"; c.lineWidth = 3; c.stroke(p);
    };
    if (mood === "grin") open("M144 169Q160 173 176 169Q173 193 160 193Q147 193 144 169Z", 191, 9, 6);
    else if (mood === "grin-big") open("M139 166Q160 171 181 166Q178 199 160 199Q142 199 139 166Z", 197, 12, 8);
    else if (mood === "o") { c.fillStyle = "#1a1024"; c.beginPath(); c.ellipse(160, 181, 8, 10.5, 0, 0, Math.PI * 2); c.fill(); }
    else if (mood === "flat") stroke("M150 177H170");
    else if (mood === "smirk") stroke("M149 178Q162 181 173 170");
    else if (mood === "small") stroke("M151 173Q160 181 169 173");
    else if (mood === "frown") stroke("M148 183Q160 172 172 183");
    else stroke("M147 172Q160 185 173 172");
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const patch = new THREE.PlaneGeometry(2, 2, 96, 96);
    patch.translate(0, 1.3, 0);
    const faceMat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: 0.02, roughness: 0.4, polygonOffset: true, polygonOffsetFactor: -2, depthWrite: false });
    body.add(new THREE.Mesh(onBody(patch, 0.003), faceMat));
  }

  /* arms: noodles from the shoulders, white gloves */
  const hand = {};
  const arms = { L: "down", R: "down", ...(opts.arms || {}) };
  for (const [key, side] of [["L", -1], ["R", 1]]) {
    let a = arms[key];
    if (typeof a === "string") a = ARMS[a];
    const h = new THREE.Vector3(a.h[0] * side, a.h[1], a.h[2]);
    const c = new THREE.Vector3(a.c[0] * side, a.c[1], a.c[2]);
    const s = new THREE.Vector3(0.6 * side, 1.24, 0.1);
    const curve = new THREE.QuadraticBezierCurve3(s, c, h);
    body.add(shadowy(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.046, 12, false), mat.limb)));
    const glove = shadowy(new THREE.Mesh(new THREE.SphereGeometry(0.105, 32, 24), mat.glove));
    glove.position.copy(h);
    glove.scale.set(1, 0.96, 0.9);
    body.add(glove);
    // a thumb, so the glove reads as a hand
    const thumb = shadowy(new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 12), mat.glove));
    const dir = h.clone().sub(c).normalize();
    thumb.position.copy(h).add(new THREE.Vector3(-side * 0.05, 0.075, 0.03)).addScaledVector(dir, -0.02);
    body.add(thumb);
    hand[key] = h;
  }

  /* legs and shoes */
  const feet = opts.feet ?? [0, 0];
  for (const [i, side] of [[0, -1], [1, 1]]) {
    const hip = new THREE.Vector3(0.14 * side, 0.74, 0.02);
    const foot = new THREE.Vector3((0.23 + feet[i]) * side, 0.13, 0.06);
    const mid = new THREE.Vector3((0.2 + feet[i] / 2) * side, 0.44, 0.06);
    body.add(shadowy(new THREE.Mesh(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(hip, mid, foot), 20, 0.048, 12, false), mat.limb)));
    const shoe = shadowy(new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), mat.shoe));
    shoe.scale.set(0.15, 0.085, 0.22);
    shoe.position.set(foot.x + side * 0.03, 0.085, foot.z + 0.08);
    shoe.rotation.y = side * 0.25;
    body.add(shoe);
  }

  if (opts.lean) body.rotation.z = THREE.MathUtils.degToRad(-opts.lean);
  if (opts.turn) g.rotation.y = opts.turn;
  g.updateMatrixWorld(true);
  for (const k of Object.keys(hand)) hand[k] = body.localToWorld(hand[k].clone());
  return { group: g, body, hand, mat };
}
