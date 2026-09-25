// Every line of Namzilabs profile and company copy, in one place.
// tools/build-copy.mjs checks each one against its platform's limit and the house rules,
// then writes brand/COPY.md; tools/build-preview.mjs puts it in the Content Kit with copy buttons.
//
// House rules (the checker enforces the first two):
//   - no em dashes and no en dashes, anywhere
//   - stay under each field's limit (counted the strict way: an emoji counts as 2)
//   - claims: 33 tools, "never edits your data", free to start with no card, AI and ad
//     platforms only as "coming soon", no invented proof, example numbers labelled
export default {
  voice: [
    ["Hook first", "The first line has to stop the scroll on its own: a number, a contradiction, a question they've asked themselves, or a scene they recognise. \"Calendly says 41. Close says 38.\" Never warm up."],
    ["One idea per line", "Short sentences. A blank line between beats. If a sentence needs a comma and an \"and\", it's probably two lines."],
    ["Their words, not ours", "Booked, held, no-show, show rate, cash collected, setter, closer, EOD report, launch, list, \"the numbers don't match\". Never \"leverage\", \"unlock\", \"seamless\", \"supercharge\" or \"game-changer\"."],
    ["Specific beats clever", "Real tool names, real-looking numbers, real moments (Monday 9:07, the Friday EOD report). Every example number is labelled as example data."],
    ["Pain, cost, fix, offer", "Name the problem, say what it costs them, show the fix in one line, then the offer. What it does, why it matters, what to do next."],
    ["One ask per post", "One main ask: comment a keyword for the DM, or link in bio, or \"free to start, no card\". A \"send this to your setter\" line on top is fine. Never three asks."],
    ["No em dashes. Ever.", "Use a full stop, a comma, a colon or brackets. Write ranges out: \"2 to 3 days\", never two numbers joined by a dash."],
    ["Proof we can stand behind", "No \"#1\", no \"trusted by\", no customer counts, no \"10x\", no \"free forever\". 33 tools, never edits your data, no code, free to start with no card. AI and ad platforms are \"coming soon\" until they're live."],
  ],
  groups: [
    {
      id: "positioning",
      title: "What we say, in one breath",
      intro: "The three things every piece of copy has to land: what it does, why they need it, and the offer.",
      items: [
        { label: "One-liner", limit: 200, text: "Namzilabs puts all your business data in one place: it connects the tools you already use, counts every customer once across all of them, and shows you exactly where your funnel breaks." },
        { label: "Elevator pitch (30 seconds)", text: "Your leads are in Typeform, your calls are in Calendly, your deals are in your CRM and your money is in Stripe. Every tool shows you a slice, so every number is a guess and every Monday starts with exports.\n\nNamzilabs connects all of them, matches the same person across every tool and lets you build any metric you want, like show rate or revenue per lead. You see exactly where the funnel breaks, and every number shows its working.\n\nIt's free to start, no card." },
        { label: "What it does", text: "Connect every tool you use. Match every customer across them. Build any metric. See exactly where the funnel breaks." },
        { label: "Why they need it", text: "Because your tools disagree. Calendly says 41, your CRM says 38, the sheet says 44. We count each person once, so you get one number you can trust." },
        { label: "The offer", text: "Free to start, no card. Invite one person and get a month free." },
        { label: "The short hook", text: "Zapier connects your apps. Namzilabs connects your numbers." },
      ],
    },
    {
      id: "taglines",
      title: "Taglines",
      intro: "Short lines for profile names, banners, thumbnails, ads and the site. The first is the primary one.",
      items: [
        { label: "Primary", limit: 60, text: "All your data. One place.", note: "Everywhere: banners, the site, the lockup." },
        { label: "The proof", limit: 60, text: "Every tool. Every customer. One true number.", note: "When the reader already has too many dashboards." },
        { label: "The funnel", limit: 60, text: "See exactly where your funnel breaks.", note: "Sales teams and agencies." },
        { label: "The sales floor", limit: 60, text: "Booked is a hope. Held is a number.", note: "Coaching and info-product sales teams." },
        { label: "The money", limit: 60, text: "Know exactly where the money leaks.", note: "Founders and owners." },
        { label: "Playful", limit: 60, text: "True numbers, not blurry ones.", note: "Pairs with Namzi." },
        { label: "Playful 2", limit: 80, text: "Your Stripe, your CRM and your calendar. Finally on speaking terms.", note: "Launches, memes, a lighter profile." },
        { label: "Builders", limit: 80, text: "Zapier connects your apps. Namzilabs connects your numbers.", note: "Founders and ops people who already use Zapier." },
        { label: "Double counting", limit: 60, text: "Count every customer once.", note: "Anyone whose numbers don't match." },
        { label: "Monday", limit: 60, text: "Your Monday report, done before Monday.", note: "Whoever builds the weekly report by hand." },
      ],
    },
    {
      id: "bios",
      title: "Bios",
      intro: "Built like the best creator-tool bios: line 1 is the hook, line 2 says what it does and who it's for, line 3 is the offer and points at the link. Paste them as they are, line breaks included.",
      items: [
        { label: "Instagram (recommended)", limit: 150, text: "Stripe, Calendly & your CRM in one place 📍\nSee your real show rate & where your funnel leaks\nFree to start, no card ⬇️", note: "For the main account. Show rate is the number our first audience lives by." },
        { label: "Instagram (creators)", limit: 150, text: "All your launch data in one place 📍\nWhop, Stripe & your list, every buyer counted once\nFree to start, no card ⬇️", note: "For a launch week, or if the audience is mostly creators." },
        { label: "Instagram (founders)", limit: 150, text: "Your tools disagree. We count every customer once.\nAll your data in one place, any metric\nFree to start, no card ⬇️" },
        { label: "Instagram (with proof, later)", limit: 150, text: "[$X] tracked across [N] businesses\nAll your data in one place for sales teams\nFree to start, no card ⬇️", note: "Proof first, the way the best creator tools do it. Use it only once the numbers are real and you're allowed to share them. Until then, use one above." },
        { label: "X", limit: 160, text: "All your data in one place 📍 Connect Stripe, Calendly, your CRM + 30 more tools, count every customer once, see where your funnel leaks. Free to start ⬇️" },
        { label: "X (short)", limit: 160, text: "Your tools disagree. We count every customer once. All your data in one place, any metric, the true numbers. Free to start, no card ⬇️" },
        { label: "TikTok", limit: 80, text: "All your sales data in one place 📍 Find your funnel leaks. Free ⬇️" },
        { label: "Threads", limit: 150, text: "Stripe, Calendly & your CRM in one place 📍\nSee your real show rate & where your funnel leaks\nFree to start, no card ⬇️" },
        { label: "Facebook page intro", limit: 101, text: "All your data in one place. Connect your tools, see where your funnel leaks. Free to start, no card." },
        { label: "LinkedIn company tagline", limit: 120, text: "All your data in one place. Connect your tools, count every customer once, see exactly where your funnel breaks." },
        { label: "LinkedIn headline (founder)", limit: 220, text: "Founder, Namzilabs · All your business data in one place: connect your tools, count every customer once, see exactly where your funnel breaks · Free to start at namzilabs.co" },
        { label: "LinkedIn headline (team)", limit: 220, text: "[Role] at Namzilabs · We put all your business data in one place, so you can see exactly where your funnel breaks" },
        { label: "YouTube channel tagline", limit: 100, text: "Short videos on the numbers that run a business, and where your funnel really breaks." },
      ],
    },
    {
      id: "descriptions",
      title: "Company descriptions",
      intro: "From one sentence to the full LinkedIn About. Pick the longest one the field allows.",
      items: [
        { label: "One sentence", limit: 160, text: "Namzilabs connects your tools, counts every customer once across all of them, and shows you exactly where your funnel breaks. Free to start." },
        { label: "Short (directories, Crunchbase, bios with room)", limit: 300, text: "Namzilabs puts all your business data in one place. Connect 33 tools (Stripe, Calendly, Close, Shopify, Whop, Typeform, Fathom and more), match every customer across them, build any metric and see exactly where your funnel breaks. No code, never edits your data, free to start." },
        { label: "Facebook page description", limit: 255, text: "All your business data in one place. Connect Stripe, Calendly, your CRM and 30 more tools, count every customer once, build any metric and see exactly where your funnel breaks. No code. Free to start, no card, at namzilabs.co." },
        { label: "Medium (G2, Capterra, app listings, Facebook About)", limit: 900, text: "Your business runs on a dozen tools, and none of them sees the whole customer. Calendly knows who booked. Your CRM knows what the reps logged. Stripe knows who paid. So every report is a guess, and every Monday starts with exports.\n\nNamzilabs connects all of them in one place. It matches the same person across every tool by email or phone, counts each customer and each meeting once, and lets you build any metric: show rate, cost per held meeting, revenue per lead, speed to lead, revenue from your list. You see exactly where your funnel breaks, and every number shows its working.\n\n33 tools. No code. Never edits your data. Free to start, no card." },
        { label: "LinkedIn About (long)", limit: 2000, text: "Your business runs on a stack of tools. Leads in Typeform. Calls in Calendly. Deals in your CRM. Payments in Stripe. None of them sees the whole customer, so every report is a guess and every Monday starts with exports and VLOOKUPs.\n\nNamzilabs puts all of it in one place.\n\n→ Connect 33 tools with no code: Stripe, Calendly, Close, Pipedrive, Attio, Shopify, Whop, Typeform, Fathom, Klaviyo and more. Read-only: we never edit your data.\n→ Match every customer across every tool by email or phone, so each person and each meeting is counted once.\n→ Build any metric across tools: show rate, cost per held meeting, revenue per lead, speed to lead, revenue from your list.\n→ See exactly where your funnel breaks, from the first form to the payment.\n\nEvery number shows its working: which sources it read, what it matched and what it left out. So when someone asks \"where did that number come from?\", you have the answer.\n\nBuilt for coaching and info-product sales teams, outbound agencies, creators and e-commerce brands who are done reconciling spreadsheets.\n\nFree to start, no card: namzilabs.co" },
        { label: "YouTube channel description", limit: 1000, text: "Short videos on the numbers that actually run a business: show rate, speed to lead, cost per held meeting, revenue per lead, and where your funnel really breaks.\n\nMade by Namzilabs, the place all your business data comes together. Connect the tools you already use (Stripe, Calendly, your CRM, Shopify, Whop, Typeform, Fathom and 26 more), count every customer once, and build any metric without code or spreadsheets.\n\nNew videos every week. Free to start, no card: namzilabs.co" },
        { label: "Press boilerplate (About Namzilabs)", limit: 700, text: "About Namzilabs\nNamzilabs puts all of a business's data in one place. It connects 33 tools, from Stripe and Calendly to Shopify, Whop and Fathom, matches the same customer across all of them, and lets teams build any metric and see exactly where their funnel breaks. Every number shows its working, and Namzilabs never edits the data it reads. It's free to start at namzilabs.co." },
      ],
    },
    {
      id: "website",
      title: "Website and link previews",
      intro: "For namzilabs.co and anywhere a link unfurls.",
      items: [
        { label: "Hero headline", limit: 60, text: "All your data. One place." },
        { label: "Hero subheadline", limit: 180, text: "Connect the tools you already use, count every customer once, and see exactly where your funnel breaks. No code. No spreadsheets." },
        { label: "Primary button", limit: 30, text: "Start free, no card" },
        { label: "Secondary button", limit: 30, text: "See how it works" },
        { label: "Meta title", limit: 60, text: "Namzilabs: all your business data in one place" },
        { label: "Meta description", limit: 155, text: "Connect Stripe, Calendly, your CRM and 30 more tools. Count every customer once, build any metric and see where your funnel breaks. Free to start." },
        { label: "Link preview title (og:title)", limit: 70, text: "All your data. One place. | Namzilabs" },
        { label: "Link preview text (og:description)", limit: 200, text: "Every tool you use, every customer counted once, any metric you want. See exactly where your funnel breaks. Free to start, no card." },
      ],
    },
    {
      id: "launch",
      title: "Launch copy (Product Hunt and directories)",
      intro: "Fill the brackets with the founder's own words. Never invent a story or a result.",
      items: [
        { label: "Product Hunt tagline", limit: 60, text: "All your business data in one place, counted once" },
        { label: "Product Hunt description", limit: 260, text: "Namzilabs connects the tools your business runs on (Stripe, Calendly, your CRM, Shopify and 29 more), matches every customer across them and lets you build any metric. See exactly where your funnel breaks. No code. Free to start." },
        { label: "Maker's first comment", limit: 1200, text: "Hey Product Hunt 👋\n\nIf you've ever sat in a meeting where Calendly said 41 calls, the CRM said 38 and the spreadsheet said 44, you know why we built Namzilabs.\n\nNone of those tools is wrong. Each one only sees its own slice. So we connect all of them, match the same person across every tool, and count each customer and each meeting once.\n\nThen you can build any metric you want (show rate, cost per held meeting, revenue per lead) and see exactly where your funnel breaks. Every number shows its working.\n\n[Why you built it, in your own words: one or two lines.]\n\nIt's free to start, no card. I'd love to hear which number you'd build first. I'm here all day to answer questions." },
      ],
    },
    {
      id: "ctas",
      title: "Calls to action",
      intro: "One ask per post. Pick the one that fits.",
      items: [
        { label: "Free", text: "Free to start, no card. Link in bio." },
        { label: "Link (X, LinkedIn)", text: "Start free at namzilabs.co (no card)." },
        { label: "Comment keyword", text: "Comment SHOWUP and I'll send you the exact setup." },
        { label: "Send it", text: "Send this to the person who builds the Monday report." },
        { label: "Referral", text: "Invite one person and get a month free." },
        { label: "Reply to \"what do you do?\"", text: "We put all your business data in one place. Connect your tools, we match every customer across them, and you can build any metric and see where your funnel breaks. Free to start: namzilabs.co" },
        { label: "Email signature", text: "[Name] · Namzilabs\nAll your data in one place · namzilabs.co" },
      ],
    },
    {
      id: "dms",
      title: "DM replies for comment keywords",
      intro: "When someone comments a keyword, send the matching reply. Each gives the exact setup in three steps, then the link. Answer by hand while volume is low, or paste them into ManyChat.",
      items: [
        { label: "SHOWUP (show rate)", text: "Here's the show rate setup 👇\n\n1. Connect your calendar (Calendly or Cal.com) for booked calls, and Fathom or your CRM for the calls that actually happened.\n2. Build show rate: held ÷ booked, matched by each lead's email, so a reschedule or a duplicate booking counts once.\n3. Split it by setter, by source or by week, and you'll see exactly where people stop showing up.\n\nStart free (no card): namzilabs.co\n\nReply with your stack and I'll tell you exactly what to connect." },
        { label: "HELD (cost per held meeting)", text: "Here's cost per held meeting 👇\n\n1. Connect your outbound tool (Instantly, Smartlead or lemlist), your calendar and Fathom.\n2. Count held meetings per client, matched by the prospect's email, so one meeting booked twice counts once.\n3. Cost per held meeting = what the client pays ÷ meetings that happened. That's the number they actually care about.\n\nStart free (no card): namzilabs.co" },
        { label: "SPEED (speed to lead)", text: "Here's speed to lead 👇\n\n1. Connect your form (Typeform or Tally) and your dialer or calendar (Aircall, JustCall or Calendly).\n2. Speed to lead = time from the form to the first call, paired per lead by email or phone.\n3. Report the median, and count the leads nobody called. They're the slowest of all.\n\nStart free (no card): namzilabs.co" },
        { label: "LEAK (where the funnel breaks)", text: "Here's how to find your leak 👇\n\n1. Connect every step: your form, your calendar, your call recorder and your payments.\n2. Build the funnel: leads → booked → held → paid, with one person per row across every tool.\n3. Look at the drop between each pair of steps. The one you didn't expect is your leak, and for most sales teams it's booked → held: the calls that never happen.\n\nStart free (no card): namzilabs.co" },
        { label: "LAUNCH (creators)", text: "Here's your launch in one number 👇\n\n1. Connect Whop, Stripe or ThriveCart, plus Mailchimp or Klaviyo.\n2. Launch revenue, with every buyer counted once even if they paid in two places.\n3. Revenue per subscriber = launch revenue ÷ your list. Now you know what one more subscriber is worth.\n\nRunning a membership? Same setup: your real member count is the people paying in Whop or Stripe right now, matched by email, each person once. Failed payments and people still tagged after they cancelled drop out.\n\nStart free (no card): namzilabs.co" },
        { label: "LIST (e-commerce)", text: "Here's revenue from your list 👇\n\n1. Connect Shopify or WooCommerce, plus Klaviyo or Mailchimp.\n2. Match orders to subscribers by email. That's matching, not attribution.\n3. Revenue from your list = orders from people on your list, refunds left out.\n\nStart free (no card): namzilabs.co" },
        { label: "METRICS (any metric)", text: "Which one first? Reply with one:\n• show rate\n• cost per held meeting\n• revenue per lead\n• speed to lead\n• reply-to-meeting rate\n• revenue from your list\n• your EOD numbers (dials, conversations, booked)\n• the Monday scorecard (show rate, close rate on held calls, cash collected, speed to lead, refund rate)\n\nThe setup is always the same: connect the tools that hold each half, pick what to divide by what, and it stays live and shows its working.\n\nStart free (no card): namzilabs.co" },
        { label: "FIRST10 (design partners)", text: "Thank you 🙏 We're setting up the first 10 teams by hand, with the founder.\n\nReply with three things:\n1. The tools you use\n2. Your team size\n3. The one number you don't trust right now\n\nI'll get back to you personally." },
      ],
    },
  ],
};
