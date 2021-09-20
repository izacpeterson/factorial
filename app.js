/** @format */
//Made by Izac
let btn = document.getElementById("btn");
let inputBox = document.getElementById("inputBox");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
  let inputNum = inputBox.value;
  if (inputNum % 1 != 0 || inputNum == "") {
    alert("please enter a whole number");
  } else {
    result.innerText = `The Factorial of ${inputNum} is ${getFactorial(
      inputNum
    )}`;
  }
});

function getFactorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * getFactorial(x - 1);
  }
}
