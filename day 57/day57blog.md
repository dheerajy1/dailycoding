Today #Day57 of #100DaysOfCode, Completed coding and explaining the 'Rock Paper Scissors' code game project in JavaScript taught by [\[WebDevSimplified\]](https://www.youtube.com/@WebDevSimplified)

Note:

If You have followed my previous then use the 'Take Shortcut here' heading to continue,

# HTML

1.  let's create a div to hold three buttons,
    
    ```xml
    <div class="selections">
            <button class="selection">✊</button>
            <button class="selection">🖐</button>
            <button class="selection">✌️</button>
    </div>
    ```
    
2.  let's create a results div to hold the results section and a chid div to display you and span child to hold score,
    
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

Let's Move on to JS,

10.  Before we move on, Let's add data attribute to buttons in HTML,
    
    
    <button class="selection" data-selection="rock">✊</button>
    <button class="selection"data-selection="paper">🖐</button>
    <button class="selection"data-selection="scissor">✌️</button>
    
    

11.  After that, Let's create a selection buttons const variable and pick all the data selection attributes using query selector,
    
    
    const selectionButtons = document.querySelectorAll('[data-selection]')
    
    

12.  Next, let's add an add event listener for each button and access our data attribute given to the element in JS using dataset object and keyname property here the keyname is selection
    
    
    selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', (e) => {
            const selectionName = selectionButton.dataset.selection
            makeSelection(selectionName)
        })
    });
    
    

13.  Now, Let's Create a makeSelection function and call it the above code to append it to click and write console log to check whether it is working or not
    
    
    function makeSelection(selection) {
      console.log(`You Clicked ${selection}`)
    }
    
    

# Take Shortcut here,

14.  Now, let's Define an array,
    
    
    const SELECTION = [
        {
            name: 'rock',
            emoji: '✊',
            beats: 'scissor'
        },
        {
            name: 'paper',
            emoji: '🖐',
            beats: 'rock'
        },
        {
            name: 'scissor',
            emoji: '✌️',
            beats: 'paper'
        }
    ]
    
    

# Array find() Method


let x = [1,2,3,4,5]

console.log(x.find((num)=>num == 7)) //null
console.log(x.find((num)=>num == 6)) //null
console.log(x.find((num)=>num == 5)) // 5


## Code: Array find() Method [\[click\]](https://www.sololearn.com/compiler-playground/WoAuwNHqURO0)

15.  Then, Let's find the dataset key name in selection array using the array find a method,
    
    
    const selection =  SELECTION.find(selection => selection.name == selectionName)
    
    
16.  Next, Let's define computer selection,
    
    
    function randomSelection(){
        const randomIndex = Math.floor(Math.random() * SELECTION.length)
        return SELECTION[randomIndex]
    }
    
    

## Function return


let x = ['a','b','c','d','e']
let str = (num,str)=>{
    return x[num] === str
}
console.log(str(0,'g')) //false
console.log(str(0,'a')) //true


## Code: functionreturn [\[click\]](https://www.sololearn.com/compiler-playground/WvEj4Qf37K3h)

17.  After that, let's decide who the winner is based on the selection, the below code will return only true or false as I have demonstrated in the above link.
    
    
    function isWinner(selection,opponentSelection){
        return selection.beats === opponentSelection.name
    }
    
    
18.  Then, let's pass the selection and computer selection
    
    
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection,selection)
    
    
19.  Now, let's define a function addselectionResult to display in HTML,
    
    
    function addselectionResult(selection,winner){
    }
    
    

20.  Then, let's call this addselectionResult function inside makeSelection function,
    
    
    addselectionResult(computerSelection,computerWinner)
    addselectionResult(selection,yourWinner)
    
    
21.  Then, add the following data attribute to computer div,
    
    
    <div data-final-column>
     Computer
     <span class="result-score">0</span>]
    </div>
    
    
22.  After that, define a const variable to hold this data attribute
    
    
    const finslColumn = document.querySelectorAll('[data-final-column]')
    
    
