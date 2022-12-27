'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const shared = require('..');
const assert = require('assert').strict;

assert.strictEqual(shared(), 'Hello from shared');
console.info("shared tests passed");
