# eslint-plugin-security — JavaScript / Node 18 (linked to React monolith)

**Customer Version:** 18  
**Syntax:** ES2022 / Node.js 18  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run lint:security` |
| platform name | `eslint-security` |
| targets | `src/**/*.js`, `tool-fixtures/sastFixture.js` |
| configs | `.eslintrc.security.cjs` |

## Run

```bash
# from repository root
bash tools/eslint-plugin-security/run.sh
# or
npm run tool:eslint-plugin-security
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
