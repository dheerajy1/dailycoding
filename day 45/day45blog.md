Today #day45 of #100daysofcode, I have completed 8.55 & 8.56 lessons and a "London is the capital of GB" code practice problem in the JS course. @Sololearn

# ECMAScript 6

# What is ECMA?

*   European Computer Manufacturers Association (ECMA).
    
*   ECMA is a standard, and Javascript and Jscript are an implementation of those standards.
    

# Intro to ES6

*   ECMAScript (ES) is a scripting language specification created to standardize JavaScript.
    
*   ES6 - 2015
    
*   ES13 - June 2022
    

# ES6 variables and strings

## 3 Ways of declaring a variable in ES6

```javascript
var a = 10;
const b = 'hello';
let c = true;
```

*   The type of declaration used depends on the necessary **scope**.
    
*   **The scope** is the fundamental concept in all programming languages that defines the visibility of a variable.
    

### var type declaration

*   **var** keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
    
*   var -&gt; variable
    
*   you can reassign where type declare declaration.
    

### let type declaration

*   **let** allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.
    
*   The best use for let is in loops.
    
*   **let** is not subject to **Variable Hoisting**, which means that **let** declarations do not move to the top of the current execution context.
    
*   You can reassign a let type declared declaration.
    

### const type declaration

*   **const** variables have the same scope as variables declared using **let**.
    
*   The difference is that const variables are **immutable** i.e they are not allowed to be reassigned.
    
*   **const** is not subject to **Variable Hoisting** too, which means that **const** declarations do not move to the top of the current execution context.
    

### Note:

*   Also, note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.
    

### Summary:

*   "var" is for globlal scope.
    
*   "let" is for block scope.
    
*   "const" is for block scope and value of it unchangeable
    

# **Template Literals in ES6**

*   **Template literals** are a way to output variables in the string.
    

Before ES6 we had to break the string. For example,

```javascript
let name='spiderman'
let log = 'friendly neighbourhood' + name + '!'
console.log(log)
```

*   ES6 introduces a new way of outputting variable values in strings.
    

The same code above can be rewritten as:

```javascript
let name='spiderman'
let log = `friendly neighbourhood' ${name} '!'`
console.log(log)
```

*   Observe, that template literals are encapsulated by the **backtick** (\` \`) character instead of double or single quotes(like in ES5).
    
*   The **${expression}** is a placeholder, and can include any expression, which will get evaluated and inserted into the template literal.
    

### Note:

*   To escape a backtick in a template literal, put a backslash `\` before the backtick.
    

# Images

*   8.55 & 8.56 completed
    
    ![6. day45 8.55&8.56 completed.png](/day%2045/Images/6.%20day45%208.55%268.56%20completed.png)
    

# Conclusion

*   ECMAScript 6
    
*   What is ECMA?
    
*   Intro to ES6
    
*   ES6 variables and strings
    
*   3 Ways of declaring a variable in ES6
    
*   Template Literals in ES6
    

# My Code:

*   London is the capital of GB
    
    ![.png](/day%2045/Images/4.%20day45%20London%20is%20the%20capital%20of%20GB%20code%20project.png)
    

# References [Sololearn](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)