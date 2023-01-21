Today #Day96 of #100DaysOfCode, I am coding and explaining by 'Building a Clock in JavaScript' taught by \[WebDevSimplified\].

# JavaScript

call the clock =every 1 second,

```javascript
setInterval(setClock,1000)
```

Now, define the function,

add the second's ratio to minutes hand and and minutes ratio to hours hand to make them move slowly,

```javascript
setClock = ()=>{
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = ( minutesRatio + currentDate.getHours())/12
}
```

add data attributes to the clock hands,

```javascript
<div class="hand hour" data-hour-hand></div>
<div class="hand minute" data-minute-hand></div>
<div class="hand second" data-second-hand></div>
```

define a function to make them move,

use setProperty method to set the value,

this setProperty takes the variable define in the css,

```javascript
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
```

Callback inside the setclock,

```javascript
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
```

to prevent the error of hands at noon position, call the set clock function,

```javascript
setClock()
```

# Conclusion

I successfully completed 'Building an Analogue Clock in JavaScript'.

I also added the current hour scale distinct and color to be distinct from the rest.

# Code

1. code
    
    ![Alt text](1.%20day96%20code.png)
    
    preview
    
   ![Alt text](2.%20day%2096%20preview.png)
    

# Source: WebDevSimplified [\[Link\]](https://www.youtube.com/watch?v=Ki0XXrlKlHY&t=12s)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)