Today #day55 of #100daysofcode, I am coding and explaining Advanced level 'Rock Paper Scissors' code game project in JavaScript taught by @ania\_kubow.

# HTML

1.  create a div with id choices
    
    ```xml
    <div id="choices"></div>
    ```
    
2.  create a h2 tag with id
    
    ```xml
    <h2 id="result"></h2>
    ```
    

# JavaScript

Let's go to the app.JS file where the magic happens,

1.  let's queryselector() method because we haven't used it beginner level and intermediate level , to to pick the choices ID and result ID
    
    ```javascript
    const resultDisplay = document.querySelector('#result')
    const choicesDisplay = document.querySelector('#choices')
    ```
    
2.  Next, let's define an array with constant variable name choices,
    
    ```javascript
    const choices = ['rock','paper','scissor']
    ```
    
3.  Then, let's use for each method and Loop it through the array values and create for each value a button
    
    ```javascript
    choices.forEach(choice => {
    }
    ```
    
4.  After that, let's create an addEventlistener method for each button to listen for the click.
    
    ```javascript
    button.innerHTML = choice
    button.addEventListener('click',handleclick)
    ```
    
5.  Next, add the button we created as a child choicesDisplay variable using appendchild() method.
    
    ```javascript
    choicesDisplay.appendChild(button)
    ```
    
6.  Now, let's define the handle click function
    
    ```javascript
    const handleclick = (e)=> {
        getResults(e.target.innerHTML,choices[Math.floor(Math.random() * choices.length)])
    }
    ```
    
7.  Next, let's define the getResults function
    
    ```javascript
    const getResults = (userChoice,computerChoice)=>{
    }
    ```
    

It doesn't matter what you call the parameters inside paranthesis like ania\_kubow said here in her [\[video\]](https://youtu.be/RwFeg0cEZvQ?t=2427)

> It doesn't matter what we call it , I could call this
> 
> blugh \[ proceeds to stare at camera\]
> 
> for all the javascript cats
> 
> \- ania\_kubow

8.  Then, Let's define the switch case
    
    ```javascript
     switch (userChoice + computerChoice) {
            case 'RockPaper':
            case 'PaperScissor':
            case 'ScissorRock':
                resultDisplay.innerHTML = `You chose ${ userChoice} and Computer chose ${computerChoice} and You Lost!`
                break
            case 'RockScissor':
            case 'PaperRock':
            case 'ScissorPaper':
                resultDisplay.innerHTML = `You chose ${ userChoice} and Computer chose ${computerChoice} and You Win!`
                break
            case 'RockRock':
            case 'PaperPaper':
            case 'ScissorScissor':
                resultDisplay.innerHTML = `You chose ${ userChoice} and also the Computer chose ${computerChoice} and Its a Draw!`
                break
    }
    ```
    

# css

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
  width: 15%;
  height: 25px;
  padding-top: 1.5%;
  padding-left: 1.8%;
  padding-right: 1%;
  padding-bottom: 1%;
  box-shadow: 0 5px 20px #c6c6c6;
  transition: 0.5s ease;
  backdrop-filter: blur(25px) saturate(180%);
}
button {
  border-radius: 8px;
  background-color: rgba(210, 105, 30, 0.412);
  margin-top: 0%;
  margin-right: 8%;
  box-shadow: 0 5px 20px #c6c6c6;
  transition: 0.5s ease;
  backdrop-filter: blur(25px) saturate(180%);
}
#result{
  margin-top: 2%;
  margin-left: 41.6%;
  padding-top: 3%;
  padding-left: 1%;
  padding-right: 1%;
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  width: 15%;
  height: 150px;
  box-shadow: 0 5px 20px #c6c6c6;
  transition: 0.5s ease;
  backdrop-filter: blur(25px) saturate(180%);
}
```

# **Finally,**

I completed Building Advanced level Rock Paper Scissor JavaScript Game Taught by ania\_kubow.

# Conclusion

1.  querySelector()
    
2.  arrow function
    
3.  CSS text-align,display: inline-block,margin properties
    
4.  Completed Building Advanced level 'Rock Paper Scissors' code project in JavaScript.
    

> Thanks, Ania Kubów just completed all three Beginner to Intermediate to Advanced! level to code Rock Paper Scissors in JavaScript. I understood every line.
> 
> It was fun. After completing this video I am pronouncing sci-ssors not scissors... Thanks for Teaching, Ania Kubów.

# Code

1.  Code
    
    ![F:\Vscode\daily coding\day 55\1. day55.png]()
    

# Source: Code with Ania kubow [\[click\]](https://www.youtube.com/watch?v=RwFeg0cEZvQ)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)