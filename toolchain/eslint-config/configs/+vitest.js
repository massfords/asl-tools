import { defineFlatConfig } from 'eslint-define-config'
import plugin from 'eslint-plugin-vitest'

export default defineFlatConfig({
  files: ['**/*.test.ts', '**/*.test.js'],
  languageOptions: {
    globals: {
      ...plugin.environments.env.globals,
    },
  },
  plugins: {
    vitest: plugin,
  },
  rules: {
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
    'vitest/expect-expect': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
    'vitest/no-identical-title': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
    'vitest/prefer-to-be': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
    'vitest/no-commented-out-tests': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
    'vitest/valid-title': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
    'vitest/valid-expect': ['error', { alwaysAwait: true }],
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
    'vitest/valid-describe-callback': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
    'vitest/prefer-lowercase-title': 'off',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
    'vitest/consistent-test-it': ['error', { fn: 'it' }],
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
    'vitest/no-alias-methods': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
    'vitest/no-conditional-expect': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
    'vitest/no-disabled-tests': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
    'vitest/prefer-called-with': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
    'vitest/prefer-comparison-matcher': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
    'vitest/prefer-expect-resolves': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
    'vitest/prefer-strict-equal': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
    'vitest/prefer-to-be-falsy': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
    'vitest/prefer-to-be-truthy': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
    'vitest/prefer-to-be-object': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
    'vitest/prefer-to-contain': 'error',
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
    'vitest/prefer-to-have-length': 'error',
  },
})
