# stryker-js — JavaScript / Node 26 (linked to React monolith)

**Customer Version:** 26  
**Syntax:** ES2026 target / Node.js 26  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run stryker` |
| platform name | `stryker-js` |
| targets | `src/domain/calculator.js`, `test/calculator.spec.js` |
| configs | `stryker.conf.json` |

## Run

```bash
# from repository root
bash tools/stryker-js/run.sh
# or
npm run tool:stryker-js
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
