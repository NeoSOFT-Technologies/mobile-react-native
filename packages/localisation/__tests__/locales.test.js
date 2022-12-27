'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const localisation = require('../lib/localisation');
const assert = require('assert').strict;

assert.strictEqual(localisation(), 'Hello from localisation');
console.info("localisation tests passed");
