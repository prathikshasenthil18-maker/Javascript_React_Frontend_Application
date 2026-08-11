module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  env: {
    es2022: true,
    node: true,
    browser: true,
    mocha: true,
  },
  plugins: ["react", "react-hooks"],
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  settings: { react: { version: "detect" } },
  ignorePatterns: [
    "node_modules/",
    "coverage/",
    ".nyc_output/",
    "dist/",
    "reports/",
    "tool-fixtures/",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
    eqeqeq: ["warn", "smart"],
    "no-var": "warn",
    "prefer-const": "warn",
    "no-console": "off",
  },
  overrides: [
    {
      files: ["src/domain/**/*.js", "test/**/*.js"],
      parserOptions: { sourceType: "script" },
    },
  ],
};
