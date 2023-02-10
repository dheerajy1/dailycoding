var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);

(function() {
    var a = b = 5;
  })();
  
  console.log(b);

  