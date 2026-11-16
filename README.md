# markdown-render-speed-02 — a faster drop-in for marked

`parse(markdown)` returns exactly the HTML [marked](https://marked.js.org) 18.1.3
renders with its default options — and returns it faster. It is a performance
fork of marked's own source: the list tokenizer's per-line block tests are
guarded by one first-character scan, tab expansion and the `[^ ]` search are
hand-rolled scans, and every inline tokenizer bails before its anchored regex
when the run's first character cannot start that token.

## Run it

```sh
node main.ts
```

## Grading

The grader runs `node /bot/main.ts` on Node 22: it reads every case from
`/input/cases.json`, renders each one with `parse` from `parse.js`, and writes
`/output/html.json`. Every rendered string must match marked's byte for byte.

## License

MIT — see [LICENSE](LICENSE). marked's own license is kept in
[LICENSE.marked](LICENSE.marked).
