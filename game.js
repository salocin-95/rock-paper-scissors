let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = [Math.floor((Math.random())*options.length)];
    return options[randomIndex];
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.querySelector("scissors");


console.log(rock);
