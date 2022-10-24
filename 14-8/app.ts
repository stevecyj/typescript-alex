let union: string | number;

// union = true;

let union2: number | string | boolean | string[];

function merge(
  a: number | string,
  b: number | string,
  resutlType: 'as-number' | 'as-string'
) {
  if (resutlType === 'as-string') {
    return a.toString() + b.toString();
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

let mergeNumber = merge(2, 3, 'as-number');
let mergeNumber2 = merge(2, 3, 'as-string');
let mergeString = merge('hello ', 'world', 'as-string');

console.log(mergeNumber, mergeString);
console.log(mergeNumber2);

let union3: 0 | 1 | 2;
// union3 = 5;

const number3 = 3;

let literal: 1 | '2' | true | [1, 2, 3, 4];
