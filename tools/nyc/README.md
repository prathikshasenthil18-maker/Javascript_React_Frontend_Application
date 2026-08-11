# nyc — JavaScript / Node 22 (linked to React monolith)

**Customer Version:** 22  
**Syntax:** ES2024 / Node.js 22  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run test:coverage` |
| platform name | `nyc-mocha` |
| targets | `src/domain/**/*.js`, `test/**/*.spec.js` |
| configs | `.nycrc.json`, `.mocharc.json` |

## Run

```bash
# from repository root
bash tools/nyc/run.sh
# or
npm run tool:nyc
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
