Today #Day133 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 33\. **What is** `NaN`**? What is its type? How can you reliably test if a value is equal to** `NaN`**?**

The `NaN` property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., `"abc" / 4`), or because the result of the operation is non-numeric.

While this seems straightforward enough, there are a couple of somewhat surprising characteristics of `NaN` that can result in hair-pulling bugs if one is not aware of them.

For one thing, although `NaN` means “not a number”, its type is, believe it or not, `Number`:

```javascript
console.log(typeof NaN === "number");  // logs "true"
```

Additionally, `NaN` compared to anything – even itself! – is false:

```cpp
console.log(NaN === NaN);  // logs "false"
```

A *semi-reliable* way to test whether a number is equal to NaN is with the built-in function `isNaN()`, but even using [`isNaN()` is an imperfect solution](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Confusing_special-case_behavior).

A better solution would either be to use `value !== value`, which would *only* produce true if the value is equal to NaN.

Also, ES6 offers a new [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) function, which is a different and more reliable than the old global `isNaN()` function.

```javascript
console.log(typeof NaN); //number
console.log(typeof typeof NaN); // string
console.log(typeof 'NaN'); // string

console.log(NaN == NaN); // false
console.log(typeof NaN == typeof NaN); // true
console.log(NaN > NaN); // false
console.log(NaN < NaN); // false

console.log(isNaN(1)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN()); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(Array)); // true
console.log(isNaN({})); // true
console.log(isNaN({NaN})); // true

console.log(NaN !== NaN); // true

console.log(Number.isNaN(5)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN()); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
```

# 34\. **What will the following code output and why?**

```javascript
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
```

Output to the console will be “3”.

There are three closures in the example, each with it’s own `var b` declaration.

When a variable is invoked closures will be checked in order from local to global until an instance is found.

Since the `inner` closure has a `b` variable of its own, that is what will be output.

Furthermore, due to hoisting the code in inner will be interpreted as follows:

```javascript
function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like NaN & closures.

# Code

1. code
    
    ![Alt text](1.%20day133%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)