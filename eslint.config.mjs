import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importHelpersPlugin from "eslint-plugin-import-helpers";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Next.js базовые конфиги
  ...nextVitals,
  ...nextTs,

  // Основной конфиг проекта
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },

      // замена env → globals
      globals: {
        // browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        // ES2021
        BigInt: "readonly",
        // любые другие глобалы можно добавить здесь
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "import-helpers": importHelpersPlugin,
    },

    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",

      // Next
      "@next/next/no-img-element": "off",

      // Imports order
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            ["/^react/", "/^next/"],
            "/^@/components/",
            "/^@/pages/",
            "/utils/",
            "/^@/models/",
            "/^@/lib/",
            "/^@/styles/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],

      // TS / JS
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "no-empty": "off",
    },
  },

  // Игнорируемые файлы (замена .eslintignore)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
