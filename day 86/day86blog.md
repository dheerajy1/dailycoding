Today #Day86 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget' taught by \[Ania Kubów\].

# HTML

Hardcore table header,

```xml
<div class="departures">
   <header>Departues</header>
</div>
```

tbody tag given an ID so that you can pick it inside the JS file and populate the rows using the data,

```xml
<div class="departures">
        <header>Departues</header>
 <table>
        <tbody id="table-body"></tbody>
        </table>
</div>
```

Now, define the rows with th tags as child and give the textContent and id to pick in JS

```xml
<tr>
 <th id="time">Time</th>
 <th id="destination">Destination</th>
 <th id="flight">Flight</th>
 <th id="gate">Gate</th>
 <th id="remarks">Remarks</th>
</tr>
```

# JavaScript

Head to the JS file to populate these table rows with data,

```javascript
const tablebody = document.getElementById('table-body')
```

Now, define the flight data with properties using objects and all these objects are enclosed in an array,

```javascript
let flights = [
    {
        time: '08:11',
        destination: 'India',
        flight: 'A 01',
        remarks: 'On Time',
    },
    {
        time: '11:00',
        destination: 'USA',
        flight: 'B 01',
        remarks: 'Cancelled',
    },
    {
        time: '09:11',
        destination: 'Russia',
        flight: 'C 01',
        remarks: 'On Time',
    }, 
    {
        time: '18:11',
        destination: 'Poland',
        flight: 'D 01',
        remarks: 'Delayed',
    }, 
    {
        time: '04:11',
        destination: 'Chennai',
        flight: 'E 01',
        remarks: 'On Time',
    }, 
    {
        time: '03:11',
        destination: 'Mumbai',
        flight: 'F 01',
        remarks: 'On Time',
    }
]
```

After that define a populate function in order to populate HTML table rows,

Anna used for of loop to loop through the array values not the indexes and in the next for in loop Anna used this because Hannah wants to loop through the keys of this object,

```javascript
function populateTable(){

    flights.forEach((flight)=>{
        const tableRow = document.createElement('tr')
        for(const flightdetail  in flight ){
            const tableCell = document.createElement('td')
            console.log('flightdetail',flightdetail)
        }
        tablebody.append(tableRow)
    })
}
populateTable()
```

Now, to get the flipping animation,

we need to put each letter in a div,

```javascript
   const word = Array.from(flight[flightdetail])
            for(const letter of word){
                const letterElement = document.createElement('div')
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.append(letterElement)
            }
```

# CSS

import a google font

```css
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
```

```css
* {
  font-family: "Ubuntu Condensed", sans-serif;
  color: rgb(240, 240, 240);
  font-size: 35px;
}
body {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: rgb(251, 199, 127);
}

header {
  padding: 10px;
}
.departures{
    background-color: rgb(6,6,6);
    border-radius: 10px;
    padding: 10px;
}
.departures table{
    background-color: rgb(46,46,46);
    text-align: left;
}
.departures table td{
    height: 50px;
}
.departures table div{
    border: solid 4px rgb(26,26,26);
    background-color: rgb(0, 0, 0);
    float: left;
    height: 46px;
}
```

Now, do the Flip animation,

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

# Conclusion

I completed defining the flight data and successfully add it to the front end using JavaScript methods like create an element and append methods.

# Code

1. code
    
    ![Alt text](1,%20day86%20code.png)
    
    preview
    
    ![Alt text](2.%20day86%20preview.png)
    

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)