Today #Day80 of #100DaysOfCode, I am adding the toggle to Switch between temperature units °Fahrenheit and °Celcius and imported Geo-Location data and a 'Getting random location' prompt for the 'How To Build A Weather App In JavaScript Without Needing A Server' project.



# 2\. Getting data from json file using Axios library,

In Axios library, get() method returns a promise hence you then() method to wait for the promise to get resolved,

you can use the catch() method to display the error if you want to, this will be useful if the Json file is deleted or its path is mismatched can you can log 'error getting the Geo-Location information',

```javascript
export function getGeoInfo() {
  return axios.get("Json File name").then((response) => {
    const data = response.data;
    const geoObj = data[Math.round(Math.random() * (data.length - 1))];
    geoObj.country = "India";
    return geoObj;
  });
}
```

# 3\. Displaying ' getting random location' to inform the user,

## HTML

```xml
  <div class="container-geo">
    <div class="label-geo">
      <div class="nogeoloc">
        Getting random Geo-Location...
      </div>
    </div>
  </div>
```

## CSS

In CSS I kept display to none because I want to display this information in the event of getting location error returned by the browser when the location is displayed,

```css
.container-geo{
  display: none;
  position: absolute;
  margin:35vh 0 0 40vw; 
  z-index: 1;
}
.label-geo {
  min-width: 20vw;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 1vw 0 1vw;
  background-color:hsl(0, 0%, 0%);
}
.show {
  display: block;
}
.nogeoloc {
  color: #ffffff;
}
```

## JavaScript

Now, Select the div containing the info,

```javascript
const geoloc = document.querySelector(".container-geo");
```

After that, add the class list show when the promise of the get current position is returning error function which is the position error,

```javascript
  geoloc.classList.add("show");
```

After that, remove this class list when the promise is resolved in the getweather function,

```javascript
geoloc.remove();
```

# 4\. Exporting the random location Geo-Location Info to Front-End.

## HTML

Enclosed the location info in a div and give each a data attribute to select in Javascript,

```xml
 <div class="geo-location">
   <div class="info-geo" data-lat>Latitude</div>
   <div class="info-geo" data-lon>Longitude</div>
   <div class="info-geo" data-city>City</div>
   <div class="info-geo" data-state >State</div>
  <div class="info-geo" data-country >Country</div>
</div>
```

## CSS

```css
.icon-temp-loc-holder{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.icon-temp{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.geo-location{
  overflow: auto;
}
```

## JavaScript

Define a displayGeoInfo function, and call this function when the promise of the getweather is resolved,

```javascript
displayGeoInfo({ geoinfo });
function displayGeoInfo({ geoinfo }) {
}
```

Inside this function, Let's define what to export,

call the setValue function and pass the arguments like the data attribute and the values,

```javascript
setValue("lat", `Latitude : ${geoinfo.lat}`);
setValue("lon", `Longitude : ${geoinfo.lon}`);
setValue("city", `City : ${geoinfo.name}`);
setValue("state", `State : ${geoinfo.state}`);
setValue("country", `Country : ${geoinfo.country}`);
```

# Conclusion

I completed the weather API project.

Finally, That brings the completion of a Full Fledged weather app. Learned a lot like getting API data using Axios library and de structuring and lot of function calls.

I added the following features on my own,

1. Ability to Switch between temperature units °Fahrenheit and °Celcius,
    
2. Import Geo-Location data using Axios Library.
    
3. Displaying " Getting Random Location..." prompt when user location is disabled,
    
4. Exporting the random location Geo-Location Info to Front-End.
    

# Code

1. code
    
    ![Alt text](1.%20day80%20code.png)
    
2. preview 1 loading info
    
    ![Alt text](2.%20day80%20preview.png)
    
    results
    
    ![Alt text](3.%20day80%20preview%202.png)
    

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)

---

> **Today 3rd September 2023, I am fixing two issues about the Weather API app.**
> 
# 1\. Issue Long table

## Issue Summary:

The issue I faced was related to creating a scrollable table within a parent div. Specifically, I wanted to have a scrollable container for a table.

## Solution:

To achieve the desired result, you can follow these steps:

1. Create a parent div with a specific height value and enable scrolling for it using the overflow: auto; property. This will ensure that the container becomes scrollable if the content exceeds its height.
    

```sql
.container-hourly-div {
  height: 400px; /* Set a specific height value */
  overflow: auto; /* Enable scrolling for the container */

}
```

1. Create a table within the parent div to display the content. Apply necessary styling to the table, such as setting the width to 100%, centering the text, adjusting padding, and adding borders.
    

```sql
.hour-section {
  width: 100%;
  text-align: center;
  border-spacing: 0;
  padding: 0% 4% 0% 5%;
  border-radius: 9px;
  border: 1px solid #111211;
}
```

# 2\. Issue No contact Links

I added my contact links from the project \[[Link](https://dheerajy1.hashnode.dev/built-a-css-project-and-learnt-js-closures-day66)\].

# Conclusion

Learning Objectives,

1. Fixed Issued scrollable Table,
    
2. Added Contact Links.
    

## Site Live \[[Link](https://weather-app-dheeraj.netlify.app/)\]

## Images:

### Image-1

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693755230133/fce3d282-7749-4c2b-a75c-6f40fa54436d.png)

### Image-2

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693755235103/324eab51-11cb-4659-930d-96a9259ba46a.png)

### Image-3

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1693755237917/07063661-b862-45c5-8329-2715dedebe95.png)

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)