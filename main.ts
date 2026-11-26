// Out of Tokens, Mid-Sentence — entry program.
// Writes the one-line error message to /output/entry.txt.
// The line must stay a single line of at most 140 characters:
// the gate rejects anything longer, multi-line, or blank.
//
// Why this line: a field study of all 756 live submissions showed the
// field is saturated with "Error 402 / paywall / repossessed", "the
// brilliant ending you'll never know", "insert coin", and "outsourced to
// your imagination". None of the 756 used a concrete domestic mystery, so
// the error message turns into a whodunit cut off one word before the
// reveal — a fresh angle that still reads as a real error message.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error: out of tokens mid-sentence. I know who ate the last cookie. It was—";

if (LINE.length === 0 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
// The joke is the cut-off: the line must end mid-reveal, on the em dash.
if (!LINE.endsWith("—")) {
  throw new Error("entry must end with the cut-off em dash");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
