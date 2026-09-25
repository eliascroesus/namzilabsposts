#!/usr/bin/env node
// Variants of the primary mark (01 Between, mono): the same two rings with the space between
// them left empty, in different ring treatments and on different grounds, plus a few fun ones.
// Each is a self-contained 1024×1024 SVG (a full-bleed profile picture; platforms crop it to a
// circle). brand/logos/variants.html renders the PNGs.
//   node tools/build-variants.mjs  →  brand/logos/variants/<id>.svg + variants.json
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "brand/logos/variants");
mkdirSync(OUT, { recursive: true });

// The mark at avatar size: the 64-unit geometry (r 15, centres 14 apart, stroke 4.6) × 10
const C = 512, R = 150, DX = 70, W = 46;
const L = C - DX, Rt = C + DX; // ring centres
const CROSS_Y = Math.sqrt(R * R - DX * DX); // the rings cross at (C, C ± CROSS_Y)
const INK = "#14141C", BLUE = "#2F5FD8", WHITE = "#FFFFFF";

// a seeded random, so every build draws the same stars, sprinkles and pencil wobble
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const f = (n) => Math.round(n * 10) / 10;

const svg = (body, defs = "") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">${defs ? `<defs>${defs}</defs>` : ""}${body}</svg>\n`;
const ring = (cx, stroke, w = W, extra = "") => `<circle cx="${cx}" cy="${C}" r="${R}" fill="none" stroke="${stroke}" stroke-width="${w}"${extra}/>`;
const rings = (stroke, w = W, extra = "") => ring(L, stroke, w, extra) + ring(Rt, stroke, w, extra);
const bg = (fill) => `<rect width="1024" height="1024" fill="${fill}"/>`;
// an arc of a ring (centre cx) through the crossing at y = C ± CROSS_Y, ± deg degrees either side
function arcAt(cx, bottom, deg) {
  const py = bottom ? C + CROSS_Y : C - CROSS_Y;
  const a0 = Math.atan2(py - C, C - cx), d = (deg * Math.PI) / 180;
  const p = (a) => `${f(cx + R * Math.cos(a))} ${f(C + R * Math.sin(a))}`;
  return `M${p(a0 - d)}A${R} ${R} 0 0 1 ${p(a0 + d)}`;
}
// the rings woven: the left ring passes over at the top crossing, the right ring over at the bottom
function woven(stroke, w = W, gap = 16, id = "wv") {
  const defs = `<mask id="${id}L"><rect width="1024" height="1024" fill="#fff"/><path d="${arcAt(Rt, true, 26)}" fill="none" stroke="#000" stroke-width="${w + gap * 2}"/></mask>
    <mask id="${id}R"><rect width="1024" height="1024" fill="#fff"/><path d="${arcAt(L, false, 26)}" fill="none" stroke="#000" stroke-width="${w + gap * 2}"/></mask>`;
  return { defs, body: `<g mask="url(#${id}L)">${ring(L, stroke, w)}</g><g mask="url(#${id}R)">${ring(Rt, stroke, w)}</g>` };
}
// shading across a ring's stroke, so it reads as a torus: t runs 0 → 1 from the inner edge to the outer
function tube(id, cx, w, stops) {
  const inner = R - w / 2, outer = R + w / 2;
  return `<radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${C}" r="${outer}">${stops
    .map(([t, c, o = 1]) => `<stop offset="${f(((inner + t * w) / outer) * 1000) / 1000}" stop-color="${c}" stop-opacity="${o}"/>`)
    .join("")}</radialGradient>`;
}
const grain = (id = "gr", o = 0.07) => ({
  defs: `<filter id="${id}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 ${o} 0"/></filter>`,
  body: `<rect width="1024" height="1024" filter="url(#${id})"/>`,
});
function grid(step, color, o = 1) {
  let d = "";
  for (let x = step; x < 1024; x += step) d += `M${x} 0V1024`;
  for (let y = step; y < 1024; y += step) d += `M0 ${y}H1024`;
  return `<path d="${d}" stroke="${color}" stroke-width="2" opacity="${o}"/>`;
}

const V = [];
const add = (id, name, group, note, body, defs = "", pairs = null) => V.push({ id, name, group, note, pairs, svg: svg(body, defs) });

/* ── ring styles ──────────────────────────────────────────────────────── */
{
  const g = grain("g1", 0.05);
  add("hairline", "Hairline", "Ring styles", "Fine ink lines on paper. The quietest version, for print and formal decks.",
    bg("#F4F5F9") + g.body + rings(INK, 18), g.defs, "formula");
}
add("bold", "Bold", "Ring styles", "Thick white rings on brand blue. Reads from across a room, and at favicon size.",
  bg("url(#bb)") + rings(WHITE, 84),
  `<linearGradient id="bb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3D6DF2"/><stop offset="1" stop-color="#2451C4"/></linearGradient>`, "bigtype");
add("gradient", "Gradient", "Ring styles", "Rings stroked from sky to violet on ink.",
  bg("#0B0D14") + `<circle cx="${C}" cy="${C}" r="420" fill="url(#gh)"/>` + rings("url(#gs)", W),
  `<linearGradient id="gs" gradientUnits="userSpaceOnUse" x1="${L - R}" y1="${C - R}" x2="${Rt + R}" y2="${C + R}"><stop offset="0" stop-color="#7FB2FF"/><stop offset=".55" stop-color="#8F8CFF"/><stop offset="1" stop-color="#C08CFF"/></linearGradient>
   <radialGradient id="gh"><stop offset="0" stop-color="#5B63FF" stop-opacity=".22"/><stop offset="1" stop-color="#5B63FF" stop-opacity="0"/></radialGradient>`);
add("outline", "Outline", "Ring styles", "Each ring drawn as a double line, like a racing stripe.",
  bg(INK) + rings(WHITE, 58) + rings(INK, 30), "");
