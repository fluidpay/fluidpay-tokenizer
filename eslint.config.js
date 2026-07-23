import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  // Base JavaScript config
  js.configs.recommended,
  
  // Vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLIFrameElement: 'readonly',
        ApplePaySession: 'readonly',
        ApplePayJS: 'readonly',
        MessageEvent: 'readonly',
        URL: 'readonly'
      }
    },
    plugins: {
      vue,
      '@typescript-eslint': typescript
    },
    rules: {
      // Custom rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // Added to shut up linting for now
      camelcase: 'off',
      'no-useless-escape': 'off',
      'no-empty-pattern': 'off',
      'no-new': 'off',

      // Use the TypeScript-aware unused-vars rule (understands type signatures)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',

      // Vue
      'vue/multi-word-component-names': 'off'
    }
  },
  
  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLIFrameElement: 'readonly',
        ApplePaySession: 'readonly',
        ApplePayJS: 'readonly',
        MessageEvent: 'readonly',
        URL: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      camelcase: 'off',
      'no-useless-escape': 'off',
      'no-empty-pattern': 'off',
      'no-new': 'off',

      // Use the TypeScript-aware unused-vars rule (understands type signatures)
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  },

  // JavaScript files
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        fetch: 'readonly',
        Element: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLIFrameElement: 'readonly',
        ApplePaySession: 'readonly',
        ApplePayJS: 'readonly',
        MessageEvent: 'readonly',
        URL: 'readonly'
      }
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      camelcase: 'off',
      'no-useless-escape': 'off',
      'no-empty-pattern': 'off',
      'no-new': 'off'
    }
  }
];
