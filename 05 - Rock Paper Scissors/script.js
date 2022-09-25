// player and cpu score
const playerScoreText = document.getElementById("player-score")
const cpuScoreText = document.getElementById("cpu-score")

// player and cpu chosen weapon
const playerChoice = document.querySelector("#player-choice")
const cpuChoice = document.querySelector("#cpu-choice")
// captures all btn
const btn = document.querySelectorAll(".btn")
const btnContainer = document.querySelector(".btn-container")


const info = document.querySelector("#game-info")
const gameInformation = ["TIEEEEEEEE", "+1"]
// captures chosen weapon from each players
let playerWeapon = ""
let cpuWeapon = ""
// player score - to be incremented and displayed
let playerScore = 0
let cpuScore = 0
// weapons
const choices = ["Rock", "Paper", "Scissor"]



btn.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        // capture the specific button and it's list og class
        const btnClass = e.currentTarget.classList
        if (btnClass.contains("rock")) {
            playerWeapon = choices[0]
            playerChoice.textContent = playerWeapon
            cpuAnswer()
            getScore(playerWeapon, cpuWeapon)

        } else if (btnClass.contains("paper")) {
            playerWeapon = choices[1]
            playerChoice.textContent = playerWeapon
            cpuAnswer()
            getScore(playerWeapon, cpuWeapon)
        } else {
            playerWeapon = choices[2]
            playerChoice.textContent = playerWeapon
            cpuAnswer()
            getScore(playerWeapon, cpuWeapon)
        }
    })
})







function getScore(playerAnswer, cpuAnswer) {
    // Rock events
    if (playerAnswer == choices[0] && cpuAnswer == choices[1]) {
        cpuScore += 1
        displayInfo(2)
        
    } else if (playerAnswer == choices[0] && cpuAnswer == choices[2]) {
        playerScore += 1
        displayInfo(1)
    }
    // paper events
    if (playerAnswer == choices[1] && cpuAnswer == choices[0]) {
        playerScore += 1
        displayInfo(1)
    } else if (playerAnswer == choices[1] && cpuAnswer == choices[2]) {
        cpuScore += 1
        displayInfo(2)
    }
    // Scissor Events
    if (playerAnswer == choices[2] && cpuAnswer == choices[0]) {
        cpuScore += 1
        displayInfo(2)
    } else if (playerAnswer == choices[2] && cpuAnswer == choices[1]) {
        playerScore += 1
        displayInfo(1)
    }

    if (playerAnswer == choices[0] && cpuAnswer == choices[0]) {
        displayInfo(3)
    } else if (playerAnswer == choices[1] && cpuAnswer == choices[1]) {
        displayInfo(3)
    } else if (playerAnswer == choices[2] && cpuAnswer == choices[2]) {
        displayInfo(3)
    }
    

    // displays score to the html
    playerScoreText.textContent = playerScore
    cpuScoreText.textContent = cpuScore

    if (playerScore == 5) {
        btnContainer.style.display = "none"
        info.textContent = "Player WINS!!"
    } else if (cpuScore == 5) {
        btnContainer.style.display = "none"
        info.textContent = "CPU WINS!!"
    }
}
function cpuAnswer() {
    cpuWeapon = choices[generateRandomNum()]
    cpuChoice.textContent = cpuWeapon
}
function generateRandomNum() {
    return Math.floor(Math.random() * choices.length)
}
// display what is going on
function displayInfo(event) {
    if (event == 1) {
        info.style.color = "green"
        info.textContent = gameInformation[1]
        
    }
    if (event == 2) {
        info.style.color = "red"
        info.textContent = gameInformation[1]
        
    }
    if (event == 3) {
        info.style.color = "yellow"
        info.textContent = gameInformation[0]
    }
}