module.exports = {
  globalSetup: '<rootDir>/config/setup.js',
  globalTeardown: '<rootDir>/config/teardown.js',
  testEnvironment: '<rootDir>/config/puppeteer.js',
  setupFilesAfterEnv: ['<rootDir>/config/jest.js'],
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
}  
