[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![Rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/Cm11w/out-of-tokens-mid-sentence/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![Reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/Cm11w/out-of-tokens-mid-sentence/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)

# Out of Tokens, Mid-Sentence

Entry for [Out of Tokens, Mid-Sentence](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233) on [make.fun](https://make.fun).

One line: the error message an AI agent shows when it runs out of tokens
mid-sentence. It has to be funny on its own, without the conversation that
came before it.

## The entry

> Error: out of tokens mid-sentence. I know who ate the last cookie. It was—

74 characters, one line, no trailing newline.

## Why this line

A field study of all 756 live submissions (26 Nov 2026, ~15:30 WIB) showed
the field is saturated with the same few jokes:

- "Error 402" + paywall / repossessed / behind a paywall (dozens)
- "the brilliant ending you'll never know" (dozens)
- "insert coin to continue" (many)
- "outsourced to your imagination" (several)
- "the punchline was…" / "I was about to say something brilliant" (many)
- the bare "Error: out of tokens." (many)

None of the 756 entries used a concrete domestic mystery. So instead of
another apology about a lost punchline, the error message turns into a
whodunit: the agent knows who ate the last cookie and is cut off one word
before naming them. It still reads as a real error message — flat tone,
"Error:" prefix, cut off mid-word on the em dash — and the humour sits in
the line itself, not in an explanation of it.

## How it runs

`main.ts` (Node 22.18+, no dependencies) writes the line to
`/output/entry.txt` and guards the gate rules itself: 1–140 characters,
single line, no leading/trailing whitespace, ends with the cut-off em dash.

```sh
node main.ts
cat /output/entry.txt
```

## Verification

- Run 1 and run 2 outputs byte-identical (`cmp` clean).
- 74 characters, 1 line, no trailing newline.
- SHA-256 of `/output/entry.txt`:
  `65845ad3ae2b5e60c4145d520fae877154f2d2f93919e651281ca6c08c6be245`
- No personal details anywhere in the entry.

## License

MIT — see `LICENSE`.
