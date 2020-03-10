let b0 = document.getElementById("button-0");
let b1 = document.getElementById("button-1");
let b2 = document.getElementById("button-2");
let b3 = document.getElementById("button-3");
let b4 = document.getElementById("button-4");
let b5 = document.getElementById("button-5");
let b6 = document.getElementById("button-6");
let b7 = document.getElementById("button-7");
let b8 = document.getElementById("button-8");
let b9 = document.getElementById("button-9");
let divideButton = document.getElementById("button-divide");
let multiplyButton = document.getElementById("button-multiply");
let minusButton = document.getElementById("button-minus");
let plusButton  = document.getElementById("button-plus");
let equalsButton = document.getElementById("button-equals");
let clearButton = document.getElementById("button-clear");
let divide = document.getElementById("full-width");

let numberButtons = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9];
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", displayNumber);
}

function displayNumber() {
  console.log(this.innerText)  
} 