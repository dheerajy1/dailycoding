import "./style.css";

/* Destructuring assignment

Practicing JS Destructuring assignment, 
Ignore the errors I executed each block code separately */
const arr = [5, 9, 6, 7, 0];
const first = arr[0],
  second = arr[1],
  third = arr[2],
  fourth = arr[3];

console.log(first, second, third);

const [one, two, three] = [1, 2, 3];
console.log(one, two, three);
const [a, ...b] = arr;
console.log(a, b);

const [t, , v] = arr;
console.log(t, v);

const arr2 = [, 9, 6, 7, 0];
console.log(arr2);
const [def = "y", c, q] = arr2;
console.log(def, c, q);

let array = [8, 3, 2, 0, 46, 78, 37, 86, 79];
const [a, b, ...[c, d]] = array;
console.log(a, b);
console.log(c, d);
let person = {
  a: 23,
  b: 35,
};
const { a, b } = person;
console.log(a, b);

let array = [];
let person = {
  a: 23,
  b: 35,
};
console.log("hi");

({ a: array[0], b: array[1] } = person);
console.log(array);
