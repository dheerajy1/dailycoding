Today #Day92 of #100DaysOfCode, I am coding and explaining by 'Building an Airport Flight status widget using React, Node.js, Database' taught by \[Ania Kubów\].

# Tech Stack

1. Front-End
    
    * ReactJS
        
2. Back-End
    
    * Node.js
        
    * Database: DataStax Astra
        

# Pre-Requisites

1. DataStax Astra account
    
2. vscode
    

# Setting up react

In the Vscode terminal navigate to the to desired directory and execute,

react-flight is the directory name given,

I did give . to create in the current directory but got error because of npm naming restrictions

```bash
npx create-react-app react-flight
```

Delete the files that are not required

Deleted files in the Project,

1. logo.svg
    
2. reportwebvitals.js
    
3. setuptests.js
    
4. app.test.js
    
5. app.css
    

In index.js file, delete the import of webvitals,

In app.js files, remove all in the return statement,

and change to arrow function,

```javascript
const App = ()=>{
return(
)
}
```

In index.css, delete all the styling,

Create a server.js file for back-end,

we will communicate to the database with this server.js,

define a port

define axios package to get requests,

define express package will help in routing,

define cors package to prevent cors error,

define dotenv package to hide the API key

```javascript
const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
```

now in the terminal,

```bash
npm i axios express cors dotenv nodemon
```

Then, go to the package.json file,

In the future run the npm i after changing the versions,

Add another script as we have only one script to start our react app,

we are adding another script to start our server,

nodemon is defined as constantly listening to changes to the server.js file,

```json
  "scripts": {
    "start:frontend": "react-scripts start",
    "start:backend": "nodemon server.js",
  },
```

Now,

In server.js file,

assign the express package to the app,

so if you make any changes to the app will listen to these changes,

to listen constantly we used nodemon package,

express() has a method listen(),

```javascript
const app = express()
app.listen(PORT, () => console.log('running on port ' + PORT))
```

Now, if you run

```bash
npm run start:backend
```

# Setting up datastax astra database

datastax astra database [\[link\]](https://www.datastax.com/lp/astra-registration?redirect_uri=https://astra.datastax.com/welcome&utm_source=youtube&utm_medium=referral&utm_campaign=ania-kubow&utm_term=frontend-devplay&utm_content=flight-widget-react-3)

1. sign up
    
2. create a serverless database
    
3. give database name
    
    ```plaintext
    flight-widget-project
    ```
    
4. give keyspace name
    
    ```plaintext
    flights
    ```
    
5. choose the closest region
    
6. create a database
    
7. copy the token and save it
    
8. go to the database
    

Wait for the status to complete,

# Then,

Let's add data manually into the database,

head over to connect tab,

there are many ways to connect, for now we are gonna use document API,

click swagger UI to launch,

create a collection to hold our data by clicking try it out,

give the keyspace or here namespace,

create the collection in the body,

and execute,

```apache
{
"name" : "departures"
}
```

Server response code: 201 - Executed successfully.

**Now,**

post stuff like the flight status data,

create a new document and click try it out,

give namespace flights

give collection name : departures which we made,

In the body, give the object

and execute which will put this object into the department collection by the documentID so you can pick it,

```apache
{
"status": "Delayed",
"destination": "Halifax, CAN",
"flightNumber": "Y9521",
"departing": "16:00",
"gate": "D35"
}
```

Now create another document,

and execute

```apache
{
"status": "Delayed",
"destination": "St Louis, USA",
"flightNumber": "AC8795",
"departing": "16:00",
"gate": "F64"
}
```

Now create another document,

and execute

```apache
{
"status": "On Time",
"destination": "JAMAICA",
"flightNumber": "TD403",
"departing": "16:24",
"gate": "A45"
}
```

Now create another document,

and execute

```apache
{
"status": "Cancelled",
"destination": "Oman",
"flightNumber": "T5563",
"departing": "17:40",
"gate": "T10"
}
```

Now create another document,

and execute

```apache
{
"status": "On Time",
"destination": "krakow, Poland",
"flightNumber": "FR532",
"departing": "20:45",
"gate": "K48"
}
```

Now, search all the documents in the collection and try it out,

give the namespace: flights

give collection name: departures

and execute

However, It will show only 3 objects in the response

we need the **curl** and r**equest URL** to work in Back-End then we can see all the data we posted in the database,

# Conclusion

I completed setting up the react app and installed the packages like Axios, cors, dotenv, nodemon, express and set up a server successfully listening on the specified port and I successfully setup a database in DataStax Astra and posted flight data objects.

# Code

1. code
    
    ![Alt text](1.%20day92%20code.png)
    
    preview
    
    ![Alt text](2.%20day92%20datastax%20astra.png)

# Source: Code with Ania Kubów [\[link\]](https://www.youtube.com/watch?v=3QSWROFg_sc&t=13s)

Best moments: Code with Ania Kubów [\[link\]](https://youtu.be/3QSWROFg_sc?t=5682)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)