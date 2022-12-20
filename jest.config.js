/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node'],
  },
  moduleFileExtensions: ["js"],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
  }
}
