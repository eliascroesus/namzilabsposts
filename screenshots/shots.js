/* ─────────────────────────────────────────────────────────────────────────
   The product screenshots, catalogued: what each one shows, and the named
   crops the highlights use. Every image is a 2x capture of the app, 3456
   pixels wide; crops are [x, y, width, height] in the image's own pixels.
   Draw one with NZ.STORY.C.shot({ src: "leads", crop: "ig" }).

   Each image also lists its masks: regions blurred whenever a crop takes
   them in (the workspace name in the sidebar, the referral link).
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const WORKSPACE = [24, 36, 470, 88];   // the workspace switcher, top of the sidebar
  const S = {
    overview: {
      file: "screenshots/app/overview.png", w: 3456, h: 1920, title: "Dashboard · Overview", mask: [WORKSPACE],
      what: "The Overview tab: leads, booked leads, calls showed, customers, revenue and AOV; booking, show-up and close rates; revenue by week.",
      crops: { dash: [544, 31, 1426, 1250] },
    },
    calls: {
      file: "screenshots/app/calls.png", w: 3456, h: 1920, title: "Dashboard · Calls", mask: [WORKSPACE],
      what: "The Calls tab: show-up rate by week, leads by source (a pie), speed to lead by week, and show-up rate split four ways.",
      crops: { showup: [550, 507, 1419, 809], split: [1962, 1311, 1419, 484], left: [550, 507, 1419, 1390], right: [1962, 507, 1419, 1290] },
    },
    money: {
      file: "screenshots/app/money.png", w: 3456, h: 1918, title: "Dashboard · Money", mask: [WORKSPACE],
      what: "The Money tab: revenue, customers, AOV and payday share; revenue broken down per closer (by ID); revenue and response time by week.",
      crops: { revenue: [1962, 507, 1419, 567] },
    },
    leads: {
      file: "screenshots/app/leads.png", w: 3456, h: 1922, title: "Dashboard · Leads", mask: [WORKSPACE],
      what: "The Leads tab: one funnel per source (TikTok, Instagram, Facebook), leads to booked to showed to customers, with the rate between each step, and a close rate per source.",
      crops: { tt: [550, 270, 1419, 649], ig: [1962, 270, 1419, 649], fb: [550, 1150, 1419, 647], igclose: [1962, 270, 1419, 880] },
    },
    board: {
      file: "screenshots/app/board.png", w: 3456, h: 1920, title: "Dashboard · a custom view", mask: [WORKSPACE],
      what: "A custom view: metrics as cards in groups (Leads, Facebook, Instagram, TikTok, Revenue), each card with its value and when it last updated.",
      crops: { leads: [555, 272, 651, 1060] },
    },
    calendar: {
      file: "screenshots/app/calendar.png", w: 3456, h: 1920, title: "Dashboard · Calendar", mask: [WORKSPACE],
      what: "The Calendar view: revenue per day for a month, shaded by share of the best day, with the best day, the average day and the days with data.",
      crops: { month: [560, 280, 1230, 1430] },
    },
    flows: {
      file: "screenshots/app/flows.png", w: 3456, h: 1920, title: "Flows", mask: [WORKSPACE],
      what: "The Flows list: every metric is a flow, with its steps, its source, when it was edited, and whether it's on.",
      crops: { list: [878, 467, 850, 916] },
    },
    "flow-new": {
      file: "screenshots/app/flow-new.png", w: 3456, h: 1922, title: "Flow builder", mask: [WORKSPACE],
      what: "A new flow: \"Build a metric in three moves\": get the records, narrow them down, turn them into a number.",
      crops: { card: [1440, 540, 1080, 970] },
    },
    "flow-steps": {
      file: "screenshots/app/flow-steps.png", w: 3456, h: 1916, title: "Flow builder · add a step", mask: [WORKSPACE],
      what: "The step picker: Get data, Combine, Match, Filter, Split, Summarize and Break down, each with a one-line description.",
      crops: { data: [2284, 660, 757, 790], all: [2284, 670, 757, 1070], calc: [2284, 1150, 757, 612] },
      items: { getdata: [2300, 752, 725, 100], combine: [2300, 872, 725, 110], match: [2300, 994, 725, 134], filter: [2300, 1212, 725, 100], split: [2300, 1333, 725, 100], summarize: [2300, 1512, 725, 100], breakdown: [2300, 1632, 725, 100] },
    },
    apps: {
      file: "screenshots/app/apps.png", w: 3456, h: 1916, title: "Apps", mask: [WORKSPACE],
      what: "The Apps page: every integration as a card, with what it reads and whether it syncs instantly or on a schedule; Google Sheets shown connected.",
      crops: { grid: [887, 475, 1415, 1015], page: [880, 262, 1440, 1220], calendly: [887, 475, 710, 505], instantly: [2335, 475, 710, 505], webhook: [1611, 1516, 710, 378] },
    },
    "flow-filter": {
      file: "screenshots/app/flow-filter.png", w: 3456, h: 1920, title: "Flow builder · Filter", mask: [WORKSPACE],
      what: "A flow with two steps (a Google Sheet, then a Filter) and the Filter panel: time period, and only continue if a field matches a condition and a value.",
      crops: { rules: [2470, 745, 935, 830] },
    },
    invite: {
      file: "screenshots/app/invite.png", w: 3456, h: 1920, title: "Invite & earn", mask: [WORKSPACE, [876, 1240, 1170, 130]],
      what: "Invite & earn: 1 invite is a month free, 3 are 3 months, 5 are 6 months, 10 are a year. Also shows the account's own referral link (never crop it in).",
      crops: { tiers12: [876, 985, 1091, 176], tiers34: [1992, 985, 1093, 176] },
    },
  };
  window.NZ = Object.assign(window.NZ || {}, { SHOTS: S });
})();
