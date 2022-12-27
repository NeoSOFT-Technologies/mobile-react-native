/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict';

import data from '../lib/data';
const assert = require('assert').strict;

assert.strictEqual(data(), 'Hello from data');
console.log("data tests passed");
