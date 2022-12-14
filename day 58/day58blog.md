Today #Day58 of #100DaysOfCode, I Built a Mini Project to create a div after another div.

# I. HTML

Create a button, create a container and inside this container create boxes using the div element

```xml
  <button>
        Add Div
    </button>
<br></br>
<div class="container">
    <div class="box1">
        1
    </div>
    <div class="box2">
        2
    </div>
</div>
```

# II. CSS

I did not take any CSS course, hence I approach the Front-end development part on a problem basis, i.e I do research and apply the fix till I get the desired result.

```css
* {
  background-color: rgb(255, 255, 255);
}
div:has(button) {
  display: flex;
  justify-content: center;
  margin-top: 15%;
}
button {
  border-radius: 13px;
  background-color: rgba(0, 0, 0, 0.959);
  color: #ffffff;
  width: 6em;
  height: 3em;
  transition: 0.8s ease;
  box-shadow: 0 5px 20px #a4a1a1;
}
.main{
display: flex;
justify-content: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 0.9fr);
  background-color: rgb(255, 255, 255);
 /* float: left; */
  /* margin-left: 45%;
  margin-right: 30%; */
  width: 10em;
  border-radius: 15px;
  transition: 0.6s ease;
  box-shadow: 0 5px 20px #ccc;
}
.box1 {
  background-color: #57f0bba4;
  width: 3em;
  height: 3em;
  text-align: center;
  vertical-align: middle;
  line-height: 3em;
  border-radius: 9px;
  transition: 0.6s ease;
  box-shadow: 0 5px 20px #ccc;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
}
.box2 {
  background-color: #e7a48c8a;
  width: 3em;
  height: 3em;
  text-align: center;
  vertical-align: middle;
  line-height: 3em;
  border-radius: 9px;
  transition: 0.6s ease;
  box-shadow: 0 5px 20px #ccc;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
}
.box3 {
  width: 3em;
  height: 3em;
  text-align: center;
  vertical-align: middle;
  line-height: 3em;
  border-radius: 9px;
  transition: 0.6s ease;
  box-shadow: 0 5px 20px #ccc;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
}
```

# III. JavaScript

1. Let's write a JavaScript

1. Create a button first by picking the button from the HTML element using the query selector,

1. Pick the box 2 class using the query selector from the document HTML and assign to variable box 2,

1. Define an array that holds colors,

1. Now let's add an event listener to this button on the click it should execute a function and define a function using the arrow function,

1. Create an element div when assigned to the constant variable div,

1. Now assign the box 3 class to this dev so that it will inherit the width and properties and all from box 3 to this div element on clicking the button,

1. Now to add the content use the inner text property to this div,

1. Now to differentiate these days add style background color by picking from the array of colors that I have defined earlier

1. Now the main important decision is where to place this div, if you place it after box 1, box 2 will go to the bottom upon insertion of the new box so we need to insert it after box 2,

```javascript

const button = document.querySelector('button')
const box2 = document.querySelector('.box2')
let i = 3
const color = ['#57f06475', '#73a51c72', '#d3a63572', '#d335c067']

button.addEventListener('click', () => {
    const div = document.createElement('div')
    //classname = `box${i++}`
    div.classList.add('box3') //gave to inherit width and height
    div.innerText = i++
    div.style.backgroundColor = color[Math.floor(Math.random() * color.length)]
    button.style.transform = `scale(0.8)`
    box2.after(div)
    check(i)
})
let check = (i) => {
    if (i > 10) {
        alert('Exceded click ok! To Initiate Reset.')
        setTimeout(() => { window.location.reload() }, 10)
    }
}
```

# IV. Problem

### Problem - 1

There is a problem where the add event listener is receiving the button with a null value,

Place the script tag about the ending body tag in the HTML document.

```javascript
    <script src="/app.js"></script>
</body>
```

### Problem - 2

There is an issue where the boxes inside the container are not having margins,

Give margins on the top, bottom and left,

```javascript
margin-top: 1em;
margin-bottom: 1em;
margin-left: 1em;
```

### Problem - 4

A problem occurred where the container div is not responsive to the window,

so I placed the container div inside a div and then give display properties to the main dev,

```javascript
.main{
display: flex;
justify-content: center;
}
```

### Problem - 5

There is an issue where the button is not centered,

So I created additive wrapped the button inside this dev and in the CSI have used t has the pseudo property to select this Deb because I have not given the class,

```javascript
div:has(button) {
  display: flex;
  justify-content: center;
  margin-top: 15%;
}
```

# Conclusion

I Explained visually the Creation and Insertion of div elements dynamically after a particular div element using JavaScript and wrote CSS to make sure it stays centered to make it responsive to the view window.

1.  CSS has() Psuedo selector
    
2.  CSS Flex, Grid Property
    
3.  JS querySelector method
    
4.  JS addEventListener method
    
5.  JS classList property
    
6.  JS setTimeout
    
7.  JS alert
    

# Code

1.  Code
    
    ![Alt text](1.%20day58%20code.png)
    
2.  Front-end \[View Window Desktop\]
    
    ![Alt text](3.%20day58%20Front-End.png)
    
3.  Front-end \[View Window Mobile-Simulated\]

    ![Alt text](5.%20day58%20Front-End%20View%20mobile%20simulated.png)
    
    

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)