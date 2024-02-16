export function $(selector) {
  return document.querySelector(selector);
}

export function $$(selector) {
  return document.querySelectorAll(selector);
}

export function splitText(selector) {
  if (!selector) {
    return;
  }

  document.querySelectorAll(selector).forEach((element) => {
    let charIndex = 0;
    const words = element.textContent.trim().split(" ");

    const transformedWords = words
      .map((word, i) => {
        const letters = Array.from(word)
          .map(
            (letter) =>
              `<span style="--char-index: ${charIndex++}" class="letter">${letter}</span>`
          )
          .join("");
        return `<span style="--word-index: ${i}" class="word">${letters}</span>`;
      })
      .join(" ");

    element.innerHTML = transformedWords;
  });
}
