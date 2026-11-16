// The drop-in this competition races: parse(markdown) returns the HTML marked
// 18.1.3 renders with its default options (GFM on, async off). This is a
// performance fork of marked's own TypeScript source (marked 18.1.3, MIT,
// LICENSE.marked, NOTICE.marked): the block list tokenizer's per-line block
// tests are guarded by a single first-character scan, the leading-whitespace
// tab expansion and the `[^ ]` search are hand-rolled scans, the inline
// tokenizers bail before their anchored regexes when the run's first
// character cannot start that token, and the em-strong/del source masks run
// only when the run's characters can need them. All must return the same
// string marked does, for every input.

import { Marked } from './src/Instance.ts';

const marked = new Marked();

/** The HTML marked renders for `markdown`, with marked's defaults. */
export function parse(markdown) {
  return marked.parse(markdown);
}