23.  Now, add a div,
    
    
    function addselectionResult(selection,winner){
    finalColumn.after(div)
    }
    
    

## Understanding creating elements after a grid div element in JS

I will explain tomorrow how I visually want to explain what @WebDevSimplified said in his video at [\[click\]](https://youtu.be/1yS-JV4fWqY?t=1138), for now, I am adding only JavaScript Code that I wrote now,


const button = document.querySelector('button')
const box1 = document.querySelector('.box2')
let i = 2
const color = ['#A555EC','#460C68','#F8F988','#FB2576']

button.addEventListener('click',()=>{
const div = document.createElement('div')
//classname = `box${i++}`
div.classList.add('box1')
div.innerText=i++
div.style.backgroundColor = color[Math.floor(Math.random() * color.length)]

box1.after(div)
}


## Code: createdivafter [\[click\]](https://www.sololearn.com/compiler-playground/W1cQ5oh4MGq5)

24.  Then, Let's create a div like the one which we commented in HTML,
    
    
    const div = document.createElement('div')
        div.innerText = selection.emoji
        div.classList.add('result-selection')
        if(winner) div.classList.add('winner')
    finalColumn.after(div)
    
    
25.  Now, Let's add score,
    
    
    [<span class="result-score" data-your-score>0</span>]
    
    
26.  After that, Let's create a const variable to hold these data attributes,
    
    
    const computerScorespan = document.querySelector('[data-your-score]')
    const yourScorespan = document.querySelector('[data-computer-score]')
    
    
27.  Now, Let's create a function to incrementScore,
    
    
    function incrementScore(ScoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText)+1
    }
    
    

## Writing My Own Code,

28.  Then, I added my own logic here instead of following what kyle @webdev did,
    

Since I am checking the winner when addselectionResult function is called, so I inserted computerScorespan argument and send it to addselectionResult function,

```javascript
if (winner){
        div.classList.add('winner')
        incrementScore(scoreSpan)
}
```

# Adding a feature to the Rock Paper Scissor Game,

1.  The Scores should be capped at 5, and should display the user lost or won and then reload,
    

```javascript

function scoreCheck(){
    if(yourScorespan.innerText >=5 || computerScorespan.innerText >=5 ){
    console.log(yourScorespan.innerText,computerScorespan.innerText)

        if(yourScorespan.innerText > computerScorespan.innerText){
            alert(`Yay! You Won`)
            window.location.reload()
        }
        else{
            alert(`Sorry, You lost`)
            window.location.reload()
        }
    }
}
```

# Finally,

Completed coding and explaining the 'Rock Paper Scissors' code game project in JavaScript taught by [\[WebDevSimplified\]](https://www.youtube.com/@WebDevSimplified). Thanks, Kyle.

# Conclusion

1.  HTML Span Tag
    
2.  CSS Display Flex
    
3.  CSS Hover
    
4.  CSS Display Grid
    
5.  HTML Data attribute
    
6.  JS querySelector
    
7.  Array forEach
    
8.  addEventListener method
    
9.  Array find() Method
    
10.  Understanding creating elements after a grid div element in JS and
    
11.  Finally, a lot of Function Calls
    

# Code

1.  Code: Array find() Method [\[click\]](https://www.sololearn.com/compiler-playground/WoAuwNHqURO0)
    
2.  Code: functionreturn [\[click\]](https://www.sololearn.com/compiler-playground/WvEj4Qf37K3h)
    
3.  Code: createdivafter [\[click\]](https://www.sololearn.com/compiler-playground/W1cQ5oh4MGq5)
    
4.  Final Rock Paper Scissor Code
    
    ![dheerajy1/dailycoding/day 57/1. day57 code.png]()
    

# Preview of the Game

![dheerajy1/dailycoding/day 57/2, day57 Rock Paper Scissor Game.png]()

# Source: Code with WebDevSimplified [\[click\]](https://youtu.be/1yS-JV4fWqY)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)