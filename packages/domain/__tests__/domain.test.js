'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const domain = require('..');
const assert = require('assert').strict;

assert.strictEqual(domain(), 'Hello from domain');
console.info("domain tests passed");
