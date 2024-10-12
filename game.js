const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsMessage = document.querySelector('.message');
let playerScore = 0;
let computerScore = 0;
 
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = [Math.floor((Math.random())*options.length)];
    return options[randomIndex];
}

const userOptions = document.querySelectorAll('.btn');

userOptions.forEach(userOption => userOption.addEventListener('click', (e) => {
    userOption = e.target.id;
    if (userOption === getComputerChoice()) {
        resultsMessage.innerText = "You tie";
    } else if (userOption === 'rock' && getComputerChoice() === 'scissors') {
        playerScore++;
        resultsMessage.innerText = `You win! ${userOption} beats scissors`;
    } else if (userOption === 'paper' && getComputerChoice() === 'rock') {
        playerScore++;
        resultsMessage.innerText = `You win! ${userOption} beats rock`;
    } else if (userOption === 'scissors' && getComputerChoice() === 'paper') {
        playerScore++;
        resultsMessage.innerText = `You win! ${userOption} beats paper`;
    }
}));

playerScoreDisplay.innerHTML = `Score: ${playerScore}`
console.log(playerScore);