# Contributing Guidelines

You might want to make yourself familiar with [Docusaurus v3.1](https://docusaurus.io/docs) to make significant changes to the website. If you only want to make content changes you will find the page source within the `docs` folder.

## Cloning the repository

If you are a member of our organization and have push permissions to this repository, you can simply clone this repository, create a branch, and begin making changes. Otherwise you can follow this guide to forking a repository: https://help.github.com/en/github/getting-started-with-github/fork-a-repo.

Once you're happy with your changes and have committed them to a branch, you can submit a pull request in this project where a maintainer can review and merge your changes.

## Project setup

### Prerequisites

Install the latest LTS version of [node](https://nodejs.org/).

### Install dependencies

Run `npm install` in the root of this repository.

### Start development server

Run `npm start` in the root of this repository.

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

The website is automatically built and deployed on commit to `main`.

## Docs pages

### Adding new pages

New pages can be added under the `docs` folder. To add a new page:

1. Create a new `.md` or `.mdx` file within the `docs` folder. When naming the file, look for existing or similar pages to follow a similar naming convention. The name of the file is important as it will become the name in the URL. For example, `design-principles.md` becomes https://meridian.vertigis.com/docs/design-principles
2. Add appropriate markdown headers at the top of the file in the following format:

```
---
title: Design Principles
description: A helpful description
---
```

-   `title` becomes the prefix of the window title. For example `Overview | Meridian Design Principles`
-   `description` is injected into the document's `head` as a `meta` element for SEO purposes to describe the page

3. Add to the `/sidebars.js` file in the appropriate place to make it visible in the sidebar menu.

### Adding hyperlinks

Traditional markdown hyperlink syntax is used to link to other pages in the docs or elsewhere. For example:

```md
See [Key Concepts](key-concepts.mdx) for more information.
```

-   Note the use of `.md` or `.mdx` file extension when linking to relative pages within these docs. This is important for two reasons:
    -   The link works correctly when browsing the source in GitHub
    -   The `remark-validate-links` plugin uses this link to check for validity

### Adding images

The following guidelines apply to adding screenshots of the products, usually for example or demo purposes. Place images in a subfolder named after the section they will appear in. e.g. img > forms > forms-labels.png. All other images will be treated on a case by case basis, but should still be processed through [Tiny PNG](https://tinypng.com/).
