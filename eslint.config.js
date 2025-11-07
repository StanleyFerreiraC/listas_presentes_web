// @ts-check
// Use JSDoc @ts-check para ter intellisense no seu editor

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

// Plugins do React
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginReactCompiler from "eslint-plugin-react-compiler";

// @ts-expect-error
import pluginJsxRuntime from "eslint-plugin-react/jsx-runtime";

// Plugin do Tailwind
import pluginTailwindcss from "eslint-plugin-tailwindcss";

export default tseslint.config(
  // === Configurações Globais ===
  {
    // Ignora os diretórios mais comuns
    ignores: [
      "node_modules",
      "dist",
      "build",
      ".vite-cache",
      "eslint.config.js", // Ignora o próprio arquivo de config
    ],
  },

  // === Regras Base ===
  js.configs.recommended, // Regras base do ESLint
  ...tseslint.configs.recommended, // Regras base do TypeScript-ESLint

  // === Configurações do React ===
  {
    files: ["**/*.{ts,tsx}"], // Aplica só em arquivos React/TS
    ...pluginReact.configs.recommended, // Regras recomendadas do React

    // Você tinha "pluginReact.configs["jsx-runtime"]", que pode funcionar,
    // mas o import separado que sugeri antes é mais limpo:
    ...pluginJsxRuntime.configs.recommended, // Desativa 'import React'

    ...pluginReactHooks.configs.recommended, // Regras de Hooks

    // AQUI ESTÁ A CORREÇÃO:
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
  },

  // === Configuração do Tailwind CSS ===
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      tailwindcss: pluginTailwindcss,
    },
    rules: {
      ...pluginTailwindcss.configs.recommended.rules,
    },
  },

  // === Configuração Principal (Onde você "acalma" o linter) ===
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Permite globais do navegador (window, document, etc)
        ...globals.node, // Permite globais do Node (process, etc) - útil para Vite
      },
      parserOptions: {
        project: true, // Habilita regras que precisam de type-checking
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-refresh": pluginReactRefresh,
      "react-compiler": pluginReactCompiler,
    },

    // --- AQUI A MÁGICA ACONTECE ---
    rules: {
      // === Diminuindo a "Agressividade" ===

      // Apenas 'avisa' (warn) sobre variáveis não usadas, em vez de dar 'erro' (error).
      // Isso é muito menos intrusivo durante o desenvolvimento.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_", // Ignora argumentos que começam com _
          varsIgnorePattern: "^_", // Ignora variáveis que começam com _
        },
      ],

      // Permite o uso de 'any' (mude para 'off' se quiser desabilitar totalmente)
      "@typescript-eslint/no-explicit-any": "warn",

      // === Regras Essenciais do React/Vite ===

      // Regra do React Compiler (se estiver usando)
      "react-compiler/react-compiler": "error",

      // Garante que só componentes sejam exportados para o Fast Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Regras de Hooks são importantes, mantenha como 'error'
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn", // 'warn' é bom para não bloquear

      // === Regras do Tailwind (Ajustadas) ===

      // Ordena as classes (muito útil!)
      "tailwindcss/classnames-order": "warn",
      // Avisa sobre classes que não existem no Tailwind
      "tailwindcss/no-custom-classname": "warn",
      // Não exige 'nova linha' entre classes
      "tailwindcss/enforces-shorthand": "off",
    },
  }
);
