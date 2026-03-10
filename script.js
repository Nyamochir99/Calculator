const input = document.getElementById("input");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");
const percentage = document.getElementById("percentage");
const huvaaah = document.getElementById("huvaah");
const urjih = document.getElementById("urjih");
const hasah = document.getElementById("hasah");
const nemehHasah = document.getElementById("nemehHasah");
const dot = document.getElementById("dot");
const tentsuu = document.getElementById("tentsuu");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

one.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "1";
  } else {
    input.value += "1";
  }
});
two.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "2";
  } else {
    input.value += "2";
  }
});
three.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "3";
  } else {
    input.value += "3";
  }
});
four.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "4";
  } else {
    input.value += "4";
  }
});
five.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "5";
  } else {
    input.value += "5";
  }
});
six.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "6";
  } else {
    input.value += "6";
  }
});
seven.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "7";
  } else {
    input.value += "7";
  }
});
eight.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "8";
  } else {
    input.value += "8";
  }
});
nine.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "9";
  } else {
    input.value += "9";
  }
});
zero.addEventListener("click", () => {
  if (input.value === "0") {
    input.value = "0";
  } else {
    input.value += "0";
  }
});
dot.addEventListener("click", () => {
  if (input.value === "") {
    input.value = "0.";
  } else {
    if (input.value.includes(".")) {
      input.value += "";
    } else {
      input.value += ".";
    }
  }
});
nemehHasah.addEventListener("click", () => {});
clear.addEventListener("click", () => {
  input.value = "";
});
