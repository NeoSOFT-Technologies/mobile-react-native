'use strict';

const domain = require('..');
const assert = require('assert').strict;

assert.strictEqual(domain(), 'Hello from domain');
console.info("domain tests passed");
