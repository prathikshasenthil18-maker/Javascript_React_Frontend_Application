        # Tools pack — Node 22 React monolith

        All Excel-mapped tools for **Customer Version 22** live here.
        Every tool folder links to the same React project at the repository root.

        ## Tools (12)

        - [`diff-cover`](./diff-cover/) → `npm run diff-cover`
- [`eslint`](./eslint/) → `npm run lint`
- [`eslint-plugin-security`](./eslint-plugin-security/) → `npm run lint:security`
- [`eslint-plugin-sonarjs`](./eslint-plugin-sonarjs/) → `npm run lint:sonarjs`
- [`jscpd`](./jscpd/) → `npm run jscpd`
- [`lizard`](./lizard/) → `npm run lizard`
- [`mocha`](./mocha/) → `npm run test`
- [`npm-audit`](./npm-audit/) → `npm run audit`
- [`npm-ls`](./npm-ls/) → `npm run ls`
- [`nyc`](./nyc/) → `npm run test:coverage`
- [`pydriller`](./pydriller/) → `npm run pydriller`
- [`stryker-js`](./stryker-js/) → `npm run stryker`

        ## Build + tool flow

        ```bash
        npm install
        npm run build
        npm test
        npm run tools:all
        ```

        See `tools/index.json` for machine-readable linkage.
