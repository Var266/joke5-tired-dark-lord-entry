import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Oh. Another hero. Do come up \u2014 slowly, the planks... never mind, they hold. Mostly. " +
  "I have kept this bridge for forty years, and every spring some bright young sword swears he will end me. " +
  "He never asks who mends the ropes after the storms. Who feeds the goats. " +
  "Who counts the coins the river spits back. You want passage? The price is one true thing. Not gold. " +
  "Gold is... heavy. And it rusts the hinges. Tell me why you really crossed, and I will decide if the river keeps you. " +
  "Most do not get that far. Most just... shout.";

const words = entry.split(/\s+/).length;
if (entry.length > 600) throw new Error(`entry too long: ${entry.length} chars (gate is 600)`);
if (words < 95 || words > 105) throw new Error(`entry off target: ${words} words (target ~100)`);
if (!entry.trim()) throw new Error("entry is blank");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars, ${words} words`);
