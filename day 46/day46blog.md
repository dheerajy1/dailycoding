Today #day46 of #100daysofcode, I have completed 8.57 lesson and 8.57.2 "Score 70 plus!" code practice problem in JS course. @Sololearn

### ECMAScript 6

# Loops and Functions in ES6

# Loops in ECMAScript 6

In JavaScript we commonly use the **for** loop to iterate over values in a list:

```javascript
let arr = [1, 2, 3]; 
for (let k = 0; k < arr.length; k++) { 
 console.log(arr[k]); 
}
```

The **for...in** loop is intended for iterating over the enumerable keys of an object.For example:

```javascript
let obj = {a: 1, b: 2, c: 3}; 
for (let v in obj) { 
 console.log(v); 
}
```

Note:

*   The **for...in** loop should **NOT** be used to iterate over arrays because, depending on the JavaScript engine, it could iterate in an arbitrary order. Also, the iterating variable is a **string**, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition. As depicted in my code below.
    

## Code: For...in loop [\[Click\]](https://www.sololearn.com/compiler-playground/WTfctKtVg8BL)

ES6 introduces the new **for...of** loop, which creates a loop iterating over iterable objects.

```javascript
let list = ["x", "y", "z"]; 
for (let val of list) { 
 console.log(val); 
}
```

During each iteration the **val** variable is assigned the corresponding element in the list.

The **for...of** loop works for other iterable objects as well, including **strings**

```javascript
for (let ch of "Hello") { 
 console.log(ch); 
}
```

## Code: for...of [\[click\]](https://www.sololearn.com/compiler-playground/WJdzEYasK9n4)

Note:

*   The **for...of** loop also works on the newly introduced collections (**Map**, **Set**, **WeakMap**, and **WeakSet**).
    
*   Note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.
    

# Summary:

*   For .. in --&gt; used to iterate through properties of an object For .. of --&gt; used to iterate through values of an object
    

# **Functions in ECMAScript 6**

Prior to ES6, a JavaScript function was defined like this:

```javascript
function add(x, y) { 
 var sum = x+y; 
 console.log(sum); 
}
```

ES6 introduces a new syntax for writing functions. The same function from above can be written as:

```javascript
const add = (x, y) => { 
 let sum = x + y; 
 console.log(sum); 
}
```

This new syntax is quite handy when you just need a simple function with one argument.  
You can skip typing **function** and **return**, as well as some parentheses and braces.

```javascript
const greet = x => 'welcome '+x;
```

The code above defines a function named **greet** that has one argument and returns a message.

If there are no parameters, an empty pair of parentheses should be used, as in

```javascript
const x = () => alert("Hi");
```

The syntax is very useful for inline functions. For example.

*   let's say we have an array, and for each element of the array we need to execute a function. We use the **forEach** method of the array to call a function for each element:
    

```javascript
var arr = [2, 3, 7, 8]; 
arr.forEach(function(el) { 
 console.log(el * 2); 
});
```

However, in ES6, the code above can be rewritten as following:

```javascript
const arr = [2, 3, 7, 8]; 
arr.forEach(v => { 
 console.log(v * 2); 
});
```

### Code: es6fun[\[click\]](https://www.sololearn.com/compiler-playground/W1pQx1Uona4t)

### Note:

```javascript
const arr = [2, 3, 7, 8];
arr.forEach((v,r) => {
    console.log(v,r);
});
/*Output 
2 0
3 1
7 2
8 3 */
```

## Default Parameters in ES6

In ES6, we can put the default values right in the signature of the functions.For example:

```javascript
function test(a, b = 8, c = 50) { 
 return a + b + c; 
} 
console.log(test(5)); //67
```

And here's an example of an arrow function with default parameters:

```javascript
const test = (a, b = 8, c = 50) => a + b + c;
console.log(test(9)); //67
```

### Note:

*   Default value expressions are evaluated at function call time from left to right. This also means that default expressions can use the values of previously-filled parameters.
    

# Images

*   8.57 completed
    
    ![6. day46 8.57 completed.png](/day%2046/Images/6.%20day46%208.57%20completed.png)
    

# Conclusion

*   Loops in ECMAScript 6
    
*   Functions in ECMAScript 6
    
*   Default Parameters in ES6
    
*   Quiz
    
*   "Score 70 plus!" code
    

# My Code:

*   day46 Score 70 plus! code
    
    ![1. day46 Score 70 plus! code.png](/day%2046/Images/1.%20day46%20Score%2070%20plus!%20code.png)
    
*   Code: For...in loop [\[Click\]](https://www.sololearn.com/compiler-playground/WTfctKtVg8BL)
    
*   Code: for...of [\[click\]](https://www.sololearn.com/compiler-playground/WJdzEYasK9n4)
    
*   Code: es6fun[\[click\]](https://www.sololearn.com/compiler-playground/W1pQx1Uona4t)
    

# References [Sololearn](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)