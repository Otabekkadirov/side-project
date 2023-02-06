let RANGE = 0;
let AGE = 0;

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
    let userClickedButton = event.target.id;
    RANGE = setRange(userClickedButton);

    event.target.parentElement.style.display = "none";
    form.style.display = "block";

    chooseBoxLayout(userClickedButton);
    // calculateAge(userClickedButton)
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let now = new Date();
  let userDate = new Date(USERDATE.value);
  AGE = now.getFullYear() - userDate.getFullYear();

  let user = USERNAME.value || "user";
  textContainer.textContent = `Hello, ${user}. You were born in ${userDate.getFullYear()}. You are ${AGE} years old.`;
  boxContainer.textContent = "";
  createBoxes(RANGE);
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
    if (i < AGE) {
      box.classList.add("colored-box");
    }
    boxContainer.append(box);
  }
}
function chooseBoxLayout(userChoice) {
  const layout = {
    // columns, rows, area, gap
    year: ["10", "10", "50px", "3px"],
    month: ["36", "35", "30px", "3px"],
    week: ["52", "100", "15px", "2px"],
    day: ["182", "202", "6px", "1px"],
  };
  boxContainer.style.setProperty("--columns", `${layout[userChoice][0]}`);
  boxContainer.style.setProperty("--rows", `${layout[userChoice][1]}`);
  boxContainer.style.setProperty("--box-area", `${layout[userChoice][2]}`);
  boxContainer.style.setProperty("--gap", `${layout[userChoice][3]}`);
}

