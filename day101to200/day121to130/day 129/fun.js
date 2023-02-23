var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();



var xx = 21;
var girl = function () {
  console.log(xx);
  xx = 20;
};
girl();


let y = 4;

const number2 = function number() {
  console.log(y);
  y = 5
  console.log(y);
}
console.log(y);
number2();
