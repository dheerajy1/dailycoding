Today #Day91 of #100DaysOfCode, I am learning the Difference between References and values in JavaScript.

## Reference vs Value

objects and arrays are handled as object references and strings and numbers and booleans, undefined, nulls etc are primitive data types or values.

<mark>primitives data types are passed as values,</mark>

primitive data types cannot be modified <s>10 =10 +1</s> -- no

<mark>arrays and objects and class are passed by reference</mark>

object data types can be modified,

\[\].push(3)

### code: arraypush [\[link\]](https://www.sololearn.com/compiler-playground/WxSuOiykSkVF)

## 1\. Pass by value

In the below code, the value of a is 10 is passed to c variable,

```javascript
let a = 10
let b = 'hi'
let c = a

console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) //10
```

Then, In the below code, If you modify the c then only c is modified not a since a is a primitive data type,

```javascript
let a = 10
let b = 'hi'
let c = a
c = c+1

console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi 
console.log(`c = ${c}`) // 11
```

## 2\. Pass by reference,

<details>
<summary>Expand</summary>
Now, c is an array which is an object type, the c variable now gets assigned the memory address of the array [1,2], 
</details>

Now, c is an array which is an object type, the c variable now gets assigned the memory address of the array \[1,2\],

remember the <mark>c is now pointing to the memory location of [1,2]</mark>

Ex: c = (0X01) but this address is storing this \[1,2\]

```javascript
let a = 10
let b = 'hi'
let c = [1,2]

console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2]
```

### Now, pass the reference

In the below code, <mark>memory location of the which was assigned to is also assigned to d. we are passing the reference</mark>.

d --- (0X11) --- c

yes this memory location has the \[1,2\], we you console log d you will see \[1,2\]

comparison since <mark>c and d is pointing to same memory location</mark> you see true in comparision, as the memory location is getting compared

```javascript
let a = 10
let b = 'hi'
let c = [1,2]
let d = c

console.log(`a = ${a}`) //10 
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2]
console.log(`d = ${d}`) // [1,2]

console.log(`c == d = ${c == d}`) // true
console.log(`c === d ${c === d}`) // true
```

Now, In the below code, remember that c and d are both referencing the same location ,

when you push 3 , since c and d are both referencing/pointing to the same location(as d was given by pass by reference ) the array now is \[ 1,2,3\] and now if you console log c it will display \[1,2,3\] because the value at the memory got modified.

comparison since <mark>c and d is pointing to same memory location</mark> you see true in comparision, as the memory location is getting compared

```javascript
let a = 10
let b = 'hi'
let c = [1,2]
let d = c
d.push(3)
console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2,3]
console.log(`d = ${d}`) // [1,2,3]

console.log(`c == d = ${c == d}`) // true
console.log(`c === d ${c === d}`) // true
```

Then, In the below code, c is pointing to different memory locaiton,

and d is pointing to different memory location,

hence when you modify d only d is modified not c,

comparison since <mark>c and d are pointing to two different memory location</mark> you see false in comparision, as the memory location is getting compared

```javascript
let a = 10
let b = 'hi'
let c = [1,2]
let d = [1,2] // or [3,4] 
d.push(3)
console.log(`a = ${a}`) //10
console.log(`b = ${b}`) // hi
console.log(`c = ${c}`) // [1,2,3]
console.log(`d = ${d}`) // [1,2,3]
console.log(`c == d = ${c == d}`) // false
console.log(`c === d ${c === d}`) // false
```

## 3\. In function - pass by reference,

```javascript
let c = [1,2] // (0X01)
console.log(`c = ${c}`)
add(c,3)
console.log(`c = ${c}`)

function add(array,element){ // (0X01),3
array.push(element)
}
```

output:

c = \[1,2\]

c = \[1,2,3\]

The reason is <mark>pass by reference</mark>, since <mark>c is an array whose type is an object data type</mark>,

hence when you pass c you are actually passing its reference i.e memory location so in the function modification is happening then you will see the c = \[1,2,3\].

### code: refvsvalue [\[link\]](https://www.sololearn.com/compiler-playground/WKXG1o82px30)

# Conclusion

I learned about the difference between reference and values and pass by value and pass by reference in function by practicing with code examples.

# Code

1. code
    
    ![Alt text](1.%20day91%20code.png)
    

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)