export default {
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': '<rootDir>/node_modules/babel-jest',
    '/^.+.(css|less|scss|sass)$/': 'identity-obj-proxy',
  },
}