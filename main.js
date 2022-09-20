const username = document.querySelector("#username");
const usernumber = document.querySelector("#usernumber");
const userdate = document.querySelector("#birthdate");

const form = document.querySelector("#form");
const output = document.querySelector(".output");
const textContainer = output.querySelector(".text-container");
const boxContainer = output.querySelector(".box-container");

form.addEventListener("submit", (event) => {
  let myDate = new Date(userdate.value);
  console.log(myDate);
  console.log(userdate.value);
  event.preventDefault();
  let user = username.value || "user";
  let chosenNumber = parseInt(usernumber.value) || 0;
  textContainer.textContent = `Hello, ${user}. You chose ${chosenNumber}.`;
  boxContainer.textContent = "";

  while (0 < chosenNumber) {
    let box = document.createElement("div");
    box.classList.add("box");
    boxContainer.append(box);
    chosenNumber--;
  }
  form.reset();
});
