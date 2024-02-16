import { randomNumber } from "./utils/numbers.js";
import { getRandomColor } from "./utils/colors.js";

import { $, $$, splitText } from "./utils/dom.js";

import { fetchData } from "./utils/fetch.js";

import { setItem, getItem } from "./utils/storage.js";

// Generate random numbers and colors for the paragraphs
// $ and $$ are imported from dom.js
// randomNumber and getRandomColor are imported from numbers.js and colors.js
const ps = $$("p");
const btn = $("button");
const showNumber = $(".show-number");

function populatePs(max) {
  ps.forEach((p) => {
    p.textContent = randomNumber(30);
    p.style.backgroundColor = getRandomColor();
  });
}

btn.addEventListener("click", (e) => {
  populatePs(30);
});

// Split the text of the strings
// splitText is imported from dom.js
splitText("[data-split]");

// Fetch data and display it
// fetchData is imported from fetch.js
async function showData() {
  const currentNumber = await fetchData(
    "https://kea-alt-del.dk/kata-distortion/"
  );
  showNumber.textContent = currentNumber.inQueue;
}

showData();

setInterval(showData, 5000);

// Dark mode toggle
// setItem and getItem are imported from storage.js
const darkModeToggle = $("#darkmode");

let isDarkMode = getItem("dark-mode");

function setTheme() {
  document.documentElement.classList.toggle("dark", isDarkMode);
  darkModeToggle.checked = isDarkMode;
  setItem("dark-mode", isDarkMode);
}

setTheme();

function toggleTheme() {
  isDarkMode = !isDarkMode;
  setTheme();
}

darkModeToggle.addEventListener("change", toggleTheme);
