let range = 0;
let age = 0;

const USERNAME = document.querySelector("#username");
const USERDATE = document.querySelector("#birthdate");

const form = document.querySelector("#form");
const output = document.querySelector(".output");
const textContainer = output.querySelector(".text-container");
const boxContainer = output.querySelector(".box-container");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "year":
        range = 100;
        break;
      case "month":
        range = 1200;
        break;
      case "week":
        range = 5200;
        break;
      case "day":
        range = 36500;
        break;
      default:
        return;
    }
    event.target.parentElement.style.display = "none";
    form.style.display = "block";
    console.log(boxContainer.getAttributeNames());
    //todo
    boxContainer.style.setProperty("--columns", "5");
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

function createBoxes(number) {
  for (let i = 0; i < number; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    if (i < age) {
      box.classList.add("age");
    }
    boxContainer.append(box);
  }
}
