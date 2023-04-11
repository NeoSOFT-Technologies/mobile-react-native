'use strict'

import data from '../lib/domain'
import { expect, test } from '@jest/globals'

test('Hello from domain', () => {
  expect(data()).toBe('Hello from domain')
})
