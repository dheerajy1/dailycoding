Today #day52 of #100daysofcode, I am coding and explaining 'Rock Paper Scissors' code project in JavaScript taught by @ania\_kubow.

# HTML

\-

# JavaScript

## **i. Target Event property**

```javascript
but[0].addEventListener('click',(e)=>document.write(e.target.innerHTML))
```

### Explanation

1.  <mark>Use innerHTML</mark> or id to target. \[ ania\_kubow used id, but *I added my own idea* here to export the button inner HTML instead of id\]
    

1.  target.innerHTML
    
    ```javascript
    possibleChoices.forEach(x => x.addEventListener('click',(e)=>{
        userchoice = e.target.innerHTML
        userChoiceDisplay.innerHTML = userchoice
    }))
    ```
    

Now,

Let's generate a computer choice,

2.  Create a function generatecomputerchoice and call this function inside the EventListener,
    
    ```javascript
    function generatecomputerchoice(){
    }
    ```
    

## ii. Random number

```javascript
const p = [1,2,3]
let randomx = Math.random() 
document.write(randomx)//
document.write(`<br>`)

let floorofx = Math.floor(randomx) //
document.write(floorofx)

document.write(`<br>`)
let y = randomx *3
document.write(y)

document.write(`<br>`)
 y = Math.floor(randomx *3)
document.write(y)
```

### Explanation

1.  Math.random() a random number generator will generate a number between zero and one which is a float type and to convert into an integer type use Math.floor method
    

### Code: mathrandom[\[click\]](https://www.sololearn.com/compiler-playground/WtIs2EDSjut6)

3.  Creating random number
    
    ```javascript
    const randomNumber = Math.floor(Math.random() * 3)+1 // or u can use possibleChoices.length
    ```
    

### iii. Map()

*   A Map holds key-value pairs where the keys can be any datatype.
    
*   A Map remembers the original insertion order of the keys.
    
*   A Map has a property that represents the size of the map.
    

```javascript
let n = 1
let choice = new Map([[1,'Rock'],[2,'paper'],[3,'Scissor']])
let res = choice.get(n)
console.log(res) //Rock
```

### Code: mapget [\[click\]](https://www.sololearn.com/compiler-playground/WJidyM9AFzJo)

3.  assign this random number, if 1 to rock.. using if the condition or advanced use map
    
    ```javascript
    if(randomNumber===1) computerChoice = 'Rock'
    or 
    let rps = new Map([[1,'Rock'],[2,'Paper'],[3,'Scissor']])
    ```
    
    or you can use `r = possibleChoices[0].innerHTML` to get rock ...
    
    ```javascript
    let r = possibleChoices[0].innerHTML
    let p = possibleChoices[1].innerHTML
    let s = possibleChoices[2].innerHTML
    let rps = new Map([[1,r],[2,p],[3,s]])
    
    //let rps = new Map([[1,'Rock'],[2,'Paper'],[3,'Scissor']])
    ```
    

5.  now, export this computerChoice to computerChoiceDisplay which is holding the id computer-choice
    
    ```javascript
    computerChoiceDisplay.innerHTML = rpc.get(randomNumber)
    ```
    

Today, we have successfully taken user input and generated computer choices and displayed them.

# Conclusion

1.  Target Event property
    
2.  Math.random()
    
3.  Map()
    
4.  Code
    

# Code

1.  Code: mathrandom [\[click\]](https://www.sololearn.com/compiler-playground/WtIs2EDSjut6)
    
2.  Code: mapget [\[click\]](https://www.sololearn.com/compiler-playground/WJidyM9AFzJo)
    
3.  Rock Paper Scissor Code
    
    ![dheerajy1/dailycoding/day 52/1. day52.png]()
    

# Source: Code with Ania kubow [\[click\]](https://www.youtube.com/watch?v=RwFeg0cEZvQ)

# Author: Dheeraj.y

# Connect with me:

*   [My Twitter](https://twitter.com/yssdheeraj)
    
*   [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
*   [My GitHub](https://github.com/dheerajy1)
    
*   [My Hashnode](https://dheerajy1.hashnode.dev/)