Today #Day113 of #365DaysOfCode, Learning Top JavaScript Interview Questions.

# Intermediate JavaScript Interview Questions,

## 21\. What are closures in JavaScript?

Closures provide a better and more concise way of writing JavaScript code for developers and programmers.

Closer is created whenever a variable that is defined outside the current scope is accessed within the current scope.

```javascript
function hello(name){
var message = "hello" + name;
return function hello () {
console.log(message );
};
}
//generate closure
var helloWorld = hello("world");
//use closure
helloWorld();
```

## 22\. What are arrow functions in JavaScript?

Arrow functions are a short way of writing functions in JavaScript.

```javascript
cpnst helloWorld = ()=> {
console.log("hello world");
}
```

## 23\. What are the different ways an HTML element can be accessed in JavaScript code?

<table><tbody><tr><td colspan="1" rowspan="1"><p>Accessor</p></td><td colspan="1" rowspan="1"><p>description</p></td></tr><tr><td colspan="1" rowspan="1"><p>getElementByClass('classname')</p></td><td colspan="1" rowspan="1"><p>Gets all the HTML elements that have the specified classmate.</p></td></tr><tr><td colspan="1" rowspan="1"><p>getElementById('idname')</p></td><td colspan="1" rowspan="1"><p>get an HTML element by its ID name</p></td></tr><tr><td colspan="1" rowspan="1"><p>getElementsbyTagName('tagname')</p></td><td colspan="1" rowspan="1"><p>gets all the HTML elements that have the specified tag name</p></td></tr><tr><td colspan="1" rowspan="1"><p>querySelector()</p></td><td colspan="1" rowspan="1"><p>Takes CSS style selector and returns the first selected HTML element</p></td></tr></tbody></table>

## 24\. What are the ways of defining a variable?

There are 3 ways of defining a variable in JavaScript:

var - this is used to declare a variable and the value can be changed at a later time within the JavaScript code. `var abc = 'Hello';`

const - we can also use this to declare/ define if variable but the value is constant throughout the JavaScript program and cannot be modified. `const abc = 'Hello';`

let - this mostly implies that the values can be changed at a later time within the JavaScript code. `let abc = 'Hello';`

## 25\. what are imports and exports in JavaScript?

Imports and exports help in writing modular court for our JavaScript applications.

With the help of imports and exports split a JavaScript code into multiple files in a project

**to make JavaScript highly reusable and modular us imports and export commands in JavaScript programs.**

The below JavaScript code snippet file exports to functions that calculate the square and diagonal of the input respectively.

```javascript
export const sqrt = Math.sqrt;
export function square(x) {
return x * x;
}
export function diag(x,y){
return sqrt (square(x) + square(y));
}
```

the below code we import those functions and pass input to those functions to calculate square and diagonal,

```javascript
import {square,diag} from "calc;
console.log(square(4));
console.log(diag(4,3));
```

## 26\. What is the difference between a document and a window in JavaScript?

Windows are top-level object and document object falls under this.

| Document | window |
| --- | --- |
| the document comes under the windows object and can also be considered as its property | window in JavaScript is a global object that holds the structure like variables, functions, location, etc. |

## 27\. What are some of the JavaScript frameworks and their users?

JavaScript has a collection of many frameworks that aim towards fulfilling the different aspects of web application development process.

Some of the prominent frameworks are:

react- front end development of a web application.

Angular- front end development of web application

Node JS- backend or server-side development of a web application.

## 28\. What is the difference between undefined and undeclared in JavaScript?

| Undefined | undeclared |
| --- | --- |
| undefined means a variable has been declared but a value has not yet been assigned to that variable | variables that are not declared or that do not exist in a program or applicatio |

## 29\. What is the difference between undefined and null in JavaScript?

| Undefined | null |
| --- | --- |
| undefined means available has been declared but a value has not yet been assigned to that variable | null is actually an assignment value that we can assign to any variable that is meant to contain no value |

