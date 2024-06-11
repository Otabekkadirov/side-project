const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"`);
    if (!audio) return;
    console.dir(audio);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

document.addEventListener("keydown", playSound);
