# npm-audit — JavaScript / Node 26 (linked to React monolith)

**Customer Version:** 26  
**Syntax:** ES2026 target / Node.js 26  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run audit` |
| platform name | `npm-audit` |
| targets | `package.json`, `package-lock.json` |
| configs | `package.json` |

## Run

```bash
# from repository root
bash tools/npm-audit/run.sh
# or
npm run tool:npm-audit
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
