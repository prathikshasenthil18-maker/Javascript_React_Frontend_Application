# lizard — JavaScript / Node 14 (linked to React monolith)

**Customer Version:** 14  
**Syntax:** ES2020 / Node.js 14  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run lizard` |
| platform name | `lizard` |
| targets | `src/domain/**/*.js`, `tool-fixtures/**/*.js` |
| configs | `requirements-tools.txt` |

## Run

```bash
# from repository root
bash tools/lizard/run.sh
# or
npm run tool:lizard
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
