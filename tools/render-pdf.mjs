#!/usr/bin/env node
// Bundle a post's rendered Instagram slides (ig-01.png, ig-02.png, …) into one PDF,
// for LinkedIn document posts (LinkedIn shows an uploaded PDF as a swipeable carousel).
// Uses the PNGs, not the HTML, so the PDF matches the images exactly (print drops
// blur and blend effects).
//
//   node tools/render-pdf.mjs posts/35-how-it-works posts/35-how-it-works/linkedin-carousel.pdf
import { readdirSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { launch } from "./lib.mjs";

const [dir, output] = process.argv.slice(2);
if (!dir || !output) {
  console.error("usage: render-pdf.mjs <postDir> <out.pdf>");
  process.exit(1);
}
const slides = readdirSync(dir).filter((f) => /^ig-\d+\.png$/.test(f)).sort();
const html = `<!doctype html><html><head><style>
  @page { size: 1080px 1350px; margin: 0 }
  html, body { margin: 0; padding: 0; background: #fff; }
  img { display: block; width: 1080px; height: 1350px; break-after: page; }
</style></head><body>${slides.map((s) => `<img src="${s}">`).join("")}</body></html>`;
const tmp = path.join(dir, ".pdf-tmp.html");
writeFileSync(tmp, html);
const browser = await launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(path.resolve(tmp)).href);
await page.evaluate(() => Promise.all([...document.images].map((i) => i.decode())));
await page.pdf({ path: output, width: "1080px", height: "1350px", printBackground: true, preferCSSPageSize: true });
await browser.close();
rmSync(tmp);
console.log(`${output}  ${slides.length} pages`);
