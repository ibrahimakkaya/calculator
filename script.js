"use strict";

const buttons = document.querySelectorAll(".btn");

const screenWriting = document.querySelector(".writing");
screenWriting.textContent = "";

const screenPocket = document.querySelector(".pocket");
screenPocket.textContent = "";

let calcArray = [];
let calcArrayLastItem;

buttons.forEach((button) => {
  button.addEventListener("click", clickEvent);
});

function clickEvent() {
  if (this.textContent == "CLEAR") {
    calcArray = [];
    screenPocket.textContent = "";
    screenWriting.textContent = "";
  }
  if (+this.textContent >= 0 && +this.textContent <= 9) {
    writeToWritingScreen(this.textContent);
  } else if (calcArray.length < 3 && screenWriting.textContent != "") {
    calcArray.push(screenWriting.textContent);
    calcArray.push(this.textContent);

    if (calcArray.length == 4) {
      calculateArray(calcArray);
    }
    screenPocket.textContent = calcArray[0] + calcArray[1];
    screenWriting.textContent = "";
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
  array[0] = result;
  array[1] = array[3];
  array.pop();
  array.pop();
  return array[0];
}
