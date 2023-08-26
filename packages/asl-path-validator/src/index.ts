import { hasFunctions, referencePathChecks } from './ast.js'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { parse } from './generated/aslPaths.js'
import { AslPathContext, ErrorCodes, type ValidationResult } from './types.js'

export const validatePath = (path: string, context: AslPathContext): ValidationResult => {
  let ast: unknown = null
  try {
    ast = parse(path)
  } catch (e: unknown) {
    return {
      isValid: false,
      code: ErrorCodes.parse_error,
      message: JSON.stringify(e),
    }
  }
  if (!ast) {
    return {
      isValid: false,
      code: ErrorCodes.parse_error,
      message: 'no ast returned',
    }
  }
  switch (context) {
    case AslPathContext.PAYLOAD_TEMPLATE:
      break
    case AslPathContext.PATH:
      if (hasFunctions(ast)) {
        return {
          isValid: false,
          code: ErrorCodes.exp_has_functions,
        }
      }
      break
    case AslPathContext.REFERENCE_PATH:
      if (hasFunctions(ast)) {
        return {
          isValid: false,
          code: ErrorCodes.exp_has_functions,
        }
      }
      if (!referencePathChecks(ast)) {
        return {
          isValid: false,
          code: ErrorCodes.exp_has_non_reference_path_ops,
        }
      }
      break
    default: {
      throw Error(context satisfies never)
    }
  }
  return { isValid: true }
}

export * from './ajv.js'
