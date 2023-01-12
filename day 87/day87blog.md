Today #Day87 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget in JS' taught by \[Ania Kubów\].

# JavaScript

To get the

> 🎵 tutu tutu turuu ruu ruuu 🎵
> 
> 🎵 tutu tutu tutu tuuuruuu ruu ruuu 🎵

animation like \[Ania Kubów\] conveyed vividly [\[here\]](https://youtu.be/3QSWROFg_sc?t=1426),

define a timer for each letter in JS using the set timeout method,

I changed the for loop to foreach method since we have created an array from each flight detail,

so now I can send the Index as a parameter,

```css
word.forEach((letter,index)=>{
 const letterElement = document.createElement('div')
    setTimeout(()=>{

    letterElement.classList.add('flip')
    letterElement.textContent = letter
    tableCell.append(letterElement)
    },100*index)
})
```

Let's generate randomly the fight data,

```javascript
const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
  const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
  let hour = 15
```

define the function to shuffle,

```javascript
function shuffelUp(){
    flights.shift()
    flights.push({
        time: generateTime(),
      destination: destinations[Math.floor(Math.random()* destinations.length)],
      flight: "CL 320",
      gate: "C 31",
      remarks: remarks[Math.floor(Math.random()* remarks.length)]
    })
}
```

Now, define the generate random letter function,

```javascript
function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random()* alphabet.length))
}
```

Now, add the function callbacks to the properties,

```javascript
time: generateTime(),
destination: destinations[Math.floor(Math.random()* destinations.length)],
flight: generateRandomLetter(),
gate: `${generateRandomLetter()} ${generateRandomNumber()} + ${generateRandomNumber()}`,
remarks: remarks[Math.floor(Math.random()* remarks.length)]
```

Now, define the time and number functions,

```javascript
function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0,maxNumber+1)
    return newNumbers.charAt(Math.floor(Math.random()* newNumbers.length))

    } 
    return numbers.charAt(Math.floor(Math.random()* numbers.length))
}
function generateTime(){
    let displayHour = hour
    if(hour<24) {hour++}
    else if(hour>=24){
        hour = 1
        displayHour = hour
    }
    else if(hour<10) {displayHour = `0${hour}`}
    return `${displayHour}:${generateRandomNumber(5)}${generateRandomNumber()}`
}
```

Then, call the populate function,

```javascript
tablebody.textContent =''
populateTable()
```

## Finally,

using the set interval method call the function every 5 sec,

```javascript
setInterval(shuffleUp, 5000)
```

# Conclusion

I completed 'Building an Airport Flight status widget in JS' taught by \[Ania Kubów\].

Learnings:

1. createElement method()
    
2. setTimeout()
    
3. charAt()
    
4. slice()
    

# Code

1. code
    
    ![Alt text](1.%20day87%20code.png)
    
    preview
    
    ![Alt text](2.%20day87%20preview.png)

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)