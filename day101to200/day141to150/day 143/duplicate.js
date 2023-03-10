let arr = [1, 2, 3, 4, 5];
console.log(arr);

//const arr2 = new Set(arr)
const arr2 = Array.from(new Set(arr));
console.log(arr2);

const isDup = (x, y) => {
  console.log(x);
  console.log(y);

  // return x.size != y.length
  return x.length != y.length;
};
console.log(isDup(arr, arr2));

console.log(arr == arr2);
