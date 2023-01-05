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