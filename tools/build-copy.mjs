#!/usr/bin/env node
// Check every line of profile and company copy (brand/copy/copy.mjs), write brand/COPY.md, and
// copy the day-1 bios into brand/banners/README.md.
//
//   node tools/build-copy.mjs
//
// Fails if any line has an em or en dash, or runs over its platform's limit. Lengths are counted
// the strict way (UTF-16 units, so an emoji counts as 2), which is how the stingiest platforms count.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import copy from "../brand/copy/copy.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bad = [];
const DASH = /[–—]/;
const check = (where, text) => { if (DASH.test(text)) bad.push(`${where}: has a dash`); };
for (const [t, d] of copy.voice) { check(`voice "${t}"`, t); check(`voice "${t}"`, d); }
for (const g of copy.groups) {
  check(g.title, g.title + g.intro);
  for (const it of g.items) {
    check(`${g.title} / ${it.label}`, it.text + (it.note || "") + it.label);
    if (it.limit && it.text.length > it.limit) bad.push(`${g.title} / ${it.label}: ${it.text.length} > ${it.limit}`);
  }
}
if (bad.length) { console.error(bad.join("\n")); process.exit(1); }

let md = `# Namzilabs copy\n\nBios, taglines, company descriptions and replies, ready to paste. Every one says what Namzilabs does, why it matters, and the offer. The source is [\`copy/copy.mjs\`](copy/copy.mjs); run \`node tools/build-copy.mjs\` after editing it, which checks every line against its platform's limit and rebuilds this page. The Content Kit shows the same lines with copy buttons.\n\n## How we write\n\n`;
for (const [t, d] of copy.voice) md += `- **${t}.** ${d}\n`;
for (const g of copy.groups) {
  md += `\n## ${g.title}\n\n${g.intro}\n`;
  for (const it of g.items) {
    md += `\n**${it.label}**${it.limit ? ` · ${it.text.length}/${it.limit} characters` : ""}${it.note ? `  \n${it.note}` : ""}\n\n\`\`\`text\n${it.text}\n\`\`\`\n`;
  }
}
writeFileSync(path.join(ROOT, "brand/COPY.md"), md);

// The day-1 bios (items marked `day1`) also sit in the banners README, next to the banners they go with.
const README = path.join(ROOT, "brand/banners/README.md");
const START = "<!-- day1:start", END = "<!-- day1:end -->";
const src = readFileSync(README, "utf8");
const a = src.indexOf(START), b = src.indexOf(END);
if (a < 0 || b < a) { console.error("brand/banners/README.md: the day1 markers are missing"); process.exit(1); }
const day1 = copy.groups.flatMap((g) => g.items).filter((it) => it.day1);
const block = "<!-- day1:start: written by tools/build-copy.mjs from brand/copy/copy.mjs, so edit it there -->\n"
  + day1.map((it) => `**${it.day1}**\n\`\`\`text\n${it.text}\n\`\`\`\n`).join("\n") + END;
writeFileSync(README, src.slice(0, a) + block + src.slice(b + END.length));
const n = copy.groups.reduce((a, g) => a + g.items.length, 0);
console.log(`brand/COPY.md: ${n} lines of copy in ${copy.groups.length} groups, all within their limits; ${day1.length} day-1 bios in brand/banners/README.md`);
