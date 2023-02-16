console.log([1, 2, 3, 4].reverse());

var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log(`array 1: lenght = ${arr1.length}; last = ${arr1.slice(-1)}`);
console.log(`array 2: lenght = ${arr2.length}; last = ${arr2.slice(-1)}`);

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(Object.keys(arr2));
console.log(Object.values(arr2));
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[4][0]);
console.log(arr2[4][1]);
console.log(arr2[4][2]);
console.log(arr2[4][3]);
