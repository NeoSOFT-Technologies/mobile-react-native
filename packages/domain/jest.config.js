/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['../database-watermelon/jest_setup.ts'],
  transformIgnorePatterns: ['../../node_modules/@nozbe']
}
