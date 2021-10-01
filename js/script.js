let playerScore = 0;
let computerScore = 0;

// random choice generator for AI
const computerPlay = function() {
    let moves = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    
    return moves[random];
}

const displayPlayerScore = document.querySelector('#displayPlayerScore');
const displayComputerScore = document.querySelector('#displayComputerScore');

const displayRoundInfo = document.querySelector('#roundInfo');

// play a single round of rock paper scissors
const playRound = function(playerSelection, computerSelection) {

    // handle all the possible outcomes
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        displayPlayerScore.textContent = playerScore;
        displayRoundInfo.textContent = `Player wins - ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        displayComputerScore.textContent = computerScore;
        displayRoundInfo.textContent = `Computer wins - ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        displayRoundInfo.textContent = `It's a tie! You both chose ${playerSelection}`;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        gameOver();
    }
}

const displayGameInfo = document.querySelector('#gameInfo');
const newGame = document.querySelector('#newGame');

const playerWonGameAudio = document.querySelector(".playerWonGame");
const computerWonGameAudio = document.querySelector(".computerWonGame");

const playerMenu = document.querySelector('.playerMenu');

const gameOver = function() {
    if (playerScore > computerScore) {
        displayRoundInfo.textContent += " Player wins!!! Go go humans!";
        playerWonGameAudio.currentTime = 0;
        playerWonGameAudio.play();
    } else if (computerScore > playerScore) {
        displayRoundInfo.textContent += " AI wins! Run for your lives!!!";
        computerWonGameAudio.currentTime = 0;
        computerWonGameAudio.play();
    }

    buttons.forEach((button) => {
        button.disabled = true;
    });

    newGame.classList.toggle('hidden');
    playerMenu.classList.toggle('hidden');
};

// grab all the buttons, listen for clicks on each one
// when clicked, play a round with corresponding choice
const buttons = document.querySelectorAll('.playerChoice');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        (playRound(button.id, computerPlay()));
    })
});


const resetScore = function() {
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
}

newGame.addEventListener('click', function() {
    resetScore();

    displayRoundInfo.textContent = "First up to 5 wins!";
    displayGameInfo.innerHTML = "It's the year 3021. AI has taken over the control over our planet.<br><br>You have been chosen by the humankind to fight one last time, for a chance to save our species.";

    buttons.forEach((button) => {
        button.disabled = false;
    });

    newGame.classList.toggle('hidden');
    playerMenu.classList.toggle('hidden');
});