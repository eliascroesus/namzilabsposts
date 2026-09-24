// Shared plumbing for the render tools: a browser, and an ffmpeg.
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

/** ffmpeg: $FFMPEG, else the static build from `pip install imageio-ffmpeg`, else PATH. */
export function ffmpegPath() {
  if (process.env.FFMPEG) return process.env.FFMPEG;
  try {
    return execFileSync("python3", ["-c", "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"], { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "ffmpeg";
  }
}

/** Chromium: $CHROMIUM_PATH, else a preinstalled one, else Playwright's own. */
export async function launch() {
  const pre = ["/opt/pw-browsers/chromium"].find((p) => existsSync(p));
  return chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || pre || undefined,
    args: ["--font-render-hinting=none", "--force-color-profile=srgb", "--allow-file-access-from-files", "--hide-scrollbars"],
  });
}

export function flag(argv, name, fallback) {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 ? argv[i + 1] : fallback;
}
