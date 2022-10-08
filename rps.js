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

console.log(getComputerChoice())
console.log(getComputerChoice())