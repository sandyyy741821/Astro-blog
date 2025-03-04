// eslint.config.js
import astro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
  js.configs.recommended, // Use ESLint recommended rules
  astro.configs.recommended, // Astro plugin recommended rules
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
    },
  },
];
