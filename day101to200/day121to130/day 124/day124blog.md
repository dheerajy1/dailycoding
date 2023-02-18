Today #Day124 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 15\. **What is a “closure” in JavaScript? Provide an example.**

A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain.

The closure has access to variables in three scopes; specifically:

1. variable in its own scope,
    
2. variables in the enclosing function’s scope, and
    
3. global variables.
    

Here is an example:

```javascript
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
```

In the above example, variables from `innerFunc`, `outerFunc`, and the global namespace are **all** in scope in the `innerFunc`. The above code will therefore produce the following output:

```javascript
outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz
```

# 16\. **What would the following lines of code output to the console?**

```javascript
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

console.log("0 && 2893 = "+(0 && 2893));
console.log("1 && 2893 = "+(1 && 2893));
```

In JavaScript, both `||` and `&&` are logical operators that return the first fully-determined “logical value” when evaluated from left to right.

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like JS closure and Logical Operator.

# Code

1. code
    
    ![Alt text](1.%20day124%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)