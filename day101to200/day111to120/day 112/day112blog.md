Today #Day112 of #365DaysOfCode, Learning Top JavaScript Interview Questions.

# Beginner JavaScript Interview questions

## 1\. What do you understand about JavaScript?

Javascript is a popular web scripting language and is used for client-side and server-side development.

JavaScript is also used in the back end using Node.JS hence it is also called server-side development.

The JavaScript code can be inserted into HTML pages that can be understood and executed by web browsers while also supporting object-oriented programming abilities.

## 2\. What is the difference between JavaScript and Java?

| JavaScript | Java |
| --- | --- |
| JavaScript is an object-oriented scripting language. | Java is an object-oriented programming language. |
| JavaScript applications are meant to run inside a web browser. | Java applications are generally made for use in operating systems and virtual machines. |
| JavaScript does not need compilation before running the application code. | Java source code needs a compiler before it can be ready to run in real time. |

## 3\. What are the various data types in JavaScript?

JavaScript has many data types to provide some basic functionality needed for a web application.

They are mentioned in this table,

1. Primitive data types:
    
    primitive(primitive value or primitive data type) is data that is not an object that is it has no properties or methods.
    
    Examples: boolean primitive data type, null primitive data type, undefined primitive data type, number primitive data type, string primitive data type.
    
2. Non primitive data types:
    
    Non primitive hey that is an object and has properties and methods.
    
    Example: Object non primitive data type.
    

| data type | description |
| --- | --- |
| boolean | for true and false values |
| null | for empty or unknown values |
| undefined | for variables that are only declared and not defined or initialised |
| number | for integer and floating point values |
| string | for character in alpha numeric values |
| object | for collections or complex values |
| symbols | for unique identifiers or objects |

## 4\. What are the features of JavaScript?

Lightweight interpreted programming scripting language.

Cross-platform compatible.

Open source

object-oriented but object-based language

integration with another backend as well as front-end technologies.

used especially for the development of network-based applications.

## 5\. What are the advantages of JavaScript?

**Enhanced interaction** - JavaScript adds interaction to otherwise static web pages and makes them react to user inputs. It is an event-based, functional programming scripting language.

**Quick feedback -** there is no need for average to reload when running JavaScript.

**Rich user interface** - JavaScript helps in making the UI of web applications look and feel much better.

**Frameworks** - JavaScript has countless frameworks and libraries that are extensively used for developing web applications and games of all kinds. Ex: Angular.JS, React.JS, Vuejs

## 6\. How do you create an object in JavaScript?

JavaScript accents each essentially an object-oriented scripting language it supports the usage of objects while developing web applications.

```javascript
const student =  {
name: 'John', 
age: 17 
}
```

## 7\. How do you create an array in JavaScript?

A very simple way of creating arrays in JavaScript using the array literal:

```javascript
var a = [];
var b = ['a','b','c','d','e'];
```

An array is also a predefined object in JavaScript called an implicit object

## 8\. What does the of the built-in methods in JavaScript?

JavaScript has many built-in methods to provide the functionality needed for web apps.

Some of them are mentioned in this table

| method | description |
| --- | --- |
| date() | returns the present date and time |
| concat() | joins 2 strings and returns the new string |
| push() | add an item to an array |
| pop() | removes and also returns the last element of an array |
| round() | rounds of the value to the nearest integer and returns it |
| length() | returns the length of a string |

## 9\. What are the scopes of a variable in JavaScript?

The scope of a variable implies where the variable has been declared or defined in a JavaScript program.

Scopes are designed to give you the visibility of an variable.

There are 2 scopes of a variable in JavaScript,

1. Global scope- global variables, having global scope are available everywhere in JavaScript a global scope variable declared is hoisted.
    
2. Local scope: local variables are accessible only within a function in which they are defined.
    

## 10\. What is 'this' keyword in JavaScript?

The 'this' keyword in JavaScript refers to the current calling object.

It is commonly used in constructors to assign values to object properties.

## 11\. What are the conventions of naming the variable?

Variable names cannot be similar to that of the reserved keywords.

Variable names Cannot begin with a numeric value; They must only begin with a letter or an underscore character.

Variable names are case-sensitive. (A,a - are different in case sensitive), JavaScript is case sensitive object oriented scripting language.

For example, var, let, constant etc.

<s>var var;</s>

var a123;

## 12\. What is the callback in JavaScript?

The callback is a JavaScript function that is passed to another function as an argument or parameter.

## 13\. how do you debug a JavaScript code?

All modern web browsers like Chrome, Firefox, etc. Have an inbuilt debugger that can be accessed anytime by pressing the relevant key, usually the F 12 key.

Debug JavaScript code inside a code editor that we use to develop a JavaScript application- for example Visual Studio code atom sublime text, etc.

## 14\. What is the difference between function declaration and function expression?

| Function declaration | function expression |
| --- | --- |
| declared as a separate statement within the main JavaScript code | created inside an expression or some other construct |
| can be called before the function is defined | created when the execution point reaches it; Can be used only after that |
| offers better code readability and better organization | used when there is a need for conditional declaration of a function |

Function declaration

```javascript
function abc(){
return 5;
}
```

function expression

```javascript
var a = function abc(){
return 5;
}
```

## 15\. What are the ways of adding JavaScript code in an HTML file?

There are majority 2 ways of embedding JavaScript code:

we can write JavaScript code within the script tag in the same HTML file.

We can import a JavaScript source file into an HTML document.

# Intermediate JavaScript interview questions

# 16\. What do you understand about cookies?

A cookie(small text file) is generally a small piece of data that is sent from a website and stored on the user's machine by the website browser that was used to access the website.

Whenever the client is accessing your website these cookies are used to store and track the client's activities

# 17\. How would you create a cookie?

The simplest way of creating a cookie using JavaScript is as below:

```javascript
documents.cookie = "key1 = value1; key2 = value2; expires =date";
```

# 18\. How would you read a cookie?

We can simply use the `document.cookie` string that contains the cookies in the form of key-value pair,

```javascript
key1 = value1;
```

# 19\. How would you delete a cookie?

To delete a cookie we can just set an expiration date and time; Specifying the correct path of the cookie is a good practice,

```javascript
function delete_cookie(name) {
document.cookie = name + "=; Path = /;Expires = Thu,01 Jan 2025 00:00:01 GMT";
}
```

## 20\. What is the difference between let and war keywords in JavaScript?

Both led and wire keywords are used for variable and method declarations in JavaScript.

So there isn't much of a difference between these 2 besides that while var keyword is scoped by function, let keyword is scoped by a block.

var - function level

let - block level

# Conclusion

I learned and practiced Top JavaScript Interview Questions.

# Code

1. code
    
    ![Alt text](1.%20day112%20code.png)
    

# Source: **Simplilearn** [\[Link\]](https://youtu.be/9rmL_DsqAZQ)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)