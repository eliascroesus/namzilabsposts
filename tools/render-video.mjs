#!/usr/bin/env node
// Render an HTML motion file to an MP4 by stepping its timeline one frame at a
// time — every frame is exact, so 60fps really is 60 distinct frames.
//
//   node tools/render-video.mjs videos/01-between/video.html videos/01-between/between.mp4
//     --fps 60     frames per second (default 60)
//     --ss 2       supersample: render at 2x and downscale with lanczos (default 2)
//     --crf 16     x264 quality, lower is better (default 16)
//     --tail 1.5   seconds of the ambient hold after the main sequence (default: the file's own)
import { spawn } from "node:child_process";
import { once } from "node:events";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { ffmpegPath, launch, flag } from "./lib.mjs";

const argv = process.argv.slice(2);
const [input, output] = argv.filter((a, i) => !a.startsWith("--") && !argv[i - 1]?.startsWith("--"));
if (!input || !output) {
  console.error("usage: render-video.mjs <in.html> <out.mp4> [--fps 60] [--ss 2] [--crf 16] [--tail s]");
  process.exit(1);
}
const fps = Number(flag(argv, "fps", 60));
const ss = Number(flag(argv, "ss", 2));
const crf = String(flag(argv, "crf", 16));

const browser = await launch();
const probe = await browser.newPage();
await probe.goto(pathToFileURL(path.resolve(input)).href + "?capture=1");
await probe.evaluate(() => window.__ready);
const meta = await probe.evaluate(() => window.__meta);
await probe.close();

const { width: W, height: H } = meta;
const tail = Number(flag(argv, "tail", meta.tail ?? 1.5));
const total = Math.round((meta.duration + tail) * fps);

const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: ss });
await page.goto(pathToFileURL(path.resolve(input)).href + "?capture=1");
await page.evaluate(() => window.__ready);

const vf = [ss !== 1 ? `scale=${W}:${H}:flags=lanczos` : null, "format=yuv420p"].filter(Boolean).join(",");
const ff = spawn(
  ffmpegPath(),
  ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-",
    "-vf", vf, "-c:v", "libx264", "-preset", "slow", "-crf", crf, "-profile:v", "high",
    "-x264-params", "aq-mode=3", "-r", String(fps), "-movflags", "+faststart", output],
  { stdio: ["pipe", "inherit", "inherit"] },
);

const t0 = Date.now();
for (let i = 0; i < total; i++) {
  await page.evaluate((t) => window.__render(t), i / fps);
  const buf = await page.screenshot({ type: "png", clip: { x: 0, y: 0, width: W, height: H } });
  if (!ff.stdin.write(buf)) await once(ff.stdin, "drain");
  if (i % fps === 0) process.stdout.write(`\r${path.basename(output)}  ${String(Math.round((i / total) * 100)).padStart(3)}%  frame ${i}/${total}`);
}
ff.stdin.end();
await once(ff, "close");
await browser.close();
console.log(`\r${path.basename(output)}  done: ${total} frames @ ${fps}fps, ${W}x${H}, ${((Date.now() - t0) / 1000).toFixed(0)}s`);
