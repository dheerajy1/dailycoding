Today #Day71 of #100DaysOfCode, I practiced Object Destructuring I am coding and explaining the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

# Object Destructuring

```javascript
const person = {
    height: 6,
    eyes: 'blue',
    weight: '60kg',
    location: 'earth',
};
const arr = ['temp','bp','mp','ram',7];

const {...person2} = person;
console.log(person2);

const [...arr2] = arr;

//console.log(arr2)
console.log(arr2);


const {a,b,c,d} = person;
console.log(a); //null

const {height} = person;
console.log(height) ;//6

const num2 = [];
const obj = { a:1,b:2};
({a:num2[0],b:num2[1] } = obj);
console.log(num2)
```

## Code: Object Destructuring [\[link\]](https://www.sololearn.com/compiler-playground/W8VjlF49i0KR)

# Weather App project

# What is this project about?

Full-fledged weather app using HTML CSS and JavaScript using free APIs.

# What skills do I get?

Data parsing API access

CSS styling

JavaScript

Why do this project?

Open meteo API has URL and you just call this URL to access information and NO API keys are needed.

# 1\. Setup

we're gonna be using vite to set up our project in the terminal

In terminal,

```bash
npm create vite@latest
```

Tip: In terminal when navigating using cd if you come across a folder with space and you want to navigate enclose that folder name in quotes.

Give `.` to create in the current project folder opened or else give a new project name,

select vanilla framework in the next line,

select JavaScript variant in the next line,

type npm i to install all the packages

```bash
npm i
```

to run our project

```bash
npm dev run
```

After that, use ctrl+click to open the live view server,

Delete the default CSS styling and JavaScript code in the main.js file

To import our css in JS

```bash
import " ./style.css"
```

Always Check if your CSS file is imported in the HTML file or JS file or not.

Delete the counter.js file as we don't need.

Delete the SVG file inside the Public folder

Delete the Javascript.svg file too.

In index HTML file delete the svg linked code and also the div in the body tag.

As we have imported the CSS file to the JavaScript file we don't need to add linktag inside the HTML page.

Use `defer` attribute to load .js file after loading HTML file.

```javascript
<script type="module" src="/main.js" defer></script>
```

Download and copy the icons, SVGs, and Fonts from the kyle GitHub [\[Link\]](https://github.com/WebDevSimplified/js-weather-app/tree/main/public) and paste them into the public folder.

# Conclusion

Learned Object Destructuring and Completed the Setup portion of Building weather API.

# Code

1. code
    
    ![Alt text](1.%20day71%20code.png)

    ![Alt text](2.%20day71.png)
    
    Object Destructuring
    
    ![Alt text](3.%20day71%20objdest.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)