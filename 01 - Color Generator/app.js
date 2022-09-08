const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const textColor = document.querySelector(".textColor");


btn.addEventListener("click", function() {
    // gets the random number from the "colors" array length
    const randomNum = Math.floor(Math.random() * colors.length);
    // changes the background color of the body tag
    document.body.style.backgroundColor = colors[randomNum];
    textColor.textContent = colors[randomNum];
})