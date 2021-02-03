# Overview

# Devlopment Environment Setup

This _website?_ is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.
The project relies on [Node and NPM](https://nodejs.org/en/download/) being installed locally. And assumes you have git 2.22+ installed.
All other tooling is included as a development dependency within `package.json.`

### Setup your Development Environment

-   Clone the Source Repo
-   Install npm packages and development dependencies.

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build for Production

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. Be sure to update the `baseUrl` property in `docusaurus.config.js` as needed to support an alternate path - default is `/`.
