Today #Day117 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# **Q1. What is a potential pitfall with using** `typeof bar === "object"` **to determine if** `bar` **is an object? How can this pitfall be avoided?**

Although `typeof bar === "object"` *is* a reliable way of checking if `bar` is an object, the surprising gotcha in JavaScript is that `null` is *also* considered an object!

Therefore, the following code will, to the surprise of most developers, log `true` (not `false`) to the console:

```javascript
var bar = null; 
console.log(typeof bar === "object"); // logs true!
```

As long as one is aware of this, the problem can easily be avoided by also checking if `bar` is `null`:

```javascript
console.log((bar !== null) && (typeof bar === "object"));  // logs false
```

To be entirely thorough in our answer, there are two other things worth noting:

## Case-1:

First, the above solution will return `false` if `bar` is a function. In most cases, this is the desired behavior, but in situations where you want to also return `true` for functions, you could amend the above solution to be:

```js
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
```

## Case-2:

Second, the above solution will return `true` if `bar` is an array (e.g., if `var bar = [];`). In most cases, this is the desired behavior, since arrays are indeed objects, but in situations where you want to also `false` for arrays, you could amend the above solution to be:

```js
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
```

However, there’s one other alternative that returns `false` for nulls, arrays, and functions, but `true` for objects:

```js
console.log((bar !== null) && (bar.constructor === Object));
```

ES5 makes the array case quite simple, including its own null check:

```javascript
console.log(Array.isArray(bar));
```

# 2\. What will the code below output to the console and why?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Since both `a` and `b` are defined within the enclosing scope of the function, and since the line they are on begins with the `var` keyword, most JavaScript developers would expect `typeof a` and `typeof b` to both be *undefined* in the above example.

However, that is *not* the case. The issue here is that most developers *incorrectly* understand the statement `var a = b = 3;` to be shorthand for:

```javascript
var b = 3; var a = b;
```

But in fact, `var a = b = 3;` is actually shorthand for:

```javascript
b = 3;
var a = b;
```

As a result (if you are *not* using strict mode), the output of the code snippet would be:

```javascript
a defined? false
b defined? true
```

But how can `b` be defined *outside* of the scope of the enclosing function? Well, since the statement `var a = b = 3;` is shorthand for the statements `b = 3;` and `var a = b;`, `b` ends up being a global variable (since it is not preceded by the `var` keyword) and is therefore still in scope even outside of the enclosing function.

Note that, in strict mode (i.e., with [`use strict`](http://www.w3schools.com/js/js_strict.asp)), the statement `var a = b = 3;` will generate a runtime error of `ReferenceError: b is not defined`, thereby avoiding any headfakes/bugs that might othewise result.

(Yet another prime example of why you should use `use strict` as a matter of course in your code!)

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like the typeof and strict mode.

# Code

1. code
    
    ![Alt text](1.%20day117%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)