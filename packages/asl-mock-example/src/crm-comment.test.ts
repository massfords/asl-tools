// Code generated by asl-mock DO NOT EDIT.
import path from 'path'

import { AslTestRunner } from '@asl-tools/asl-mock'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'

import type { CustomErrors, StateMachineNames, StateNames, TestCases } from './crm-comment.mock.js'
import { CrmCommentMock, StartMessages } from './crm-comment.mock.js'

describe('tests for crm-comment.asl.json', () => {
  const TIMEOUT = 30 * 1000
  const outdir = path.join(__dirname, '.asl-puml')
  let _err: unknown = null
  let _aslRunner: AslTestRunner<
    StateMachineNames,
    TestCases,
    StateNames,
    string,
    CustomErrors
  > | null = null

  beforeAll(async () => {
    try {
      const dirname = new URL('.', import.meta.url).pathname
      _aslRunner = await AslTestRunner.createRunner<
        StateMachineNames,
        TestCases,
        StateNames,
        string,
        CustomErrors
      >(CrmCommentMock, {
        'crm-comment': path.join(dirname, 'crm-comment.asl.json'),
      })
    } catch (err: unknown) {
      _err = err
    }
  }, TIMEOUT * 6)

  afterEach(() => {
    _aslRunner?.reset()
  })

  afterAll(async () => {
    await _aslRunner?.stop()
  })

  describe('mock config scenarios', () => {
    const afterCompletion = {
      puml: outdir,
      expectTaskSnapshots: true,
      logHistoryEventsOnFailure: true,
    }

    it(
      'scenario HappyPathTest',
      async () => {
        expect.hasAssertions()
        if (_err) {
          console.error('error starting runner', { err: _err })
        }
        await _aslRunner?.execute(
          {
            name: 'crm-comment',
            startMessage: StartMessages['HappyPathTest'],
            scenario: 'HappyPathTest',
            expect,
          },
          afterCompletion,
        )
      },
      TIMEOUT,
    )

    it(
      'scenario NegativeSentimentTest',
      async () => {
        expect.hasAssertions()
        await _aslRunner?.execute(
          {
            name: 'crm-comment',
            startMessage: StartMessages['NegativeSentimentTest'],
            scenario: 'NegativeSentimentTest',
            expect,
          },
          afterCompletion,
        )
      },
      TIMEOUT,
    )

    it(
      'scenario CustomValidationFailedCatchTest',
      async () => {
        expect.hasAssertions()
        await _aslRunner?.execute(
          {
            name: 'crm-comment',
            startMessage: StartMessages['CustomValidationFailedCatchTest'],
            scenario: 'CustomValidationFailedCatchTest',
            expect,
          },
          afterCompletion,
        )
      },
      TIMEOUT,
    )

    it(
      'scenario ValidationExceptionCatchTest',
      async () => {
        expect.hasAssertions()
        await _aslRunner?.execute(
          {
            name: 'crm-comment',
            startMessage: StartMessages['ValidationExceptionCatchTest'],
            scenario: 'ValidationExceptionCatchTest',
            expect,
          },
          afterCompletion,
        )
      },
      TIMEOUT,
    )

    it(
      'scenario RetryOnServiceExceptionTest',
      async () => {
        expect.hasAssertions()
        await _aslRunner?.execute(
          {
            name: 'crm-comment',
            startMessage: StartMessages['RetryOnServiceExceptionTest'],
            scenario: 'RetryOnServiceExceptionTest',
            expect,
          },
          afterCompletion,
        )
      },
      TIMEOUT,
    )
  })
})
