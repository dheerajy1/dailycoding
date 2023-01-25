Today #Day100 of #100DaysOfCode, I am Learning 5 MORE Must Know JavaScript Features taught by WebDevSimplified.

# 1\. Block statements

You can declare const and let variables in curly brackets exclusively,

Useful in Switch statements,

declaring and wrapping in block statements/scope will prevent leaking variables.

```javascript
switch (a) {
  case 9: {
    const result = a * 2;
    console.log(result);
    break;
  }
  case 2: {
    const result = a * 2;
    console.log(result);
    break;
  }
  case 1: {
    const result = a + 2;
    console.log(result);
    break;
  }
}
```

# 2\. in Keyword

The in keyword can be used to determine whether a property is defined in an object.

```javascript
const person = {
    name: "Elon",
    age: 25,
}
if(person.name){
    console.log("Has truthy name value")
}
```

Now,

```javascript
const person = {
    name: "Elon",
    age: 25,
}
console.log(person.name,)
console.log(Object.entries(person))
console.log(Object.entries(person)[0])
console.log(Object.entries(person)[0][0])

if(person.name){
    console.log("Has truthy name value") //Has truthy name value
}
if("name" in person){
    console.log("Has name property") //Has name property
}
```

Now, delete name property,

```javascript
const person = {
    name: "Elon",
    age: 25,
}

if(person.name){
    console.log("Has truthy name value") //Has truthy name value
}
if("name" in person){
    console.log("Has name property") //Has name property
}

delete person.name
console.log(person.name,) // undefined
if("name" in person){
    console.log("Has name property") //
}
```

# 3\. Template Literal Functions

creating a function that takes tagged template literal function,

```javascript
function custom(){
    return "hi"
}

const firstName = "kyle"
const hobby = "weight lifting"
console.log(custom) // null
console.log(custom``) //hi
console.log(custom`My name is ${firstName} and I lve ${hobby}`) //hi
```

now,

```javascript
function custom(param){
    console.log(param) // (1) [""]4  // (3) ["My name is ", " and I lve ", ""] 4
    return "hi"
}

const firstName = "kyle"
const hobby = "weight lifting"
console.log(custom) // null 1
console.log(custom``) // hi 2
console.log(custom`My name is ${firstName} and I lve ${hobby}`)
// hi 3
```

```javascript
function custom(param,name,hobby){
    console.log(param,name,hobby,4) // (3) ["My name is ", " and I lve ", ""] "kyle" "weight lifting" 4
    return "hi"
}

const firstName = "kyle"
const hobby = "weight lifting"
// console.log(custom,1)
// console.log(custom``,2)
console.log(custom`My name is ${firstName} and I lve ${hobby}`,3) // hi 3
```

Use case,

using spread operator,

```javascript
function custom(param,...values){
    console.log(param,values,4)
    return "hi"
}

const firstName = "kyle"
const hobby = "weight lifting"
// console.log(custom,1)
// console.log(custom``,2)
console.log(custom`My name is ${firstName} and I lve ${hobby}`,3)
```

Now, using reduce method(),

```javascript
function custom(param,...values){
    return values.reduce((previousValue,currentValue,currentIndex)=>{
        return `${previousValue} ${currentValue} ${param[currentIndex+1]}`
    },param[0])
}
const firstName = "kyle"
const hobby = "weight lifting"
// console.log(custom,1)
// console.log(custom``,2)
console.log(custom`My name is ${firstName} and I love ${hobby}`,3)
```

Now, adding HTML markup,

```javascript
function bold(param,...values){
    return values.reduce((previousValue,currentValue,currentIndex)=>{
        return `${previousValue} <strong>${currentValue}</strong> ${param[currentIndex+1]}`
    },param[0])
}

const firstName = "kyle"
const hobby = "weight lifting"
// console.log(custom,1)
// console.log(custom``,2)
console.log(bold`My name is ${firstName} and I love ${hobby}`,3)
```

simplifying query selector using template literal function

```javascript
function queryAll(param,...values){
    const string = values.reduce((previousValue,currentValue,currentIndex)=>{
        return `${previousValue}${currentValue}${param[currentIndex+1]}`
    },param[0])
    return document.querySelectorAll(string)
}
const firstName = "kyle"
const hobby = "weight lifting"
console.log(queryAll`div`)
```

# 4\. Generator Functions

done is false until all code is executed i.e no yielding to be executed,

```javascript
function* generatorFunction() {
  console.log("Before 1");
  yield 1;
  console.log("After 1");
  console.log("Before 2");
  yield 2;
  console.log("After 2");
  console.log("Before 3");
  yield 3;
  console.log("After 3");
}

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```

Usage case,

```javascript
function* idGenerator() {
    let id = 1
 while (true){
    yield id
    id++
 }
}

const generator = idGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
```

# 5\. Dynamic Module Imports

add type module

```javascript
<script type="module" src="./5.DynamicModuleImports.js"></script>
```

print.js

```javascript
export default function printModule(){
    console.log(`This is in module`)
}
```

main.js

since it is a default export no need of {}

```javascript
import printModule from "./print.js"


console.log(`In the Main File`)
printModule()
```

Now,

dynamic import using import(),

using await

```javascript
if (true) {
  let obj = await import("./print.js");
  console.log(obj.default(), 1);
}
console.log(`In the Main File`, 2);
```

using then()

kyle destructured the object as the key is the default export and value is the function printModule, as promise returns an object,

```javascript
if (true) {
  import("./print.js").then(({default:printModule})=>{
    //result.default()
    printModule()
  })
}
console.log(`In the Main File`, 2);
```

you can add event listener and import when a click is registered,

use case: when a huge code is to be executed only when required rather than importing at top of code execution,

```javascript
document.addEventListener('click',() => {
  import("./print.js").then(({ default: printModule }) => {
    //result.default()
    printModule();
  });
});
console.log(`In the Main File`, 2);
```

using async,

```javascript
document.addEventListener('click',async () => {
    const { default: printModule } = await import("./print.js")
      printModule();
  });
  console.log(`In the Main File`, 2);
```

# Conclusion

I Learned about declaring variables in Block statements and property existence using in Keyword and Template Literal Functions usage in simplifying code and Generator Functions and Dynamic Module Importing based on conditions and obj destruct.

# Code

1. code
    
    ![Alt text](1.%20day100%20code.png)
    

# Source: WebDevSimplified [\[Link\]](https://www.youtube.com/watch?v=WIP1czLm3CY)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)