## 30\. What is the difference between session storage and local storage in JavaScript?

| Session storage | local storage |
| --- | --- |
| the data stored in session storage gets expired or deleted when a page session ends | website store some data in local machine to reduce loading time; This data does not get deleted at the end of a browsing session |

# Advanced JavaScript Interview Questions

## 31\. How do you empty an array in JavaScript?

There are few ways in which we can empty an array in JavaScript.

By assigning array length 20.

```javascript
var arr = [1,2,3,4];
arr.length = 0;
```

by assigning an empty array,

```javascript
var arr = [1,2,3,4]; 
arr = [];
```

by popping the elements of the array,

```javascript
var arr = [1,2,3,4]; 
while(arr.length>0){
arr.pop();
}
```

by using the splice array function,

```javascript
var arr = [1,2,3,4]; 
 arr.splice(0,are.length);
```

## 32\. What is the difference between event capturing an event bubbling?

| Event capturing | event bubbling |
| --- | --- |
| this process starts with capturing the event of the outermost element and then propagating it to the innermost element | this process starts with capturing the event of the innermost element and then propagating it to the outermost element |

## 33\. What is the strict mode in JavaScript?

Strict mode in JavaScript introduces mode stringent error- checking in a JavaScript code.

While in strict mode all variables have to be declared explicitly, values cannot be assigned to a read-only property etc.

We can enable strict mode by adding `use strict` at the beginning of a JavaScript code or within a certain segment of code.

```javascript
'use strict';
let a = 10, 
b = 20, 
c= a + b;
```

## 34\. What would be the output of the below JavaScript code?

```javascript
var a =10;
if (function abc () {}){
a+= typeof abc;
}
console.log(a);
```

the output of this JavaScript JavaScript code will be 10 undefined.

Then if condition statement in the code evaluates using eval,

hence, eval(function abc () {}) will return function abc () {},

inside the if statement executing type of abc returns undefined because the if statement code executes at runtime while the statement inside the if condition is being evaluated.

## 35\. Can you write a JavaScript code for adding a new elements in a dynamic manner?

```javascript
function addNode(){
    var newP = document.createElement("p");
    var textNode = document.createTextNode("This is a new text node")
    newP.appendChild(textNode);
    document.getElementById("firstP").appendChild(newP)
}
```

## 36\. What is the difference between call and apply?

| Call method | apply method |
| --- | --- |
| In the call() method arguments are provided individually along with 'this' value | In the apply() method arguments are provided in the form of an array along with 'this' value |

## 37\. What would be the output of the below JavaScript code?

```javascript
var Student = {
    college: 'abc',
};
var stud1 = Object.create(Student);
console.log(Student);
delete stud1.college
console.log(stud1);

console.log(stud1.college);
```

this is basically a simple example of object-oriented programming.

Therefore the output will be 'abc' as we are accessing the property of the student object.

## 38\. What would be the output of the below JavaScript code?

```javascript
var Bar = Function Foo(){
    return 11;
};
typeof Foo();
```

The output would be a reference error since function definition can only have a single reference variable as its name.

## 39\. How do you remove duplicates from a JavaScript array?

There are 2 ways in which we can remove duplicates from a JavaScript array:

By using filter method - in order to call the filter() method, 3 arguments are required. These are namely array, current element, and index of the current element.

By using the for loop - and MTR is used for storing all the repeating elements.

## 40\. Can you draw a simple JavaScript Dom (document object model)?

Here simple diagram of document object model of a web page,

![What is a DOM element in JavaScript? How does it work?](https://www.dynamicwebtraining.com.au/blog/wp-content/uploads/2019/12/DOM-02-1024x768.jpg)

## Conclusion

I learned and practiced Top JavaScript Interview Questions.

# Code

1. code
    
    ![Alt text](1.%20day113%20code.png)
    

# Source: **Simplilearn** [\[Link\]](https://youtu.be/9rmL_DsqAZQ)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)