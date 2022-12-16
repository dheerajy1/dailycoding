Today #Day60 of #100DaysOfCode, I am Building a random background color generator.

I pre-designed what I am going to build as shown below,

![Alt text](backkgroundcolorgen%20design.png)

So, yesterday Day59 I generated random values and random letters from the two arrays, Now Today's Let's try to complete HTML, CSS, remaining JavaScipt code.

# HTML

Let's define a button,

```xml
<button>click</button>
```

# JavaScript

Let's try to define a position variable object arrow function that will be called for every single digit of the X code so that you will get a random letter or number,

```javascript
let positions = ()=>{
    const keyGen = Math.floor(Math.random() * arrayshold.size + 1)
    const randomarray = arrayshold.get(keyGen)
    
    let arrlen
    if (keyGen === 1) arrlen = values.length
    else arrlen = letters.length
    
    const arrindGen = Math.floor(Math.random() * arrlen)
    
    pos = randomarray[arrindGen]
    return pos
}
console.log(`${positions()}`)
```

It worked, test case Image is shown below

![Alt text](1.%20day60%20test%20case%201.png)

![Alt text](2.%20day60%20test%20case%202.png)

After that, let's grab the button using queryselector

```javascript
const button = document.querySelector('button')
```

Then, let's define an add event listener which will listen for the click and change the background of the document,

```javascript
button.addEventListener('click',()=>{
})
```

Now, Let's define a hexcode const variable to store these randomly generated numbers and letters and call the positions() functions,

Lets print it to console to test,

```javascript
button.addEventListener('click',()=>{
    const hexcode = `#${positions()}`
    console.log(hexcode)
})
```

yes, it prints random values and letters as shown below,

![Alt text](3.%20day60%20test%20case%203.png)

Now, Let's call the positions() function 6 times and store the hexcode,

```javascript
const hexcode =
`#${positions()}${positions()}${positions()}${positions()}${positions()}${positions()}`
```

Yes, It's working as shown below,\[ I manually input the hex code to the value for the background color property inside the body selector\]

![Alt text](4.%20day60%20testcase%204.png)

Now, Let's assign the hex code variable to the body object inside the addeventlistener function,

```javascript
document.body.style.backgroundColor = hexcode
```

At last, The code I wrote is working as shown below,

![Alt text](5.%20day60%20testcase%205.png)

![Alt text](6.%20day60%20testcase%206.png)

# HTML

Let's define a div with a class with a paragraph tag and span tag,

```xml
<div class="BGcontent">
    <p> BackgroundColor :
        <span class="hexcode">
            #ffffff
        </span>
    </p>
</div>
```

# JavaScript

Let's Export the hex code value to the span with the class name hex code,

```javascript
const hexexport = document.querySelector('.hexcode')
```

Now, assign the variable hexcode value inside the event listener, So display the background color in hex code.

```javascript
hexexport.innerHTML = hexcode
```

## Finally,

You can assign this hexcode to style the color of the text as shown below,

```javascript
hexexport.style.color = hexcode
```

# CSS

Let's add Styling and center the button,

Define the property display, justify-content center,

```css
div.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Finally,

Let's add styling to the button

change the font size and font type keyway border radius,

change the width and height of the button,

```css
button {
  font: 1.5em sans-serif;
  border-radius: 12px;
  outline: none;
  box-shadow: 0 1px 10px #2c2a2a;
  background-color: #cf4e4e;
  transition: 0.6s ease;
  width: 17.5em;
  height: 2.7em;
}
```

# Conclusion

Finally, I completed Coding the Background Color generator in HTML, CSS, and JavaScript.

1.  addEventListener()
    
2.  JS template literals
    
3.  JS style.backgroundColor property
    
4.  CSS display flex
    
5.  CSS display grid
    
6.  CSS picking child elements
    

# Code

1.  Background Color generator Code
    
    ![Alt text](7.%20day60%20final%20code.png)
    
2.  Background Color generator
    
    ![Alt text](8.%20day60%20Final%20preview.png)
    

# EndNote

Today, I completed coding 60 Days of #100DaysOfCode. Built 11 projects in 60 Days out of which 90% are my own code and Ideas.

Accomplishments:

✅ Day1 to Day11 : 1) Built My own project website idea from scratch.


✅ Day12 and Day13 : 2) JavaScript Countdown timer project


✅ Day14 and Day15 : 3) CSS gradient bar project


✅ Day16 and Day17 : 4) CSS 6 cards project


✅ Day18 : 5) Adding contents and styling my website resume


✅ Day19 and Day20 : 6) CSS hover me transition project


✅ Day21 to Day50 : 7) JavaScript course @Sololearn (Completed)


✅ Day51 to Day55 :  8) Built Rock Paper Scissors in JavaScript taught by @ania\_kubow.


✅ Day56 to Day57 : 9) Building Advanced Rock Paper Scissors in JavaScript taught by \[WebDevSimplified\]


✅ Day58 : 10) Built a Mini Project to create a div after another div using JS, and CSS visually.


✅ Day 59 to Day 60 : 11) Built Random Background color Generator.
    

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)