import aslValidator from 'asl-validator'

import type { AslDefinition } from './types.js'

export type ValidatorFunction = (definition: AslDefinition) => {
  isValid: boolean
  errorsText: (sep: string) => string
}

export type ASLValidator = (definition: AslDefinition) => asserts definition
export const aslValidatorImpl: ASLValidator = (definition: AslDefinition): asserts definition => {
  const result = aslValidator(definition)
  if (!result.isValid) {
    throw Error(`definition is invalid:${result.errorsText('\n')}`)
  }
}
