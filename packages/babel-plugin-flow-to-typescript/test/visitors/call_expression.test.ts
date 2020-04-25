import { testTransform } from '../transform';

test('simple case', () => {
  const result = testTransform(`// @flow
createPlugin<number>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin<number>();"`);
  expect(result.recast).toMatchInlineSnapshot(`"createPlugin<number>();"`);
});

test('more complicated case', () => {
  const result = testTransform(`// @flow
createPlugin<*, mixed>();`);
  expect(result.babel).toMatchInlineSnapshot(`"createPlugin<any, unknown>();"`);
  expect(result.recast).toMatchInlineSnapshot(
    `"createPlugin<any, unknown>();"`
  );
});
