// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/*d.ts',
      '**/build',
      '**/migrations',
      '**/eslint.config.mjs',
      '**/tailwind.config.js',
    ],
  },
  ...tseslint.config(
    eslintConfigPrettier,
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    perfectionist.configs['recommended-natural'],
    {
      plugins: {
        prettier,
        unicorn,
        'unused-imports': unusedImports,
        // @ts-ignore
        'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      },

      // @ts-ignore
      rules: {
        ...eslintPluginReactHooks.configs.recommended.rules,
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-multiple-empty-lines': [
          'warn',
          {
            max: 1,
            maxEOF: 0,
          },
        ],

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'no-constant-condition': 'warn',
        'no-empty-pattern': 'warn',

        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],

        semi: ['error', 'always'],
        'perfectionist/sort-imports': 'warn',
        'perfectionist/sort-named-imports': 'warn',
        'perfectionist/sort-objects': 'off',
        'perfectionist/sort-object-types': 'off',
        'perfectionist/sort-enums': 'off',
        'perfectionist/sort-interfaces': 'off',
        'perfectionist/sort-union-types': 'off',
        'perfectionist/sort-named-exports': 'warn',
        'perfectionist/sort-classes': 'off',
        'perfectionist/sort-switch-case': 'off',
        'perfectionist/sort-intersection-types': 'off',
        'perfectionist/sort-array-includes': 'off',
        'perfectionist/sort-jsx-props': 'off',
        '@typescript-eslint/ban-types': 'warn',
        'no-case-declarations': 'off',
        'no-empty': 'off',
        '@typescript-eslint/no-empty-function': 'off',

        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: ['enumMember'],
            format: ['UPPER_CASE'],
          },
          {
            selector: ['enum', 'typeLike', 'interface'],
            format: ['PascalCase'],
          },
          {
            selector: 'variableLike',
            format: ['PascalCase', 'camelCase', 'UPPER_CASE'],

            filter: {
              regex: '\\d+',
              match: false,
            },

            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'parameter',
            format: null,

            filter: {
              regex: '^_$',
              match: true,
            },
          },
        ],

        'unicorn/filename-case': [
          'warn',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
              kebabCase: true,
            },
          },
        ],

        'new-cap': [
          'warn',
          {
            newIsCap: true,
            capIsNew: false,
          },
        ],
      },
    },
  ),
];
