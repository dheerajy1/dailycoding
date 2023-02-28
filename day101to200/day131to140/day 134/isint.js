console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false
console.log(Number.isInteger(null)); // false
console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(undefined)); // false
console.log(Number.isInteger(Infinity)); // false

console.log(Number.isInteger([4,5])); // false

let x = []
console.log(Number.isInteger(x[0])); // false

x = [1]
console.log(Number.isInteger(x[0])); //true

function isInt(x){
    console.log(x^0);
return (x ^ 0) === x
}
console.log(isInt(4)); // true
console.log(isInt(4.5)); // false
console.log(isInt()); // false
console.log(isInt([1,2])); // false
console.log(isInt(NaN)); // false
console.log(isInt(null)); // false
console.log(isInt(undefined)); // false
console.log(isInt(Infinity)); // false

function isInt2(x){
    console.log(typeof x);
return typeof x === 'number'
}
console.log(isInt2(4)); // true
console.log(isInt2(4.5)); // true
console.log(isInt2(null)); // false
console.log(isInt2(NaN)); // true -- ERROR
console.log(isInt2(Infinity)); // true -- ERROR

function isInt3(x){
    console.log(typeof x);
return (typeof x === 'number') && (x % 1 === 0)
}
console.log(isInt3(4)); // true
console.log(isInt3(4.5)); // false
console.log(isInt3(NaN)); // false
console.log(isInt3(Infinity)); // false

function isInt4(x){
    console.log(typeof x);
return Math.round(x) === x
}
console.log(isInt4(4)); // true
console.log(isInt4(4.5)); // false
console.log(isInt4(Infinity)); // true -- ERROR



