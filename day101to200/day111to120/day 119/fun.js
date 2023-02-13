function foo1() {
  return { bar1: "hello" };
}
function foo2() {
  return;
  {
    bar2: "hello";
  }
}
console.log(foo1());
console.log(foo2());
