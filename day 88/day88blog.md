Today #Day88 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget with API' using JS, Node.js, and an API taught by \[Ania Kubów\].

# Prerequisites

1. You need a credit card to use this API key.
    
2. install node.js
    
3. install npm
    

Rapid API [\[link\]](https://rapidapi.com/itsjustlogan/api/toronto-pearson-airport/?utm_source=ANIA-KUBOW&utm_medium=DevRel&utm_campaign=DevRel)

# HTML

create a new div with class departures,

create a table inside this div,

create a table with a head with a tag `thead`

Create a table row with a tag `tr`

For this row create table heads and leave the first for the icon and remind assign the time, destination, gate, remarks as text content,

and give an id to style them later,

give the tea body and ID so that we can inject table rows dynamically upon getting the data from the API using JavaScript,

```xml
<div class="departures">
   <h1>Departures</h1>
     <table>
       <thead>
           <tr>
              <th></th>
              <th id="time">Time</th>
              <th id="destination">Destination</th>
              <th id="flight">Flight</th>
              <th id="gate">Gate</th>
              <th id="remarks">Remarks</th>
            </tr>
          <tbody id="table-body"></tbody>
        </thead>
     </table>
</div>
```

# CSS

styling

font form google fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
```

```css
* {
    font-family: "Ubuntu Condensed", sans-serif;
    color: rgb(240, 240, 240);
    font-size: 35px;
  }
```

justify-content property will center along the horizontal axis which is called the main axis in the display flex

I learned items center property will center the items that are child items child elements along the cross axis which is called the vertical axis hence you need height property,

```css
 body{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }
```

styling the div itself,

```css
h1{
    padding: 10px;
}
.departures{
    background-color: rgb(6,6,6);
    border-radius: 10px;
    padding: 10px;
}
```

styling the table,

```css
.departures table{
    background-color: rgb(46, 46, 46);
    text-align: left;
}
```

# JavaScript

## Working with API

Put the html and css and js file in a client folder,

create a server.js file,

Install node.js on your machine [\[link\]](https://nodejs.org/en/)

install npm globally in the terminal,

```bash
npm install -g npm
```

navigate to the project folder,

run the below code and hit enter for all and finally yes,

init is command to initialise

```bash
npm init
```

you will see a package.json file,

Now, to add some packages and script to start our backend,

we need express to listen to a port,

we need axios to request,

we need cors,

we need dotenv to hide our API key,

we need nodemon to listen changes on our backend,

```bash
npm i express axios cors dotenv nodemon
```

In the package.json you can change the version numbers and run npm i again if you want,

After that, write code for our server in server.js file,

define the port

```javascript
const port = 8000
```

copy all the code snippet from rapidAPI,

define the express package to wrap the code snippet in route,

define app variable to store the express()

define cors to not get blocked by cors (cross-origin resource sharing)

important set require dotenv to hide API key,

define axios too,

```javascript
const port = 8000
const axios = require('axios').default
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())
```

Now, wrap the <mark>code snippet form rapidAPI </mark> inside the app express rooting,

```javascript
app.get('/flights',(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://toronto-pearson-airport.p.rapidapi.com/arrivals/carousel/9',
        headers: {
          'X-RapidAPI-Key': 'key',
          'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
        }
      };
      axios.request(options).then((response) =>{
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
})
```

create a .env file,

define the rapidAPIkey,

cut and paste the API from the code snippet of rapidAPI to here,

```javascript
rapid_api_key = key
```

and mention this variable in its place where you cut the rapidAPIkey,

```javascript
process.env.rapid_api_key
```

to convert to json to show in the console browser,

anna used slice to reduce the array length to 5,

```javascript
axios.request(options).then(function (response) {
          console.log(response.data);
          res.json(response.data.slice(0,6))
      }).catch(function (error) {
          console.error(error);
});
```

Now to run,

change the script in package.json in the start property,

so that it will listen to changes continuously,

thats why we installed nodemon npm package to listen continously where as node will listen once,

```javascript
"start": "nodemon server.js"
```

Finally, run the our server,

```javascript
npm run start
```

# Conclusion

I completed setting up server.js file to access the API by installing packages like express, cors, dotenv, axios.

1. installing npm packages
    
2. configuring express server
    
3. hiding API key
    
4. preventing Pesky cors error
    
5. using nodemon package for continuous changes listening
    

# Code

1. code
    
    ![Alt text](1.%20day88%20after%20npm%20i%20packagaes.png)
    
    ![Alt text](2.%20day88%20server%20run.png)
    
    preview
    
    ![Alt text](3.%20day88%20server%20output.png)
    
# Note:

    Yes! It's a different RapidAPI from what Ania Kubów used in her video, as I couldn't access Pearson Airport API because I don't have credit card. so I used a different API but My code is working with a few changes.

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)