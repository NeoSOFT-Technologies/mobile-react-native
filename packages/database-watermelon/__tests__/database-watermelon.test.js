/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const databaseWatermelon = require('..');
const assert = require('assert').strict;

assert.strictEqual(databaseWatermelon(), 'Hello from databaseWatermelon');
console.info("databaseWatermelon tests passed");
