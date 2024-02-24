/* eslint-disable @typescript-eslint/naming-convention */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svg-transform.ts',
  },
};
