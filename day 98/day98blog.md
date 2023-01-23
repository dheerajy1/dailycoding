Today #Day98 of #100DaysOfCode, I am coding and explaining 'Configuring Node.js Web Server' taught by \[WebDevSimplified\].

# Pre-requisites:

1. Download Node.JS [\[Link\]](https://nodejs.org/en/)
    
2. Choose LTS - Long Term support on this site.
    
3. Install.
    

Node.JS is simply a method to execute your JavaScript code outside of the browser.

# Why node.js?

We are going to create a webserver using node.js.

We have an extension called 'live server' in VScode extensions. we are going to create one like this.

Create a JavaScript file server.js

inside this server.JS file, we need to create a web server to listen to a port,

you need a library called HTTP to start the server,

```javascript
const http = require('http')
```

create a port variable and define the port number to make the server to start listening to,

```javascript
const port = 3000
```

create a server,

first create a server variable and then using HTTP library create server this function takes 2 arguments request and response,

```javascript
const server = http.createServer((req,res)=>{
})
```

setup our server to make it listen to the port,

```javascript
server.listenerCount(port,(error)=>{
if(error){
    console.log(`Something went wrong on port ${port}`)
}
else{
    console.log(`Server is listening on port ${port}`)
}
})
```

implement function,

to return response to the user

```javascript
 res.write('Hello Node')
```

to end our server,

```javascript
 res.end()
```

render our HTML,

create html file,

Now to send this HTML file,

tell the browser that we are going to write HTML,

200 - status code - everything went fine

```javascript
res.writeHead(200,{'content-Type':'text/html'})
```

Now, to read the HTML file, we need to import another library fs,

```javascript
const fs = require('fs')
```

call the read file function of fs,

this read file function takes two arguments,

1st argument is give the name of the file you want to read,

2nd argument is another function that takes error and data arguments

```javascript
fs.readFile("index.html", (error, data) => {
if (error) {
    res.writeHead(404);
    res.write("Error: File Not Found");
} else {
    res.write(data);
}
res.end();
});
```

restart server

To run our server,

node followed by file name,

```bash
node server.js
```

to end our server

```bash
ctrl + c
```

Browser URL

```http
http://localhost:3000/
```

Bonus

1. To check the existing node version,
    
    ```http
    node -v
    ```
    

# Problem

Problem - style sheet not loading though I include the link tag.

Solution: I then Included the style tag and moved the CSS styles into the HTML file.

# Conclusion

I successfully completed setting up my webserver using node.js.

# Code

1. code & preview
    
    ![Alt text](1.%20day98%20preview%20&%20code.png)
    

# Source: WebDevSimplified [\[Link\]](https://www.youtube.com/watch?v=VShtPwEkDD0)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)