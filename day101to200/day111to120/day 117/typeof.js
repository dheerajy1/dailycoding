var bar = null
console.log(typeof bar) // object
console.log(typeof bar==='object') // true

console.log((bar!==null)&&(typeof bar ==='object')) // false

bar = function foo(){ return 7}
console.log(typeof bar) // function
console.log(typeof foo) // undefined
console.log(bar()) // 7
//console.log(foo()) // foo is not defined

console.log((bar!==null)&&(typeof bar ==='object') || (typeof bar === 'function')) // true

bar = []
console.log(typeof bar) // object
console.log(typeof bar==='object') // true
console.log(toString.call(bar)) //[object Array]

console.log((bar!==null)&&(typeof bar ==='object')&&(toString.call(bar)!=='[object Array]') || (typeof bar === 'function')) // true

bar = {namee:'elon'}
console.log(typeof bar)
console.log((bar!==null)&&(bar.constructor === Object))
console.log(Array.isArray(bar))

bar = []
console.log(typeof bar)
console.log(Array.isArray(bar))
