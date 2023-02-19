Today #Day125 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 17\. **What will be the output when the following code is executed? Explain.**

```javascript
console.log(false == '0') // true
console.log(false === '0') // false
```

triple-equal operator `===` behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value.

The double-equal operator `==`, however, tries to coerce the values before comparing them.

It is therefore generally good practice to use the `===` rather than `==`.

The same holds true for `!==` vs `!=`.

# 18\. **What is the output out of the following code? Explain your answer.**

```javascript
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
```

The output of this code will be `456` (*not* `123`).

The reason for this is as follows:

When setting an object property, JavaScript will implicitly **stringify** the parameter value.

In this case, since `b` and `c` are both objects, they will *both* be converted to `"[object Object]"`.

As a result, `a[b]` and`a[c]` are both equivalent to `a["[object Object]"]` and can be used interchangeably.

Therefore, setting or referencing `a[c]` is precisely the same as setting or referencing `a[b]`.

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like triple-equal operator and double-equal operator and object.

# Code

1. code
    
    ![Alt text](1.%20day%20125%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)