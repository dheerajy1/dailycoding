console.log(typeof NaN); //number
console.log(typeof typeof NaN); // string
console.log(typeof 'NaN'); // string

console.log(NaN == NaN); // false
console.log(typeof NaN == typeof NaN); // true
console.log(NaN > NaN); // false
console.log(NaN < NaN); // false

console.log(isNaN(1)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN()); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(Array)); // true
console.log(isNaN({})); // true
console.log(isNaN({NaN})); // true

console.log(NaN !== NaN); // true

console.log(Number.isNaN(5)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN()); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false