let a = 10;
let b = "hi";
let c = [1, 2];
let d = [1, 2]; // or [3,4]
d.push(3);
console.log(`a = ${a}`); //10
console.log(`b = ${b}`); // hi
console.log(`c = ${c}`); // [1,2,3]
console.log(`d = ${d}`); // [1,2,3]
console.log(`c == d = ${c == d}`); // false
console.log(`c === d ${c === d}`); // false

/*
let c = [1,2] // (0X01)
*/
console.log(`c = ${c}`);
add(c, 3);
console.log(`c = ${c}`);

function add(array, element) {
  // (0X01),3
  array.push(element);
}
