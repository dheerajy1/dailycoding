Today #Day130 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 27\. **What is the output of the following code, and why?**

```javascript
console.log(1 < 2 < 3); 
console.log(3 > 2 > 1);
```

The first statement returns `true` which is as expected.

The second returns `false` because of how the engine works regarding operator associativity for `<` and `>`.

It compares left to right, so `3 > 2 > 1` JavaScript translates to `true > 1`. `true` has value `1`, so it then compares `1 > 1`, which is `false`.

```javascript
console.log(1<2); // true
console.log(1 <'2'); // true
console.log(1 <'two'); // false

console.log(true,1); // true 1

console.log(true < 1); // false
console.log(false<1); // true
console.log(true < 2); // true
console.log(false<2); // true


console.log(1<2<3); // true
console.log(3>2>1); // false
console.log(3>2>true); // false
console.log(3>2>false); // true
```

# 28\. **How do you add an element at the beginning of an array? How do you add one at the end?**

```javascript
var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
```

With ES6, one can use the spread operator:

```javascript
myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];
```

Or, in short:

```js
myArray = ['start', ...myArray, 'end'];
```

Ans

```javascript
var arr = [1,2,3,4]
console.log(arr); // (4) [1, 2, 3, 4]

arr.unshift('start')
console.log(arr); // (5) ["start", 1, 2, 3, 4]

arr.push('end')
console.log(arr); // (6) ["start", 1, 2, 3, 4, "end"]

arr.shift()
console.log(arr); // (5) [1, 2, 3, 4, "end"]

arr.pop()
console.log(arr); // (4) [1, 2, 3, 4]

var arr2 = ['start',...arr]
console.log(arr2); // (5) ["start", 1, 2, 3, 4]

arr2 = [...arr2,'end']
console.log(arr2); // (6) ["start", 1, 2, 3, 4, "end"]

let arr3 = ['srart',...arr,'end']
console.log(arr3); // (6) ["srart", 1, 2, 3, 4, "end"]
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like arithmetic operators and arrays.

# Code

1. code
    
    ![Alt text](1.%20day130%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)