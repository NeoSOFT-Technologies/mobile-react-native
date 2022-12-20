'use strict';

const data = require('..');
const assert = require('assert').strict;

assert.strictEqual(data(), 'Hello from data');
console.info("data tests passed");
