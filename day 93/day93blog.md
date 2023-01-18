Today #Day93 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget using React, Node.js, Database' taught by \[Ania Kubów\].

Define a route and seek the data from the database,

Define the options

copy and paste the URL

and copy the headers with the accept and token,

Define the Axios request,

```javascript
app.get('/flights',(req,res)=>{
    const options = {
        url: '',
        headers: {
        }
      };
      axios.request(options).then((response) =>{
          console.log(response.data);
          res.json(response.data)
      }).catch(function (error) {
          console.error(error);
      });
})
```

Now, you can get only the first 6 data from the database by giving the max pages in the Database configuration,

Then, create a .env file in the project directory to store the URL and hide it,

```javascript
URL = 
TOKEN =
```

To access these from .env to server.js file,

```javascript
process.env.
process.env.token
```

To Listen,

```javascript
http://localhost:8000/flights
```

We have successfully completed the back-end part,

# Front-End,

Now let's use this data pushing by the back-end by building a front-end,

Go to the new terminal,

```bash
npm run start:frontend
```

A preview of What we are gonna build in the Front-End,

1. table
    
2. table body
    
3. table header holds column names
    
4. table rows making up the table body
    
5. table cells
    

create a new components directory in the src directory,

Inside this components directory, create a table.jsx file,

```javascript
const Table = () => {
    return (
        <table>
            <TableHead/>
            <TableBody/>
        </table>
    )
}
export default Table
```

rename the app.js, index.js to jsx file extention,

Don't forget to re-run the front-end server,

create a tablebody.jsx file,

create tablehead.jsx file,

create tablerow.jsx file,

create tablecell.jsx,

Run the front-End again from the terminal,

```javascript
npm run start:frontend
```

Then, In the app.jsx file,

create a div to hold all the departures info,

and a header and import the table from table.jsx,

```javascript
import Table from './components/Table'
const App = () => {
  return (
      <div className="departures">
        <header>DEPARTURES</header>
        <Table/>
      </div>
  )
}
export default App
```

# CSS

style the div using the class name,

style the header,

style the body,

```css
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');

* {
    font-family: "Ubuntu Condensed", sans-serif, Arial;
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
.departures {
    background-color: rgb(6,6,6);
    border-radius: 10px;
    padding: 10px;
    box-shadow: rgba(50,50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
}
```

After that, work on the table element,

import the TableHead and TableBody from the respective jsx files,

since they are default exports no need to mention curly braces while importing,

```javascript
import TableHead from './TableHead'
import TableBody from './TableBody'

const Table = () => {
    return (
        <table>
            <TableHead/>
            <TableBody/>
        </table>
    )
}
export default Table
```

Now, work on tableHead.jsx file,

The reason why the first `th` in the `tr` is empty because the flight icons rows don't have a header row, you can name it if you want like flight icon, the problem gonna generate is it will increase the table cell size,

```javascript
const TableHead= () => {
    return (
        <thead>
        <tr>
            <th></th>
            <th id="time">TIME</th>
            <th id="destination">DESTINATION</th>
            <th id="flight">FLIGHT</th>
            <th id="gate">GATE</th>
            <th id="remarks">REMARKS</th>
        </tr>
        </thead>
    )
}
export default TableHead
```

Now, style the table,

define the width of each cell header row,

```javascript
.departures table {
    background-color: rgb(46, 46, 46);
    text-align: left;
}
#time {
    width: 160px;
}
#destination {
    width: 700px;
}
#flight {
    width: 205px;
}
#gate {
    width: 135px;
}
#remarks {
    width: 260px;
}
```

# Conclusion

I completed accessing the data from the database DataStax Astra API in the back-End and in Fron-End completed creating tables in React JS and styling in CSS.

# Code

1. code
    
    ![Alt text](1.%20day93%20code.png)
    
    back-end server
    
    ![Alt text](2.%20day93%20backend%20-%20server.png)
    
    front-end
    
    ![Alt text](3.%20day93%20frontend.png)
    

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)