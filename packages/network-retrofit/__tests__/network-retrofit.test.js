/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict'

const networkRetrofit = require('..')
const assert = require('assert').strict

assert.strictEqual(networkRetrofit(), 'Hello from networkRetrofit')
console.info('networkRetrofit tests passed')
