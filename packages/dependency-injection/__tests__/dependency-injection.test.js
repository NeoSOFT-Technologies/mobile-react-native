'use strict';

const dependencyInjection = require('../src/dependency-injection');
const assert = require('assert').strict;

assert.strictEqual(dependencyInjection(), 'Hello from dependencyInjection');
console.info("dependencyInjection tests passed");
