Today #Day78 of #100DaysOfCode, I am coding and explaining the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

# Rendering the API Data

After that, head to the main.js file,

modify the .then function to call renderWether function,

```javascript
.then(
  renderWeather
).catch(e=>{
  console.error(e)
  alert('Error getting weather')
})
```

Now, define the renderWeather function,

and pass the current, daily and hourly objects,

also, remove the blurred class from the body tag,

```javascript
function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  renderDailyWeather(daily);
  renderHourlyWeather(hourly);
  document.body.classList.remove('blurred')
}
```

Define individual functions to render the data,

First, define current weather to render data,

```javascript
function renderCurrentWeather(current){
}
```

After that, Let's work on relaying the data in the current object to the HTML documents,

current is an object with the properties returned by the function parseCurrentWeather() from the weather.js file,

you can access an object's property using the syntax `objectname.propertyname`,

```javascript
document.querySelector('[data-current-temp]').textContent = current.currentTemp;
```

Instead of coding repetitive lines, define another function,

this function takes the selector and value as arguments, and an optional object with a parent property and its default is document object,

since we optionally would want to send an object hence it is placed in curly braces,

use ` `` ` when passing selector for queryselector as it has become template literal,

```javascript
function setValue(selector,value,{parent=document}={}){
parent.querySelector(`[data-${selector}]`).textContent = value
}
```

Now, call the set value function and pass the arguments,

```javascript
setValue('current-temp',current.currentTemp)
setValue('current-high',current.highTemp)
setValue('current-fl-high',current.highFeelsLike)
setValue('current-low',current.lowTemp)
setValue('current-fl-low',current.lowFeelsLike)
setValue('current-wind',current.windSpeed)
setValue('current-precip',current.precip)
```

Then, define a const current icon variable,

```javascript
currentIcon.src = getIconUrl(current.iconCode)
```

and define another function as we will call this function for daily and hourly functions,

```javascript
function getIconUrl(iconCode){
 return `icon/${iconCode}.svg`
}
```

But the current object holding the iconCode is a number format which is getting from the API key,

so we need to map this number of iconCode to a .svg file names,

create a new iconMap.js file

\[

we won't be using objects to assign the iconCode description because in objects the properties are string type.

\]

create and export an icon map variable and define a function,

```javascript
export const Icon_MAP = new Map()
```

since a couple of icon codes property will have the same description to reduce the code in the few lines we are going to use a function,

```javascript
function addMapping(values,icon){
}
```

Also since a couple of icon codes have the same description, you are gonna use for each method to set the same description to the icon quotes which are returning from the API key

the value argument is an array hence we are using for each method to set the icon to each index value of the array,

remember for each method is used to only iterate over the values,

```javascript
values.forEach(value => {
});
```

Inside this, for each method, we are going to set that is map this value to the icon description,

```javascript
Icon_MAP.set(value,icon)
```

Then, call the addMapping to map,

