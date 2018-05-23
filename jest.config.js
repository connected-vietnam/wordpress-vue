// jest.config.js
module.exports = {
  // verbose: true,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
}
