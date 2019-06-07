module.exports = {
  globalSetup: './config/setup.js',
  globalTeardown: './config/teardown.js',
  testEnvironment: './config/puppeteer.js',
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  }
}  
