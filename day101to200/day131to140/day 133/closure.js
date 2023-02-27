var b = 1;
function outer() {
  console.log(b);
  var b = 2;
  console.log(b);
  function inner() {
    b++;
    console.log(b);
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
