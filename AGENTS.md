# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this project is

The **VertiGIS Meridian Design System** — a public documentation website
(https://meridian.vertigis.com) that describes VertiGIS's design principles,
philosophy, and design language. It is built with
[Docusaurus 3](https://docusaurus.io/docs) and deployed to GitHub Pages.

This repo is **documentation, not a component library**. The React components
under [src/components/](src/components/) exist only to render live examples
inside the docs pages. Nothing here is published as a package
(`"private": true`, `version: 0.0.0`). Consumers get real components from
`@vertigis/react-ui`, which is a dependency here purely so the docs can
demonstrate it.

## Commands

Node >= 22 is required (see `engines` in [package.json](package.json)).

| Command            | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `npm install`      | Install dependencies                                 |
| `npm start`        | Dev server with hot reload                           |
| `npm run build`    | Production build into `build/` (this is the CI gate) |
| `npm run lint`     | `remark-validate-links` over docs                    |
| `npm run prettier` | Format all `css,js,jsx,ts,tsx,md,mdx,json` files     |

There is **no test suite**. `npm run build` is the primary correctness check —
Docusaurus fails the build on broken internal links and MDX compile errors, so
always run it after touching docs or components.

CI ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs `npm install`,
`npm run build`, then `npm run lint` on every PR to `main`. Merging to `main`
auto-deploys the `build/` folder to the `gh-pages` branch.

## Repository layout

```
docs/                     Documentation pages (the actual content)
sidebars.js               Sidebar order — a page is invisible until listed here
docusaurus.config.js      Site config, navbar, footer, presets, plugins
src/pages/index.js        Custom landing page (not a docs page)
src/components/*.jsx      Live examples embedded into docs via MDX imports
src/css/custom.css        Global styles, including the classes docs pages use
src/meridian-plugin.js    Local Docusaurus plugin (webpack ESM workaround)
static/img/<section>/     Images, foldered by the docs section that uses them
```

## Working on docs pages

Content lives in [docs/](docs/): `design-principles.md`,
`design-philosophy.md`, `design-language.md`, `additional-resources.md`.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before adding a page — it is the
authoritative guide. In short:

1. Create the file in `docs/`. The filename becomes the URL slug, so
   `design-principles.md` → `/docs/design-principles`. Match the naming style
   of existing files.
2. Add frontmatter with `title` (prefixes the window title) and `description`
   (emitted as a `meta` tag for SEO).
3. Add the slug to [sidebars.js](sidebars.js) or the page will not appear in
   the sidebar.

### The `.md` files are really MDX

Docusaurus 3 compiles `.md` as MDX by default, and this repo relies on that:
[docs/design-language.md](docs/design-language.md#L5-L8) imports JSX components
at the top of the file and renders them inline. Consequences to respect:

-   Raw HTML in docs is JSX: tags must be self-closed (`<img ... />`) and
    attributes JSX-safe. The repo is inconsistent about `class` vs
    `className` — `additional-resources.md` uses `class` throughout while
    `design-language.md` mostly uses `className`. Both render, but React
    warns on `class`; prefer `className` in new markup and stay consistent
    within the block you are editing.
-   An unescaped `<` or `{` will break the build, not degrade gracefully.
-   Blank lines are needed around JSX blocks for surrounding markdown to render.

### Links and images

-   Link between docs pages with the **file extension included**
    (`[Key Concepts](key-concepts.md)`). This keeps the link working when
    browsing on GitHub and lets `remark-validate-links` verify it.
-   Images go in `static/img/<section>/`, referenced as `/img/<section>/name.png`
    (no `static/` prefix). Compress new images through
    [TinyPNG](https://tinypng.com/) before committing.
-   Always supply `alt` text plus explicit `width`/`height` on `<img>` to avoid
    layout shift, matching existing usage.

### Styling docs content

Docs pages lean on global class names defined in
[src/css/custom.css](src/css/custom.css) — e.g. `img-example`, `img-caption`,
`eg-do` / `eg-dont`, `box-cols`, `flex-container`, `color-tables`,
`palette-grid`. Reuse an existing class before adding a new one; if you must
add one, put it in `custom.css` alongside its neighbours.

Docusaurus admonitions (`:::tip`, `:::note`, …) are available and used in
`design-principles.md`.

## Working on example components

[src/components/](src/components/) holds the demo components. Two distinct
conventions live here, and mixing them up is the easiest mistake to make:

-   **`Button.jsx`** (capitalized) is a hand-rolled button used only by the
    landing page [src/pages/index.js](src/pages/index.js). It is styled by
    `button.css` and is _not_ part of the design system.
-   **`buttons.jsx`, `menus.jsx`, `tabs.jsx`, `icons.jsx`** (lowercase) are
    named-export demo components imported by docs pages. These are the ones that
    should reflect real design-system usage.

When adding or editing a demo component:

-   Build it from `@vertigis/react-ui` primitives, not raw HTML.
-   Wrap the demo in `GcxThemeProvider` with the shared theme shape used by the
    existing files — `createTheme({ palette: { primary: blue, secondary: teal } })`
    from `@vertigis/react-ui/colors/*`.
-   Use named exports (`export function ButtonPairs()`), since docs import them
    by name. `icons.jsx` is the exception and uses a default export.
-   Import `@vertigis/react-ui` submodules by path
    (`@vertigis/react-ui/Button`), not from the package root.

`src/meridian-plugin.js` sets `resolve.fullySpecified: false` as a workaround
for `@vertigis/react-ui` and MUI not being fully ESM-compliant. Do not remove
it — imports of those packages will fail to resolve without it.

## Conventions

-   Prettier is the formatter with **`tabWidth: 4`**, and `printWidth: 70` for
    `.md`/`.mdx`. A `simple-git-hooks` pre-commit hook runs `lint-staged`, so
    staged files are formatted automatically. Run `npm run prettier` if you
    bypass hooks.
-   CommonJS (`module.exports`) in root config files; ESM `import`/`export` in
    `src/`. Follow whichever the file already uses.
-   Prose style in the docs is second-person and instructional; images are paired
    with a caption or do/don't framing. Match the tone of the surrounding page.
-   Commits are prefixed conventionally where a convention exists; recent history
    is dominated by Dependabot `Bump <dep> from x to y (#NN)` commits. Work
    happens on a branch and lands via PR to `main`.

## Known rough edges

-   The `lint` script globs `docs/**/*.mdx`, but every docs file is `.md`, so
    link validation currently checks **zero files** and always passes. If you
    are asked to fix link checking, widen the glob to `docs/**/*.{md,mdx}` and
    expect previously-unreported broken links to surface.
-   [src/components/resources.css](src/components/resources.css) is not imported
    anywhere; its `palette*` classes are dead unless you wire it up.
-   `noIndex: true` is set in [docusaurus.config.js](docusaurus.config.js), so
    the site is intentionally excluded from search engines. Don't "fix" this
    without asking.
-   The color mode switch is disabled (`colorMode.disableSwitch`); the site is
    light-mode only. Don't add dark-mode-only styling assumptions.

## Before you finish

1. `npm run build` — catches MDX errors and broken internal links.
2. `npm run prettier` — or let the pre-commit hook handle staged files.
3. If you added a docs page, confirm it is in `sidebars.js` and that the dev
   server renders it (`npm start`).
