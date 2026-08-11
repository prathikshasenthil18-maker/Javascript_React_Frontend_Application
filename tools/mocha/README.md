# mocha — JavaScript / Node 14 (linked to React monolith)

**Customer Version:** 14  
**Syntax:** ES2020 / Node.js 14  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run test` |
| platform name | `nyc-mocha` |
| targets | `src/domain/**/*.js`, `test/**/*.spec.js` |
| configs | `.mocharc.json` |

## Run

```bash
# from repository root
bash tools/mocha/run.sh
# or
npm run tool:mocha
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
