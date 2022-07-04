"use strict";

const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

const screenWriting = document.querySelector(".writing");
screenWriting.textContent = "";

const screenPocket = document.querySelector(".pocket");
screenPocket.textContent = "";

let calcArray = [];

buttons.forEach((button) => {
  button.addEventListener("click", clickEvent);
});

function clickEvent() {
  if (+this.textContent >= 0 && +this.textContent <= 9) {
    writeToWritingScreen(this.textContent);
  } else {
    if (!(this.textContent == "=")) {
      screenPocket.textContent += screenWriting.textContent + this.textContent;
      screenWriting.textContent = "";
    } else {
      calculate();
    }
  }
}

function writeToWritingScreen(input) {
  screenWriting.textContent += input;
}

function calculateArray(array) {
  let result;
  let operation = array[1];
  switch (operation) {
    case "+":
      result = Number(array[0]) + Number(array[2]);
      break;
    case "-":
      result = Number(array[0]) - Number(array[2]);
      break;
    case "x":
      result = Number(array[0]) * Number(array[2]);
      break;
    case "÷":
      result = Number(array[0]) / Number(array[2]);
      break;
  }
  console.log(result);
}

let array = ["200", "x", "2"];
calculateArray(array);
