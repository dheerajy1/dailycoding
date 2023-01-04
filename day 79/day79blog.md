Today #Day79 of #100DaysOfCode, I am adding the toggle to Switch between temperature units °Fahrenheit and °Celcius 'How To Build A Weather App In JavaScript Without Needing A Server' project.

# Header section HTML,

## Header-Left,

gave data attributes in class to the respective temp units

```xml
<span class="temp-units-celcius" data-celcius>&deg;C</span>
<span class="temp-units-fahrenheit" data-fahrenheit>&deg;F</span>
```

## Header-Right,

gave data attributes in class to the respective temp units

```xml
<span data-current-high>32</span>&deg;
<span data-tempunitsfare>F</span>

<span class="tempunits" data-current-fl-high>27</span>&deg;
<span data-tempunitsfare>F</span>
```

# Header section CSS

## Header-Left,

add a class list so that upon click the scale will be changed,

```xml
.temp-units-celcius {
  transform: scale(0.4);
  translate: -1px -5px;
}
.temp-units-celcius::after {
  content: "";
  border: 0.5px solid rgb(0, 0, 0);
  margin-left: 8px;
}
.temp-units-fahrenheit {
  transform: scale(0.9);
  translate: -8px -5px;
}
.temp-units-celcius.active {
  transform: scale(0.9);
}
.temp-units-fahrenheit.inactive {
  transform: scale(0.4);
}
```

# JavaScript

Just 95 lines of code,

Now, Let's write code to change the temperature value upon clicking the Celsius unit the entire header section and day section and the hourly section temp units having data attribute should be changed for this, I have defined a call back function in the add event listener which will listen to the click,

## Event Listeners,

```javascript
let celci = document.querySelector("[data-celcius]");
let fahren = document.querySelector("[data-fahrenheit]");
let tempunitsfare;

celci.addEventListener("click", () => {
  celci.classList.add("active");
  fahren.classList.add("inactive");
  convertTempunitsToC({ currentobj, dailyarr, hourlyobj });
  changeunit("C");
});
```

Now, define another call back function to revert to Fahrenheit Temp unit up on click using add event listener,

```javascript
fahren.addEventListener("click", () => {
  celci.classList.remove("active");
  fahren.classList.remove("inactive");
  revertTempunitsToF({ currentobj, dailyarr, hourlyobj });
  changeunit("F");
});
```

## Fun-Functions,

Now, define the functions and select the elements having Temperature and modify the innerText

```javascript
function changeunit(value) {
  tempunitsfare = document.querySelectorAll("[data-tempunitsfare]");
  tempunitsfare.forEach((e) => {
    e.textContent = value;
  });
}

function convertTempunitsToC() {
  convertTempCurrentWeather(currentobj);
  convertTempDailyWeather(dailyarr);
  convertTempHourlyWeather(hourlyobj);
}
function convertTempCurrentWeather() {
  setValue("current-temp", conversionToC(currentobj.currentTemp));
  setValue("current-high", conversionToC(currentobj.highTemp));
  setValue("current-fl-high", conversionToC(currentobj.highFeelsLike));
  setValue("current-low", conversionToC(currentobj.lowTemp));
  setValue("current-fl-low", conversionToC(currentobj.lowFeelsLike));
}

function convertTempDailyWeather() {
  let dailydatatemp = document
    .querySelector("[data-day-section]")
    .querySelectorAll("[data-temp]");

  dailydatatemp.forEach((element, index) => {
    element.textContent = conversionToC(dailyarr[index].maxTemp);
  });
}
function convertTempHourlyWeather() {
  let hourlydatatemps = document.querySelectorAll("[data-hour-row]");

  hourlydatatemps.forEach((element, index) => {
    element.querySelector("[data-temp]").textContent = conversionToC(
      hourlyobj[index].temp
    );
    element.querySelector("[data-fl-temp]").textContent = conversionToC(
      hourlyobj[index].feelslike
    );
  });
}

function conversionToC(value) {
  return (((value - 32) * 5) / 9).toPrecision(2);
}

function revertTempunitsToF() {
  revertTempCurrentWeather(currentobj);
  revertTempDailyWeather(dailyarr);
  revertTempHourlyWeather(hourlyobj);
}
function revertTempCurrentWeather() {
  setValue("current-temp", currentobj.currentTemp);
  setValue("current-high", currentobj.highTemp);
  setValue("current-fl-high", currentobj.highFeelsLike);
  setValue("current-low", currentobj.lowTemp);
  setValue("current-fl-low", currentobj.lowFeelsLike);
}
function revertTempDailyWeather() {
  let dailydatatemp = document
    .querySelector("[data-day-section]")
    .querySelectorAll("[data-temp]");

  dailydatatemp.forEach((element, index) => {
    element.textContent = dailyarr[index].maxTemp;
  });
}
function revertTempHourlyWeather() {
  let hourlydatatemps = document.querySelectorAll("[data-hour-row]");

  hourlydatatemps.forEach((element, index) => {
    element.querySelector("[data-temp]").textContent = hourlyobj[index].temp;
    element.querySelector("[data-fl-temp]").textContent =
      hourlyobj[index].feelslike;
  });
}
```

# Conclusion

I completed the CSS part and JavaScript part of adding switching between celsius and Fahrenheit in my weather API project.

# Code

1. code
    ![Alt text](1.%20day79%20code.png)
    
2. preview
    
    1) In Fahrenheit unit,
    
        ![Alt text](2.%20day79%20preview%20test%201.png)
    
    2) In Celsius unit,
    
        ![Alt text](3.%20day79%20preview%20test%202.png)
    

# Author: Dheeraj.y

# Connect with me:

* [My Twitter](https://twitter.com/yssdheeraj)
    
* [My LinkedIn](https://www.linkedin.com/in/dheerajy1/)
    
* [My GitHub](https://github.com/dheerajy1)
    
* [My Hashnode](https://dheerajy1.hashnode.dev/)