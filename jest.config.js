const TSPreset = require('ts-jest/jest-preset.js')
const DynamoPreset = require('jest-dynalite/jest-preset.js')

module.exports = {
  ...TSPreset,
  ...DynamoPreset,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testPathIgnorePatterns: ['<rootDir>/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
}
