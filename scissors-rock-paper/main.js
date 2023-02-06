// get titles
const player = document.querySelector("[data-player]");
const computer = document.querySelector("[data-computer]");
const result = document.querySelector("[data-result]");

// get buttons
const buttons = document.querySelectorAll(".btn");

// Events
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.dataset.selection);
    });
});
