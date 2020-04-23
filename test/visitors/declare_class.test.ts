import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'declare class',
      code: `declare class A<X,Y,Z> extends B<X<Y<Z>>> {
  static C: D<X, Y>;
  constructor(abc: boolean): A;
  E: boolean;
  F: ?X<Z>;
  g(): H;
  get getterX(): string;
  set setterY(boolean): number;
}`,
      output: `declare class A<X, Y, Z> extends B<X<Y<Z>>> {
  static C: D<X, Y>;
  constructor(abc: boolean): A;
  E: boolean;
  F: X<Z> | undefined | null;
  g(): H;
  get getterX(): string;
  set setterY(a: boolean): number;
}`,
    },
    {
      title: 'declare class',
      code: `declare class A extends B implements C {
  static +C: D;
  +F: D;
}`,
      output: `declare class A extends B implements C {
  static readonly C: D;
  readonly F: D;
}`,
    },
    {
      title: 'declare class',
      code: `declare class A extends B implements C {
  // 123
  static C: D;
  // 321
  F: D;
}`,
      output: `declare class A extends B implements C {
  // 123
  static C: D;
  // 321
  F: D;
}`,
    },

    //     {
    //       title: 'declare class with call property',
    //       code: `declare class A {
    //   (): void
    // }`,
    //       output: `declare class A {
    //   (): void
    // }`,
    //     },
    {
      title: 'declare class with indexer property',
      code: `declare class A {
  [k: number]: string;
}`,
      output: `declare class A {
  [k: number]: string;
}`,
    },
    //     {
    //       title: 'declare class with internal slot',
    //       code: `declare class C {
    //   [[foo]]: T;
    // }`,
    //       output: `declare class C {
    //   [foo]: T;
    // }`,
    //     },
    {
      title: 'declare class with with generic method',
      code: `declare class A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`,
      output: `declare class A {
  map<T>(fn: (node: this, index: number) => T): Array<T>;
}`,
    },
    {
      title: 'iterable class',
      code: `declare class A {
  @@iterator(): Iterator<string>;
}`,
      output: `declare class A {
  [Symbol.iterator](): Iterator<string>;
}`,
    },
    {
      title: 'async iterable class',
      code: `declare class A {
  @@asyncIterator(): Iterator<string>;
}`,
      output: `declare class A {
  [Symbol.asyncIterator](): Iterator<string>;
}`,
    },
  ],
});
