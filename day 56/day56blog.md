Today #Day56 of #100DaysOfCode, I am coding and explaining the 'Rock Paper Scissors' code game project in JavaScript taught by @WebDevSimplified

# HTML

1.  let's create a div to hold three buttons,
    
    ```xml
    <div class="selections">
            <button class="selection">✊</button>
            <button class="selection">🖐</button>
            <button class="selection">✌️</button>
    </div>
    ```
    
2.  let's create a results div to hold the results section and a chid div to display you and a span child to hold the score,
    
    ```xml
    <div class="results">
    <div>
    You
    <span class="result-score">0</span>
    </div>
    <div>
    Computer
    <span class="result-score">0</span>
    </div>
    ```
    

3.  Let's create a javascript file and use defer to load after our html page has loaded
    
    ```javascript
    <script src="/script.js" defer></script>
    ```
    

# CSS

4.  Let's center these selections div
    
    ```css
    .selections{
        display: flex;
        justify-content: center;
    }
    ```
    
5.  Let's Get rid of the buttons border and outline
    
    ```css
    .selection{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 2em;
    }
    ```
    
6.  Let's add a hover effect to these buttons and grow when hovered,
    
    ```css
    .selection:hover{
        transform: scale(1.1);
    }
    ```
    
7.  Let's center the results div
    
    ```css
    .results{
        margin-top: 1rem;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        align-items: center;
    }
    ```
    
8.  Now, Let's Work on result-score section and make it smaller,
    
    ```css
    .result-score{
        margin-left: .1rem;
        font-size: .5rem;
        color: #333;
    }
    ```
    
9.  Then, Let's create a results selection div and in CSS differentiate between the winner and lost using opacity, but for now, comment it out because we will create these elements dynamically when a user makes a selection,
    
    *Tip: Use* `Ctrl+/` *to comment out multiple lines after selection.*
    
    ```css
    .result-selection{
        opacity: .5;
    }
    .result-selection.winner{
        opacity: 1;
        font-size: 1.5rem;
    }
    ```
    

# JavaScript

Lets Move on to JS,

10.  Before we move on, Lets add data arrtbute to buttons in HTML,
    
    ```xml
    <button class="selection" data-selection="rock">✊</button>
    <button class="selection"data-selection="paper">🖐</button>
    <button class="selection"data-selection="scissor">✌️</button>
    ```
    
11.  After that, Let's create a selection buttons const variable and pick all the data selection attributes using query selector,
    
    ```javascript
    const selectionButtons = document.querySelectorAll('[data-selection]')
    ```
    
12.  Next, let's add an add event listener for each button and access our data attribute given to the element in JS using dataset object and keyname property here the keyname is selection
    
    ```javascript
    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', (e) => {
            const selectionName = selectionButton.dataset.selection
            makeSelection(selectionName)
        })
    });
    ```
    
13.  Now, Lets Create a makeSelection function and call it the above code to append it to click and write console log to check whether it is working or not
    
    ```javascript
    function makeSelection(selection) {
       console.log(`You Clicked ${selection}`)
    }
    ```
    

Completed HTML and CSS coding and explaining Half way Through 'Rock Paper Scissors' code game project in JavaScript taught by @WebDevSimplified.

# Conclusion

1.  HTML Span Tag
    
2.  CSS Display Flex
    
3.  CSS Hover
    
4.  CSS Display Grid
    
5.  HTML Data attribute
    
6.  JS querySelector
    
7.  Array forEach
    
8.  addEventListener method
    

# Code

1.  Code
    
    ![dheerajy1/dailycoding/day 56/1. day56 code.png]()
    
2.  Image
    
    ![dheerajy1/dailycoding/day 56/2. day56 image.png]()
    

# Source: Code with WebDevSimplified [\[click\]](https://youtu.be/1yS-JV4fWqY)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)