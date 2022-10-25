// Genmerics
// let list: number[] = [1, 2, 3, 4];
// let list2: Array<string> = [1, 2, 3, 4];

// 動態類型泛型
let lastInArray = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};

const l1 = lastInArray([1, 2, 3, 4]);
const l2 = lastInArray(['a', 'b', 'c']);
const l3 = lastInArray<string | number>(['a', 'b', 'c']);

let makeTuple = <T, Y>(x: T, y: Y) => [x, y];

const v1 = makeTuple(1, 'one');
const v2 = makeTuple(2, 'two');
const v3 = makeTuple(true, 1);
