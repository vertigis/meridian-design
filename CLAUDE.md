# CLAUDE.md

This project's agent guidance lives in a single file, [AGENTS.md](AGENTS.md),
so that Claude Code and other tools stay in sync. It is imported below —
read it before making changes.

@AGENTS.md

## Reminders specific to this repo

-   There is no test suite. `npm run build` is the correctness gate; run it
    after any change to `docs/`, `src/`, or `docusaurus.config.js`.
-   `npm run lint` currently matches zero files (it globs `docs/**/*.mdx`
    while every docs page is `.md`), so a green lint proves nothing about
    link validity. Don't cite it as verification.
-   Files in `docs/` are `.md` but compile as MDX. Unescaped `<` or `{`
    breaks the build rather than degrading.
