Today #Day72 of #100DaysOfCode,  I practiced Destructuring assignment and I am coding and explaining  the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

# Destructuring assignment

Practicing JS Destructuring assignment,

The traditional way of assigning error values to newly created variables,

```javascript
const arr = [5,9,6,7]
const first = arr[0],
second = arr[1],
third = arr[2],
fourth = arr[3]
console.log(first,second,third)
```

Now, using Destructuring assignment

```javascript
const [one,two,three] = [1,2,3]
console.log(one,two,three)
```

Using the rest operator,

```javascript
const [a,...b] = arr
console.log(a,b)
```

skipping certain value or obtain a specific values of an array,

```javascript
const [t,,v] = arr
console.log(t,v)
```

putting default value

```javascript
const arr2 = [,9,6,7,0]
console.log(arr2)
const [def = 'y',c,q] = arr2
console.log(def,c,q)
```

rest operator,

```javascript
let array = [8,3,2,0,46,78,37,86,79]
const [a,b,...[c,d]] = array
console.log(
  a,b
)
console.log(
  c,d
)
```

object Destructuring

```javascript
let person = {
  a: 23,
  b:35
}
const {a,b} = person
console.log(a,b)
```

destructuring object and assigning into an array,

the below code will give error

```javascript
let array = []
let person = {
  a: 23,
  b: 35
}
console.log('hi')

  ({ a: array[0], b: array[1] } = person);
console.log(array)
```

to fix use `;` the `( ... )` expression needs to be preceded by a semicolon

```javascript
let array = []
let person = {
  a: 23,
  b: 35
}
console.log('hi');

  ({ a: array[0], b: array[1] } = person);
console.log(array)
```

## **Code: Object Destructuring \[**[**link**](https://www.sololearn.com/compiler-playground/WBqbdC56e1ls)**\]**

Now,

# **Weather App project**

# Header HTML

Write a header element containing two parts, i.e left and right

```xml
  <header class="header">
    <div class="header-left"></div>
    <div class="header-right"></div>
  </header>
```

The left weather icon is a large icon and give a data attribute to easily change the source,

```xml
  <img class="weather-icon large" src="/public/icons/sun.svg" alt=""  data-current-icon>
```

Inside this left header div display a current temperature,

use span to differentiate the temperature number and use ° tp display the degree symbol

```xml
<span data-current-temp>31</span>&deg;
```

Now we need to create 6 sections inside the right header,

use a CSS grid property to lay them out in CSS styling,

Inside this right header place info groups,

inside each info group a div label, a span and a degree symbol if its a temperature,

```xml
<div class="header-right">
      <div class="info-group">
        <div class="label">High</div>
        <div><span data-current-high>32</span>&deg;</div>
      </div>
      <div class="info-group">
        <div class="label">FL High</div>
        <div><span data-current-fl-high>27</span>&deg;</div>
      </div>
      <div class="info-group">
        <div class="label">Wind</div>
        <div><span data-current-wind>9</span><span class="value-sub-info">kmph</span></div>
      </div>
      <div class="info-group">
        <div class="label">Low</div>
        <div><span data-current-low>19</span>&deg;</div>
      </div>
      <div class="info-group">
        <div class="label">FL Low</div>
        <div><span data-current-fl-low>12</span>&deg;</div>
      </div>
      <div class="info-group">
        <div class="label">Precip</div>
        <div><span data-current-precip>0.1</span><span class="value-sub-info">in</span></div>
      </div>
    </div>
```

# Conclusion

I practiced Destructuring assignment and I completed the writing portion of the HTML for the header part of the weather API project.

# Code

1. code
    
    ![Alt text](1.%20day72%20code.png)
    
    preview
    
    ![Alt text](2.%20day72%20preview.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)