// random choice generator for AI
let computerPlay = function() {
    let moves = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);

    return moves[random];
}

// play a single round of rock paper scissors
let playRound = function(playerSelection, computerSelection) {

    // convert both choices to lowercase
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    // handle all the possible outcomes
    if (player == "rock") {
        // player chooses rock
        if (computer == "rock") {
            return "It's a tie! Both chose rock!";
        } else if (computer == "paper") {
            return "Computer wins! Paper beats rock!";
        } else if (computer == "scissors") {
            return "Player wins! Rock beats scissors!";
        }
    } else if (player == "paper") {
        // player chooses paper
        if (computer == "rock") {
            return "Player wins! Paper beats rock!";
        } else if (computer == "paper") {
            return "It's a tie! Both chose paper!";
        } else if (computer == "scissors") {
            return "Computer wins! Scissors beats paper!";
        }
    } else if (player == "scissors") {
        // player chooses scissors
        if (computer == "rock") {
            return "Computer wins! Rock beats scissors!";
        } else if (computer == "paper") {
            return "Player wins! Scissors beats paper!";
        } else if (computer == "scissors") {
            return "It's a tie! Both chose scissors";
        }
    }
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));