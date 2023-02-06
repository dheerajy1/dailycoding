const student = {
  name: "John",
  age: 17,
};

var a = [];
var b = ["a", "b", "c", "d", "e"];

const today = new Date();

console.log(today);

const str1 = "Java",
  str2 = "Script";
const newStr = str1.concat(str2);
console.log(newStr);

const arr = [1, 2, 3, 4, 5];
arr.push(6, 8);
//arr.push(6,8,,)

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
arr1.pop();
console.log(arr1);
console.log(arr1.length);

const obj = {
  namee: "Elon",
  get netWorth() {
    console.log(this);

    console.log("$182B");
  },
};
obj.netWorth;

function abc() {
  return 5;
}

var a = function abc() {
  return 5;
};
