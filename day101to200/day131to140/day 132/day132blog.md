Today #Day132 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 31\. **What would the following code return?**

```javascript
console.log(typeof typeof 1);
```

`string`

`typeof 1` will return `"number"` and `typeof "number"` will return `string`.

```javascript
console.log(typeof 1); // number 
console.log(typeof '1'); // string 
console.log(typeof number); // undefined
console.log(typeof 'number'); // string


console.log(typeof typeof 1); // string
```

# 32\. **What will be the output of the following code: & Explain your answer. How could the use of closures help here?**

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

The code sample shown will ***not*** display the values 0, 1, 2, 3, and 4 as might be expected; rather, it will display 5, 5, 5, 5, and 5.

The reason for this is that each function executed within the loop will be executed *after* the entire loop has completed and *all* will therefore reference the *last* value stored in `i`, which was 5.

[**Closures**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows:

```javascript
for (let i = 0; i < 5; i++) {
    (function (x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    })(i);
  }
```

This will produce the presumably desired result of logging 0, 1, 2, 3, and 4 to the console.

[In an ES2015 context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#Creating_closures_in_loops_A_common_mistake), you can simply use `let` instead of `var` in the original code:

```javascript
for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like typeof and set timeout.

# Code

1. code
    
    ![Alt text](1.%20day132%20code.png)

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)