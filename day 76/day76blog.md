Today #Day76 of #100DaysOfCode, I am coding and explaining the 'How To Build A Weather App In JavaScript Without Needing A Server' project taught by \[Web Dev Simplified\]

# HTML Templates

All that is left to create in the HTML file are templates for the day card, hour table rows,

the reason we are creating a template for the day card and hour table rows is that JavaScript dynamically picks this day Card template and creates duplicates according to the data,

```xml
<template id="day-card-template"></template>
<template id="hour-row-template"></template>
```

Modify the HTML after copying the day card elements,

```xml
<div class="day-card">
<img  data-icon class="weather-icon" alt="">
<div class="day-card-day" data-date>Monday</div>
<div><span data-temp>32</span><span>&deg;</span></div>
</div>
```

Modify the HTML after copying the table row elements,

```xml
 <tr class="hour-row">
<td>
     <div class="info-group">
     <div class="label" data-day></div>
     <div data-time></div>
     </div>
</td>
<td>
     <img data-icon class="weather-icon" alt="">
</td>
<td>
     <div class="info-group">
     <div class="label">TEMP</div>
     <div><span data-temp>32</span><span>&deg;</span></div>
     </div>
</td>
<td>
     <div class="info-group">
     <div class="label">FL TEMP</div>
     <div><span data-fl-temp></span><span>&deg;</span></div>
     </div>
</td>
<td>
     <div class="info-group">
     <div class="label">WIND</div>
     <div><span data-wind></span><span class="value-sub-info">kmph</span></div>
     </div>
</td>
<td>
     <div class="info-group">
     <div class="label">PRECIP</div>
     <div><span data-precip></span><span class="value-sub-info">in</span></div>
     </div>
     </div>
</td>
</tr>
```

Finally, completed the HTML and CSS part for the Weather API project.

# Connecting to API

Now, move on to JavaScript to export the info using the API,

create a weather.js file,

write a function to export the latitude, longitude, timezone,

```javascript
export function getWeather(lat,lon,timezone){
}
```

Go to the weather open meteo site [\[link\]](https://open-meteo.com/en/docs)and select the required hourly variables, daily weather variables and parameter timezone,

In the JavaScript, we are gonna get the time zone dynamically according to the user location,

Finally, click the API URL and copy the JavaScript file URL from the search bar, [\[link\]](https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FChicago)

Now, We need to dynamically add the latitude and othe hourly variables..etc to pass into our getWeather function as arguments,

To make it easier, use Axios library,

Axios is a fetching library that makes fetching easier,

```javascript
npm i axios
```

After installing axios library, import it using

```javascript
import axios from 'axios'
```

Instead, use the following link and place it below the starting body tag,

```javascript
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Now, pass the URL inside the getWeather function using the Axios library get method,

only pass the start portion of the URL i.e before the query parameters,

```javascript
export function getWeather(lat,lon,timezone){
    axios.get('https://api.open-meteo.com/v1/forecast')
}
```

Now, define all the query parameters

```javascript
 axios.get('https://api.open-meteo.com/v1/forecast',
{
        params:{
            lattitude: lat,
            longitude: lon,
            timezone,
    }
 })
```

After that, remove the parameters from the URL that we defined in the above code and copy the URL and paste it at the end of the forecast,

To test the code return the axios.get()

and head to the main.js file make sure to import the getWeather function from the weather.js file,

use curly braces for named exports,

since we are importing another js file in main.js file put the type module attribute in the script tag in HTML,

```javascript
import {getWeather} from './weather'
```

now pass the latitude and longitude and time zone,

```javascript
getWeather(10,10,Intl.DateTimeFormat().resolvedOptions().timeZone).then(res=>{
    console.log(res.data)
})
```

Inside the console of the web browser you should see the output,

```javascript
Object
    current_weather:
    temperature: 83
    time: 1672318800
    weathercode: 0
    winddirection: 26
    windspeed: 18.8
...
```

# Problems

problem -1

Faced an issue where Axios is not importing in weather.js file.

The solution kept cdn file below the starting body tag.

problem -2

Faced an issue where importing weather.js file is not received by main.js file.

# Conclusion

I completed the writing portion of HTML Templates and Connecting to the API of the weather API project.

# Code

1. code
    
    ![Alt text](1.%20day76%20code.png)
    
    preview
    
    ![Alt text](2.%20day76%20preview.png)
    
    output
    
    ![Alt text](3.%20day76%20output.png)
    

# Source: Code with WebDevSimplified \[[click](https://youtu.be/w0VEOghdMpQ)\]

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)