'use strict';

const presentation = require('..');
const assert = require('assert').strict;

assert.strictEqual(presentation(), 'Hello from presentation');
console.info("presentation tests passed");
