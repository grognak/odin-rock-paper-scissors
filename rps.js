let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

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
    // Compares the player selection and computer selection and returns the result.
    if (playerSelection === computerSelection) { return "Tie Game! Try Again" }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") { return "You Lose! Paper beats Rock" }
        if (computerSelection === "Scissors") { return "You Win! Rock beats Scissors"}
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") { return "You Win! Paper beats Rock" }
        if (computerSelection === "Scissors") { return "You Lose! Scissors beats Paper" }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") { return "You Lose! Rock beats Scissors" }
        if (computerSelection === "Paper") { return "You Win! Scissors beats Paper" }
    } else { return "Not a valid option. Pick Rock, Paper, or Scissors."}
}

function game(playerChoice) {
    // The main game loop that runs when the player chooses a selection.

    const computerChoice = getComputerChoice();

    console.log("Player Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);

    const result = playRound(playerChoice, computerChoice);

    console.log("Result: " + result);

    const output = updateResults(result);

    document.getElementById("result").innerText = output
}

function updateResults(result) {
    // Updates the player win count, the computer win count and updates the round count.
    // Returns a string with the result, the updated score, and instructions.

    if (result.includes("Win!")) {
        playerWins++;
    }

    if (result.includes("Lose!")) {
        computerWins++;
    }

    roundsPlayed++;

    return `${result}. \n Player Wins: ${playerWins}  Computer Wins: ${computerWins}  Rounds Played: ${roundsPlayed} \n Pick another option to play again or refresh the page to start over.`
}