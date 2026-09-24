#!/usr/bin/env node
// Render every <div class="canvas" data-still="name"> in an HTML file to name.png.
// Rendered at 2x and downscaled with lanczos, so text and hairlines stay crisp
// at the exact platform size (1080x1350 for Instagram, 1600x900 for X, …).
//
//   node tools/render-stills.mjs posts/01-between/post.html posts/01-between
//     --ss 2      supersample factor (default 2)
//     --keep2x    also keep the full-resolution render as name@2x.png
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ffmpegPath, launch, flag } from "./lib.mjs";

const argv = process.argv.slice(2);
const [input, outDir] = argv.filter((a, i) => !a.startsWith("--") && !argv[i - 1]?.startsWith("--"));
if (!input || !outDir) {
  console.error("usage: render-stills.mjs <in.html> <outDir> [--ss 2] [--keep2x]");
  process.exit(1);
}
const ss = Number(flag(argv, "ss", 2));
const keep2x = argv.includes("--keep2x");
mkdirSync(outDir, { recursive: true });

const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1700, height: 1000 }, deviceScaleFactor: ss });
await page.goto(pathToFileURL(path.resolve(input)).href + "?capture=1");
await page.evaluate(() => window.__ready);

const canvases = page.locator(".canvas[data-still]");
const n = await canvases.count();
for (let i = 0; i < n; i++) {
  const c = canvases.nth(i);
  const name = await c.getAttribute("data-still");
  const { width, height } = await c.evaluate((el) => ({ width: el.offsetWidth, height: el.offsetHeight }));
  const big = path.join(outDir, `${name}@2x.png`);
  const out = path.join(outDir, `${name}.png`);
  await c.screenshot({ path: big, animations: "disabled" });
  execFileSync(ffmpegPath(), ["-y", "-loglevel", "error", "-i", big, "-vf", `scale=${width}:${height}:flags=lanczos`, out]);
  if (!keep2x) rmSync(big);
  console.log(`${out}  ${width}x${height}`);
}
await browser.close();
