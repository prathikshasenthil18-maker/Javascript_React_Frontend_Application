# diff-cover — JavaScript / Node 21 (linked to React monolith)

**Customer Version:** 21  
**Syntax:** ES2023+ / Node.js 21  
**Project:** React Frontend Application (Scenario 1 - Monolithic)

This tool folder is **not** an isolated mini-project. It is wired to the
repository root application sources and configs.

| Link | Value |
|---|---|
| npm script | `npm run diff-cover` |
| platform name | `coverage_delta` |
| targets | `src/domain/**/*.js`, `coverage/lcov.info` |
| configs | `.nycrc.json`, `coverage/lcov.info` |

## Run

```bash
# from repository root
bash tools/diff-cover/run.sh
# or
npm run tool:diff-cover
```

## Build prerequisite

Application build (when needed):

```bash
npm install
npm run build
```
