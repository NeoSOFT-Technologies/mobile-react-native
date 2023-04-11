'use strict'

import shared from '../lib/shared'
import { expect, test } from '@jest/globals'

test('Hello from shared', () => {
  expect(shared()).toBe('Hello from shared')
})
