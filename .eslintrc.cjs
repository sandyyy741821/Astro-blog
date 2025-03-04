/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: [
      "plugin:astro/recommended",
      "eslint:recommended"
    ],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        rules: {},
      },
    ],
  };
  