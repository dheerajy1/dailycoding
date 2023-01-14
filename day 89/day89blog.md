Today #Day89 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget with API' using JS, Node.js, and an API taught by \[Ania Kubów\].

# JavaScript

define the table body by picking the elementbyid,

```javascript
const tableBody = document.getElementById('table-body')
```

fetch the data from the express server port,

I am using axios library,

```javascript
const getFlight = ()=>{
    axios.get('')
    .then(response=>response.json())
    .then(flights=>{
        console.log(flights)
    })
    .catch(err=>console.log(err))
}
getFlight()
```

Now, we will parse this data and render into the table,

define a function and assign it to variable,

and <mark>callback this function by passing the flights argument after the promise is resolved inside the getFlight function,</mark>

```javascript
const populateTable = (flights)=>{
}
```

Now,

I am using forEach method to loop through the flight array,

Crete elements for table row and for icon

assign the text content with an icon,

append this icon element to the table row,

and append this table row to the table body,

```javascript
const tableRow =  document.createElement('tr')
const tableIcon = document.createElement('td')
tableIcon.textContent = '✈️'  
tableRow.append(tableIcon)
tableBody.append(tableRow)
```

Then, create a flight detail variable and start assigning the flight data to this,

```javascript
const flightDetails ={
 time: flight.departing.slice(0,5),
 detination: flight.destination.toUpperCase(),
 flight: flight.flightNumber.shift(),
 gate: flight.gate,
 remarks: flight.status.toUpperCase()
}
```

Now, create each table cell for each table cell,

since flightDetails is an object and to loop through the properties,

define table cell and create an element,

to create a flipping animation for each letter in a value of this property use array from the method,

```javascript
for(const flightDetail in flightDetails){
    const tableCell = document.createElement('td')
    const word = Array.from(flightDetails[flightDetail])
}
```

Now, I am using forEach method since now word is an array,

create a little box element using div,

append this div-created element to the table cell,

also append this cell to table,

add the text content of this div with the letter passed,

```javascript
word.forEach((letter,index)=>{
        const letterElement = document.createElement('div')
        letterElement.textContent = letter
        tableCell.append(letterElement)
        })
tableRow.append(tableCell)
```

use the setTimeout method to get the flipping animation,

to get the

> 🎵 tu tu tu tu tu🎵

as ania conveyed [\[here\]](https://youtu.be/3QSWROFg_sc?t=4820),

add the classlist,

```javascript
setTimeout(()=>{
 letterElement.classList.add('flip')
 letterElement.textContent = letter
 tableCell.append(letterElement)
},100*index)
```

Now, style the div,

```css
.departures table div{
  border: solid 4px rgb(26, 26, 26);
  background-color: rgb(0, 0, 0);
  min-width: 20px;
  height: 40px;
  float: left;
}
```

Then, define the flip class,

```css
.flip{
  animation: 0.5s linear flipping;
}
@keyframes flipping {
  0%{
    transform: rotateX(0deg);
  }
  50%{
    transform: rotateX(90deg);
  }
  100%{
    transform: rotateX(0deg);
  }
  
}
```

## Finally,

styling the table row headers,

```css
#time{
  width: 160px;
}
#destination{
  width: 700px;
}
#flight{
  width: 205px;
}
#gate{
  width: 135px;
}
#remarks{
  width: 260px;
}
```

# Conclusion

I completed parsing and rendering the data from the node.js server in JavaScript and styling the data in CSS.

That brings the completion of 'Building an Airport Flight status widget with API' using JS, Node.js, and an API.

# Code

1. code
    
    ![Alt text](1.%20day%2089%20code.png)
    
    preview server js
    
    ![Alt text](2.%20day89%20server%20js.png)
    
    Preview main js
    
    ![Alt text](3.%20day89%20preview%20main%20js.png)
    

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)