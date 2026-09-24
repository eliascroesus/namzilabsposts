# Videos

Smooth product-style motion videos, built in HTML and rendered **frame by frame at 60fps** to H.264 MP4. Every frame is computed rather than screen-recorded, so nothing stutters. They're silent by design: most social video is watched muted. On Reels and TikTok, add a trending instrumental in the app, because licensed audio can't be baked in.

| # | Video | Length | For | File |
|---|---|---|---|---|
| 01 | **Three tools. Three answers.** Calendly, Close and a sheet disagree; Namzilabs matches them into one number with a receipt. | 17s | Coaching / sales teams | [`01-three-answers/three-answers-9x16.mp4`](01-three-answers/three-answers-9x16.mp4) |
| 02 | **Show-up rate, in three steps.** A cursor builds Get data → Match → Calculate, tests each step, publishes, and the tile lands on the board. | 19s | Everyone (demo) | [`02-three-steps/three-steps-9x16.mp4`](02-three-steps/three-steps-9x16.mp4) |
| 03 | **Monday, 9:07 am.** A question, 14 tabs, the clock racing to 11:48 — then one tab with the answer. | 16s | Everyone (relatable) | [`03-monday-907/monday-907-9x16.mp4`](03-monday-907/monday-907-9x16.mp4) |
| 04 | **Every number shows its working.** A revenue number prints its own receipt; refunds and test payments get thrown out. | 16s | Everyone (brand) | [`04-receipts/receipts-9x16.mp4`](04-receipts/receipts-9x16.mp4) |
| 05 | **Ask your AI.** ⚠️ HOLD until the AI connection (MCP) is live in production. | 17s | Everyone | [`05-ask-your-ai/ask-your-ai-9x16.mp4`](05-ask-your-ai/ask-your-ai-9x16.mp4) |
| 06 | **Logo sting.** Two rings meet; the lens lights up; the name slides out. | 6s | Intro / outro | [`06-logo-sting/logo-sting-1x1.mp4`](06-logo-sting/logo-sting-1x1.mp4) |

Each folder has `poster.jpg` (a still for thumbnails) and `video.html`. Open the HTML in a browser to watch it live: **R** replays, **F** goes fullscreen, **Space** pauses.

## Captions

**01 · Three answers**
- **Reels / TikTok:**
  > Calendly says 41. Close says 38. The sheet says 44. Which one do you pay your setter on? 👀
  >
  > Namzilabs matches the same person across your tools and counts each meeting once, with the working shown. Free to start → link in bio.
  >
  > #showrate #highticketsales #salesteam
- **X:**
  > Three tools. Three answers. One real number.

  Put the link in the first reply.

**02 · Three steps**
- **Reels / TikTok:**
  > Show-up rate from Calendly + Google Sheets in three steps. No SQL, no spreadsheet. Build it once, it stays live.
  >
  > Comment SHOWUP for the flow.
  >
  > #nocode #salesops #kpis
- **X:**
  > Watch me build show-up rate from two tools that have never met. Three steps, no code.

**03 · Monday 9:07**
- **Reels / TikTok:**
  > POV: someone asks for last week's show-up rate at 9:07. Tag the person who does this every Monday.
  >
  > #mondaymotivation #founderlife #spreadsheets
- **X:**
  > POV: someone asks for last week's show-up rate at 9:07

**04 · Receipts**
- **Reels / TikTok:**
  > Nice number. Where's it from? Every number in Namzilabs prints its receipt: what it read, what it matched, and what it left out and why.
  >
  > #businessmetrics #founders #kpis
- **X:**
  > A number without a receipt is an opinion.

**05 · Ask your AI** — launch-day caption is in [`../posts/12-ask-your-ai-HOLD/post.md`](../posts/12-ask-your-ai-HOLD/post.md).

**06 · Logo sting** — use it as the first 2 seconds of longer videos, or post it alone on day 1 with "Namzilabs. The number between your tools."

## Re-render

```bash
node tools/render-video.mjs videos/01-three-answers/video.html videos/01-three-answers/three-answers-9x16.mp4 --ss 1
```

- `--ss 2` supersamples for extra-crisp edges, at about 5× the render time.
- `node tools/render-frames.mjs <video.html> <outDir> 2.5 7 11` samples single frames for review.
- All numbers in the videos are example data.
