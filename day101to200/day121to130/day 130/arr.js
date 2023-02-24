var arr = [1,2,3,4]
console.log(arr);

arr.unshift('start')
console.log(arr);

arr.push('end')
console.log(arr);

arr.shift()
console.log(arr);

arr.pop()
console.log(arr);

var arr2 = ['start',...arr]
console.log(arr2);

arr2 = [...arr2,'end']
console.log(arr2);

let arr3 = ['srart',...arr,'end']
console.log(arr3);