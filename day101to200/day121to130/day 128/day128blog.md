Today #Day128 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 23\. **Testing your** `this` **knowledge in JavaScript: What is the output of the following code?**

```javascript
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
```

Output:

```plaintext
10 
2
```

Why isn’t it `10` and `5`?

In the first place, as `fn` is passed as a parameter to the function `method`, the scope (`this`) of the function `fn` is `window`. `var length = 10;` is declared at the `window` level. It also can be accessed as `window.length` or `length` or `this.length` (when `this === window`.)

`method` is bound to `Object obj`, and `obj.method` is called with parameters `fn` and `1`. Though `method` is accepting only one parameter, while invoking it has passed two parameters; the first is a function callback and other is just a number.

When `fn()` is called inside `method`, which was passed the function as a parameter at the global level, `this.length` will have access to `var length = 10` (declared globally) not `length = 5` as defined in `Object obj`.

Now, we know that we can access any number of arguments in a JavaScript function using the `arguments[]` array.

Hence `arguments[0]()` is nothing but calling `fn()`. Inside `fn` now, the scope of this function becomes the `arguments` array, and logging the length of `arguments[]` will return `2`.

Hence the output will be as above.

# 24\. **Consider the following code. What will the output be, and why?**

```javascript
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```

```plaintext
1
undefined
2
```

`var` statements are hoisted (without their value initialization) to the top of the global or function scope it belongs to, even when it’s inside a `with` or `catch` block. However, the error’s identifier is only visible inside the `catch` block. It is equivalent to:

```js
(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */);
    }
    console.log(x);
    console.log(y);
})();
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like functions, Object Methods and this. and try & catch with var.

# Code

1. code
    
    ![Alt text](1.%20day%20128%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)