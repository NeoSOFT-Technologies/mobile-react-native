'use strict'

import data from '../lib/data'
import { expect, test } from '@jest/globals'

test('Hello from data', () => {
  expect(data()).toBe('Hello from data')
})
console.log('data tests passed')
