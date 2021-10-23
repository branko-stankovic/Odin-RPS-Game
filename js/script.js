const displayPlayerScore = document.querySelector('#displayPlayerScore');
const displayComputerScore = document.querySelector('#displayComputerScore');

const displayRoundInfo = document.querySelector('#roundInfo');
const playerMenu = document.querySelector('.playerMenu');
const buttons = document.querySelectorAll('.playerChoice');
const newGame = document.querySelector('#newGame');

const playerWonGameAudio = document.querySelector(".playerWonGame");
const computerWonGameAudio = document.querySelector(".computerWonGame");

let playerScore = 0;
let computerScore = 0;

const computerPlay = function() {
    let moves = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    
    return moves[random];
}

const updateDisplayScore = function() {
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
}

const playRound = function(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        updateDisplayScore();
        displayRoundInfo.textContent = `Player wins - ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        updateDisplayScore();
        displayRoundInfo.textContent = `Computer wins - ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        displayRoundInfo.textContent = `It's a tie! You both chose ${playerSelection}`;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        gameOver();
    }
}

const gameOver = function() {
    if (playerScore > computerScore) {
        displayRoundInfo.innerHTML = "<strong>You win!!! The mainframe is starting to shut down!</strong>";
        playerWonGameAudio.currentTime = 0;
        playerWonGameAudio.play();
    } else if (computerScore > playerScore) {
        displayRoundInfo.innerHTML = "<strong>AI wins! Its algorithm is too strong!!!</strong>";
        computerWonGameAudio.currentTime = 0;
        computerWonGameAudio.play();
    }

    newGame.classList.toggle('hidden');
    playerMenu.classList.toggle('hidden');
};

// ROCK, PAPER, SCISSORS
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        (playRound(button.id, computerPlay()));
    })
});

const resetScore = function() {
    playerScore = 0;
    computerScore = 0;
    updateDisplayScore();
}

newGame.addEventListener('click', function() {
    resetScore();

    displayRoundInfo.textContent = "First up to 5 wins!";

    newGame.classList.toggle('hidden');
    playerMenu.classList.toggle('hidden');
});