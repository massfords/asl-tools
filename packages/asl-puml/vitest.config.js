import { defineConfig, mergeConfig } from 'vitest/config'

import baseConfig from '@toolchain/vitest-config'

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {},
  }),
)
