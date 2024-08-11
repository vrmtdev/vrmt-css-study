"use strict";

const switcher = document.querySelector(".main-title button");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className.includes("dark-theme")) {
    this.textContent = "☀️";
  } else {
    this.textContent = "🌙";
  }

  console.log("current class name: " + className);
});
