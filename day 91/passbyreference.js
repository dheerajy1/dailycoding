let a = 10
let b = 'hi'
let c = [1,2]

console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2]
/*
let a = 10
let b = 'hi'
let c = [1,2] */
let d = c

console.log(`a = ${a}`) //10 
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2]
console.log(`d = ${d}`) // [1,2]

console.log(`c == d = ${c == d}`) // true
console.log(`c === d ${c === d}`) // true
/*
let a = 10
let b = 'hi'
let c = [1,2] 
let d = c */
d.push(3)
console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2,3]
console.log(`d = ${d}`) // [1,2,3]

console.log(`c == d = ${c == d}`) // true
console.log(`c === d ${c === d}`) // true