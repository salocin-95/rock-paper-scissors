console.log(getComputerChoice());

const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
    return parseInt((Math.random())*3);
}

function getPlayerChoice() {
    let userChoice = prompt("Choose: Rock, Paper or Scissors.");
    return userChoice;
}

