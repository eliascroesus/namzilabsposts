/* ─────────────────────────────────────────────────────────────────────────
   Every story in every highlight, in order. highlights/stories.html renders
   them; highlights/README.md says what each highlight is for and which
   sticker goes where. Example numbers are one business throughout (a
   coaching company: 1,240 leads, 412 booked, 263 held, 64 paid), so the
   highlights agree with each other and with the posts.
   ───────────────────────────────────────────────────────────────────────── */
(function () {
  const { C } = NZ.STORY;

  const FUNNEL = C.funnel([
    { src: "typeform", l: "Leads", v: "1,240", w: 100 },
    { cv: "33% book a call" },
    { src: "calendly", l: "Booked", v: "412", w: 90 },
    { cv: "36% no-show · fix this first", bad: true },
    { src: "fathom", l: "Held", v: "263", w: 80, bad: true },
    { cv: "24% close" },
    { src: "stripe", l: "Paid", v: "64", w: 70 },
  ]);
  const START = (o = {}) => ({ cta: true, bg: "electric", h: "Start *free.*", sub: "No card. Invite one person and get a month free.", ticks: ["All your data in one place", "Any KPI, no code", "It never edits your data"], cue: "Tap the link", ...o });
  // replying to a story is a DM, so the keyword ask is one tap
  const DM = (kw, what, o = {}) => ({ cta: true, bg: "electric", h: "Want the exact *setup?*", tsize: 128, sub: `Reply ${kw} to this story and we'll send you ${what}.`, kw, offer: "Free to start, no card.", cue: "Reply below", ...o });

  const HL = [
    {
      id: "start-here",
      purpose: "What Namzilabs is, in seven taps. The first circle on the profile, for everyone.",
      frames: [
        { title: true, h: "Start *here.*", sub: "What Namzilabs does, in seven taps." },
        { h: "Your business runs on a dozen *tools.*", sub: "Each one sees a slice. None of them sees the whole customer.", viz: C.cloud([["calendly", 0, 40, 150, -6], ["stripe", 230, 0, 140, 5], ["close", 460, 60, 150, -3], ["typeform", 720, 20, 160, 8], ["shopify", 90, 260, 140, 7], ["whop", 340, 230, 170, -5], ["klaviyo", 620, 280, 140, 4], ["mailchimp", 800, 250, 110, -6], ["aircall", 0, 500, 150, -8], ["fathom", 250, 470, 140, 6], ["gsheets", 480, 510, 160, -4], ["pipedrive", 740, 470, 150, 5]]) },
        { h: "So every number is a *guess.*", viz: C.disagree([{ src: "calendly", n1: "Calendly", n2: "Calls booked", v: "41" }, { src: "close", n1: "Close", n2: "Calls booked", v: "38" }, { src: "gsheets", n1: "Your sheet", n2: "Calls booked", v: "44" }], "Which one goes in the report?"), demo: true },
        { bg: "sky", h: "Namzilabs puts it all in one *place.*", sub: "Connect your tools once. No code, and it never edits your data.", viz: C.hub(["calendly", "stripe", "close", "typeform", "shopify", "klaviyo", "fathom", "gsheets"]), vizTop: 30 },
        { h: "Then build any *KPI.*", sub: "Across every tool, with every customer counted once.", viz: C.kpis([{ l: "Show rate", v: "64%", src: ["calendly", "close"] }, { l: "Revenue per lead", v: "$49.52", src: ["stripe", "typeform"] }, { l: "Speed to lead", v: "6 min", src: ["typeform", "aircall"] }, { l: "Cost per held call", v: "$103", src: ["gsheets", "fathom"] }, { l: "Revenue from your list", v: "$29.4k", wide: true }]), demo: true },
        { bg: "sky", h: "And see exactly where your funnel *breaks.*", viz: FUNNEL, demo: true },
        START(),
      ],
      stickers: { 7: "Link sticker (namzilabs.co) under the arrow." },
    },
    {
      id: "any-kpi",
      purpose: "The metric builder: any number, across tools, no code.",
      frames: [
        { title: true, h: "Any *KPI.*", sub: "If it lives in your tools, you can count it." },
        { h: "The numbers that matter sit between two *tools.*", hsm: true, sub: "No single tool can show you your show rate. It takes two.", viz: C.formula({ name: "Show rate", a: { src: "close", l: "Calls held", s: "Close" }, b: { src: "calendly", l: "Calls booked", s: "Calendly" }, filters: [{ t: "Last 30 days" }, { t: "Matched per person" }], ans: { k: "Show rate", v: "64%" } }), demo: true },
        { h: "Build one in three *steps.*", sub: "No code. No SQL.", viz: C.steps([{ t: "Pick your sources", d: "The tools that hold each half of the number." }, { t: "Match and filter", d: "Every customer counted once. Test bookings and refunds out." }, { t: "Calculate", d: "It stays live, and it shows its working." }]) },
        { bg: "sky", h: "Revenue per lead, from two *tools.*", viz: C.formula({ name: "Revenue per lead", a: { src: "stripe", l: "Cash collected", s: "Stripe" }, b: { src: "typeform", l: "Leads", s: "Typeform" }, filters: [{ t: "Last 30 days" }, { t: "Paid only" }, { t: "Refunds out", out: true }], ans: { k: "Revenue per lead", v: "$49.52" } }), demo: true },
        { h: "Ideas to *steal.*", viz: C.ideas([{ t: "Sales teams", items: ["Show rate", "Close rate on held calls", "Cash collected", "Speed to lead"] }, { t: "Agencies", items: ["Cost per held meeting", "Reply-to-meeting rate"] }, { t: "Creators", items: ["Launch revenue", "Revenue per subscriber", "Paying members"] }, { t: "E-commerce", items: ["Revenue from your list", "Repeat purchase rate"] }]) },
        START(),
      ],
      stickers: { 5: "Poll sticker: \"Which would you build first?\" (Show rate / Cash collected).", 6: "Link sticker under the arrow." },
    },
    {
      id: "funnel",
      purpose: "Where the funnel breaks, one person per row across every tool.",
      frames: [
        { title: true, h: "Find the *leak.*", sub: "See exactly where your funnel breaks, across every tool." },
        { h: "Each tool sees one *step.*", sub: "Nobody sees the whole funnel. Until it's all in one place.", viz: C.journey([{ src: "typeform", t: "Form filled", s: "Only Typeform sees this" }, { src: "calendly", t: "Call booked", s: "Only Calendly sees this" }, { src: "fathom", t: "Call held", s: "Only Fathom sees this" }, { src: "stripe", t: "Paid", s: "Only Stripe sees this" }]) },
        { bg: "sky", h: "Here's the whole *funnel.*", viz: FUNNEL, demo: true },
        { h: "One person per *row.*", sub: "A reschedule is one person, not two bookings.", viz: C.journey([{ src: "typeform", t: "Dave filled the form", s: "Mon 9:02 am", v: "Lead" }, { src: "calendly", t: "Booked a call", s: "Mon 9:14 am", v: "Booked" }, { src: "calendly", t: "Didn't show", s: "Thu 3:00 pm", v: "No-show", st: "bad" }, { src: "calendly", t: "Rebooked", s: "Fri 10:30 am", v: "Same Dave", st: "once" }, { src: "fathom", t: "Call held", s: "Tue 4:00 pm", v: "Held" }, { src: "stripe", t: "Paid", s: "Tue 4:41 pm", v: "$2,000", st: "good" }]), demo: true },
        { h: "Split it by setter, source or *week.*", hsm: true, sub: "So you fix the right thing.", viz: C.table({ th: ["Show rate by setter", "Last 30 days"], rows: [{ nm: "Ana", sub: "148 booked", pct: 74, v: "74%", color: "#2f5fd8" }, { nm: "Ben", sub: "139 booked", pct: 51, v: "51%", bad: true, color: "#f0553d" }, { nm: "Cal", sub: "125 booked", pct: 66, v: "66%", color: "#16a34a" }] }), demo: true },
        START(),
      ],
      stickers: { 3: "Question sticker: \"Where does your funnel leak?\"", 6: "Link sticker under the arrow." },
    },
    {
      id: "count-once",
      purpose: "Matching: the same customer across tools, counted once.",
      frames: [
        { title: true, h: "Count *once.*", sub: "Dave, dave@ and Dave M. are one Dave." },
        { h: "The same person shows up in every tool, a little *differently.*", hsm: true, viz: C.match({ recs: [{ src: "calendly", t: "dave@example.com" }, { src: "close", t: "Dave M.", ind: 120 }, { src: "aircall", t: "+44 7700 900123", ind: 40 }, { src: "stripe", t: "Dave Miller", ind: 170 }] }), demo: true },
        { h: "Namzilabs matches them into one *person.*", hsm: true, sub: "By email or phone, automatically.", viz: C.match({ recs: [{ src: "calendly", t: "dave@example.com" }, { src: "close", t: "Dave M.", ind: 120 }, { src: "stripe", t: "Dave Miller", ind: 60 }], person: { av: "D", nm: "Dave Miller", sub: "4 tools · one person", facts: [["Booked", "2 calls"], ["Rescheduled", "once"], ["Held", "1 call"], ["Paid", "$2,000"]] } }), vizTop: 44, demo: true },
        { h: "So you count people, not *rows.*", viz: C.rows([{ k: "Leads", s: "Typeform + Close", a: "1,318", b: "1,240" }, { k: "Calls booked", s: "Calendly", a: "431", b: "412" }, { k: "Buyers", s: "Stripe + Whop", a: "67", b: "64" }]), demo: true },
        START(),
      ],
      stickers: { 5: "Link sticker under the arrow." },
    },
    {
      id: "receipts",
      purpose: "Proof: every number shows its working, and it never edits your data.",
      frames: [
        { title: true, h: "Every number has a *receipt.*", tsize: 118, sub: "Tap a number. See exactly how it was made." },
        { h: "Show rate: 64%. Here's the *receipt.*", hsm: true, viz: C.receipt({ hd: "Show rate · last 30 days", rows: [{ k: "Calls booked", src: "calendly", v: "431" }, { k: "Booked twice, counted once", v: "−19", sub: true }, { k: "People who booked", v: "412" }, { dash: true }, { k: "Calls held", src: "close", v: "272" }, { k: "Test and internal calls, left out", v: "−9", sub: true }, { k: "People who showed", v: "263" }, { dash: true }, { k: "Show rate", v: "64%", total: true }], foot: "Read 2 sources · matched by email" }), demo: true },
        { h: "“Where's that number *from?*”", viz: C.chat([{ from: "in", who: "Head of sales", text: "Where's the 64% from? My sheet says 68." }, { from: "out", who: "You", text: "**Calendly** bookings, matched to **Close** by email. 19 double bookings counted once, 9 test calls left out. Receipt attached." }]), demo: true },
        { bg: "ink", h: "Nothing hidden. Nothing *edited.*", viz: C.badges([{ ic: "eye", t: "Every source named", s: "See exactly which tools a number read." }, { ic: "rule", t: "Every rule visible", s: "What was matched, and what was left out." }, { ic: "check", t: "Every customer counted once", s: "The same person in three tools is one person." }, { ic: "lock", t: "Read-only", s: "It never edits your data." }]) },
        START(),
      ],
      stickers: { 5: "Link sticker under the arrow." },
    },
    {
      id: "connect",
      purpose: "Does it work with my stack? The whole list, how connecting works, the webhook, what's coming.",
      frames: [
        { title: true, h: "Plug in your *tools.*", sub: "33 tools, no code, and it never edits your data." },
        { h: "Here's the whole *list.*", viz: C.grid33(), vizTop: 50 },
        { h: "Connect once. It stays *live.*", viz: C.steps([{ t: "Log in to the tool", d: "Or paste an API key. No code." }, { t: "Pick what to read", d: "Calls, deals, payments, contacts." }, { t: "Done", d: "It keeps itself up to date from then on." }]) },
        { bg: "sky", h: "Not on the list? Send it by *webhook.*", hsm: true, sub: "Any tool that can send a webhook can send its events here. That's how GoHighLevel events come in, for example.", viz: C.flow({ t: "Your tool", s: "Sends an event: a booking, a sale, a call" }, { t: "Namzilabs", s: "Counts it with everything else" }), zmax: 1.6 },
        { bg: "ink", h: "Coming *soon.*", sub: "We'll post here the day they're live.", viz: C.soon([{ src: "meta-ads", t: "Meta Ads" }, { src: "tiktok-ads", t: "TikTok Ads" }, { src: "gads", t: "Google Ads" }, { ic: "ai", t: "Your AI, connected" }]) },
        START(),
      ],
      stickers: { 2: "Question sticker: \"Which tool should be next?\"", 6: "Link sticker under the arrow." },
    },
    {
      id: "sales-teams",
      purpose: "Use case: coaching and info-product sales teams, from Monday 9:07 to the scorecard.",
      frames: [
        { title: true, h: "Sales *teams.*", sub: "For setters, closers and whoever builds the Monday report." },
        { h: "Monday, *9:07.*", viz: C.msg({ av: "J", nm: "Jordan", sub: "Head of sales · 9:07 am", tx: "What was our show rate last week?", color: "#f5a524" }) + `<div style="height:44px"></div>` + C.chores(["Export Calendly", "Export Close", "Paste both into “show-up tracker FINAL v3”", "Argue about which number is right"]) },
        { h: "Now it's already *there.*", sub: "Your Monday scorecard, live.", viz: C.kpis([{ l: "Show rate", v: "71%", d: "+4 pts", dd: "up", src: ["calendly", "close"] }, { l: "Close rate, held calls", v: "24%", d: "−2 pts", dd: "down", src: ["close", "fathom"] }, { l: "Cash collected", v: "$61.4k", d: "+9%", dd: "up", src: ["stripe", "whop"] }, { l: "Speed to lead", v: "6 min", d: "3 min faster", dd: "up", src: ["typeform", "aircall"] }, { l: "30-day refund rate", v: "3.1%", d: "+0.4 pts", dd: "down", src: ["stripe", "close"], wide: true }]), demo: true },
        { h: "By setter, by closer, by *source.*", sub: "See who's closing and who needs help, every week.", viz: C.table({ th: ["Cash collected by closer", "Last week"], rows: [{ nm: "Maya", sub: "11 deals", pct: 100, v: "$24.8k", color: "#2f5fd8" }, { nm: "Theo", sub: "9 deals", pct: 85, v: "$21.1k", color: "#8b5cf6" }, { nm: "Sam", sub: "7 deals", pct: 62, v: "$15.5k", color: "#16a34a" }] }), demo: true },
        { bg: "sky", h: "Booked is a hope. Held is a *number.*", sub: "149 calls never happened. Now you can see which ones, and why.", viz: C.twoup({ l: "Booked, 30 days", v: "412", src: ["calendly"], ghost: true }, { l: "Held, 30 days", v: "263", src: ["fathom"], blue: true }), demo: true },
        DM("SHOWUP", "what to connect and how to build your show rate"),
      ],
      stickers: { 2: "Poll sticker: \"How long does your Monday report take?\" (Under 30 min / Over an hour)." },
    },
    {
      id: "agencies",
      purpose: "Use case: outbound and appointment-setting agencies, reporting held meetings per client.",
      frames: [
        { title: true, h: "Report meetings that *happened.*", tsize: 118, sub: "Client reporting for outbound and appointment-setting agencies." },
        { h: "Booked isn't what they pay *for.*", sub: "Your client pays for the 29.", viz: C.funnel([{ src: "instantly", l: "Replies", v: "112", w: 100 }, { cv: "38% book" }, { src: "calendly", l: "Booked", v: "42", w: 88 }, { cv: "13 never happened", bad: true }, { src: "fathom", l: "Held", v: "29", w: 76 }]), demo: true },
        { h: "Cost per held meeting, per *client.*", hsm: true, viz: C.table({ th: ["Cost per held meeting", "This month"], rows: [{ nm: "Client A", av: "A", sub: "29 held of 42 booked", pct: 70, v: "$103", color: "#14b8a6" }, { nm: "Client B", av: "B", sub: "34 held of 40 booked", pct: 60, v: "$88", color: "#2f5fd8" }, { nm: "Client C", av: "C", sub: "17 held of 31 booked", pct: 100, v: "$147", bad: true, color: "#f0553d" }] }), demo: true },
        { h: "Send the receipt with the *report.*", hsm: true, viz: C.receipt({ hd: "Client A · this month", rows: [{ k: "Replies", src: "instantly", v: "112" }, { k: "Meetings booked", src: "calendly", v: "44" }, { k: "Booked twice, counted once", v: "−2", sub: true }, { k: "Meetings held", src: "fathom", v: "29" }, { k: "Retainer", v: "$3,000" }, { dash: true }, { k: "Cost per held meeting", v: "$103", total: true }], foot: "Matched by the prospect's email" }), demo: true },
        DM("HELD", "how to build cost per held meeting for every client"),
      ],
      stickers: {},
    },
    {
      id: "creators",
      purpose: "Use case: creators with courses, communities and newsletters, one number per launch.",
      frames: [
        { title: true, h: "One number for the whole *launch.*", tsize: 118, sub: "For courses, communities and newsletters." },
        { h: "Three dashboards. No *total.*", viz: C.disagree([{ src: "whop", n1: "Whop", n2: "Launch sales", v: "$21,940" }, { src: "stripe", n1: "Stripe", n2: "Launch sales", v: "$12,380" }, { src: "thrivecart", n1: "ThriveCart", n2: "Launch sales", v: "$9,020" }], "So what did the launch make?"), demo: true },
        { bg: "sky", h: "Every buyer, counted *once.*", viz: C.big({ l: "Launch revenue · 7 days", v: "$43,000", s: "3 payments showed up twice. Counted once (−$340)." }), demo: true },
        { h: "Then the numbers you actually *want.*", hsm: true, viz: C.kpis([{ l: "Revenue per subscriber", v: "$4.12", src: ["whop", "mailchimp"] }, { l: "Paying members now", v: "1,284", src: ["whop", "stripe"] }, { l: "Buyers from your list", v: "71%", src: ["mailchimp", "stripe"] }, { l: "Refund rate", v: "4%", src: ["stripe"] }]), demo: true },
        DM("LAUNCH", "how to see your launch, and your members, in one number"),
      ],
      stickers: { 2: "Poll sticker: \"Do your dashboards agree?\" (Yes / Never)." },
    },
    {
      id: "e-com",
      purpose: "Use case: Shopify and WooCommerce stores, what the email list really makes.",
      frames: [
        { title: true, h: "What your list really *makes.*", tsize: 118, sub: "For Shopify and WooCommerce stores." },
        { h: "Every tool takes *credit.*", viz: C.disagree([{ src: "klaviyo", n1: "Klaviyo", n2: "“Email drove”", v: "$31.9k" }, { src: "ganalytics", n1: "Google Analytics", n2: "“Email channel”", v: "$22.4k" }, { src: "shopify", n1: "Shopify", n2: "Total sales", v: "$48.2k" }], "Which one is true?"), demo: true },
        { bg: "sky", h: "Match orders to *subscribers.*", sub: "Matching, not attribution.", viz: C.big({ l: "Revenue from your list", v: "$29.4k", s: "61% of sales · 781 orders matched to a subscriber · 12 refunds left out" }), demo: true },
        { h: "Then track it every *week.*", viz: C.kpis([{ l: "Revenue from your list", v: "$29.4k", src: ["shopify", "klaviyo"] }, { l: "Customers you can't email", v: "1,269", src: ["shopify", "klaviyo"] }, { l: "Repeat purchase rate", v: "31%", src: ["shopify"] }, { l: "Average order, list", v: "$84", d: "vs $61 off the list", src: ["shopify", "klaviyo"] }]), demo: true },
        DM("LIST", "how to match your orders to your list"),
      ],
      stickers: { 2: "Poll sticker: \"Which number do you report?\" (Klaviyo / Shopify)." },
    },
    {
      id: "faq",
      purpose: "The questions everyone asks before they sign up.",
      frames: [
        { title: true, h: "Questions, *answered.*", sub: "Tap through. Or reply and ask yours." },
        { h: "Is it *free?*", viz: C.answer("**Free to start, no card.** Invite one person and get a month free."), vizTop: 70, center: true, zmax: 1.6 },
        { h: "Do I need to *code?*", viz: C.answer("**No.** Connect your tools, pick what to count, and it builds the number. No SQL, no spreadsheets."), vizTop: 70, center: true, zmax: 1.6 },
        { h: "Will it touch my *data?*", viz: C.answer("It reads your tools. **It never edits your data.**"), vizTop: 70, center: true, zmax: 1.6 },
        { h: "Does it work with my *tools?*", viz: C.answer("**33 tools today:** CRMs, calendars, payments, forms, email and calls. Plus any tool that can send a webhook. The whole list is in Connect."), vizTop: 70, center: true, zmax: 1.6 },
        { h: "What about ads and *AI?*", viz: C.answer("Meta, TikTok and Google Ads are **coming soon**. So is a connection to your AI. We'll post here the day they're live."), vizTop: 70, center: true, zmax: 1.6 },
        { cta: true, bg: "electric", h: "Got another *question?*", tsize: 128, sub: "Reply to this story. A real person answers.", cue: "Reply below" },
      ],
      stickers: { 7: "Question sticker: \"Ask us anything\"." },
    },
  ];
  NZ.HIGHLIGHTS = HL;
})();
