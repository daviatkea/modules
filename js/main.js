import { randomNumber } from "./utils/numbers.js";
import { getRandomColor } from "./utils/colors.js";

import { $, $$, splitText } from "./utils/dom.js";

import { fetchData } from "./utils/fetch.js";

import { setItem, getItem } from "./utils/storage.js";

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

splitText("[data-split]");

async function showData() {
  const currentNumber = await fetchData(
    "https://kea-alt-del.dk/kata-distortion/"
  );
  showNumber.textContent = currentNumber.inQueue;
}

showData();

setInterval(showData, 5000);

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
