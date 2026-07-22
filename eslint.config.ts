import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginAstro from "eslint-plugin-astro";
import ts from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,

  ...eslintPluginAstro.configs["flat/recommended"],

  {
    ignores: [".astro", "dist", "/*.json", "node_modules"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { destructuredArrayIgnorePattern: "^_" }],
      "perfectionist/sort-named-imports": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-interfaces": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-imports": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-exports": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-objects": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-enums": ["error", { type: "line-length", order: "desc" }],
      "perfectionist/sort-maps": ["error", { type: "line-length", order: "desc" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "no-console": ["error", { allow: ["error"] }],
      "@typescript-eslint/no-explicit-any": "off",
      "no-param-reassign": "off",
      "no-undef": "off",
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
      globals: globals.browser,
    },
    plugins: {
      perfectionist,
    },
  },
];
