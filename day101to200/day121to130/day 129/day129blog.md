Today #Day129 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 25\. **What will be the output of this code?**

```javascript
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
```

Neither 21, nor 20, the result is `undefined`

It’s because JavaScript initialization is not hoisted.

Why doesn’t it show the global value of 21?

The reason is that when the function is executed, it checks that there’s a local `x` variable present but doesn’t yet declare it, so it won’t look for global one.

```javascript
var xx = 21;
var girl = function () {
  console.log(xx);
  xx = 20;
};
girl();
```

```javascript

let y = 4;

const number2 = function number() {
  console.log(y);
  y = 5
  console.log(y);
}
console.log(y);
number2();
```

# 26\. **What will this code print?**

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

It will print `0 1 2 3 4`, because we use `let` instead of `var` here. The variable `i` is only seen in the `for` loop’s block scope.

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like var with functions and setTimout.

# Code

1. code
    
    ![Alt text](1.%20day%20129%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)