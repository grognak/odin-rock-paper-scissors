function getComputerChoice() {
    // randomly pick a choice for the computer
    const rand = Math.floor(Math.random()*10)
    if (rand <= 3) {
        return "Rock"
    } else if (rand > 3 && rand <= 7) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") { return "You Lose! Paper beats Rock" }
        if (computerSelection === "Scissors") { return "You Win! Rock beats Scissors"}
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") { return "You Win! Paper beats Rock" }
        if (computerSelection === "Scissors") { return "You Lose! Scissors beats Paper" }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") { return "You Lose! Rock beats Scissors" }
        if (computerSelection === "Paper") { return "You Win! Scissors beats Paper" }
    } else if (playerSelection === computerSelection) { return "Tie Game! Try Again" }
    else { return "Not a valid option. Pick Rock, Paper, or Scissors."}
}

function game() {
    
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));