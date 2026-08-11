# eslint — JavaScript / Node 24 (linked to React monolith)

**Customer Version:** 24  
**Syntax:** ES2024+ / Node.js 24  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run lint` |
| platform name | `eslint` |
| targets | `src/**/*.{js,jsx}`, `test/**/*.js` |
| configs | `.eslintrc.cjs` |

## Run

```bash
# from repository root
bash tools/eslint/run.sh
# or
npm run tool:eslint
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
