import { defineFlatConfig } from 'eslint-define-config'
import js from '@eslint/js'
import im_port from './base-plugins/import.js'
import promise from './base-plugins/promise.js'
import merge from 'ts-deepmerge'

export default merge(
  defineFlatConfig({
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      ...js.configs.recommended.rules,

      'no-restricted-imports': [
        'error',
        {
          paths: ['*'],
          patterns: ['**/dist/*', '**/src/*'],
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  }),
  im_port,
  promise,
)
