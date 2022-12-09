Today #day53 of #100daysofcode, I am coding and explaining the 'Rock Paper Scissors' code project in JavaScript taught by @ania\_kubow.

# HTML

Give Class name to h2 tags

```xml
<h2 class="computerChoice">Computer Choice:<span id="computer-choice"></span></h2>
<h2 class="userChoice">User Choice:<span id="user-choice"></span></h2>
<h2 class="result">Result: <span id="result"></span></h2>
```

# JavaScript

1.  Create a function to get the result
    
    ```javascript
    function getResult(){
    }
    ```
    
    or you can use arrow function
    
    ```javascript
    let getResult = ()=>{
    }
    ```
    
2.  Now, Write the if conditions when the userchoice and computer choices are equal and different
    
    ```javascript
    function getResult(){
        if(computerChoice===userChoice){
            result = 'Its a Draw!'
        }
        else if(computerChoice===r&&userChoice===p){
            result = 'You Win!'
        }
        else if(computerChoice===r&&userChoice===s){
            result = 'You Lost!'
        }
        else if(computerChoice===p&&userChoice===r){
            result = 'You Lost!'
        }
        else if(computerChoice===p&&userChoice===s){
            result = 'You Win!'
        } 
        else if(computerChoice===s&&userChoice===r){
            result = 'You Win!'
        }
        else if(computerChoice===s&&userChoice===p){
            result = 'You Lost!'
        }
        resultDisplay.innerHTML = result
    }
    ```
    
    @ania\_kubow wrote in the last else if, result = `you lose` but on the other else if she wrote `you lost` - just an interesting observation.
    
3.  Call the getResult() function in the addEventListener
    
    ```javascript
    possibleChoices.forEach((x) => x.addEventListener('click', (e) => {
        userChoice = e.target.innerHTML
        userChoiceDisplay.innerHTML = userChoice
        generateComputerchoice()
        getResult()
    }))
    ```
    

# CSS

If you want to give style,

1.  Give Position property & Margin & box shadow
    
    ```javascript
    .computerChoice{
        position: fixed;
        margin-top: 15%;
        margin-left: 25%;
        width: 20%;
        height: 6%;
        padding-left: 0.8%;
        padding-top: 0.25%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        backdrop-filter: blur(25px) saturate(180%);
        box-shadow: 0 30px 50px #0000002d;
        transition: 0.5s;
    }
    ```
    

Finally, I completed Building Rock Paper Scissor JavaScript Game Taught by ania\_kubow. \[ Thanks ania for retweeting my day52 tweet \]

# Conclusion

Completed Building 'Rock Paper Scissors' code project in JavaScript.

# Code

1.  Code
    
    ![dheerajy1/dailycoding/day 53/1. day53.png]()
    

# Source: Code with Ania kubow [\[click\]](https://www.youtube.com/watch?v=RwFeg0cEZvQ)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)