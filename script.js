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
    display.innerHTML = `
    Computer Choose: ${computerSelection}<br/>
    User choose: ${playerSelection}<br/>
    `;
    let winner;
    if (playerSelection === computerSelection) {
        winner = "draw";
        display.innerHTML += "Thats a Draw";
    }
    else if ((playerSelection === "SCISOR" && computerSelection === "PAPER") || 
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "ROCK" && computerSelection === "SCISOR")) {
                winner = "player";
                display.innerHTML += `You Win : ${playerSelection} beat ${computerSelection} !`;
            } else {
                winner = "computer";
                display.innerHTML += `You Lose : ${computerSelection} beat ${playerSelection} !`;
            };


    return winner;
}


/*
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
*/

const scoreBoard = document.querySelector('.score')


const rockBtn = document.querySelectorAll(".card");
const playerScoreUI = document.querySelector(".player-score");
const computerScoreUI = document.querySelector(".computer-score");
const display = document.querySelector("p");

let computerScore = 0;
let userScore = 0;

computerScoreUI.textContent = `Computer: ${computerScore}`;
playerScoreUI.textContent = `User: ${userScore}`;

rockBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        let userChoice = element.id;
        e.stopPropagation();
        winner = playRound(getComputerChoice(), userChoice.toUpperCase());
        updateScore(winner);
    })
});


function updateScore(winner) {
    if (winner == "draw") {
        computerScore += 1;
        userScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    } else {
        userScore += 1;
    }
    computerScoreUI.textContent = `Computer: ${computerScore}`;
    playerScoreUI.textContent = `User: ${userScore}`;
}

