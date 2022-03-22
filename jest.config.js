module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.ts?(x)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/tests/styleMock.js',
    '^@app(.*)': '<rootDir>/src$1'
  },
  transform: {
    '^.+\\.css$': '<rootDir>/src/tests/cssTransform.js',
    '^(?!.*\\.(ts|tsx|css|json)$)': '<rootDir>/src/tests/fileTransform.js'
  }
}
