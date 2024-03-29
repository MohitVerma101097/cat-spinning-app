const cat = document.querySelector("html");
const body = document.querySelector("body");
let catPurr;

const playSound = () => new Audio("audio/gato.mp3").play();

const purr = () => {
    catPurr = document.createElement("h1");
    catPurr.innerHTML = "Maoooooo";
    body.appendChild(catPurr);
};

const purrClear = () => catPurr && catPurr.remove();

cat.addEventListener("mouseout", purrClear);
cat.addEventListener("mouseover", purr);
cat.addEventListener("click", playSound);
