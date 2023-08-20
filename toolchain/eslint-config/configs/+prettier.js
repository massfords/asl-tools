import { defineFlatConfig } from 'eslint-define-config'
import plugin from 'eslint-config-prettier'

export default defineFlatConfig({
  rules: {
    ...plugin.rules,
  },
})
