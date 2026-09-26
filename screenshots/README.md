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

## Where they go

- **`inbox/`**: what arrives, as it arrived. Emptied as it's sorted.
- **`screenshots/<area>/`**: sorted, cropped and cleaned, named for what they show (`funnel/by-setter-dark.png`). The areas follow the highlights: `dashboard`, `connect`, `metrics`, `funnel`, `people`, `receipts`, `sales`, `agencies`, `creators`, `e-com`, `onboarding`.
- **`screenshots/private/`**: raw originals with real data, while they're being cleaned. Git ignores it, so nothing in it is ever committed.
