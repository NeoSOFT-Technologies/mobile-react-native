'use strict';

const localisation = require('../lib/localisation');
const assert = require('assert').strict;

assert.strictEqual(localisation(), 'Hello from localisation');
console.info("localisation tests passed");
