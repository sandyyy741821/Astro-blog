
<<<<<<< HEAD

import js from "@eslint/js";
import astro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
=======
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
>>>>>>> 973f07e49722bd7c64e0aa2cb09e3ac4d55afc8f
];
