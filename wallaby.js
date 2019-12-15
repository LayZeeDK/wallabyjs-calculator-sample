module.exports = () => {
  return {
    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      'src/**/*.js',
    ],
    tests: [
      'test/**/*.spec.js',
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'mocha',
    setup: function() {
      global.expect = chai.expect;
    },
  };
};
