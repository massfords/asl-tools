import { build_state_map } from './lib/build_state_map.js'
import { toConfig } from './lib/config.js'
import { decls } from './lib/decls.js'
import { footer } from './lib/footer.js'
import { theme } from './lib/theme.js'
import { transitions } from './lib/transitions.js'
import type { AslDefinition, UserSpecifiedConfig } from './lib/types.js'
import { aslValidator } from './lib/validator.js'

export const asl_to_puml = (
  definition: AslDefinition,
  userSpecifiedConfig?: UserSpecifiedConfig | null,
): { isValid: true; puml: string } | { isValid: false; message: string } => {
  try {
    aslValidator(definition)
  } catch (err: unknown) {
    const castErr: { message?: string } = err as { message?: string }
    return {
      isValid: false,
      message: castErr.message ?? 'unknown',
    }
  }

  const response = toConfig(userSpecifiedConfig)
  if (!response.isValid) {
    return { isValid: false, message: response.message }
  }
  const { config } = response

  const state_map = build_state_map(definition, config)

  let puml = theme(definition, state_map, config)
  puml += decls(definition, state_map, config)
  puml += transitions(definition, state_map, config)
  puml += footer(definition, state_map, config)

  return { isValid: true, puml }
}
