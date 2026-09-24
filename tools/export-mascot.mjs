#!/usr/bin/env node
// Export Namzi as die-cut stickers (transparent PNG + SVG) and square avatars.
//
//   node tools/export-mascot.mjs            → brand/mascot/stickers/*.png|svg, brand/mascot/avatars/*
//
// Stickers are 1024×1024 PNGs with a white outline, ready for Instagram Stories
// stickers, GIPHY uploads, slides and replies. Avatars are square, for profile
// pictures (platforms crop them to a circle).
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { launch } from "./lib.mjs";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "brand/mascot");

export const STICKERS = [
  ["wave", "Hi!", { mood: "happy", pose: "wave" }],
  ["celebrate", "Numbers are up (for real)", { mood: "joy", pose: "up" }],
  ["receipt", "Receipts", { mood: "smug", pose: "hold", prop: "receipt" }],
  ["presenting", "Here's the working", { mood: "happy", pose: "carry", prop: "receipt" }],
  ["magnifier", "Checking the source", { mood: "suspicious", pose: "hold", prop: "magnifier" }],
  ["red-flag", "Red flag", { mood: "stern", pose: "hold", prop: "redflag" }],
  ["green-flag", "Green flag", { mood: "happy", pose: "holdL", prop: "greenflag" }],
  ["side-eye", "Side-eye", { mood: "sideeye", pose: "hip" }],
  ["shocked", "Wait, what?", { mood: "shocked", pose: "up" }],
  ["monday", "Monday, 9:07", { mood: "sleepy", pose: "hold", prop: "coffee" }],
  ["shrug", "Roughly?", { mood: "neutral", pose: "shrug", fx: ["question"] }],
  ["facepalm", "#REF!", { mood: "sad", pose: "facepalm" }],
  ["point", "Look at this", { mood: "happy", pose: "point" }],
  ["think", "Hmm", { mood: "neutral", pose: "think", look: [0.6, -0.8] }],
  ["nervous", "Where's that number from?", { mood: "nervous", pose: "down" }],
  ["count-once", "Count once", { mood: "neutral", pose: "sign", sign: ["COUNT", "ONCE."] }],
  ["source", "Source?", { mood: "suspicious", pose: "sign", sign: ["SOURCE?"] }],
  ["held-not-booked", "Held, not booked", { mood: "stern", pose: "sign", sign: ["HELD,", "NOT BOOKED"] }],
];

const AVATARS = [
  ["avatar-light", "#EEF4FF", { mood: "happy" }],
  ["avatar-sky", "sky", { mood: "happy" }],
  ["avatar-ink", "#14141C", { mood: "neutral" }],
];

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(path.join(OUT, "stickers.html")).href);
await page.evaluate(() => document.fonts.ready);

mkdirSync(path.join(OUT, "stickers"), { recursive: true });
mkdirSync(path.join(OUT, "avatars"), { recursive: true });
const stage = page.locator("#stage");

for (const [name, , cfg] of STICKERS) {
  const svg = await page.evaluate((c) => {
    const s = NZ.mascot({ ...c, sticker: true });
    const el = document.getElementById("stage");
    el.className = "contain";
    el.style.background = "transparent";
    el.innerHTML = s;
    return s;
  }, cfg);
  await page.evaluate(() => document.fonts.ready);
  await stage.screenshot({ path: path.join(OUT, "stickers", `namzi-${name}.png`), omitBackground: true });
  writeFileSync(path.join(OUT, "stickers", `namzi-${name}.svg`), svg + "\n");
  console.log(`stickers/namzi-${name}  png + svg`);
}

for (const [name, bg, cfg] of AVATARS) {
  const svg = await page.evaluate(
    ([c, bg]) => {
      const face = NZ.mascot({ ...c, crop: "face" });
      const fill = bg === "sky" ? "url(#sky)" : bg;
      const defs = bg === "sky"
        ? `<defs><linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16305E"/><stop offset=".55" stop-color="#22438F"/><stop offset="1" stop-color="#2B53AE"/></linearGradient></defs>`
        : "";
      // the face crop, nudged down so the body's tip sits inside the circle crop
      const inner = face.replace("<svg ", '<svg x="64" y="104" width="896" height="896" ');
      const s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">${defs}<rect width="1024" height="1024" fill="${fill}"/>${inner}</svg>`;
      const el = document.getElementById("stage");
      el.className = "";
      el.innerHTML = s;
      return s;
    },
    [cfg, bg],
  );
  await stage.screenshot({ path: path.join(OUT, "avatars", `namzi-${name}.png`) });
  writeFileSync(path.join(OUT, "avatars", `namzi-${name}.svg`), svg + "\n");
  console.log(`avatars/namzi-${name}  png + svg`);
}

writeFileSync(
  path.join(OUT, "stickers.json"),
  JSON.stringify(STICKERS.map(([name, label, cfg]) => ({ file: `stickers/namzi-${name}.png`, svg: `stickers/namzi-${name}.svg`, label, ...cfg })), null, 2) + "\n",
);
await browser.close();
