Today #Day94 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget using React, Node.js, Database' taught by \[Ania Kubów\].

Work on the table body and populate it with our data from Datastax Astra,

the aim is to map the data from API to table rows,

In the table body, we pull the data from the backend,

for this import use state and use effect,

```javascript
import { useState, useEffect } from 'react'
```

Now, get the data itself,

at first, since the promise isn't resolved the flights constant variable is set to null using use state method,

as soon as the promise gets resolved in the second then method setFlights() will send the object that we got from the backend server to the flights variable which was earlier null.

I used object destructure,

```javascript
const [flights, setFlights] = useState(null)

const getFlights = () => {
        fetch('http://localhost:8000/flights')
            .then(response => response.json())
                  .then(({data:flights}) => setFlights(Object.values(flights)))
            .catch(err => console.log(err))
    }
   useEffect(() => getFlights(), [])
    console.log(flights)
```

To remove the cors error which Ania Kubów named as [\[link\]](https://youtu.be/3QSWROFg_sc?t=7298)

> The Pesky Error

go the server.js and call the cors() to get rid of this pesky message,

```javascript
app.use(cors())
```

Now, populate the table rows,

map the object values to table rows,

```javascript
 return (
        <tbody>
        {flights?.map((flight, _index) => (
            <TableRow key={_index} flight={flight} />
        ))}
        </tbody>
    )
```

also import the tablerow,

```javascript
import TableRow from './TableRow'
```

After that, work on table row.jsx,

```javascript
import TableCell from './TableCell'
const TableRow = ({ flight }) => {
    const words = Object.values(flight)
    console.log(words)
    return (
        <tr>
            <td>✈</td>
            {words?.map((word, _index) => (
                <TableCell key={_index} word={word} />
                ))}
        </tr>
    )
}
export default TableRow
```

Then, work on table cell,

destructure the word and put each letter in a div to get the flipping effect,

```javascript
import TableLetter from './TableLetter'
const TableCell = ({ word }) => {
    return (
        <td>
            {Array.from(word).map((letter, index) => (
                <TableLetter key={index} letter={letter} index={index}/>
            ))}
        </td>
    )
}

export default TableCell
```

CSS

style the div

```css
.departures table div {
    border: solid 4px rgb(26, 26, 26);
    background-color: rgb(0,0,0);
    min-width: 20px;
    height: 40px;
    float: left;
}
```

Define a class for the flip,

and define the animation,

```css
.flip {
    animation: 0.5s linear flipping;
}
@keyframes flipping {
    0% {
        transform: rotateX(0deg);
    }
    50% {
        transform: rotateX(90deg);
    }
    100% {
        transform: rotateX(0deg);
    }
}
```

create tableletter.jsx file,

```javascript
import { useState } from "react"

const TableLetter = ({ letter, index}) => {
    const [flip, setFlip] = useState(false)
    setTimeout(() => {
        setFlip(true)
    }, 100 * index)
    return (
        <div className={flip ? 'flip' : null}>
            {flip ? letter : null}
        </div>
    )
}
export default TableLetter
```

# Conclusion

Learned how to remove pesky errors named by ania kubow aka CORS error,

I have successfully completed 'Building an Airport Flight status widget using React, Node.js, Database'

Learned How to create a server in Express Js and How to setup a react app and How to create a database & push flight data and pull data into our server and how to process this data using react framework.

Thanks, Ania Kubów.

# Code

1. code
    
    ![Alt text](1.%20day94%20code.png)
    
    preview - flipping animation,
    
    ![Alt text](2.%20day94%20frontend%201.png)
    
    Final preview,
    
    ![Alt text](2.%20day94%20frontend%202.png)
    

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

Best moment: Code with Ania Kubów [\[link\]](https://youtu.be/3QSWROFg_sc?t=7298)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)