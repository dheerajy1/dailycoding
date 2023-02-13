Today #Day119 of #365DaysOfCode, Learning Essential JavaScript Interview Questions.

# 5\. **Consider the two functions below. Will they both return the same thing? Why or why not?**

```javascript
function foo1() { 
    return { bar: "hello" 
    }; 
} 
function foo2() { 
    return 
    {
     bar: "hello" 
    }; 
}
```

As a result, when the line containing the `return` statement (with nothing else on the line) is encountered in `foo2()`, a semicolon is automatically inserted immediately after the return statement.

No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property `bar` which is equal to the string `"hello"`).

In the below code, Observe the '{' in the same line of resturn in foo2(),

```javascript
function foo1() { 
    return { bar: "hello" 
    }; 
} 
function foo2() { 
    return {
     bar: "hello" 
    }; 
}
```

Output:  
foo1 returns: *{bar: "hello"}*

foo2 returns: *{bar: "hello"}*

# 6\. What will the code below output? Explain your answer.

```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

An educated answer to this question would simply be: “You can’t be sure. it might print out `0.3` and `true`, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

```bash
0.30000000000000004
false
```

A typical solution is to compare the absolute difference between two numbers with the special constant `Number.EPSILON`:

```js
function areTheNumbersAlmostEqual(num1p2, num) {
    console.log(Number.EPSILON)
    console.log(num1p2)
    console.log(num)
	return Math.abs( num1p2 - num ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));
```

# Conclusion

Learned and practiced Essential JavaScript Interview Questions involving topics like function return and Number.EPSILON.

# Code

1. code
    
    ![Alt text](1.%20day119%20code.png)
    

# Source: JavaScript Interview Questions \[[Link](https://www.toptal.com/javascript/interview-questions)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)