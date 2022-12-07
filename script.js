const days = document.querySelector(".days");
const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

const counter = document.querySelector(".counter");
const title = document.querySelector(".title");
const auguri = document.querySelector(".auguri");

let now = new Date();
const day2 = now.getDate();
const dec = now.getMonth() + 1;
let cYear = now.getFullYear();
let cYearStr = cYear.toString();

const exp = dec === 12 && day2 > 26 && day2 < 32;
if (exp) {
  cYear = cYear + 1;
  cYearStr = cYear.toString();
}
const xmas = "December 25 " + cYearStr;
const endDate = new Date(xmas);
const endDateInMs = endDate.getTime();

const secondInMs = 1000;
const minuteInMs = 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs = 24 * hourInMs;

const counterTimer = setInterval(timer, 1000);

function timer() {
  // oggi in ms

  const nowInMs = new Date().getTime();
  const diff = endDateInMs - nowInMs;

  if (diff > 0) {
    days.innerHTML = Math.floor(diff / dayInMs);
    hrs.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
    mins.innerHTML = Math.floor((diff % hourInMs) / minuteInMs);
    secs.innerHTML = Math.floor((diff % minuteInMs) / secondInMs);
  } else if (day2 === 26 && dec === 12) {
    clearInterval(timer);
    title.classList.add("invisible");
    counter.innerHTML = "<h1>🎄🎄Merry Christmas 🎅🏻🎅🏻</h1>";
  } else {
    clearInterval(timer);
    title.classList.add("invisible");
    counter.innerHTML = "<h1>🎄🎄Merry Christmas 🎅🏻🎅🏻</h1>";
  }
}
