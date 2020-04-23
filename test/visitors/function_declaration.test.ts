import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'empty',
      code: `function f() {}`,
      output: `function f() {}`,
    },
    {
      title: 'return type',
      code: `function f(): T {}`,
      output: `function f(): T {}`,
    },
    {
      title: 'argument type',
      code: `function f(a: T, b: R): T {}`,
      output: `function f(a: T, b: R): T {}`,
    },
    {
      title: 'simple generic',
      code: `function f<T>(v: T): T {}`,
      output: `function f<T>(v: T): T {}`,
    },
    {
      title: 'optional argument',
      code: `function f(arg?: string) {}`,
      output: `function f(arg?: string) {}`,
    },
    {
      title: 'maybe argument',
      code: `function f(arg: ?string) {}`,
      output: `function f(arg?: string | null) {}`,
    },
    {
      title: 'optional maybe argument',
      code: `function f(arg?: ?string) {}`,
      output: `function f(arg?: string | null) {}`,
    },
    {
      title: 'rest parameters',
      code: `function f(...args) {}`,
      output: `function f(...args) {}`,
    },
    {
      title: 'function argument type',
      code: `function f(a: () => void) {}`,
      output: `function f(a: () => void) {}`,
    },
    {
      title: 'maybe function argument type',
      code: `function f(a: ?(() => void)) {}`,
      output: `function f(a?: (() => void) | null) {}`,
      recast: `function f(a?: (() => void) | null) {}`,
    },
    {
      title: 'maybe function argument type with pattern after it',
      code: `function f(a: ?number, { b }) {}`,
      output: `function f(a: number | undefined | null, {
  b
}) {}`,
      recast: `function f(a: number | undefined | null, { b }) {}`,
    },
    {
      title: 'function with default param value',
      code: 'function a(c?: string = "v") {}',
      output: 'function a(c: string = "v") {}',
    },
    {
      title: 'function with optional parameters followed by default value',
      code: 'function a(a?: number, b?: number, c: number = 1) {}',
      output: 'function a(a?: number, b?: number, c: number = 1) {}',
    },
    {
      title: 'predicate function',
      code: `function foo(x: mixed): %checks {
  return typeof x === "string";
}`,
      output: `function foo(x: unknown) {
  return typeof x === "string";
}`,
    },
    {
      title: 'predicate function 2',
      code: `function a(v: mixed): boolean %checks {
  return typeof v === 'undefined' || v === null || v.length === 0;
}`,
      output: `function a(v: unknown): boolean {
  return typeof v === 'undefined' || v === null || v.length === 0;
}`,
    },
  ],
});
