import { error } from "./functions.js";

export const errorMessage = document.querySelector(".errorMessage");
const textarea = document.querySelector(".textarea");

const totalCounter = document.querySelector(".total-counter");
const totalWords = document.querySelector(".total-words");

const upperBtn = document.querySelector(".upperBtn");
const lowerBtn = document.querySelector(".lowerBtn");
const resetBtn = document.querySelector(".resetBtn");

textarea.addEventListener("input", () => {
  totalCounter.innerHTML = textarea.value.length;
  totalWords.innerHTML = textarea.value.trim().split(" ").length;
});

upperBtn.addEventListener("click", () => {
  if (textarea.value) {
    textarea.value = textarea.value.toUpperCase();
  } else {
    error("You should write something!");
  }
});
lowerBtn.addEventListener("click", () => {
  if (textarea.value) {
    textarea.value = textarea.value.toLowerCase();
  } else {
    error("You should write something!");
  }
});
resetBtn.addEventListener("click", () => {
  textarea.value = "";
  totalCounter.innerHTML = 0;
  totalWords.innerHTML = 0;
});
