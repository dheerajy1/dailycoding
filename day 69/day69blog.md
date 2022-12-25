Today #Day69 of #100DaysOfCode, I am learning JavaScript Closures and tricky interview questions on closure.

# What is a closure?

A closure gives you access to an outer function's scope from an inner function.

Imagine two functions,

```javascript
function outer() {
  function inner() {}
}
```

You can see the following code, where the ispet function has access to the name parameter which lexicalscope,

```javascript
function livingthing(name) {
  //const name = 'lion'
  //const name = 'cat'
  function isbites() {
    if (name === "lion") console.log(`yes! ${name} bites`);
    else console.log(`No!${name} doesn't bites`);
  }
  function ispet() {
    if (name === "lion") console.log(`you cannot pet a ${name}`);
    else console.log(`you can pet a ${name}`);
  }
  isbites();
  ispet();
}
livingthing("lion");
livingthing("cat");
```

Now, Let's call the two inner functions dynamically,

```javascript
function livingthing(name) {
  //const name = 'lion'
  //const name = 'cat'
  function isbites() {
    if (name === "lion") console.log(`yes! ${name} bites`);
    else console.log(`No!${name} doesn't bites`);
  }
  function ispet() {
    if (name === "lion") console.log(`you cannot pet a ${name}`);
    else console.log(`you can pet a ${name}`);
  }
  return {
    isbites,
    ispet,
  };
}
livingthing("lion").isbites();
livingthing("cat").ispet();
```

Take away: closures remember the outer function scope even after the creation time.

JS stores a closure in heap memory instead of a traditional non closure in stack memory.

Call stack is short lived, where is heap memory is long lived.

## Code: Closures[\[Link\]](https://www.sololearn.com/compiler-playground/WTLn9l67OWZK)

# Now, Interview question,

## Using the var keyword

```javascript
console.log(`--------------`);
var j;

for (var i = 0; i < 3; i++) {
  console.log(i, `hi`);
  j = 0;
  function log() {
    console.log(i, `bye`, (j = j + 1));
  }

  setTimeout(log, 1000);
}
console.log(`--------------`, i, j);
```

closure function is pointing to the same memory location of the variable I hence after the set timer one second is pointing to the location of the eye which value has been modified to 3 hence you will get 3 in the output.

### Code: Interviewquesvarclosure [\[Link\]](https://www.sololearn.com/compiler-playground/WUBeuLNsqAb4)

## Now, using the let keyword

```javascript
console.log(`--------------`);
let j = 0;

for (let i = 0; i < 3; i++) {
  console.log(i, `hi`);

  const log = () => {
    console.log(i, `bye`, (j = j + 1));
  };
  setTimeout(log, 1000);
}
console.log(`--------------`, j);
```

whereas the I variable declared using the let keyword will assign new memory locations for every iteration hence the closure will be pointing to that assigned new memory allocation for each iteration hence the output will be the value of the variable I in that allocated memory when the set timer time has.

### Code: Interviewquesletclosure [\[link\]](https://www.sololearn.com/compiler-playground/WM1lkQ6tM0w0)

# Conclusion

Learned about closures in JS and understood an interview question on JS closures with var and let variable declaration.

# Code:

1. code

   ![Alt text](1.%20day69%20code.png)

# Source: ColorCode [\[Link1\]](https://www.youtube.com/watch?v=aHrvi2zTlaU) [\[Link2\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) , Akshay Saini [\[Link\]](https://www.youtube.com/watch?v=eBTBG4nda2A)

# Author: Dheeraj.y

# Connect with me:

- [My Twitter](https://twitter.com/yssdheeraj)
- [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
- [My GitHub](https://github.com/dheerajy1)
- [My Hashnode](https://dheerajy1.hashnode.dev/)
