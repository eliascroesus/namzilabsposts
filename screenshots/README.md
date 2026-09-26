# Product screenshots

Real screens of Namzilabs, for the highlights, the posts and the videos. You capture and upload; Claude sorts them, blurs anything private, crops them and puts them to work (in a clean browser or phone frame on the story and post backgrounds).

## Upload them

| Where | Best for | How |
|---|---|---|
| **Google Drive: "Namzilabs screenshots (inbox)"** | Everything, and anything with real data on it | Drag the files into the folder (or Upload in the Drive app), then tell Claude they're in. The folder is private to you. |
| **The Claude chat** | A few at a time | Drop them into a message. |
| **[`inbox/`](inbox/) here on GitHub** | Demo data only: this repo is public | Open `screenshots/inbox/` on this branch, then Add file → Upload files → Commit. |

Nothing needs a special name or order. Once they're in, they get sorted into folders by area (below), and only cleaned copies are committed.

## The rules (read first)

- **This repo is public.** Whatever lands here, anyone can see. Use a demo workspace filled with example data. If a screen has real data on it, put it in the Drive folder and say what to blur.
- **Never show:** real customers' names, emails or phone numbers; real clients' revenue; API keys, webhook URLs or secrets; billing; admin screens; anyone else's account.
- **Only what's live.** AI and the ad connectors are coming soon. A screen of them is fine only if it says so on the image.
- **Label example data.** Every image with example numbers says "Example data", like the rest of the content.

## How to take them

- **Desktop:** the app in Chrome at 100% zoom, on a Retina or high-DPI screen if you have one. Hide the bookmarks bar, extensions and notifications.
- **Capture the window, not the whole screen.** Mac: ⌘⇧4, then Space, then click the window. Windows: Win+Shift+S, then Window.
- **PNG, untouched.** No resizing, cropping or arrows; the crops happen here.
- **Light and dark mode**, if the app has both. Dark sits on the navy story frames, light on the paper ones.
- **Phone:** ordinary screenshots, if the app works on mobile.
- **Screen recordings are gold.** A 10 to 20 second MP4 or MOV of one flow (building a metric, tapping a number to see how it was made) makes a Reel or a story on its own.

## The shot list

What the highlights and posts can use, most important first. Capture what exists and skip what doesn't.

| # | Screen | What it should show | Goes in |
|---|---|---|---|
| 1 | The home dashboard | A few KPIs and a chart, full of example data | Start here, post 35, the pinned posts |
| 2 | Connections | Every connected tool, with its logo and status | Connect, post 11 |
| 3 | Connecting one tool | The connect step for one tool (keys hidden) | Connect |
| 4 | Building a metric: sources | Picking the tools that hold each half of a number | Any KPI, post 45 |
| 5 | Building a metric: match and filter | Matched per person; test bookings and refunds left out | Any KPI, Count once |
| 6 | A finished metric | Show rate (or any KPI) with its value | Any KPI, post 45 |
| 7 | The funnel | Leads → booked → held → paid, across tools | Funnel, post 46 |
| 8 | The funnel, split | By setter, by source or by week | Funnel, Sales teams, post 49 |
| 9 | One person | One customer matched across every tool, with their timeline | Count once, post 47 |
| 10 | A number's working | What you see when you tap a number: its sources, its rules, what was left out | Receipts, post 48 |
| 11 | A weekly scorecard | Show rate, close rate on held calls, cash collected, speed to lead | Sales teams, post 49 |
| 12 | Per client | Held meetings, or cost per held meeting, by client | Agencies, post 50 |
| 13 | A launch | Revenue across every checkout, each buyer counted once | Creators, post 51 |
| 14 | A store and its list | Orders matched to the email list | E-com, post 52 |
| 15 | Sign-up | The first screen someone sees: free to start, no card | Start here, FAQ |
| 16 | Webhooks | The webhook setup (URL and secret blurred) | Connect, FAQ |

## What's here

