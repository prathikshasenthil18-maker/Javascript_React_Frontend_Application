# eslint-plugin-sonarjs — JavaScript / Node 26 (linked to React monolith)

**Customer Version:** 26  
**Syntax:** ES2026 target / Node.js 26  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run lint:sonarjs` |
| platform name | `eslint-sonarjs` |
| targets | `src/domain/complexitySample.js`, `tool-fixtures/**/*.js` |
| configs | `.eslintrc.sonarjs.cjs` |

## Run

```bash
# from repository root
bash tools/eslint-plugin-sonarjs/run.sh
# or
npm run tool:eslint-plugin-sonarjs
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