Weather variable documentation WMO Weather interpretation codes (WW) [\[link\]](https://open-meteo.com/en/docs/dwd-api)

```javascript
addMapping([0,1],'sun')
addMapping([2],'cloud-sun')
addMapping([3],'cloud')
addMapping([45,48],'smog')
addMapping([51,53,55,56,57,61,63,65,66,67,80,81,82],'cloud-showers-heavy')
addMapping([71,73,75,77,85,86],'snowflake')
addMapping([95,96,99],'cloud-bolt')
```

If you console log you can see all the mapped values,

```javascript
console.log(Icon_MAP.get(51))
```

### Code: map&foreach [\[link\]](https://www.sololearn.com/compiler-playground/WMm4G771aA7w)

Now, import the variable from map.js file in the main.js,

***<mark>Remember it is a named export so keep enclosed in the curly braces,</mark>***

only default exports variables are without curly braces,

```javascript
import { getWeather } from "./weather.js";
```

After that, in the getIconUrl function return wrap the iconCode with get method to access the description mapped to this iconCode,

```javascript
function getIconUrl(iconCode){
  return `/public/icons/${Icon_MAP.get(iconCode)}.svg`
}
```

If you face any issue like the icon not displaying in the preview, check whether the svg directory path is mentioned correctly or not.

After that, select the day section and card tempelate and assign them to new variables,

```javascript
const dailySection = document.querySelector('[data-day-section]')
const dayCardtemplate = document.getElementById(day-card-section)
```

Then, define a function to render the daily function and pass the daily object,

```javascript
function renderDailyWeather(daily){
  dailySection.innerHTML = ''
}
```

Now, use for each method to loop through the daily,

use the cloneNode method set to true to clone HTML elements in template element,

call the setvalue function and pass the temp value and the created element,

use date-time format method to format and get just the weekday,

also pass the iconCode property in dayily object to getIconUrl function and assign it to the element src,

use append() method to add elements,

```javascript
daily.forEach(day => {
    const element = dayCardtemplate.content.cloneNode(true)
    setValue('temp',day.maxTemp,{parent:element})
    setValue('date',DAY_FORMATTER.format(day.timestamp),{parent:element})
    element.querySelector('[data-icon]').src = getIconUrl(day.iconCode)
    dailySection.appendChild(element)
  });
```

If you want to understand follow the below link where I have explained adding the template by breaking it down in a simple way,

### Code: templatehtml&js [\[link\]](https://www.sololearn.com/compiler-playground/WQCVMfPTBXwq)

After that, define a function to render the hourly function and pass an hourly object,

the code is similar to the daily section as we will create elements and appending to the HTML hourly section,

```javascript
function renderHourlyWeather(hourly) {
  hourlySection.innerHTML = "";
}
```

and call the setvalue function and pass the temp, fL temp, wind, precip values,

```javascript
hourly.forEach((hour) => {
    const element = hourRowTemplate.content.cloneNode(true);
    setValue("temp", hour.temp, { parent: element });
    setValue("day", DAY_FORMATTER.format(hour.timestamp), { parent: element });
    setValue("time", HOUR_FORMATTER.format(hour.timestamp), { parent: element });
    setValue("fl-temp", hour.feelslike, { parent: element });
    setValue("wind", hour.windSpeed, { parent: element });
    setValue("precip", hour.precip, { parent: element });
    element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode);
    hourlySection.append(element);
  });
```

# Getting the user's location

Lastly, All this data is displayed according to the user location,

use get current position() methodand pass two functions in the event of success and failure as arguments,

```javascript
navigator.geolocation.getCurrentPosition(positionSuccess,positionError)
```

Now, define the success function and copy the getweather code,

```javascript
function positionSuccess({ coords }) {
  geoloc.remove();
  getWeather(
    coords.latitude,
    coords.longitude,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    tempunit()
  )
    .then(renderWeather)
    .catch((e) => {
      console.error(e);
      alert("Error getting weather");
    });
}
```

Then, define the error function in the event of location blocked,

```javascript
function positionError() {
  geoloc.classList.remove('none');
  let latit = (Math.random()*100).toPrecision(7)
  let longi = (Math.random()*100).toPrecision(7)

  setTimeout(() => {
    getWeather(
      latit,
      longi,
      Intl.DateTimeFormat().resolvedOptions().timeZone,
      tempunit()
    )
      .then(renderWeather)
      .catch((e) => {
        console.error(e);
        alert("Error getting weather");
      });
  geoloc.remove();

  }, 2000);
}
```

# Conclusion

I completed Transforming the API Data and getting the user's location of the weather API project.

Finally, That brings the completion of a Full Fledged weather app. Thanks, kyle. Learned a lot like getting API data using Axios library and de structuring and lot of function calls.

Not yet completed For the weather API project that kyle created, I am gonna scale by adding features like,

1. Ability to Switch between temperature units °Fahrenheit and °Celsius,
    
2. Import Geo-Location data using Axios Library.
    
3. Displaying " Getting Random Location..." prompt when user location is disabled,
    
4. Exporting the random location Geo-Location Info to Front-End.
    

# Code

1. Code
    
    ![Alt text](1.%20day78%20code.png)
    
    preview
    
    ![Alt text](2.%20day78%20preview.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)