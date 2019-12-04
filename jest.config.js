const SLASH = "[/\\\\]"

module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff|woff2|)$': '<rootDir>/config/jest/mock-files.js',
    "\\.css$": "identity-obj-proxy",
    "@/(.*)": "<rootDir>/src/$1"
  },
  modulePathIgnorePatterns: [ '.npm' ],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/@gaz/configs/config/jest/jsPreprocess.js"
  },
  transformIgnorePatterns: [
    `${SLASH}node_modules${SLASH}(?!@amcharts${SLASH}amcharts4-geodata${SLASH}).+\\.(js|jsx|ts|tsx)`
  ],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@gaz/configs/config/jest/setup-tests.js'
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}"
  ],
  moduleFileExtensions: [ 'js', 'ts', 'tsx' ],
};
