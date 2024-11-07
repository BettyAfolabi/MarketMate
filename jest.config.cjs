/* eslint-disable no-undef */module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', 
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};