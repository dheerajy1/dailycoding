Today #Day126 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 19\. **What will the following code output to the console:**

```javascript
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
```

10! = 36,28,800

```javascript
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);
```

# 20\. **Consider the code snippet below. What will the console output be and why?**

```javascript
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
```

output: 1

In JavaScript, a closure is implemented as an “inner function”; i.e., a function defined within the body of another function.

An important feature of closures is that an inner function still has access to the outer function’s variables.

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like function recursion and JS closure.

# Code

1. code
    
    ![Alt text](1.%20day126%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)