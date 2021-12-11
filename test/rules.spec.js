const { ESLint } = require('eslint');

/* eslint-env jest*/

test('Load config in eslint to validate all rule syntax is correct', async () => {
  const eslint = new ESLint();
  const code = 'const foo = 1;\nconst bar = foo => foo;\nbar(foo);\n';
  const [lintResult] = await eslint.lintText(code);
  expect(lintResult.errorCount).toEqual(0);
});
