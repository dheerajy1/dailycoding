Today #Day116 of #365DaysOfCode, Learning Tricky JavaScript Coding Interview Questions

# 6\. What will be the output of the following code?

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

Above code would give output 1undefined. If condition statement evaluate using eval so eval(function f() {}) which return function f() {} which is true so inside if statement code executes.

typeof f return undefined because if statement code executes at run time, so statement inside if condition evaluated at run time.

# 7\. What will the following code output?

```javascript
(function() {
  var a = b = 5;
})();

console.log(b);
```

The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

```javascript
var a = b = 5;
```

is interpreted the following way:

```javascript
var a = b;
b = 5;
```

But b is not declared anywhere in the function with var so it is set equal to 5 in the *global scope*.

# 8\. What will the following code output?

```javascript
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
```

The classic pitfall here is the **Zero delays**. setTimeout(callback, 0) doesn't mean that the callback will be fire after zero milliseconds.

Here’s what happen on the event loop side:

1. Current Call Stack is set to the first setTimeout().
    
2. windows.setTimeout() is considered as a Web APIs (for better **Non-Blocking I/O**). So the call stack sends this part of code to correct Web APIs. After 0 milliseconds, the callback (here an anonymous function) would be sent to the Queue (not to the call stack).
    
3. As the call stack is free, for-loop can continue to the second setTimeout …(repeat after we meet this condition i &lt; 4)…
    
4. Now the loop is over and i = 4. JS can now execute the callback queue one by one. Each console.log(i) will print the 4.
    

# 9\. Palindrome Problem

A palindrome is a word, sentence, or other types of character sequence that reads the same backward as forward.

For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.

```javascript
const word = 'Anna'.toLowerCase()
const revWord = word.toLowerCase().split('').reverse().join('')
console.log(word===revWord )
```

# 10\. Find the Vowels

```javascript
const findVowels = str => {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count
}
```

My solution,

```javascript
const word = 'Elon Musk'
let c=0
const arr = word.toLowerCase().split('').filter((el)=>el!=' ')
console.log(arr)
arr.forEach((el,i)=>{
    ['a', 'e', 'i', 'o', 'u'].find((vow)=>{
        if(vow===el){
            c++
            console.log(i)
            return 1
        }
    })
})
console.log(c)

const arr1 = [1,2,3]
console.log(arr1.find((el,i)=>el===1))
console.log(arr1.findIndex((el)=>el===1))

console.log(arr1.includes(1))
```

# Conclusion

Learned and Practised Tricky JavaScript Coding Interview Questions.

# Code

1. code
    
    ![Alt text](1.%20day116%20code.png)
    

# Source: JavaScript \[[Link](https://plainenglish.io/blog/10-tricky-javascript-coding-interview-question-with-solution)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)