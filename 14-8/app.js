var union;
// union = true;
var union2;
function merge(a, b, resutlType) {
    if (resutlType === 'as-string') {
        return a.toString() + b.toString();
    }
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
var mergeNumber = merge(2, 3, 'as-number');
var mergeNumber2 = merge(2, 3, 'as-string');
var mergeString = merge('hello ', 'world', 'as-string');
console.log(mergeNumber, mergeString);
console.log(mergeNumber2);
var union3;
// union3 = 5;
var number3 = 3;
var literal;
