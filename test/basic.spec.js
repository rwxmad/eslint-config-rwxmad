const config = require('../');

/* eslint-env jest*/

test('Test basic properties of config', () => {
  expect(typeof config.parserOptions).toBe('object');
  expect(typeof config.env).toBe('object');
  expect(typeof config.rules).toBe('object');
});
