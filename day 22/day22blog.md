Today #day22 of #100daysofcode, I have completed 2 lessons and a practice program in JS. @Sololearn 


## 1. Function
### Printing to browser
- document.write() function will write into the html document.
```
document.write("Hello World!");
document.write("<br>this will be displayed in html doc")
console.log('this will appear in Console')
```
- use html tags to give appearance overhaul.
```
document.write("<b><h1></b>Hello World!<b></h1></b>");
document.write("<b><h1></b>Javascript rocks<b></h1></b>")
``` 

#### Note
- document.write() should be used only for testing.
- innerHTML, used to manipulate HTML elements.
- console.log(), used for debugging in browser console.

## 2. Variables
### How to store data values?
- Variables are containers which stores data values. The value of variable changes throughout JS code.
- use keyword var to declare a variable.
```
var x = 2;
``` 

#### Note:
- Here we have used assignment operator called equal to `=`.
- JavaScript is case sensitive language. 
```
var a = 8; var A = 10; alert(a); 
/* Alert is 8 as Javascript is case sensitive */
``` 
- using keywords as variable name is prohibited.

#### Example:
```
var x = 100;
document.write(x);
x=2;
document.write("<br>"+x);
``` 
#### Note:
- Every instruction in JavaScript is a statement and statements are separated by`;`.

### Naming Variables
- As discussed, earlier JavaScript variables are case sensitive. The following code will throw an error.
```
var x = 39;
document.write(X);
``` 

#### Do's
The first character of a variable name should be / must be
 - a letter
 - underscore(_)
 - $

#### Don'ts
1. The first character of a variable name can't be
 - a number
2. Variable names can't contain 
  - mathematical or logical operator. `var x+next`
  - spaces.
   - special symbols. `var stu@`

#### Note
- JavaScript is a hyphen free zone. They’re reserved for subtractions.

# Image

![10. day22 lesson 3 comp.png](/day%2022/Images/10.%20day22%20lesson%203%20comp.png)

# Conclusion
- Printing to browser using document.write().
- storing data values using variables.
- do's and don'ts in using a variable.
- [practice program](https://www.sololearn.com/compiler-playground/W3lRX5TG8HtN).

# References [Sololearn ](https://www.sololearn.com/learning/1024)


# Author: Dheeraj.y
# Connect me:
- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)

