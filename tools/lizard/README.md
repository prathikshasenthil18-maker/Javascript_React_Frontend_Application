# lizard — JavaScript / Node 22 (linked to React monolith)

**Customer Version:** 22  
**Syntax:** ES2024 / Node.js 22  
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
