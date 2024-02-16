import { randomNumber } from "./numbers.js";

export function getRandomColor() {
  const r = randomNumber(255);
  const g = randomNumber(255);
  const b = randomNumber(255);

  return `rgb(${r} ${g} ${b})`;
}
