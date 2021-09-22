let playerScore = 0;
let computerScore = 0;

let rounds = 5;

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
            computerScore++;
            return "Computer wins! Paper beats rock!";
        } else if (computer == "scissors") {
            playerScore++;
            return "Player wins! Rock beats scissors!";
        }
    } else if (player == "paper") {

        // player chooses paper
        if (computer == "rock") {
            playerScore++;
            return "Player wins! Paper beats rock!";
        } else if (computer == "paper") {
            return "It's a tie! Both chose paper!";
        } else if (computer == "scissors") {
            computerScore++;
            return "Computer wins! Scissors beats paper!";
        }
    } else if (player == "scissors") {

        // player chooses scissors
        if (computer == "rock") {
            computerScore++;
            return "Computer wins! Rock beats scissors!";
        } else if (computer == "paper") {
            playerScore++;
            return "Player wins! Scissors beats paper!";
        } else if (computer == "scissors") {
            return "It's a tie! Both chose scissors";
        }
    } else {
        return "Invalid choice! Please type 'Rock', 'Paper' or 'Scissors'";
    }
}

// game machine
let game = function() {

    for (let i = 0; i < rounds; i++) {

        // make computer choose again, then take input from player
        let computerSelection = computerPlay();
        let playerSelection = window.prompt("Rock, Paper or Scissors?");

        // play a single round
        console.log(playRound(playerSelection, computerSelection));

        console.log("player: " + playerScore);
        console.log("computer: " + computerScore);

    }

    // announce the winner!!! (and the fate of humanity)
    if (playerScore > computerScore) {
        return "Player wins!!! Go go humans!";
    } else if (computerScore > playerScore) {
        return "AI wins! Run for your lives!!!";
    } else {
        return "It's a tie! There is still hope for humanity.";
    }
}

console.log(game());