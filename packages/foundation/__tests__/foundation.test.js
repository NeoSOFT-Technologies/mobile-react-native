'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const foundation = require('..');
const assert = require('assert').strict;

assert.strictEqual(foundation(), 'Hello from foundation');
console.info("foundation tests passed");
