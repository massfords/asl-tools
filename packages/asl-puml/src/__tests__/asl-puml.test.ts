import fs from 'fs'
import path from 'path'

import { describe, expect, it } from 'vitest'

import { asl_to_puml } from '../index.js'
import { must } from '../lib/must.js'
import type { AslDefinition, UserSpecifiedConfig } from '../lib/types.js'
import { aslValidator } from '../lib/validator.js'

describe('unit tests for generating puml diagrams', () => {
  const dirname = new URL('.', import.meta.url).pathname

  const loadDefinition = (name: string): AslDefinition => {
    const def: AslDefinition = JSON.parse(
      fs.readFileSync(path.join(dirname, 'definitions', name), 'utf-8'),
    ) as AslDefinition
    aslValidator(def)
    return def
  }

  const loadStyle = (name: string): UserSpecifiedConfig | null => {
    const dotAslJson = '.asl.json'
    const dotThemeJson = '.theme.json'
    must(name.endsWith(dotAslJson), 'invalid test file name')
    const themeFileName = path.join(
      dirname,
      'definitions',
      `${name.substring(0, name.length - dotAslJson.length)}${dotThemeJson}`,
    )
    if (fs.existsSync(themeFileName)) {
      return JSON.parse(fs.readFileSync(themeFileName, 'utf-8')) as UserSpecifiedConfig
    }
    return null
  }

  describe('generate pumls', () => {
    const files = fs
      .readdirSync(path.join(dirname, 'definitions'))
      // .filter((file) => file.indexOf("demo.asl.json") >= 0)
      .filter((file) => file.endsWith('.asl.json'))

    const defaultStyleForTests: UserSpecifiedConfig = {
      theme: {
        comments: {
          '^.+$': {
            width: 30,
            side: 'left',
          },
        },
      },
    }

    it.each(files)('%s', (filename) => {
      expect.hasAssertions()

      const definition = loadDefinition(filename)
      const style = loadStyle(filename) ?? defaultStyleForTests
      const result = asl_to_puml(definition, style ?? defaultStyleForTests)
      if (!result.isValid) {
        // the generates are expected to work
        // this provides better insight into why it failed
        // eslint-disable-next-line vitest/no-conditional-expect
        expect(result.message).toBeFalsy()
      }
      must(result.isValid, `Unexpected error message in result: ${JSON.stringify(result)}`)
      expect(result.isValid).toBeTruthy()
      const expected = fs.readFileSync(
        path.join(dirname, 'pumls', `${path.parse(filename).name}.puml`),
        'utf-8',
      )
      expect(result.puml).toStrictEqual(expected)
      // fs.writeFileSync(
      //   path.join(dirname, 'pumls', `${path.parse(filename).name}.puml`),
      //   result.puml,
      // )
    })

    it('deadpath', () => {
      const definition = loadDefinition('aws-example-ship-order.asl.json')
      const style: UserSpecifiedConfig = {
        theme: {
          lines: {
            deadPath: {
              color: '#lightgray',
            },
          },
          stateStyles: [
            {
              pattern: '^Initial: Validate Input$',
              color: '#gray',
            },
            {
              pattern: '^Initial: Get Customer Status$',
              color: '#0070a3',
            },
            {
              pattern: '^Do Fraud Check$',
              color: '#gray',
            },
            {
              pattern: '^Initial: Notify Fraudulent Customer$',
              color: '#0070a3',
              description: '<:warning:><:warning:><:white_check_mark:>',
            },
            {
              pattern: '^Order Shipping Failed$',
              color: '#red',
            },
            {
              pattern: '^.*$',
              color: '#whitesmoke',
              deadPath: true,
            },
          ],
        },
      }
      const result = asl_to_puml(definition, style)
      if (!result.isValid) {
        // the generates are expected to work
        // this provides better insight into why it failed
        // eslint-disable-next-line vitest/no-conditional-expect
        expect(result.message).toBeFalsy()
      }
      must(result.isValid, 'expected transform to work')
      const expected = fs.readFileSync(
        path.join(dirname, 'pumls/aws-example-ship-order-deadpath.asl.puml'),
        'utf-8',
      )
      expect(result.puml).toStrictEqual(expected)
      // fs.writeFileSync(
      //   path.join(dirname, 'pumls/aws-example-ship-order-deadpath.asl.puml'),
      //   result.puml,
      // )
    })
  })
})
