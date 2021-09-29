let playerScore = 0;
let computerScore = 0;

// random choice generator for AI
const computerPlay = function() {
    let moves = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);

    return moves[random];
}

const displayPlayerScore = document.querySelector('#displayPlayerScore');
const displayComputerScore = document.querySelector('#displayComputerScore');

const displayRoundInfo = document.querySelector('#roundInfo');

// play a single round of rock paper scissors
const playRound = function(playerSelection, computerSelection) {

    // convert both choices to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // handle all the possible outcomes
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        displayPlayerScore.textContent = playerScore;
        displayRoundInfo.textContent = `Player wins! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        displayComputerScore.textContent = computerScore;
        displayRoundInfo.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        displayRoundInfo.textContent = `It's a tie! Both players chose ${playerSelection}`;
    }
}

const announceWinner = function() {
    if (playerScore > computerScore) {
        console.log("Player wins!!! Go go humans!");
    } else if (computerScore > playerScore) {
        console.log("AI wins! Run for your lives!!!");
    }
};

// grab all the buttons, listen for clicks on each one
// when clicked, play a round with corresponding choice
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, computerPlay()));
    })
});