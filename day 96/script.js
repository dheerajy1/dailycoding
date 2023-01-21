setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");
const numbersNodes = Array.from(document.querySelectorAll("[data-number]"));

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}
setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

let num = numbersNodes.find(
  (element) =>
    element.textContent ==
    new Date()
      .toLocaleString("en-IN", { hour: "numeric", hour12: true })
      .slice(0, 2)
);
num.classList.add("active");
setClock();
