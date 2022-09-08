const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const textColor = document.querySelector(".textColor");

btn.addEventListener("click", function() {
    const newBg = generateHexBG();
    document.body.style.backgroundColor = newBg;
    textColor.textContent = newBg;
})
// generate HextBG to string
function generateHexBG() {
    let newString = "";
    let newColor = "";
    let randomNum = 0;
    // hex color code contains 6 characters
    for (let i = 0; i < 6; i++) {
        randomNum = generateRandomNum(hex);
        newString += hex[randomNum];
        newColor = `#${newString}`;
    }
    newString = "";
    return newColor;
    
}
// generating random number base of the array size
function generateRandomNum(array) {
    return Math.floor(Math.random() * array.length);
}

