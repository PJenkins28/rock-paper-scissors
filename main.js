let computerChoice = '';
let playerChoice = '';
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    let selection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return selection;
}
const results = document.getElementById('results');

function playRound() {

    if (computerChoice === playerChoice) {
        results.textContent = `It's a tie! You both selected  ${computerChoice}`
        updateScores();
    }
        else if (computerChoice == 'rock' && playerChoice == 'paper') {
            ++playerScore;
            results.textContent = `Nice one!! You win this round - paper beats rock`
            updateScores();
        }
        else if (computerChoice == 'rock' && playerChoice == 'scissors') {
            ++computerScore;
            results.textContent = `You lose this round - rock beats scissors every time </3`
            updateScores();
        }
        else if (computerChoice == 'paper' && playerChoice == 'scissors') {
            ++playerScore;
            results.textContent = `Shred it uppp! You win this round - scissors beats paper`
            updateScores();
        }
        else if (computerChoice == 'paper' && playerChoice == 'rock') {
            ++computerScore;
            results.textContent = `Darn it... You lose this round - paper beats rock`
            updateScores();
        }
        else if (computerChoice == 'scissors' && playerChoice == 'rock') {
            ++playerScore;
            results.textContent = `Great choice! You win this round - rock beats scissors`
            updateScores();
        }
        else if (computerChoice == 'scissors' && playerChoice == 'paper') {
            ++computerScore;
            results.textContent = `Close but no cigar... You lose this round - scissors beats paper`
            updateScores();
        }
}

//Score & Result Updating
const humanScore = document.getElementById('human-score');
const compScore = document.getElementById('comp-score');


function updateScores() {
    humanScore.textContent = `Human: ${playerScore}`
    compScore.textContent = `Computer: ${computerScore}`
}
function resetScores() {
    computerScore = 0;
    playerScore = 0;
}

/*results(roundMessage) {
    return
}*/
function determineWinner() {
    if (playerScore < computerScore) 
        alert("You lose. Try your luck agains the machine again.");
    else if (playerScore > computerScore)
        alert("You won! Humans > computers");
    else
        alert("It's a tie... Play again if you dare >:)");
    
}

function displayScores() {
    alert("Final Scores:\nYou: " + playerScore + "\nComputer: " + computerScore);
}
/*function game() {
    resetScores();
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    determineWinner();
    displayScores();
}*/

// Rock Button Event Listener
const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', () => {
    playerChoice = rockBtn.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    playRound();
});

//Paper Button Event Listener
const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', () => {
    playerChoice = paperBtn.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    playRound();
});

//Scissors Button Event Listener

const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playerChoice = scissorsBtn.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    playRound();
})