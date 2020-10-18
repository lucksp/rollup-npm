module.exports = {
  moduleDirectories: ['node_modules', 'LoginAs'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^LoginAs/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>', '<rootDir>/src/'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/LoginAs/test-utils/testHelper.ts'],
};
