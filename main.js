let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    let selection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return selection;
}

function getPlayerChoice() {
    let input = prompt("Please enter Rock, Paper, or Scissors to play!");
    let lowerInput = input.toLowerCase();
    return lowerInput;
}

function playRound() {

}

function resetScores() {

}

function displayWinner() {

}

function game() {

}