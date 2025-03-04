
import astro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [

  astro.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];
