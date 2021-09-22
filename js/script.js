let computerPlay = function() {
    let moves = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    
    return moves[random];
}

console.log(computerPlay());