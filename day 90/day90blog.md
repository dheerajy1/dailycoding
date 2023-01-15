Today #Day90 of #100DaysOfCode, I decided to learn about ReactJS UI library as it will help me explore many possibilities aka importing libraries like python.

# What is React JS Library?

React is a JavaScript library for building user Interfaces.

React is a UI library, not a framework.

It's an open-source cross-platform and written in Javascript.

# What is Software Framework?

A software framework is a structure that you can use to build software.

Analogous to the template.

# Who developed React JS Library?

React was developed at Facebook in 2011.

# React JS

React is a <mark>frontend Javascript </mark> Library that helps to create user interfaces for web development like single page applications SPAs.

1. React uses redux for state management,
    
2. React uses hooks to handle component behavior and logic,
    
3. It also uses JSX to create HTML and CSS within JavaScript.
    

At the heart of React applications

1. components - a piece of the UI
    

Every React app has a root component and contains other child components. like a component tree.

# For Example:

Twitter UI has a

1. NavBar UI component and
    
2. profile UI component
    
3. Trends UI component
    
4. Feed UI component
    
5. Tweet UI component
    
6. Like UI component
    

We build these components in isolation and put them together to build complex UIs

# ReactJS Implementaition,

Implemented as a Javascript class with some state and render method()

## State

state is the data that gets displayed when the component is rendered

## Render method()

render component is responsible for describing the UI.

the output of this render is a react element which is a plain simple javascript object that maps to a DOM element in memory.

React keeps a light weight representation as Virtual DOM element in memory that is in sync with the real DOM elements browser.

# How React JS works

React js reacts to the state of the individual components changes and changes the DOM element to match that state.

Simply, ReactJs reacts to the state change and updates the DOM element.

---

Difference between code written in Traditional Plain JavaScript and ReactJS,

```xml
<div id="name">
</div>
```

```javascript
const name1 = document.getElementById('name')
name1.textContent = 'JavaScript'
```

In ReactJS,

```javascript
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
root.render(<HelloMessage name="Taylor" />);
```

# Usage case of reactjs

In ReactJS you can make small incremental changes to your application without breaking your entire application.

Reactjs is like a JS function with props parameter inside paranthesis

and the return statement is a HTML

```javascript
function Item(props){
return <p> {props.text}</p>
}
```

```javascript
<Item text="hi" />
```

To give our component its own internal state, we use the state hook,

```javascript
import {useState} from 'react'
```

hook is just a function that returns a value and a function to change the value,

```javascript
function Item(props){
const [count,setCount] = useState(0)
return <>

 <p> {count}</p>
 <button
    onClick = { () => setCount(count+1)
 >
}
```

count = read (reactive state), setCount(will change the state)= write

React supports these libraries

1. static sites - Gatsby
    
2. server-side rendering - next.js
    
3. animation - spring
    
4. forms - formik
    
5. state management - redux, mobx, flux, recoil, xstate
    

React native - mobile development.

# Do You Know Enough JavaScript To Learn ReactJS?

## i. JavaScript Basics

1. scoping - var has function scope, let and const block scope.
    
2. Callbacks
    
3. passing functions to other functions
    

## ii. Reference vs Value

objects and arrays are handled as object references and strings and numbers and booleans are primitive data types or values.

## iii. short-circuiting

\== sign and === sign (strict comparison)

advanced logic - && ,ANDs, ORs,

## iv. Array methods

map, filter etc

Immutability

## v. Asynchronous code

promises,

the concept of modules,

import and export - default export and named export {}

## vi. ES6 concepts

template string, destructuring, spread operator etc

# Coding in React.JS

create index.js and app.js files in your project directory,

In the index.js file,

Now, In app.js

**Creating and nesting components**

React apps are components. A component is a part of the UI that has its logic and appearance. A component can be as small as a button, or as large as an entire page.

React components are JavaScript functions that return markup:

```javascript
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Now that you’ve declared `MyButton`, you can nest it into another component:

```javascript
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

Keep in mind that the word "MyButton" begins with a capital letter.

You may identify it as a React component by doing so.

HTML tags must begin with a lowercase letter, however, React component names must always begin with a capital letter.

# Conclusion

Learned a bit about ReactJS and its existence and how ReactJS implementation works and got familiar with react.JSX syntax.

Code:

1. code
    
    ![Alt text](1.%20day90%20code.png)
    

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)