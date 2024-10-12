const computerChoice = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return computerChoice[Math.floor((Math.random())*3)];
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.querySelector("scissors");


console.log(rock);