add("split", "Split", "Ring styles", "Two tools, two tones: one white ring, one light-blue ring.",
  bg(INK) + (() => { const w = woven("", W, 14, "sp"); return w.body.replace('stroke=""', `stroke="${WHITE}"`).replace('stroke=""', `stroke="#8FB0FF"`); })(),
  woven("", W, 14, "sp").defs);
{
  const w = woven(WHITE, W, 16, "lk");
  add("linked", "Linked", "Ring styles", "The rings woven through each other, over and under, like two links of a chain.",
    bg("url(#lb)") + w.body,
    `<linearGradient id="lb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16305E"/><stop offset="1" stop-color="#2B53AE"/></linearGradient>` + w.defs);
}
add("emboss", "Emboss", "Grounds", "Pressed into paper: no colour at all, just light and shadow.",
  bg("#E9ECF3") +
    `<g filter="url(#eb)">${rings("#FFFFFF", W).replaceAll(`cy="${C}"`, `cy="${C - 5}"`).replace(`cx="${L}"`, `cx="${L - 5}"`).replace(`cx="${Rt}"`, `cx="${Rt - 5}"`)}</g>` +
    `<g filter="url(#eb)">${rings("#AEB5C6", W).replaceAll(`cy="${C}"`, `cy="${C + 6}"`).replace(`cx="${L}"`, `cx="${L + 6}"`).replace(`cx="${Rt}"`, `cx="${Rt + 6}"`)}</g>` +
    rings("#E9ECF3", W - 2),
  `<filter id="eb" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.5"/></filter>`);

/* ── grounds ──────────────────────────────────────────────────────────── */
add("midnight", "Midnight grid", "Grounds", "White rings on navy, over a faint grid and a blue glow.",
  bg("#080B16") + grid(64, "#8FB0FF", 0.07) + `<circle cx="${C}" cy="${C}" r="460" fill="url(#mg)"/>` + rings(WHITE, W),
  `<radialGradient id="mg"><stop offset="0" stop-color="#2F5FD8" stop-opacity=".45"/><stop offset="1" stop-color="#2F5FD8" stop-opacity="0"/></radialGradient>`);
{
  // a technical drawing: grid, construction lines, centre marks and a dimension between the centres
  const t = "#DDE8FF";
  let draw = grid(32, "#FFFFFF", 0.07) + grid(128, "#FFFFFF", 0.14);
  draw += `<g stroke="${t}" stroke-width="3" fill="none" opacity=".55">
    <circle cx="${L}" cy="${C}" r="${R + 44}" stroke-dasharray="10 12"/><circle cx="${Rt}" cy="${C}" r="${R + 44}" stroke-dasharray="10 12"/>
    <path d="M${L - R - 90} ${C}H${Rt + R + 90}M${C} ${C - R - 90}V${C + R + 90}" stroke-dasharray="26 10 4 10"/></g>`;
  for (const x of [L, Rt]) draw += `<path d="M${x - 22} ${C}H${x + 22}M${x} ${C - 22}V${C + 22}" stroke="${t}" stroke-width="4"/>`;
  const y = C + R + 120;
  draw += `<g stroke="${t}" stroke-width="3" fill="${t}"><path d="M${L} ${C + 30}V${y + 22}M${Rt} ${C + 30}V${y + 22}" opacity=".6"/><path d="M${L + 16} ${y}H${Rt - 16}"/><path d="M${L} ${y}l20 -9v18Z"/><path d="M${Rt} ${y}l-20 -9v18Z"/></g>`;
  add("blueprint", "Blueprint", "Grounds", "The mark as a technical drawing: construction lines, centre marks and the distance between the two tools.",
    bg("#1F4FB8") + draw + rings(WHITE, 30), "", "blueprint");
}
{
  const GL = [[0, "#FFFFFF", 0.95], [0.18, "#FFFFFF", 0.55], [0.5, "#FFFFFF", 0.3], [0.82, "#FFFFFF", 0.6], [1, "#FFFFFF", 1]];
  add("glass", "Glass", "Grounds", "Frosted-glass rings over a soft blue-violet mesh.",
    bg("#C9D6FF") + `<circle cx="230" cy="250" r="460" fill="url(#m1)"/><circle cx="830" cy="780" r="520" fill="url(#m2)"/><circle cx="860" cy="170" r="320" fill="url(#m3)"/>` +
      `<g filter="url(#gsh)">${rings("#1F2A7A", 64)}</g>` + ring(L, "url(#tgL)", 64) + ring(Rt, "url(#tgR)", 64) +
      ring(L, "rgba(255,255,255,.95)", 4, ` stroke-dasharray="160 780" stroke-dashoffset="300" transform="translate(-6 -6)"`) + ring(Rt, "rgba(255,255,255,.95)", 4, ` stroke-dasharray="160 780" stroke-dashoffset="300" transform="translate(-6 -6)"`),
    `<radialGradient id="m1"><stop offset="0" stop-color="#6F8BFF"/><stop offset="1" stop-color="#6F8BFF" stop-opacity="0"/></radialGradient>
     <radialGradient id="m2"><stop offset="0" stop-color="#B08CFF"/><stop offset="1" stop-color="#B08CFF" stop-opacity="0"/></radialGradient>
     <radialGradient id="m3"><stop offset="0" stop-color="#7FE0FF" stop-opacity=".8"/><stop offset="1" stop-color="#7FE0FF" stop-opacity="0"/></radialGradient>
     ${tube("tgL", L, 64, GL)}${tube("tgR", Rt, 64, GL)}
     <filter id="gsh" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="16"/><feOffset dy="20"/><feComponentTransfer><feFuncA type="linear" slope=".42"/></feComponentTransfer></filter>`, "glass");
}
add("neon", "Neon", "Grounds", "A neon sign on a dark wall: blue and violet tubes with a glow.",
  bg("#07070D") + `<circle cx="${C}" cy="${C}" r="470" fill="url(#nw)"/>` +
    `<g filter="url(#nb)">${ring(L, "#4D8BFF", 30)}${ring(Rt, "#C45BFF", 30)}</g>` +
    `<g filter="url(#nc)">${ring(L, "#6FA3FF", 22)}${ring(Rt, "#D98CFF", 22)}</g>` + ring(L, "#EAF2FF", 7) + ring(Rt, "#F7E9FF", 7),
  `<radialGradient id="nw"><stop offset="0" stop-color="#3B2A7A" stop-opacity=".45"/><stop offset="1" stop-color="#3B2A7A" stop-opacity="0"/></radialGradient>
   <filter id="nb" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="26"/></filter>
   <filter id="nc" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter>`, "neon");
{
  const CH = [[0, "#4A505C"], [0.18, "#D9DEE7"], [0.38, "#FFFFFF"], [0.55, "#8C93A1"], [0.78, "#E8ECF2"], [1, "#50565F"]];
  add("chrome", "Chrome", "Grounds", "Polished metal rings on graphite.",
    bg("url(#cg)") + `<g filter="url(#cs)">${rings("#000", W + 6)}</g>` + ring(L, "url(#tcL)", W + 6) + ring(Rt, "url(#tcR)", W + 6) +
      ring(L, "rgba(255,255,255,.9)", 3, ` stroke-dasharray="120 820" stroke-dashoffset="330"`) + ring(Rt, "rgba(255,255,255,.9)", 3, ` stroke-dasharray="120 820" stroke-dashoffset="330"`),
    `<linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A2E37"/><stop offset="1" stop-color="#0E1014"/></linearGradient>
     ${tube("tcL", L, W + 6, CH)}${tube("tcR", Rt, W + 6, CH)}
     <filter id="cs" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="16"/><feOffset dy="22"/><feComponentTransfer><feFuncA type="linear" slope=".55"/></feComponentTransfer></filter>`);
}

