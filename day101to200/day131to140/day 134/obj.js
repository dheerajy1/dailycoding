var obj = {
  a: 1,
  b: 2,
  c: {
    d: 2,
  },
};
var obj2 = Object.assign({}, obj);
console.log(obj);
console.log(obj2);

obj.c.d = 0;
console.log(obj);
console.log(obj2);

obj2.c.d = 5;
console.log(obj);
console.log(obj2);
