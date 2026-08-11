# jscpd — JavaScript / Node 22 (linked to React monolith)

**Customer Version:** 22  
**Syntax:** ES2024 / Node.js 22  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run jscpd` |
| platform name | `jscpd-js` |
| targets | `tool-fixtures/retailOrderProcessor.js`, `tool-fixtures/wholesaleOrderProcessor.js`, `src/**/*.js` |
| configs | `.jscpd.json` |

## Run

```bash
# from repository root
bash tools/jscpd/run.sh
# or
npm run tool:jscpd
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
