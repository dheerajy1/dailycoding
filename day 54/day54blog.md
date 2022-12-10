Today #day54 of #100daysofcode, I am coding and explaining the Intermediate level 'Rock Paper Scissors' code project in JavaScript taught by @ania\_kubow.

# HTML

1.  create a div with id div#game
    
    ```xml
    <div id="game"></div>
    ```
    

# JavaScript

Let's create and populate this id game with element's.

2.  Create an h1 element in JS
    
    ```javascript
    const userChoiceDisplay = document.createElement('h1')
    const computerChoiceDisplay = document.createElement('h1')
    const resultDisplay = document.createElement('h1')
    ```
    
3.  get the element with the ID game and assign it to a gamegrid variable in this gamegrid variable you will store all the previously created elements,
    
    ```javascript
    const gameGrid = document.getElementById('game')
    ```
    
4.  Now, To store the user choice display variable and computer choice display variable in the result display variable, use a method called append()
    
    ```javascript
    gameGrid.append(userChoiceDisplay,computerChoiceDisplay,resultDisplay)
    ```
    
5.  After that, make an choices variable array and insert rock paper scissor
    
    ```javascript
    const choices = ['Rock','Paper','Scissor']
    ```
    
6.  Next, create a button for each choice so use can for loop or you can use for each() method
    
    ```javascript
    const button = document.createElement('button')
    ```
    
7.  And then, add an id to this button using id property
    
    ```javascript
    button.id = i
    ```
    
8.  Then, Optionally(redundant) you add this choice to the buttons using innerHTML property
    
    ```javascript
    button.innerHTML = i
    ```
    
9.  Now, Lets add an addEventListener to this button,
    
    ```javascript
    button.addEventListener('click',()=>console.log('clicked'))
    ```
    
    Note:
    
    1.  Don't get confused, this addEventListener() adds this to button while the for...of loop and thereby listen's to a click after the for...of loop. Yes, This addEventListener() method is permanently attached to these buttons.
        
10.  Once you have done that then, add this buttton with the id and inner HTML to our Div which is gameGrid as a child so use appendChild() method,
    
    ```javascript
    gameGrid.appendChild(button)
    ```
    
    ```javascript
    for(let i of choices){
        const button = document.createElement('button')
        button.id = i
        button.innerHTML = i
        button.addEventListener('click',()=>{
            console.log('clicked')
        })
        gameGrid.appendChild(button)
    }
    ```
    

So now, you can go to dev tools play around like ania\_kubow exclaimed in her [\[video\]](https://youtu.be/RwFeg0cEZvQ?t=1405)

> Also if we click it, it will say
> 
> 🎵clicked clicked🎵
> 
> 🎵clicked clicked🎵
> 
> 🎵clicked clicked clicked clicked clicked clicked 🎵
> 
> 🎵clicked🎵

11.  Moving on, let's display users choice whenever we click button instead of displaying 'clicked' in the console log, we need to display on the document,
    
    ```javascript
       button.addEventListener('click',(e)=>{
            userChoice = e.target.id
            userChoiceDisplay = userChoice
        })
    ```
    

## i. Math.random() method

```javascript
x = Math.random() 
console.log(`Math.random() = ${x}`)
console.log(`Math.floor(${x}) = ${Math.floor(x)}`)
console.log(`Math.random(${x} * 3) = ${x*3}`)
console.log(`Math.floor(${x} * 3) = ${Math.floor(x*3)}`)
```
Code: mathrandom [\[click\]](https://www.sololearn.com/compiler-playground/Wg6D8q75F92U)

12.  Next, Let's generate computer choice and add it to compuerChoiceDisplay inner HTML
    
    ```javascript
    randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = `ComputerChoice: ${randomChoice}`
    ```
    
    Sorry, I am Coding without functions, My instinct was to eliminate too many function calls.
    
13.  After that, Let's get result
    
    ```javascript
     switch (userChoice + computerChoice) {
            case 'RockPaper':
            case 'PaperScissor':
            case 'ScissorRock':
                resultDisplay.innerHTML = 'You Lost!'
                break
            case 'RockScissor':
            case 'PaperRock':
            case 'ScissorPaper':
                resultDisplay.innerHTML = 'You Win!'
                break
            case 'RockRock':
            case 'PaperPaper':
            case 'ScissorScissor':
                resultDisplay.innerHTML = 'Its a Draw!'
                break
        }
    ```
    

# CSS

If you want to give styling,

```css
body {
  background-color: aliceblue;
  text-align: center;
}
div {
  display: inline-block;
  background-color: rgb(255, 255, 255);
  margin-top: 15%;
  border-radius: 30px;
  width: 25%;
  height: 250px;
  padding-top: 2%;
  padding-left: 1%;
  padding-right: 1%;
  padding-bottom: 1%;
  box-shadow: 0 5px 20px #c6c6c6;
  transition: 0.5s ease;
  backdrop-filter: blur(25px) saturate(180%);
}
button#Rock {
  margin-top: 5%;
  margin-left: -5%;
}
button#Paper {
  margin-left: 5%;
}
button#Scissor {
  margin-left: 5%;
}
```

# Finally,

I completed Building Rock Paper Scissor JavaScript Game Taught by ania\_kubow.

# Conclusion

1.  createElements
    
2.  append() method
    
3.  appendChild()
    
4.  addEventListener
    
5.  CSS text-align,display: inline-block,margin properties
    
6.  Completed Building Intermediate level 'Rock Paper Scissors' code project in JavaScript.
    

# Code

1.  Code
    
    ![dheerajy1/dailycoding/day 54/2. day54.png]()
    

# Source: Code with Ania kubow [\[click\]](https://www.youtube.com/watch?v=RwFeg0cEZvQ)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)