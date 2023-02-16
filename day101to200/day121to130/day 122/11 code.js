var d = {};

console.log(d);
console.log(Object.keys(d));
console.log(Object.values(d));

["zebra", "horse"].forEach(function (k) {
  d[k] = undefined;
});

console.log(d);
console.log(Object.keys(d));
console.log(Object.values(d));


console.log(Object.keys(["zebra", "horse"]));
console.log(Object.values(["zebra", "horse"]));
