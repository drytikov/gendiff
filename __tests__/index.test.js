import genDiff from '../src/index';

const result = '{\n    host: hexlet.io\n  + timeout: 20\n  - timeout: 50\n  - proxy: 123.234.53.22\n  + verbose: true\n}';

test('genDiff', () => {
  expect(genDiff('__tests__/fixtures/before.json', '__tests__/fixtures/after.json')).toBe(result);
});