The twelve real screens, renamed for what they show. [`shots.js`](shots.js) is the same list for the code: each image's size, what it shows, the named crops the highlights and posts use, and the regions that are always blurred (the workspace name, the referral link). A crop is drawn with `NZ.STORY.C.shot({ src, crop })` (in [`lib/story.js`](../lib/story.js)) as a clean app window, with optional numbered focus rings.

| Screen | File | What it shows | Used in |
|---|---|---|---|
| Dashboard · Overview | [`app/overview.png`](app/overview.png) | Leads, booked leads, calls showed, customers, revenue and AOV; booking, show-up and close rates; revenue by week | Start here (5), post 53 |
| Dashboard · Calls | [`app/calls.png`](app/calls.png) | Show-up rate and speed to lead by week; leads by source; show-up rate split by time of day and reply | Sales teams (3, 4) |
| Dashboard · Money | [`app/money.png`](app/money.png) | Revenue, customers, AOV, payday share; revenue per closer (by ID); revenue and response time by week | Not used yet |
| Dashboard · Leads | [`app/leads.png`](app/leads.png) | One funnel per source (TikTok, Instagram, Facebook), leads to booked to showed to customers, with the rate between each step; close rate per source | Start here (6), Funnel (3, 5), posts 46, 53, 55 |
| Dashboard · a custom view | [`app/board.png`](app/board.png) | Metrics as cards in groups (Leads, Facebook, Instagram, TikTok, Revenue), each with when it last updated | Any KPI (5), post 54 |
| Dashboard · Calendar | [`app/calendar.png`](app/calendar.png) | Revenue per day for a month, shaded by share of the best day; best day, average day, days with data | Creators (4), post 53 |
| Flows | [`app/flows.png`](app/flows.png) | Every metric as a flow: its steps, its source, when it was edited, on or off | Receipts (4), post 48 |
| Flow builder · new | [`app/flow-new.png`](app/flow-new.png) | "Build a metric in three moves": get the records, narrow them down, turn them into a number | Any KPI (3), FAQ (3), posts 45, 53, 54 |
| Flow builder · add a step | [`app/flow-steps.png`](app/flow-steps.png) | The steps: Get data, Combine, Match, Filter, Split, Summarize, Break down | Any KPI (4), Count once (4), E-com (4), posts 47, 53, 54 |
| Flow builder · Filter | [`app/flow-filter.png`](app/flow-filter.png) | A two-step flow (a Google Sheet, then a Filter) and the Filter's rules: time period, only continue if a field matches a value | Receipts (5), post 54 |
| Apps | [`app/apps.png`](app/apps.png) | Every integration as a card: what it reads, instant or scheduled sync, Google Sheets connected | Connect (3, 4), Agencies (3), post 53 |
| Invite & earn | [`app/invite.png`](app/invite.png) | The referral tiers: 1 invite a month free, 3 three months, 5 six months, 10 a year (and the account's own link, never shown) | FAQ (2), post 56 |

The numbers in "Used in" are the story's position in its highlight. Every image made from these is labelled "Real screenshot"; the captions describe what a screen does and never quote its numbers.

### Worth checking in the app

- **Instagram and Facebook look swapped somewhere.** The Leads view says IG Leads 359 and FB Leads 265, while the lead-source pie on Calls says Facebook 359 and Instagram 265, and the custom view's Facebook group shows "Facebook 359" above "FB Leads 265". The stories avoid putting two of these side by side, but it's worth fixing before someone else notices.
- **The Apps page says 35 apps;** the content says 33 tools. If 35 is right, the copy should move to 35 (bios, posts, highlights).

## Where they go

- **`inbox/`**: what arrives, as it arrived. Emptied as it's sorted.
- **`app/`**: sorted, renamed for what they show, and catalogued in [`shots.js`](shots.js). Crops and blurs happen when a frame is drawn, so the originals stay whole.
- **`screenshots/private/`**: raw originals with real data, while they're being cleaned. Git ignores it, so nothing in it is ever committed.
