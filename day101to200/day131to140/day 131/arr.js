var arr = [1,2,3]
console.log(arr);

arr[0] = 45
console.log(arr);

arr.shift()
arr.unshift(1)
console.log(arr);

arr[10] = 89
console.log(arr);


console.log(arr[6]);

var b = [undefined]
b[2] = 1
console.log(b);

b = b.map(e=>7)
console.log(b);


let b2 = [undefined,,1]
b2 = b2.map(e=>{ if(e==1) return 7})
console.log(b2);