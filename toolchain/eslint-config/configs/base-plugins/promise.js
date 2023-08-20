import { defineFlatConfig } from 'eslint-define-config'
import plugin from 'eslint-plugin-promise'

export default defineFlatConfig({
  plugins: {
    promise: plugin,
  },
  rules: {
    ...plugin.configs.recommended.rules,
  },
})
