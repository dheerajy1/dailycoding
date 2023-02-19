var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a[c]);
console.log(b);

let d = { key: "t" };

console.log(a);
