        # Javascript React Frontend Application — Node 21

        **Scenario:** 1 - Monolithic  
        **Project type:** React Frontend Application  
        **Customer Version:** 21  
        **Syntax:** ES2023+ / Node.js 21 — ES2023 APIs (findLast/toSorted/with) plus Node 21 runtime; no Set.intersection/Promise.withResolvers

        ## Source of truth

        - Mapping matrix: `Final_Enterprise_Mapping_Matrix 1.xlsx` (JavaScript sheet)
        - Syntax / tool fixture patterns: `Golden_Repo_Lite` → `Javascript_21.0.0`
        - This branch contains **only** Node 21 syntax (no cross-version merge)

        ## Linked tools (12)

        Each tool has a folder under `tools/<tool>/` with `trigger.yaml`, `run.sh`,
        `project-link.json`, `version-data.json`, and `FILE_MANIFEST.json` pointing at
        this React project (not an isolated fixture).

        - [`diff-cover`](tools/diff-cover/) → `npm run tool:diff-cover`
- [`eslint`](tools/eslint/) → `npm run tool:eslint`
- [`eslint-plugin-security`](tools/eslint-plugin-security/) → `npm run tool:eslint-plugin-security`
- [`eslint-plugin-sonarjs`](tools/eslint-plugin-sonarjs/) → `npm run tool:eslint-plugin-sonarjs`
- [`jscpd`](tools/jscpd/) → `npm run tool:jscpd`
- [`lizard`](tools/lizard/) → `npm run tool:lizard`
- [`mocha`](tools/mocha/) → `npm run tool:mocha`
- [`npm-audit`](tools/npm-audit/) → `npm run tool:npm-audit`
- [`npm-ls`](tools/npm-ls/) → `npm run tool:npm-ls`
- [`nyc`](tools/nyc/) → `npm run tool:nyc`
- [`pydriller`](tools/pydriller/) → `npm run tool:pydriller`
- [`stryker-js`](tools/stryker-js/) → `npm run tool:stryker-js`

        ## Mandatory commands

        ```bash
        npm install
        npm run build
        npm test
        npm run tools:all
        npm run tool:eslint
        npm run tool:nyc
        npm run tool:stryker-js
        ```

        Python analyzers:

        ```bash
        pip install -r requirements-tools.txt
        npm run tool:lizard
        npm run tool:pydriller
        npm run tool:diff-cover
        ```

        ## Layout

        | Path | Purpose |
        |---|---|
        | `src/` | React app + domain JS (ES2023+ / Node.js 21) |
        | `test/` | Mocha specs (nyc / stryker) |
        | `tools/` | Per-tool folders linked to this project |
        | `tool-fixtures/` | Intentional eslint-security / jscpd / lizard samples |
        | `Dockerfile` | Node 21 multi-stage build |
        | `jsconfig.json` | Editor/build language service for ES2023 |
        | `tool-matrix.json` | Excel-derived tool + version metadata |
