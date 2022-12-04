Today #day48 of #100daysofcode, I have completed 60.1 Lesson and 60.2 "Summary calculator" code practice problem in the JS course. @Sololearn

### ECMAScript 6

# Rest & Spread

## **ES6 Rest Parameters**

Before 6 if you wanted to pass a variable number of arguments, you could use the argument object, an array-like object to access the parameters using the \`index of()\` method.  
For example, the below function checks if an array contains all the arguments passed:

`arr.indexOf(num)` returns \`-1\` when the num is not present respective to the index.

```css
function containsAll(arr) { 
console.log(arguments[0]+'\n'); // to print the array x
 for (let k = 1; k < arguments.length; k++) { 
 let num = arguments[k]; 
 if (arr.indexOf(num) === -1) { 
 return false; 
 } 
 } 
 return true; 
} 
let x = [2, 4, 6, 7]; 
console.log(containsAll(x, 2, 4, 7)+'\n'); 
console.log(containsAll(x, 6, 4, 9));
```

We can pass any number of arguments to the function and access it using the **arguments** object.  
While this works, ES6 provides a more readable syntax for achieving a variable number of parameters through the use of a rest parameter:

```javascript
function containsAll(arr, ...nums) { 
 for (let num of nums) { 
 if (arr.indexOf(num) === -1) { 
 return false; 
 } 
 } 
 return true; 
}
```

The **...nums** parameter is called a **rest parameter**. It takes all the "extra" arguments passed to the function. The three dots (...) are called the **Spread operator**.

Note:

*   Only the last parameter of a function may be marked as a rest parameter. If there are no extra arguments, the rest parameter will simply be an empty array; the rest parameter will never be **undefined**.
    

## **The Spread Operator**

This operator is similar to the Rest Parameter, but it has another purpose when used in objects or arrays or function calls (arguments).

### **Spread in function calls**

It is common to pass the elements of an array as arguments to a function.

Before ES6, we used the following method:

```javascript
function myFunction(w, x, y, z) { 
 console.log(w + x + y + z); 
} 
var args = [1, 2, 3]; 
myFunction.apply(null, args.concat(4)); // concat adds 4 to the args array
```

args.concat(4) adds 4 to the args array.

ES6 provides an easy way to do the example above with **spread operators**

```javascript
const myFunction = (w, x, y, z) => { 
 console.log(w + x + y + z); 
}; 
let args = [1, 2, 3]; 
myFunction(...args, 4);
```

Example:

```javascript
var dateFields = [1970, 0, 1]; // 1 Jan 1970 
var date = new Date(...dateFields); 
console.log(date);
```

## **Spread in array literals**

Before ES6, we used the splice() method syntax to add an item at middle of an array:

In splice() method takes two parameters, the first one is the index position and the second is the remove indexes. second parameter = `0` will add elements.

```javascript
var arr = ["One", "Two", "Five"];
arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
arr.push('Five') // will add five
console.log(arr);
```

### Code: splice and push method [\[click\]](https://www.sololearn.com/compiler-playground/WvELSAm1dRM5)

You can use methods such as push, splice, and concat, for example, to achieve this in different positions of the array.

However, in ES6 the spread operator lets us do this more easily:

```javascript
let newnum = ['Three', 'Four']; 
let allnum = ['One', 'Two', ...newnum, 'Five']; 
console.log(allnum);
```

Simply use `...` called the spread operator followed ny the variable name.

## **Spread in object literals**

In objects it copies the own enumerable properties from the provided object onto a new object.

```javascript
const colours = { c1: 'red', c2: 'blue' };
const fruits = { f1: 'apple', f2: 'berry' };

const copyoffruits = { ...fruits };
const fruitsandcolors = { ...fruits, ...colours };
console.log(copyoffruits)
console.log(fruitsandcolors) //{f1: "apple", f2: "berry", c1: "red", c2: "blue"}
```

code: Spread operator in object code practice[\[click\]](https://www.sololearn.com/compiler-playground/Wre0tz4kZDr3)

However, if you try to merge them you will not get the result you expected:

```javascript
const obj1 = { foo: 'bar', x: 42 }; 
const obj2 = { foo: 'baz', y: 5 }; 
const merge = (...objects) => ({...objects}); 
 +    
let mergedObj = merge(obj1, obj2); 
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } } 
 
let mergedObj2 = merge({}, obj1, obj2); 
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
```

Shallow cloning or merging objects is possible with another operator called **Object.assign()**.

```javascript
let man = {name:'joey',height:6},
emp = {salary:500,designation:'cheiftwit'}
let dashboard = Object.assign({},man,emp)
console.log(dashboard) // {name: "joey", height: 6, salary: 500, designation: "cheiftwit"}
```

### code: Objectassign code practice [\[click\]](https://www.sololearn.com/compiler-playground/WPn0Q8HKP7N9)

# Images

1.  8.60 Lesson completed
    
    ![dheerajy1/dailycoding/day 48/Images/7. day48 8.60 completed.png](/day%2048/Images/7.%20day48%208.60%20completed.png)
    

# Conclusion

1.  Rest & Spread
    
2.  ES6 Rest Parameters
    
3.  The Spread Operator
    
4.  Spread in function calls
    
5.  Spread in array literals
    
6.  Spread in object literals

7. Quiz [[click](/day%2048/Images/)]

8. "Summary calculator" code
    

# My Code:

1.  splice and push method [\[click\]](https://www.sololearn.com/compiler-playground/WvELSAm1dRM5)
    
2.  code: Spread operator in object code practice[\[click\]](https://www.sololearn.com/compiler-playground/Wre0tz4kZDr3)
    
3.  code: Objectassign code practice [\[click\]](https://www.sololearn.com/compiler-playground/WPn0Q8HKP7N9)
    
4.  "Summary calculator" code
    
    ![dheerajy1/dailycoding/day 48/Images/1. day48 Summary calculator code.png](/day%2048/Images/1.%20day48%20Summary%20calculator%20code.png)
    

# References [Sololearn](https://www.sololearn.com/learning/1024)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)