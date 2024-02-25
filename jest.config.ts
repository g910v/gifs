/* eslint-disable @typescript-eslint/naming-convention */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|sass|less)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svg-transform.ts',
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/test-utils.tsx', '<rootDir>/__tests__/testMockValues', '<rootDir>/node_modules/'],
};
