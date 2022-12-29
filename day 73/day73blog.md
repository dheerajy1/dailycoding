Today #Day73 of #100DaysOfCode, Practiced array and object destructuring, I am coding and explaining the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

### Array and object destructuring

From an array to an object,

```javascript
const books = [1,2,3,4]
let shelf = {
  a: undefined,
  b: undefined
}
shelf = {a:books[0],b:books[1]}
console.log(shelf)
```

#### Swapping variables,

```javascript
const books = [1,2,3,4]
let shelf = {
  a: undefined,
  b: undefined
}
shelf = {a:books[0],b:books[1]}
console.log(shelf)

shelf = {a:books[1],b:books[0]}

console.log(shelf)
```

using an arrow function,

```javascript
function f(){
  return [1,2,3,4]
}
let books = f()
let shelf = {
  a: undefined,
  b: undefined
}
shelf = {a:books[0],b:books[1]}
console.log(shelf)
```

storing array,

```javascript
let books = [1,2,3,4]
let shelf = {
  a: undefined,
  b: undefined
}
shelf = {a:books,b:books[1]}
console.log(shelf)
console.log(shelf.a)
```

## Code: objdestru [\[link\]](https://www.sololearn.com/compiler-playground/WSChWhl0xWCT)

# Weather app

# Header CSS

styling before and after elements using box-sizing

```css
*,*::after,*::before{
    box-sizing: border-box;
}
```

styling the body, set the background margin to zero and set the background color,

text color and font family,

```css
body{
    margin: 0;
    background-color: hsl(200, 100%, 85%);
    color: hsl(200, 100%, 10%);
    font-family: sans-serif;
}
```

let's style our header elements,

used display flex so that the right and left are showing up next to each other like adjacent to each other,

```css
header{
    display: flex;
    align-items: center;
}
```

now style the header left section,

differentiate between the left header and right header section use the border right property,

```css
.header-left{
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-right: 2px solid hsl(200, 100%, 10%);
}
```

now style the weather icon,

use object-fit property and content property value to maintain the actual aspect ratio of the icon,

```css
.weather-icon{
width: 40px;
height: 40px;
object-fit: contain;
}
```

now we want this whether icon in the left section to be large but compared to the other weather icons now style,

```css
.weather-icon.large{
    width: 80px;
    height: 80px;
}
```

now style the temperature span in the left header section,

```css
.header-current-temp{
    font-size: 2rem;
    margin-left: 1rem;
}
```

Now, Style the right header section,

use display grid template columns property and grid template rows property,

```css
.header-right{
    display: grid;
    width: 50%;
    justify-content: space-around;
    gap: 0.5rem;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
}
```

new style infogroup sections which are inside the right head and section,

use display flex and flex direction column and alliance center,

```css
.info-group{
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

Now, style the labels in these info groups,

```css
.label{
    text-transform: uppercase;
    font-weight: bold;
    font-size: .6rem;
    color: hsl(200, 100%, 20%);
}
```

Now, Style the units,

```css
.value-sub-info{
    font-weight: lighter;
    font-size: 0.75rem;
}
```

Now, to get blurred out page when refreshed due to slow internet,

Add the blurred class the body and the style now, and over flow hidden just so we can't scroll,

remove the class, for now, we will add JavaScript,

```css
.blurred{
    filter: blur(3px);
    overflow: hidden;
}
```

# Conclusion

Practiced array and object destructuring, I completed the writing portion of Styling CSS for the header part of the weather API project.

# Code

1. code
    
    ![Alt text](1.%20day73%20code.png)
    
    preview
    
    ![Alt text](2.%20day73%20preview.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)