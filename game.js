// Need to add function that prevents player to keep playing after "Play again?" button appears
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultsMessage = document.querySelector('.message');
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors");
const playerGlobalScore = document.getElementById("player-global-score");
const computerGlobalScore = document.getElementById("computer-global-score");


// Make the buttons dissappear
const resetButton = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;
let playerMatchScore = 0;
let computerMatchScore = 0;
// Get computer choice
function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = [Math.floor((Math.random())*options.length)];
    return options[randomIndex];
}

const userOptions = document.querySelectorAll('.btn');
// This function basically runs the game
userOptions.forEach(userOption => userOption.addEventListener('click', (e) => {
    const computerOption = getComputerChoice();
    resultsMessage.style.fontSize = '1.825rem';
    userOption = e.target.id;
    if (userOption === computerOption) {
        resultsMessage.innerText = "You tie";
    } else if (userOption === 'rock' && computerOption === 'scissors') {
        playerScore++;
        playerScoreDisplay.innerHTML = `Player score: ${playerScore}`
        resultsMessage.innerText = `You win! ${userOption} beats scissors`;
    } else if (userOption === 'paper' && computerOption === 'rock') {
        playerScore++;
        playerScoreDisplay.innerHTML = `Player score: ${playerScore}`
        resultsMessage.innerText = `You win! ${userOption} beats rock`;
    } else if (userOption === 'scissors' && computerOption === 'paper') {
        playerScore++;
        playerScoreDisplay.innerHTML = `Player score: ${playerScore}`
        resultsMessage.innerText = `You win! ${userOption} beats paper`;
    } else if (userOption === 'rock' && computerOption === 'paper') {
        computerScore++;
        computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`
        resultsMessage.innerText = `You lose! ${computerOption} beats rock`;
    } else if (userOption === 'paper' && computerOption === 'scissors') {
        computerScore++;
        computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`
        resultsMessage.innerText = `You lose! ${computerOption} beats paper`;
    } else if (userOption === 'scissors' && computerOption === 'rock') {
        computerScore++;
        computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`
        resultsMessage.innerText = `You lose! ${computerOption} beats scissors`;
    }
    console.log(playerScore)
    console.log(computerScore)
    if (playerScore === 3) {
        resultsMessage.innerText = `You won the match!`;
        playerMatchScore++
        update()
    }
    if (computerScore === 3) {
        resultsMessage.innerText = `You  lost the match!`
        computerMatchScore++
        update()
    }
}));
//Update the options to play again
function update() {
    resetButton.style.display = 'block';
    resetButton.innerText = 'Play again?';
    rockBtn.style.display =  'none';
    paperBtn.style.display =  'none';
    scissorsBtn.style.display =  'none';
    playerScore = 0;
    computerScore = 0;
    resetButton.addEventListener('click', (e) => {
        resetButton.style.display = 'none';
        rockBtn.style.display =  'inline';
        paperBtn.style.display =  'inline';
        scissorsBtn.style.display =  'inline';
        resultsMessage.innerHTML = `To play choose an option!`;
        computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`;
        playerScoreDisplay.innerHTML = `Player score: ${playerScore}`;
        computerGlobalScore.innerHTML = `Computer Match score: ${computerMatchScore}`;
        playerGlobalScore.innerHTML = `Player Match score: ${playerMatchScore}`;
    })
}