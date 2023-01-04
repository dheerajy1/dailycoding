import { Icon_MAP } from "./iconMap.js";
import { getWeather } from "./weather.js";

navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

let currentobj;
let dailyarr;
let hourlyobj;

function positionSuccess({ coords }) {
  getWeather(
    coords.latitude,
    coords.longitude,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
    .then(renderWeather)
    .catch((e) => {
      console.error(e);
      alert("Error getting weather");
    });
}

function positionError() {
  getWeather(10, 10, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then(renderWeather)
    .catch((e) => {
      console.error(e);
      alert("Error getting weather");
    });
}

function renderWeather({ current, daily, hourly }) {
  renderCurrentWeather(current);
  renderDailyWeather(daily);
  renderHourlyWeather(hourly);
  document.querySelector(".blurred").classList.remove("blurred");
}

function setValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconCode) {
  return `/public/icons/${Icon_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[data-current-icon]");

function renderCurrentWeather(current) {
  currentobj = current;
  currentIcon.src = getIconUrl(current.iconCode);
  setValue("current-temp", current.currentTemp);
  setValue("current-high", current.highTemp);
  setValue("current-fl-high", current.highFeelsLike);
  setValue("current-low", current.lowTemp);
  setValue("current-fl-low", current.lowFeelsLike);
  setValue("current-wind", current.windSpeed);
  setValue("current-precip", current.precip);
}

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const dailySection = document.querySelector("[data-day-section]");
const dayCardTemplate = document.getElementById("day-card-template");

function renderDailyWeather(daily) {
  dailyarr = daily;
  dailySection.innerHTML = "";
  daily.forEach((day) => {
    const element = dayCardTemplate.content.cloneNode(true);
    setValue("temp", day.maxTemp, { parent: element });
    setValue("date", DAY_FORMATTER.format(day.timestamp), { parent: element });
    element.querySelector("[data-icon]").src = getIconUrl(day.iconCode);
    dailySection.append(element);
  });
}

const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: "numeric" });
const hourlySection = document.querySelector("[data-hour-section]");
const hourRowTemplate = document.getElementById("hour-row-template");

function renderHourlyWeather(hourly) {
  hourlyobj = hourly;
  hourlySection.innerHTML = "";
  hourly.forEach((hour) => {
    const element = hourRowTemplate.content.cloneNode(true);
    setValue("temp", hour.temp, { parent: element });
    setValue("day", DAY_FORMATTER.format(hour.timestamp), { parent: element });
    setValue("time", HOUR_FORMATTER.format(hour.timestamp), {
      parent: element,
    });
    setValue("fl-temp", hour.feelslike, { parent: element });
    setValue("wind", hour.windSpeed, { parent: element });
    setValue("precip", hour.precip, { parent: element });
    element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode);
    hourlySection.append(element);
  });
}

let celci = document.querySelector("[data-celcius]");
let fahren = document.querySelector("[data-fahrenheit]");
let tempunitsfare;

celci.addEventListener("click", () => {
  celci.classList.add("active");
  fahren.classList.add("inactive");
  convertTempunitsToC({ currentobj, dailyarr, hourlyobj });
  changeunit("C");
});

fahren.addEventListener("click", () => {
  celci.classList.remove("active");
  fahren.classList.remove("inactive");
  revertTempunitsToF({ currentobj, dailyarr, hourlyobj });
  changeunit("F");
});

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
