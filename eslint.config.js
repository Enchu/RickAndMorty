import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier // ВСЕГДА последним
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },

    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort // ✅ ВОТ ЭТО КЛЮЧЕВО
    },

    rules: {
      'prettier/prettier': 'error',

      // 🔥 сортировка импортов
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1️⃣ react
            ['^react$'],

            // 2️⃣ react ecosystem
            ['^react-', '^@react', '^@tanstack', '^@reduxjs'],

            // 3️⃣ другие сторонние библиотеки
            ['^@?\\w'],

            // 4️⃣ алиасы проекта
            ['^@/'],

            // 5️⃣ относительные импорты
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

            // 6️⃣ стили
            ['^.+\\.s?css$']
          ]
        }
      ],

      'simple-import-sort/exports': 'error'
    }
  }
]);