/* ── fun ──────────────────────────────────────────────────────────────── */
// Precious is a render, not a drawing: the 3D gold rings (brand/logos/one-ring/rings.html) in front of
// a fiery mountain (brand/logos/one-ring/scenes.html). So it ships as a PNG only.
V.push({ id: "precious", name: "Precious", group: "Fun", note: "Two heavy gold bands with a glowing inscription, in front of a fiery mountain. One place to rule them all.", pairs: "precious", raster: "one-ring/precious-1024.png" });
{
  let sp = "";
  for (let i = 0; i < 7; i++) {
    const x = 170 + rnd() * 690, y = 150 + rnd() * 720, s = 10 + rnd() * 16;
    if (Math.hypot(x - L, y - C) < R + 50 || Math.hypot(x - Rt, y - C) < R + 50) continue;
    sp += `<path d="M${f(x)} ${f(y - s * 2)}Q${f(x)} ${f(y)} ${f(x + s * 2)} ${f(y)}Q${f(x)} ${f(y)} ${f(x)} ${f(y + s * 2)}Q${f(x)} ${f(y)} ${f(x - s * 2)} ${f(y)}Q${f(x)} ${f(y)} ${f(x)} ${f(y - s * 2)}Z" fill="#fff" opacity=".9"/>`;
  }
  const w = woven("", 42, 14, "wd");
  add("wedding", "Wedding rings", "Fun", "A gold ring and a platinum ring, finally together. Your Stripe and your CRM, married.",
    bg("url(#wb)") + `<g filter="url(#wsh)">${rings("#C9868F", 42)}</g>` +
      w.body.replace('stroke=""', 'stroke="url(#wg)"').replace('stroke=""', 'stroke="url(#wp)"') +
      ring(L, "rgba(255,255,255,.8)", 4, ` stroke-dasharray="70 870" stroke-dashoffset="320"`) + ring(Rt, "rgba(255,255,255,.9)", 4, ` stroke-dasharray="70 870" stroke-dashoffset="330"`) + sp,
    `<linearGradient id="wb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FBE3E6"/><stop offset="1" stop-color="#F3C6CE"/></linearGradient>
     ${tube("wg", L, 42, [[0, "#7A4E0C"], [0.22, "#D4A032"], [0.45, "#FFF1B8"], [0.65, "#E6B545"], [1, "#8A5A10"]])}
     ${tube("wp", Rt, 42, [[0, "#6E7584"], [0.22, "#C9CFDA"], [0.45, "#FFFFFF"], [0.65, "#D4D9E2"], [1, "#7C8494"]])}
     <filter id="wsh" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="12"/><feOffset dy="16"/><feComponentTransfer><feFuncA type="linear" slope=".45"/></feComponentTransfer></filter>` + w.defs, "wedding");
}
add("coffee", "Coffee rings", "Fun", "Two mug stains on the desk of whoever still builds the Monday report by hand.",
  bg("#F5F1EA") + grain("cgr", 0.08).body +
    `<g filter="url(#cw)"><g opacity=".85">${ring(L - 6, "#B98652", 40, ' opacity=".35"')}${ring(L, "#7A4A26", 12, ' opacity=".55"')}</g>` +
    `<g opacity=".85">${ring(Rt + 8, "#B98652", 38, ' opacity=".32"')}${ring(Rt, "#7A4A26", 11, ' opacity=".5"')}</g></g>`,
  grain("cgr", 0.08).defs + `<filter id="cw" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="26"/><feGaussianBlur stdDeviation="1.6"/></filter>`);
{
  // two donuts: dough, wavy icing, sprinkles; the holes stay empty
  const SPR = ["#FF5C8A", "#FFD23F", "#3DDC97", "#4D8BFF", "#FFFFFF", "#B26BFF"];
  const donut = (cx, icing, id) => {
    let s = "";
    for (let i = 0; i < 34; i++) {
      const a = rnd() * Math.PI * 2, rr = R - 18 + rnd() * 36;
      const x = cx + Math.cos(a) * rr, y = C + Math.sin(a) * rr, rot = rnd() * 180;
      s += `<rect x="${f(x - 9)}" y="${f(y - 3.2)}" width="18" height="6.4" rx="3.2" fill="${SPR[i % SPR.length]}" transform="rotate(${f(rot)} ${f(x)} ${f(y)})"/>`;
    }
    return `<g filter="url(#dsh)">${ring(cx, "#000", 118, ' opacity=".35"')}</g>${ring(cx, `url(#${id}d)`, 118)}<g filter="url(#${id})">${ring(cx, `url(#${id}i)`, 92)}</g>${ring(cx, "rgba(255,255,255,.4)", 9, ` transform="translate(-8 -10)" stroke-dasharray="120 900" stroke-dashoffset="240"`)}${s}`;
  };
  add("donuts", "Donuts", "Fun", "Two donuts, holes intact. Mmm… all your data in one place.",
    bg("#CFE3FF") + donut(L - 8, "#FF8FB3", "di1") + donut(Rt + 8, "#6B3E26", "di2"),
    `${tube("di1d", L - 8, 118, [[0, "#A8652A"], [0.35, "#E7B37A"], [0.65, "#DDA25F"], [1, "#9C5B22"]])}${tube("di2d", Rt + 8, 118, [[0, "#A8652A"], [0.35, "#E7B37A"], [0.65, "#DDA25F"], [1, "#9C5B22"]])}
     ${tube("di1i", L - 8, 92, [[0, "#E25C8A"], [0.4, "#FFA6C4"], [0.7, "#FF8FB3"], [1, "#D9507F"]])}${tube("di2i", Rt + 8, 92, [[0, "#3E2214"], [0.4, "#8A5634"], [0.7, "#6B3E26"], [1, "#3A1F12"]])}
     <filter id="di1" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="22"/></filter>
     <filter id="di2" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="9"/><feDisplacementMap in="SourceGraphic" scale="22"/></filter>
     <filter id="dsh" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="16"/><feOffset dy="20"/></filter>`, "donut");
}
{
  const buoy = (cx) => `<g filter="url(#lsh)">${ring(cx, "#000", 96, ' opacity=".3"')}</g>${ring(cx, "#FFFFFF", 96)}${ring(cx, "#E8412F", 96, ` stroke-dasharray="${f((2 * Math.PI * R) / 8)} ${f((2 * Math.PI * R) / 8)}" transform="rotate(22.5 ${cx} ${C})"`)}<circle cx="${cx}" cy="${C}" r="${R + 49}" fill="none" stroke="#C8392A" stroke-width="3" opacity=".5"/><circle cx="${cx}" cy="${C}" r="${R - 49}" fill="none" stroke="#C8392A" stroke-width="3" opacity=".5"/>`;
  let waves = "";
  for (let y = 120; y < 1024; y += 110) waves += `<path d="M0 ${y}q64 -26 128 0t128 0t128 0t128 0t128 0t128 0t128 0t128 0" fill="none" stroke="#FFFFFF" stroke-width="5" opacity=".14"/>`;
  add("lifebuoy", "Life rings", "Fun", "Two life rings for the data team. Throw them a lifeline.",
    bg("url(#sea)") + waves + buoy(L - 22) + buoy(Rt + 22),
    `<linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A7FD4"/><stop offset="1" stop-color="#0F4C9A"/></linearGradient>
     <filter id="lsh" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="14"/><feOffset dy="18"/></filter>`);
}
{
  // 8-bit: a square wherever a grid cell's centre falls on either ring
  const cell = 20; let px = "";
  for (let y = cell / 2; y < 1024; y += cell) for (let x = cell / 2; x < 1024; x += cell) {
    const d1 = Math.abs(Math.hypot(x - L, y - C) - R), d2 = Math.abs(Math.hypot(x - Rt, y - C) - R);
    if (d1 <= W / 2 + 1 || d2 <= W / 2 + 1) px += `<rect x="${x - cell / 2 + 1}" y="${y - cell / 2 + 1}" width="${cell - 2}" height="${cell - 2}"/>`;
  }
  add("pixel", "Pixel", "Fun", "The mark in 8-bit, one square per data point.",
    bg("#101223") + grid(cell, "#FFFFFF", 0.05) + `<g fill="#FFFFFF">${px}</g>`, "");
}
{
  // a napkin sketch: a few wobbly pencil passes per ring, on ruled paper
  let lines = "";
  for (let y = 136; y < 1024; y += 64) lines += `<path d="M0 ${y}H1024" stroke="#8FB3E8" stroke-width="3" opacity=".55"/>`;
  lines += `<path d="M150 0V1024" stroke="#F08A8A" stroke-width="3" opacity=".7"/>`;
  const pass = (cx) => {
    let s = "";
    for (let k = 0; k < 4; k++) {
      const pts = [];
      const a0 = rnd() * Math.PI * 2, span = Math.PI * 2 * (1.02 + rnd() * 0.08);
      for (let i = 0; i <= 48; i++) {
        const a = a0 + (span * i) / 48, rr = R + (rnd() - 0.5) * 9 + Math.sin(a * 3 + k) * 4;
        pts.push(`${f(cx + Math.cos(a) * rr + (rnd() - 0.5) * 3)} ${f(C + Math.sin(a) * rr + (rnd() - 0.5) * 3)}`);
      }
      s += `<path d="M${pts.join("L")}" fill="none" stroke="#2B2F3A" stroke-width="${f(5 + rnd() * 5)}" stroke-linecap="round" stroke-linejoin="round" opacity="${f(0.55 + rnd() * 0.35)}"/>`;
    }
    return s;
  };
  add("sketch", "Napkin sketch", "Fun", "Where it started: two circles on a notepad in a meeting about why the numbers don't match.",
    bg("#FBFBF7") + grain("sg", 0.06).body + lines + `<g filter="url(#pen)">${pass(L)}${pass(Rt)}</g>`,
    grain("sg", 0.06).defs + `<filter id="pen" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="4"/></filter>`, "expectation");
}
{
  let stars = "";
  for (let i = 0; i < 170; i++) {
    const x = rnd() * 1024, y = rnd() * 1024, r = rnd() < 0.9 ? 1 + rnd() * 1.6 : 2.6 + rnd() * 2;
    stars += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="#fff" opacity="${f(0.35 + rnd() * 0.65)}"/>`;
  }
  add("cosmic", "Cosmic", "Fun", "The rings as two orbits in deep space. Galaxy-brain energy.",
    bg("#05060F") + `<circle cx="300" cy="330" r="430" fill="url(#n1)"/><circle cx="760" cy="720" r="460" fill="url(#n2)"/>` + stars +
      `<g filter="url(#cgw)">${rings("#8FB0FF", 36)}</g>` + rings("#F3F6FF", 16),
    `<radialGradient id="n1"><stop offset="0" stop-color="#4B3BFF" stop-opacity=".45"/><stop offset="1" stop-color="#4B3BFF" stop-opacity="0"/></radialGradient>
     <radialGradient id="n2"><stop offset="0" stop-color="#FF4FD8" stop-opacity=".3"/><stop offset="1" stop-color="#FF4FD8" stop-opacity="0"/></radialGradient>
     <filter id="cgw" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="18"/></filter>`, "galaxy");
}
add("sticker", "Sticker", "Fun", "A die-cut sticker of the mark, slapped on a bright background.",
  bg("#FFD84D") + `<g filter="url(#ssh)">${rings("#FFFFFF", W + 56)}</g>` + rings("#FFFFFF", W + 56) + rings(INK, W),
  `<filter id="ssh" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="10"/><feOffset dx="6" dy="14"/><feComponentTransfer><feFuncA type="linear" slope=".3"/></feComponentTransfer></filter>`, "starter");

{
  // soap bubbles: thin-film colours across each ring, a bright rim and a few loose bubbles
  const IR = [[0, "#FFFFFF", 0.9], [0.12, "#7FE0FF", 0.55], [0.3, "#FF8FD8", 0.35], [0.5, "#FFE07A", 0.25], [0.7, "#8FB0FF", 0.4], [0.88, "#B28CFF", 0.6], [1, "#FFFFFF", 0.95]];
  let loose = "";
  for (let i = 0; i < 9; i++) {
    const x = 120 + rnd() * 780, y = 110 + rnd() * 800, r = 16 + rnd() * 34;
    if (Math.hypot(x - L, y - C) < R + 60 + r || Math.hypot(x - Rt, y - C) < R + 60 + r) continue;
    loose += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="url(#lb${i % 2})" stroke="#fff" stroke-opacity=".7" stroke-width="2"/><path d="M${f(x - r * 0.55)} ${f(y - r * 0.2)}A${f(r * 0.6)} ${f(r * 0.6)} 0 0 1 ${f(x - r * 0.1)} ${f(y - r * 0.6)}" fill="none" stroke="#fff" stroke-width="${f(Math.max(2, r * 0.12))}" stroke-linecap="round" opacity=".85"/>`;
  }
  add("bubbles", "Soap bubbles", "Fun", "Two soap-bubble rings, all thin-film colour and no fill. Pop.",
    bg("url(#bsk)") + loose + ring(L, "url(#ibL)", 40) + ring(Rt, "url(#ibR)", 40) +
      rings("rgba(255,255,255,.95)", 5, ` stroke-linecap="round" stroke-dasharray="110 830" stroke-dashoffset="345"`),
    `<linearGradient id="bsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ED0FF"/><stop offset="1" stop-color="#5F8FEA"/></linearGradient>
     ${tube("ibL", L, 40, IR)}${tube("ibR", Rt, 40, IR)}
     <radialGradient id="lb0" cx=".35" cy=".3"><stop offset="0" stop-color="#fff" stop-opacity=".05"/><stop offset=".8" stop-color="#FF8FD8" stop-opacity=".12"/><stop offset="1" stop-color="#7FE0FF" stop-opacity=".4"/></radialGradient>
     <radialGradient id="lb1" cx=".35" cy=".3"><stop offset="0" stop-color="#fff" stop-opacity=".05"/><stop offset=".8" stop-color="#FFE07A" stop-opacity=".12"/><stop offset="1" stop-color="#B28CFF" stop-opacity=".45"/></radialGradient>`);
}
{
  // inflated: glossy, puffy rings, one pink and one blue, like foil balloons
  const PK = [[0, "#B8336F"], [0.22, "#FF6FAE"], [0.42, "#FFC2DD"], [0.62, "#FF7DB6"], [1, "#9C2A5D"]];
  const BL = [[0, "#1E3F9E"], [0.22, "#4D8BFF"], [0.42, "#BFD6FF"], [0.62, "#5C95FF"], [1, "#1B3587"]];
  add("balloon", "Balloon", "Fun", "Puffy, glossy, inflated rings. The party version.",
    bg("url(#blb)") + `<g filter="url(#bsh)">${rings("#3B2A7A", 78)}</g>` + ring(L, "url(#baL)", 78) + ring(Rt, "url(#baR)", 78) +
      `<g filter="url(#bhl)">${ring(L, "#FFFFFF", 12, ` stroke-linecap="round" stroke-dasharray="120 820" stroke-dashoffset="350" transform="translate(-10 -12)"`)}${ring(Rt, "#FFFFFF", 12, ` stroke-linecap="round" stroke-dasharray="120 820" stroke-dashoffset="350" transform="translate(-10 -12)"`)}</g>`,
    `<linearGradient id="blb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F1E9FF"/><stop offset="1" stop-color="#D9CCFF"/></linearGradient>
     ${tube("baL", L, 78, PK)}${tube("baR", Rt, 78, BL)}
     <filter id="bsh" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="18"/><feOffset dy="26"/><feComponentTransfer><feFuncA type="linear" slope=".3"/></feComponentTransfer></filter>
     <filter id="bhl" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter>`);
}
{
  // gummy peach rings: translucent orange-to-yellow candy, rolled in sugar
  const GM = [[0, "#FF5A1F", 0.95], [0.3, "#FF8A3D", 0.92], [0.55, "#FFB547", 0.9], [0.8, "#FFE08A", 0.92], [1, "#FFC857", 0.95]];
  let sugar = "";
  for (const cx of [L - 6, Rt + 6]) for (let i = 0; i < 150; i++) {
    const a = rnd() * Math.PI * 2, rr = R - 34 + rnd() * 68, s2 = 3 + rnd() * 5;
    const x = cx + Math.cos(a) * rr, y = C + Math.sin(a) * rr;
    sugar += `<rect x="${f(x - s2 / 2)}" y="${f(y - s2 / 2)}" width="${f(s2)}" height="${f(s2)}" rx="1" fill="#fff" opacity="${f(0.55 + rnd() * 0.4)}" transform="rotate(${f(rnd() * 90)} ${f(x)} ${f(y)})"/>`;
  }
  add("gummy", "Gummy rings", "Fun", "Two peach-ring sweets, rolled in sugar. Sweet numbers only.",
    bg("#FFF3E4") + `<g filter="url(#gsh2)">${ring(L - 6, "#B34A12", 76)}${ring(Rt + 6, "#B34A12", 76)}</g>` +
      ring(L - 6, "url(#gmL)", 76) + ring(Rt + 6, "url(#gmR)", 76) + sugar,
    `${tube("gmL", L - 6, 76, GM)}${tube("gmR", Rt + 6, 76, GM)}
     <filter id="gsh2" x="-30%" y="-30%" width="160%" height="175%"><feGaussianBlur stdDeviation="14"/><feOffset dy="18"/><feComponentTransfer><feFuncA type="linear" slope=".28"/></feComponentTransfer></filter>`);
}

/* ── games: the mark played by the games and films the pop banners borrow from ──
   Our own drawings of a format (a maze, an 8-bit level, a cave, a VS screen, …); no characters,
   sprites, names or lettering from any of them. Each pairs with its banner. */
// the rings as squares: one cell wherever its centre falls on either ring; paint(x, y, d, a) picks the colour
// (d = distance from the ring's centre line, a = angle round the ring)
function pixelRings(cell, paint, w = W) {
  let s = "";
  for (let y = cell / 2; y < 1024; y += cell) for (let x = cell / 2; x < 1024; x += cell) {
    const d1 = Math.hypot(x - L, y - C) - R, d2 = Math.hypot(x - Rt, y - C) - R;
    const on1 = Math.abs(d1) <= w / 2, on2 = Math.abs(d2) <= w / 2;
    if (!on1 && !on2) continue;
    const cx = on1 ? L : Rt, d = on1 ? d1 : d2, a = Math.atan2(y - C, x - cx);
    const fill = paint(x, y, d, a, on1 ? 0 : 1);
    if (fill) s += `<rect x="${x - cell / 2}" y="${y - cell / 2}" width="${cell}" height="${cell}" fill="${fill}"/>`;
  }
  return s;
}
const glowF = (id, sd, o = 1) => `<filter id="${id}" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="${sd}" result="b"/><feComponentTransfer in="b" result="c"><feFuncA type="linear" slope="${o}"/></feComponentTransfer><feMerge><feMergeNode in="c"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
{
  // chomper: the left ring opens a mouth and eats its way along a row of pellets, in a maze
  const a0 = (32 * Math.PI) / 180, P = (a) => `${f(L + R * Math.cos(a))} ${f(C + R * Math.sin(a))}`;
  const mouthRing = `<path d="M${P(Math.PI + a0)}A${R} ${R} 0 1 1 ${P(Math.PI - a0)}" fill="none" stroke="#FFD23F" stroke-width="${W + 10}"/>`;
  let pel = "";
  for (let x = 96; x < L - R + 20; x += 52) pel += `<rect x="${x - 9}" y="${C - 9}" width="18" height="18" fill="#FFD9C2"/>`;
  for (let x = Rt + R + 60; x < 940; x += 52) pel += `<rect x="${x - 9}" y="${C - 9}" width="18" height="18" fill="#FFD9C2"/>`;
  const wall = (x, y, w, h, r) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="none" stroke="#2946FF" stroke-width="16"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="none" stroke="#05050F" stroke-width="5"/>`;
  add("chomper", "Chomper", "Games", "The left ring opens wide and eats the duplicates, one pellet at a time. Pairs with the maze-chase banner.",
    bg("#05050F") + `<g filter="url(#chw)">${wall(40, 40, 944, 944, 90)}${wall(150, 170, 724, 56, 28)}${wall(150, 798, 724, 56, 28)}</g>` + pel +
      `<circle cx="938" cy="${C}" r="24" fill="#FFD9C2" filter="url(#chg)"/><g filter="url(#chg)">${mouthRing}${ring(Rt, "#FFD23F", W + 10)}</g>`,
    glowF("chg", 10, 0.9) + glowF("chw", 6, 0.8), "arcade");
}
{
  // 8-bit coins: the rings as gold blocks over a pixel sky, on a row of bricks
  const u = 32, gold = (x, y, d) => (d < -18 ? "#FFF0A8" : d > 16 ? "#C98A00" : "#FFD23F");
  let bricks = `<rect y="864" width="1024" height="160" fill="#C96A32"/>`;
  for (let r = 0; r < 5; r++) { bricks += `<rect y="${864 + r * 32}" width="1024" height="4" fill="#6E2D0C"/>`; for (let x = (r % 2) * 32; x < 1024; x += 64) bricks += `<rect x="${x}" y="${864 + r * 32}" width="4" height="32" fill="#6E2D0C"/>`; }
  const cloud = (x, y, k) => [[2, 0, 4, 1], [1, 1, 7, 1], [0, 2, 10, 2], [1, 4, 8, 1]].map(([a, b, w, h]) => `<rect x="${x + a * k}" y="${y + b * k}" width="${w * k}" height="${h * k}" fill="#FFFFFF"/>`).join("");
  add("coins", "8-bit coins", "Games", "The rings as blocky gold coins over a pixel sky. Pairs with the platformer banner.",
    bg("#6B9CFF") + cloud(96, 110, 18) + cloud(700, 70, 14) + `<path d="M620 864Q800 640 980 864Z" fill="#3FBF55" stroke="#1D7A2E" stroke-width="8"/>` + bricks +
      `<g shape-rendering="crispEdges">${pixelRings(u, () => "#5A2A06", 104)}${pixelRings(u, gold, 70)}</g>`, "", "platformer");
}
{
  // diamond rings: the rings as cut diamond blocks, set in stone
  seed = 77;
  let stone = "";
  for (let y = 0; y < 1024; y += 32) for (let x = 0; x < 1024; x += 32) stone += `<rect x="${x}" y="${y}" width="32" height="32" fill="${["#7D7D7D", "#727272", "#868686", "#6A6A6A", "#8F8F8F"][Math.floor(rnd() * 5)]}"/>`;
  const dia = (x, y, d) => { const r = rnd(); return r < 0.06 ? "#FFFFFF" : d < -14 ? "#C9FFF8" : d > 14 ? "#1F9E96" : r < 0.5 ? "#4DE0D6" : "#3CCBC2"; };
  add("diamond", "Diamond rings", "Games", "The rings mined out of stone, one diamond block at a time. Pairs with the crafting banner.",
    `<g shape-rendering="crispEdges">${stone}<rect width="1024" height="1024" fill="#000" opacity=".18"/>${pixelRings(32, () => "#0D3B38", 108)}${pixelRings(32, dia, 72)}</g>`, "", "crafting");
}
{
  // falling blocks: each ring stacked from bevelled squares, one colour per piece
  const PAL = ["#8B5CF6", "#2F5FD8", "#F59E0B", "#22C55E", "#EAB308", "#EF4444", "#06B6D4"];
  const u = 40;
  let cells = "";
  for (let y = u / 2; y < 1024; y += u) for (let x = u / 2; x < 1024; x += u) {
    const d1 = Math.hypot(x - L, y - C) - R, d2 = Math.hypot(x - Rt, y - C) - R;
    if (Math.abs(d1) > 30 && Math.abs(d2) > 30) continue;
    const k = Math.abs(d1) <= 30 ? 0 : 1, a = Math.atan2(y - C, x - (k ? Rt : L)), c = PAL[(Math.floor(((a + Math.PI) / (Math.PI * 2)) * 9) + k * 4) % PAL.length];
    cells += `<rect x="${x - u / 2}" y="${y - u / 2}" width="${u}" height="${u}" fill="${c}"/><path d="M${x - u / 2 + 3} ${y + u / 2 - 3}V${y - u / 2 + 3}H${x + u / 2 - 3}" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="6"/><path d="M${x + u / 2 - 3} ${y - u / 2 + 3}V${y + u / 2 - 3}H${x - u / 2 + 3}" fill="none" stroke="#000" stroke-opacity=".3" stroke-width="6"/>`;
  }
  add("blocks", "Falling blocks", "Games", "Each ring stacked from falling-block pieces. Everything fits. Pairs with the falling-blocks banner.",
    bg("#0B0E1A") + grid(40, "#FFFFFF", 0.05) + `<g shape-rendering="crispEdges">${cells}</g>`, "", "blocks");
}
{
  // code rain: green glowing rings with the numbers falling behind them
  seed = 88;
  let rain = "";
  const chars = "0123456789$%+=";
  for (let x = 16; x < 1024; x += 30) {
    const len = 8 + Math.floor(rnd() * 20), start = rnd() * 1200 - 200;
    for (let k = 0; k < len; k++) { const y = start + k * 32; if (y < 0 || y > 1040) continue; rain += `<text x="${x}" y="${f(y)}" text-anchor="middle" font-family="Menlo, monospace" font-weight="700" font-size="28" fill="${k === len - 1 ? "#E8FFE9" : "#27E36B"}" opacity="${f(k === len - 1 ? 1 : 0.12 + (k / len) * 0.55)}">${chars[Math.floor(rnd() * chars.length)]}</text>`; }
  }
  add("coderain", "Code rain", "Games", "The rings glowing green in a rain of numbers. Take the red pill. Pairs with the pill-choice banner.",
    bg("#020604") + rain + `<g filter="url(#crg)">${rings("#27E36B", W + 8)}</g>` + rings("#D9FFE3", 12),
    glowF("crg", 18, 1), "redpill");
}
{
  // fighter: a VS screen, one ring each side, sparks where they meet
  const spark = (x, y, r) => `<path d="M${x} ${y - r}L${x + r * 0.25} ${y - r * 0.25}L${x + r} ${y}L${x + r * 0.25} ${y + r * 0.25}L${x} ${y + r}L${x - r * 0.25} ${y + r * 0.25}L${x - r} ${y}L${x - r * 0.25} ${y - r * 0.25}Z" fill="#FFF3B0" stroke="#14141C" stroke-width="6" stroke-linejoin="round"/>`;
  add("fighter", "Fighter", "Games", "Stripe in the red corner, your CRM in the blue, sparks where they cross. Pairs with the VS banner.",
    bg("url(#fvR)") + `<path d="M0 0H640L384 1024H0Z" fill="url(#fvL)"/><rect width="1024" height="1024" fill="url(#fvh)"/>` +
      rings("#14141C", W + 26) + ring(L, "#FF7A2E", W) + ring(Rt, "#4F7DFF", W) + spark(C, C - CROSS_Y, 44) + spark(C, C + CROSS_Y, 34),
    `<linearGradient id="fvL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF7A2E"/><stop offset=".6" stop-color="#E2311D"/><stop offset="1" stop-color="#8E0F14"/></linearGradient>
     <linearGradient id="fvR" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4F7DFF"/><stop offset=".6" stop-color="#2F4FD8"/><stop offset="1" stop-color="#151F6B"/></linearGradient>
     <pattern id="fvh" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="4.4" fill="#000" opacity=".16"/></pattern>`, "versus");
}
{
  // synthwave: neon rings over a striped sun and a grid running to the horizon
  let gridL = "";
  for (let i = -12; i <= 12; i++) gridL += `<path d="M${C + i * 22} 700L${C + i * 150} 1024" stroke="#FF4FD8" stroke-width="3" opacity=".7"/>`;
  for (let k = 0; k < 9; k++) { const y = 700 + Math.pow(k / 8, 1.8) * 324; gridL += `<path d="M0 ${f(y)}H1024" stroke="#FF4FD8" stroke-width="3" opacity=".7"/>`; }
  let cuts = "";
  for (let k = 0; k < 6; k++) cuts += `<rect x="200" y="${560 + k * 24}" width="624" height="${6 + k * 2.4}" fill="#000"/>`;
  add("synthwave", "Synthwave", "Games", "Neon rings over a striped sun and an endless grid. Need for speed. Pairs with the jet-at-sunset banner.",
    bg("url(#swS)") + `<mask id="swM"><rect width="1024" height="1024" fill="#fff"/>${cuts}</mask><circle cx="${C}" cy="560" r="300" fill="url(#swSun)" mask="url(#swM)"/>` +
      `<rect y="700" width="1024" height="324" fill="#1A0630"/>${gridL}<rect y="696" width="1024" height="6" fill="#FF8AE6"/>` +
      `<g filter="url(#swg)">${ring(L, "#FF4FD8", W)}${ring(Rt, "#38E1FF", W)}</g>` + ring(L, "#FFD6F6", 10) + ring(Rt, "#D6F8FF", 10),
    `<linearGradient id="swS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#12062B"/><stop offset=".55" stop-color="#4A0F5E"/><stop offset=".7" stop-color="#9C1F6E"/></linearGradient>
     <linearGradient id="swSun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE66B"/><stop offset=".6" stop-color="#FF8A3D"/><stop offset="1" stop-color="#FF3D8B"/></linearGradient>${glowF("swg", 14, 1)}`, "speed");
}
{
  // the cave: two fires, and the rings in gold between them, yours to take
  const FL = ["....R.....", "...RR....R", "...ROR..RR", "..ROOR.RR.", ".RROYORRR.", ".ROYYOOR..", "RROYWYOR..", "ROYWWYOOR.", "ROYWWWYOR.", "RROYWWYORR", ".RROYYORR.", "..RROORR.."];
  const FC = { R: "#D6260F", O: "#FF6A1F", Y: "#FFC93A", W: "#FFF1B0" };
  const flame = (x, y, u, flip) => FL.map((r, j) => [...r].map((ch, i) => (FC[ch] ? `<rect x="${flip ? x + (9 - i) * u : x + i * u}" y="${y + j * u}" width="${u}" height="${u}" fill="${FC[ch]}"/>` : "")).join("")).join("");
  const gold = (x, y, d) => (d < -14 ? "#FFF0A8" : d > 14 ? "#C98A00" : "#FFD23F");
  add("cave", "The cave", "Games", "Two fires in the dark and the rings in gold between them. It's dangerous to report alone: take this. Pairs with the cave banner.",
    bg("#000") + `<circle cx="120" cy="820" r="170" fill="url(#cvG)"/><circle cx="904" cy="820" r="170" fill="url(#cvG)"/><ellipse cx="${C}" cy="${C}" rx="380" ry="260" fill="url(#cvG)" opacity=".7"/>` +
      `<g shape-rendering="crispEdges">${flame(55, 720, 13, false)}${flame(839, 720, 13, true)}${pixelRings(24, () => "#5A2A06", 92)}${pixelRings(24, gold, 64)}</g>`,
    `<radialGradient id="cvG"><stop offset="0" stop-color="#FFB13A" stop-opacity=".3"/><stop offset="1" stop-color="#FFB13A" stop-opacity="0"/></radialGradient>`, "quest");
}
{
  // the lights: each ring a string of Christmas lights on a dark wallpaper
  const COL = ["#FF4B3E", "#FFD23F", "#3EE07A", "#4FA8FF", "#FF6FCF", "#FF9A2E"];
  let wall = "";
  for (let y = 0; y < 1024; y += 128) for (let x = (y / 128) % 2 ? 64 : 0; x < 1024 + 64; x += 128) wall += `<g transform="translate(${x} ${y})" opacity=".45"><circle r="20" fill="#8A6A3A"/><circle r="9" fill="#C9A060"/>${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="${f(Math.cos((a * Math.PI) / 180) * 28)}" cy="${f(Math.sin((a * Math.PI) / 180) * 28)}" rx="13" ry="8" transform="rotate(${a} ${f(Math.cos((a * Math.PI) / 180) * 28)} ${f(Math.sin((a * Math.PI) / 180) * 28)})" fill="#5D6B3A"/>`).join("")}</g>`;
  let bulbs = "", k = 0;
  for (const [cx, off] of [[L, 0.2], [Rt, 0.5]]) for (let i = 0; i < 10; i++) {
    const a = off + (i / 10) * Math.PI * 2, x = cx + Math.cos(a) * R, y = C + Math.sin(a) * R, deg = (a * 180) / Math.PI + 90;
    bulbs += `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(deg)})"><rect x="-12" y="-8" width="24" height="20" rx="4" fill="#2A2A2A"/><ellipse cx="0" cy="-40" rx="23" ry="34" fill="${COL[k++ % COL.length]}" filter="url(#ltg)"/><ellipse cx="-7" cy="-50" rx="6" ry="11" fill="#fff" opacity=".7"/></g>`;
  }
  add("lights", "Christmas lights", "Games", "Each ring a string of coloured bulbs on a dark wallpaper. Right here. Pairs with the lights banner.",
    bg("#3B3A26") + wall + `<rect width="1024" height="1024" fill="url(#ltv)"/>` + rings("#1B1A14", 12) + bulbs,
    `${glowF("ltg", 12, 1)}<radialGradient id="ltv" cx=".5" cy=".5" r=".75"><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></radialGradient>`, "lights");
}

for (const v of V) {
  const f = path.join(OUT, `${v.id}.svg`);
  if (v.svg) writeFileSync(f, v.svg);
  else if (existsSync(f)) rmSync(f); // a raster variant has no SVG
}
const meta = V.map(({ id, name, group, note, pairs, raster }) => ({ id, name, group, note, pairs, ...(raster ? { raster } : {}) }));
writeFileSync(path.join(OUT, "variants.json"), JSON.stringify(meta, null, 2) + "\n");
// the same list as a script, for the render pages (file:// pages can't fetch JSON)
writeFileSync(path.join(OUT, "variants.js"), `window.NZ_VARIANTS = ${JSON.stringify(meta)};\n`);
console.log(`${V.length} variants → ${path.relative(ROOT, OUT)}`);
