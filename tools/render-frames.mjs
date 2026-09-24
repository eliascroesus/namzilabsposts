#!/usr/bin/env node
// Sample a motion file at chosen timestamps, for review:  node tools/render-frames.mjs video.html outDir 1.2 4 7.5
import { mkdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { launch } from "./lib.mjs";
const args = process.argv.slice(2);
const qi = args.indexOf("--query");
const query = qi >= 0 ? args.splice(qi, 2)[1] : "";
const [input, outDir, ...times] = args;
mkdirSync(outDir, { recursive: true });
const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(pathToFileURL(path.resolve(input)).href + "?capture=1" + (query ? "&" + query : ""));
await page.evaluate(() => window.__ready);
const { width, height } = await page.evaluate(() => window.__meta);
await page.setViewportSize({ width, height });
for (const t of times) {
  await page.evaluate((x) => window.__render(x), Number(t));
  const out = path.join(outDir, `t${String(t).padStart(5, "0")}.jpg`);
  await page.screenshot({ path: out, type: "jpeg", quality: 80 });
  console.log(out);
}
await browser.close();
