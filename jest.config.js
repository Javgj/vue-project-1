module.exports = {
  verbose: true,
  collectCoverage: true,
  unmockedModulePathPatterns: ['/^node_modules/'],
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  snapShotsSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue'
  ],
  preset: '@vue/cli-plugin-unit-jest'
}
