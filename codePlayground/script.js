const btns = document.querySelectorAll(".btn");
const answer = document.querySelector(".weapon");
const tubag = document.querySelector(".tubag");
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const weapon = e.currentTarget.classList;
        if (weapon.contains("rock")) {
            answer.textContent = "Rock";
            tubag.value = "Rock";
        } else if (weapon.contains("paper")) {
            answer.textContent = "Paper";
            tubag.value = "Paper";
        } else {
            answer.textContent = "Scissors";
            tubag.value = "Scissors";
        }
        
    })
})