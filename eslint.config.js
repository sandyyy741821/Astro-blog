

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
];
