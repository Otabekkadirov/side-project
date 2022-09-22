let range = 0;
let age = 0;

const USERNAME = document.querySelector("#username");
const USERDATE = document.querySelector("#birthDate");

const form = document.querySelector("#form");
const output = document.querySelector(".output");
const textContainer = output.querySelector(".text-container");
const boxContainer = output.querySelector(".box-container");

const resetButton = form.querySelector("input[type='reset']");
resetButton.addEventListener("click", () => {
  window.location.reload();
});

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    range = setRange(event.target.id);

    event.target.parentElement.style.display = "none";
    form.style.display = "block";
    //todo
    switch (event.target.id) {
      case "year":
        boxContainer.style.setProperty("--columns", "10");
        boxContainer.style.setProperty("--rows", "10");
        boxContainer.style.setProperty("--box-area", "50px");
        boxContainer.style.setProperty("--gap", "3px");
        break;
      case "month":
        boxContainer.style.setProperty("--columns", "36");
        boxContainer.style.setProperty("--rows", "35");
        boxContainer.style.setProperty("--box-area", "30px");
        boxContainer.style.setProperty("--gap", "3px");
        break;
      case "week":
        boxContainer.style.setProperty("--columns", "52");
        boxContainer.style.setProperty("--rows", "100");
        boxContainer.style.setProperty("--box-area", "15px");
        boxContainer.style.setProperty("--gap", "2px");
        break;
      case "day":
        boxContainer.style.setProperty("--columns", "182");
        boxContainer.style.setProperty("--rows", "202");
        boxContainer.style.setProperty("--box-area", "6px");
        boxContainer.style.setProperty("--gap", "1px");
        break;
      default:
        return;
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let now = new Date();
  let userDate = new Date(USERDATE.value);
  age = now.getFullYear() - userDate.getFullYear();

  let user = USERNAME.value || "user";
  textContainer.textContent = `Hello, ${user}. You were born in ${userDate.getFullYear()}. You are ${age} years old.`;
  boxContainer.textContent = "";
  createBoxes(range);
  form.reset();
});

function setRange(userChoice) {
  const ranges = {
    year: 100,
    month: 1200,
    week: 5200,
    day: 36500,
  };
  return ranges[userChoice] || 0;
}

function createBoxes(number) {
  for (let i = 0; i < number; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    if (i < age) {
      box.classList.add("colored-box");
    }
    boxContainer.append(box);
  }
}
