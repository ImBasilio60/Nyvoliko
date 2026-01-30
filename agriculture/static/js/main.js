import {weather} from "./weather.js";

if (document.querySelector("body").classList.contains("dashboard-page")) {
  weather();
}