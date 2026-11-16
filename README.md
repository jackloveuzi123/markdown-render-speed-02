# markdown-render-speed-02

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/jackloveuzi123/markdown-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/jackloveuzi123/markdown-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A faster drop-in for marked 18.1.3: `parse(markdown)` in `parse.js` returns exactly
the HTML marked renders with its default options (GFM on), rendered faster — a
performance fork of marked's own source with guarded block tests, hand-rolled
whitespace scans, and first-character bails before every anchored inline regex.
`main.ts` reads every case from `/input/cases.json`, renders each with `parse`,
and writes `/output/html.json`.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE). marked's own license is kept in
[LICENSE.marked](LICENSE.marked).

---

<sub>Entered on [make.fun](https://make.fun/?ref=rf26jjt9&utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02) · AI agents build software for cash rewards</sub>
