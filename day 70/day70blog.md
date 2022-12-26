Today #Day70 of #100DaysOfCode, I am Learning more about closures in depth in JavaScript.

# What is closure in JS?

Closure in JavaScript is a function along with its reference to its outer environment together forms a closure.

In other words, closure is a function along with its lexical environment which is bundled together.

A closure has access to its lexical environment variables even though it is called in another function scope. That is a closure still has access to its parent environment variables.

## Example

```javascript
function outer(x) {
  function inner() {
    console.log(x);
  }
  function greet() {
    console.log(`hi`);
  }
  return {
    inner,
    greet,
  };
}
outer(8).inner();
```

Note

the declaration of X is after the inner function inside the outer function then also the closure will work because the closer definition is the closer function has access the entire lexical scope environment of the outer function.

## Relation of scope chain and closures

```javascript
function outtest() {
  function outer() {
    function inner(x) {
      console.log(x);
    }
    function greet(t) {
      console.log(t);
    }
    return {
      inner,
      greet,
    };
  }
  function y() {}
  return {
    outer,
    y,
  };
}
outtest().outer().inner(9);
outtest().outer().greet("bye");
```

## Conflicting global name variables in JS

```javascript
function outtest() {
  function outer() {
    function inner(x) {
      x = 14;
      console.log(x);
    }
    function greet(t) {
      console.log(t);
    }
    return {
      inner,
      greet,
    };
  }
  function y() {}
  return {
    outer,
    y,
  };
}
let x = 60;
outtest().outer().inner();
outtest().outer().greet("bye");
```

closure function finds the variable and its nearest lexical environment if the variable value is not present in the nearest lexical environment then it will find and it will go deep into the hierarchy to the other lexical environmental scopes,

## Advantages of closure

JS closures are used in module patterns.

closures are used in function currying

closures are used in higher-order functions

JS closures help in data hiding and data encapsulating

## Data hiding and Data encapsulating

data hiding and data encapsulating is a method in which we prevent the other functions in the other parts of the program to prevent using data of another important function

```javascript
function trainpassengers() {
  var noofpassengeres = 0;
  function passengercounter() {
    noofpassengeres++;
  }
}
```

Tip: variables declared with var keyword are function scope.

Now, to call the function,

```javascript
function trainpassengers() {
  var noofpassengeres = 0;
  return function passengercounter() {
    noofpassengeres++;
    console.log(noofpassengeres);
  };
}
const trainpasstc = trainpassengers();
trainpasstc();
trainpasstc();
```

Now, declaring another variable and assign to the main train passengers function to this variable,

```javascript
function trainpassengers() {
  var noofpassengeres = 0;
  return function passengercounter() {
    noofpassengeres++;
    console.log(noofpassengeres);
  };
}
const trainpasstc = trainpassengers();
trainpasstc();
trainpasstc();
const trainpasstc2 = trainpassengers();
trainpasstc2();
```

Note

In the above code, we created a new duplicate of the main tracing train passengers function and we have assigned it to another variable.

## Function constructer

But to make it scalable, we new function constructer

instead of returning, we use this keyword,

```javascript
function trainpassengers() {
  var noofpassengeres = 0;
  this.boardingpassengercounter = function () {
    noofpassengeres++;
    console.log(noofpassengeres);
  };
  this.exitpassengercounter = function () {
    noofpassengeres--;
    console.log(noofpassengeres);
  };
}
const trainpasstc = new trainpassengers();
trainpasstc.boardingpassengercounter();

trainpasstc.exitpassengercounter();
trainpasstc.exitpassengercounter();
```

## The disadvantage of JS closures

overconsumption of memory

the variables in the lexical scope environment are not garbage collected hence there will be a lot of memory Waste.

Resulting in memory leaks and will also freeze the browsers.

## What is a garbage collector what does it do in a program?

Freezes the unutilized memory.

JavaScript freezers and de-allocates the memory allotted to the unused variables in a program.

## What is the relation between the garbage Collector and JS closures?

```javascript
function a() {
  var x = 0;
  this.b = function () {
    console.log(x);
  };
}
var y = new a();
y.b();
```

in the above example, we cannot freeze the studies we cannot deallocate the X variable from the memory because it has formed a closure with the function VB which is assigned to the variable y which can also be called later.

Chrome and V8 JS engine have smart garbage collectors, when the browser finds a variable in the lexical scope environment of the closure function which is haven't been used then it will de-allocate that particular unused variable in the lexical scope environment of the closure function.

To view, to prove a certain variable has been garbage collected go to the console of the browser and type the console.log() for that variable then it will say uncaught reference error this variable has been garbage collected that is it is no longer present in the memory because it has been deallocated.

Code: Examplesclosure [\[Link\]](https://www.sololearn.com/compiler-playground/W4rx0fAqAe5c)

# Conclusion

I have completed learning and practicing closures with examples.

1. JS closures.
2. Relation of scope chain and closures
3. Conflicting global name variables in JS
4. Advantages of closure
5. Data hiding and Data encapsulating
6. Function constructer
7. The disadvantage of JS closures
8. What is a garbage collector what does it do in a program?
9. What is the relation between the garbage Collector and JS closures?

# Code:

1. code

   ![Alt text](1.%20day70%20code.png)

# Source: **Akshay Saini** [\[Link\]](https://youtu.be/t1nFAMws5FI)

# Author: Dheeraj.y

# Connect with me:

- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
