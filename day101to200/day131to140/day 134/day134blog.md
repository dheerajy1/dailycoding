Today #Day134 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 35\. **Discuss possible ways to write a function** `isInteger(x)` **that determines if** `x` **is an integer.**

This may sound trivial and, in fact, it is trivial with ECMAscript 6 which introduces a new `Number.isInteger()` function for precisely this purpose.

However, prior to ECMAScript 6, this is a bit more complicated, since no equivalent of the `Number.isInteger()` method is provided.

The issue is that, in the ECMAScript specification, integers only exist conceptually; i.e., numeric values are *always* stored as floating point values.

With that in mind, the *simplest and cleanest* pre-ECMAScript-6 solution (which is also sufficiently robust to return `false` even if a non-numeric value such as a string or `null` is passed to the function) would be the following use of the bitwise XOR operator:

```js
function isInteger(x) { 
return (x ^ 0) === x; 
}
```

The following solution would also work, although not as elegant as the one above:

```js
function isInteger(x) { 
return (typeof x === 'number') && (x % 1 === 0); 
}
```

The following function (or with `Math.ceil()` or `Math.floor()` in place of `Math.round()`) might also seem useful, but the results are not exactly the same as with the above two functions:

```js
function isInteger(x) { 
return Math.round(x) === x; 
}
```

The difference is, these `Math`\-based solutions return `true` for `Infinity` and `-Infinity`, whereas the others (and notably ES6’s `Number.isInteger()`) return `false`.

Another fairly common **incorrect** solution is the following:

```js
function isInteger(x) { 
return parseInt(x, 10) === x; 
}
```

While this `parseInt`\-based approach will work well for *many* values of `x`, once `x` becomes quite large, it will fail to work properly.

The problem is that `parseInt()` coerces its first parameter to a string before parsing digits.

Therefore, once the number becomes sufficiently large, its string representation will be presented in exponential form (e.g., `1e+21`).

Accordingly, `parseInt()` will then try to parse `1e+21`, but will stop parsing when it reaches the `e` character and will therefore return a value of `1`.

Observe:

```js
> String(1000000000000000000000)
'1e+21'
```

```js
> parseInt(1000000000000000000000, 10)
1
```

```js
> parseInt(1000000000000000000000, 10) === 1000000000000000000000
false
```

# 36\. **How do you clone an object?**

```javascript
var obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
```

Now the value of `objclone` is `{a: 1 ,b: 2}` but points to a different object than `obj`.

Note the potential pitfall, though: `Object.assign()` will just do a shallow copy, *not* a deep copy.

This means that nested objects aren’t copied. They still refer to the same nested objects as the original:

```js
let obj = {
    a: 1,
    b: 2,
    c: {
        age: 30
    }
};

var objclone = Object.assign({},obj);
console.log('objclone: ', objclone);

obj.c.age = 45;
console.log('After Change - obj: ', obj);           // 45 - This also changes
console.log('After Change - objclone: ', objclone); // 45
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like isInteger and Object Shallow copy.

# Code

1. code
    
    ![Alt text](1.%20day134%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)