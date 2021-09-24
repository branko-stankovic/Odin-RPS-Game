let playerScore = 0;
let computerScore = 0;

// random choice generator for AI
let computerPlay = function() {
    let moves = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);

    return moves[random];
}

// play a single round of rock paper scissors
let playRound = function(playerSelection, computerSelection) {

    // convert both choices to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // handle all the possible outcomes
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        return `Player wins! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++;
        return `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection == computerSelection) {
        return `It's a tie! Both players chose ${playerSelection}`;
    } else {
        return "Invalid choice! Please type 'Rock', 'Paper' or 'Scissors'";
    }
}

let announceWinner = function() {
    if (playerScore > computerScore) {
        console.log("Player wins!!! Go go humans!");
    } else if (computerScore > playerScore) {
        console.log("AI wins! Run for your lives!!!");
    }
};

// game machine
let game = function() {

    // first up to 5 wins
    while (playerScore < 5 && computerScore < 5) {

        // each round computer and player make new choices
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Rock, Paper or Scissors?");

        // play a single round
        console.log(playRound(playerSelection, computerSelection));

        console.log("player: " + playerScore);
        console.log("computer: " + computerScore);
    }

    announceWinner();
}

// let's play the game!
game();