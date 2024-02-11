//Retourne 'Paper', 'Scisor' ou 'Rock'
function getComputerChoice() {
    let choice;
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        choice = "ROCK";
    } else if (randomNumber === 1) {
        choice = "PAPER";
    } else { choice = "SCISOR"; }

    return choice;
}

// Joue un round, les choix doivent être case insensitive
function playRound(playerSelection, computerSelection) {
    console.log(`player:${playerSelection},computer:${computerSelection}`);
    let winner;
    if (playerSelection === computerSelection) {
        winner = "draw";
        console.log("Thats a Draw");
    }
    else if ((playerSelection === "SCISOR" && computerSelection === "PAPER") || 
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "ROCK" && computerSelection === "SCISOR")) {
                winner = "player";
                console.log("Player Win");
            } else {
                winner = "computer";
                console.log("Computer win")
            }
    console.log('-------------');
    return winner;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for(i=0;i<5;i++) {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        winner = playRound(playerSelection.toUpperCase(), computerSelection);
        if (winner === "player") { 
            playerScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        }
    }



    if (playerScore === computerScore) {
        return "Thats a draw";
    } else if (playerScore > computerScore) {
        return "The final winner is Player";
    } else {
        return "The final winner is Computer";
    }
    

}

console.log(playGame());
