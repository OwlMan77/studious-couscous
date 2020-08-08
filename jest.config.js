module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  coverageDirectory: 'jest-stare/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['**/*.js', '!**/node_modules/**', '!**/vendor/**', '!**/dist/**', '!**/middleware/**'],
  verbose: true,
  clearMocks: true,
  testMatch: ['**/?(*.)+(spec|test|e2e).js'],
};
