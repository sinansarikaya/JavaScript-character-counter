import { errorMessage } from "./app.js";

export const error = (msg) => {
  errorMessage.innerHTML = msg;
  errorMessage.style.bottom = "0";
  setTimeout(() => {
    errorMessage.style.bottom = "-100px";
  }, 2000);
};
