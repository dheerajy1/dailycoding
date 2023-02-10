const word = "Elon Musk";
let c = 0;
const arr = word
  .toLowerCase()
  .split("")
  .filter((el) => el != " ");
console.log(arr);
arr.forEach((el, i) => {
  ["a", "e", "i", "o", "u"].find((vow) => {
    if (vow === el) {
      c++;
      console.log(i);
      return 1;
    }
  });
});
console.log(c);

const arr1 = [1, 2, 3];
console.log(arr1.find((el, i) => el === 1));
console.log(arr1.findIndex((el) => el === 1));

console.log(arr1.includes(1));
