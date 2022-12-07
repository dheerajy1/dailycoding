Today #day51 of #100daysofcode, I am coding and explaining 'Rock Paper Scissors' code project in JavaScript taught by @ania\_kubow.

# 1\. HTML

1.  Give `!` and press tab and give title name to get the following code,
    
    ```xml
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Rock Paper Scissors</title>
    </head>
    <body> 
      
    </body>
    </html>
    ```
    
2.  Add the app.js above the body tag at the bottom,
    
    ```xml
        <script src="/app.js"></script>
    ```
    
3.  Give h2 tag and span with an id as shown below
    
    ```xml
    <h2>Computer Choice:<span id="computer-choice"></span></h2>
    ```
    
4.  create a button with an ID as shown below
    
    ```xml
    <button id="rock">Rock</button>
    ```
    

# 2\. JavaScript

let's create a logic where you click rock button, it will be imported to the ID user choice,

5.  Use document object & get element by ID() method selector to pick elements with the ID,
    
    ```javascript
    const computerChoice =  document.getElementById('computer-choice')
    const userchoice =  document.getElementById('user-choice')
    const resultDisplay = document.getElementById('result')
    ```
    
6.  Use document object querySelectorAll() method select to pick all button's
    
    ```javascript
    const possibleChoices = document.querySelectorAll('button')
    ```
    

## i. JS forEach() Method

```javascript
let y, a = [1, 2, 3, 4, 5]
a.forEach(
    (x) => {
        if (x === 1) {
            y = x
        }
    }
)
console.log(y)
```

### Explanation:

1.  the above code inserts each value of the array `a` into the parameter `x` of an arrow function and checks if the parameter is equal to one and then assign's it to the variable y.
    

Code: foreach()method [\[click\]](https://www.sololearn.com/compiler-playground/WkBZyIb62CUw)

## ii. JS addEventListener

```javascript
<button> click </button>
let but = document.getElementsByTagName('button')[0]
but.addEventListener('click',()=>{document.write("hello")})
```

### Explanation

1.  in the above code to the first button of index zero, add event listener method is added, when this button is clicked it'll export the 'hello' string.
    

### Code: addeventlistner [\[click\]](https://www.sololearn.com/compiler-playground/WUAH7rY1G7T4)

Now,

### iii. forEach() method & addEventListener() method

Let combine the forEach() method and addEventListener() method

```javascript
let but = document.getElementsByTagName('button');
// Convert the NodeList to an array so we can use the forEach method
but = Array.from(but);
but.forEach(x => x.addEventListener('click',()=>{document.write("hello")}));
```

### Explanation:

1.  Got Error: but.forEach is not a function. But for @ania\_kubow it worked well.
    
2.  Fixed Error: The problem with the original code is that the `getElementsByTagName` method returns a `NodeList`, which is not an array and does not have the `forEach` method. To fix this, we can use the `Array.from` method to convert the `NodeList` to an array, which does have the `forEach` method. Then we can use the `forEach` method to attach the event listener to each button.
    

### iv. Target Event property

```javascript
but[0].addEventListener('click',(e)=>document.write(e.target.tagName))
```

### Explanation

1.  The target property returns the element that triggered the event, and not necessarily the eventlistener's element.
    
2.  The target can be `id` , `tagName` , `nodeName` .
    

### Code: addeventlistner [\[click\]](https://www.sololearn.com/compiler-playground/WUAH7rY1G7T4)

7.  To each button using forEach method and add event listener method
    
    ```javascript
    possibleChoices.forEach(x => x.addEventListener('click',(e)=>{
        userchoice = e.target.id
        userChoiceDisplay.innerHTML = userchoice
    }))
    ```
    
    In the above code for each button when a click is registered its ID is stored in user choice variable and then this ID is assigned to user choice display variable and it's displayed in the HTML document using the property inner HTML.
    

# Conclusion

1.  JS forEach() Method
    
2.  JS addEventListener
    
3.  forEach() method & addEventListener() method
    
4.  Target Event property
    

# Code

1.  Rock Paper Scissor Code
    
    ![dheerajy1/dailycoding/day 51/1. day51 code rock paper scissor.png]()
    

# Source: Code with Ania kubow [\[click\]](https://www.youtube.com/watch?v=RwFeg0cEZvQ)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)