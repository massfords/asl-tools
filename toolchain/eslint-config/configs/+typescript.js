import { defineFlatConfig } from 'eslint-define-config'
import parser from '@typescript-eslint/parser'
import baseConfig from './ts/base-config.js'
import merge from 'ts-deepmerge'

export default merge(
  defineFlatConfig({
    files: ['**/*.ts', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser,
    },
  }),
  baseConfig,
)
