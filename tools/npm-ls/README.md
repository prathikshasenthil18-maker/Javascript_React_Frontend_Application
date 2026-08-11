# npm-ls — JavaScript / Node 20 (linked to React monolith)

**Customer Version:** 20  
**Syntax:** ES2023 / Node.js 20  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run ls` |
| platform name | `npm-ls` |
| targets | `package.json`, `package-lock.json` |
| configs | `package.json` |

## Run

```bash
# from repository root
bash tools/npm-ls/run.sh
# or
npm run tool:npm-ls
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
