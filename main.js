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
     
    }
        else if (computerChoice == 'rock' && playerChoice == 'paper') {
            ++playerScore;
            results.textContent = `Nice one!! You win this round - paper beats rock`
          
        }
        else if (computerChoice == 'rock' && playerChoice == 'scissors') {
            ++computerScore;
            results.textContent = `You lose this round - rock beats scissors every time </3`
       
        }
        else if (computerChoice == 'paper' && playerChoice == 'scissors') {
            ++playerScore;
            results.textContent = `Shred it uppp! You win this round - scissors beats paper`
           
        }
        else if (computerChoice == 'paper' && playerChoice == 'rock') {
            ++computerScore;
            results.textContent = `Darn it... You lose this round - paper beats rock`
          
        }
        else if (computerChoice == 'scissors' && playerChoice == 'rock') {
            ++playerScore;
            results.textContent = `Great choice! You win this round - rock beats scissors`
        }
        else if (computerChoice == 'scissors' && playerChoice == 'paper') {
            ++computerScore;
            results.textContent = `Close but no cigar... You lose this round - scissors beats paper`

        }
}

//Score & Result Updating
const humanScore = document.getElementById('human-score');
const compScore = document.getElementById('comp-score');


function updateScores() {
    checkScore();
    humanScore.textContent = `Human: ${playerScore}`
    compScore.textContent = `Computer: ${computerScore}`
    
}
function resetScores() {
    computerScore = 0;
    playerScore = 0;
}

function checkScore() {
    if(playerScore < 5 && computerScore < 5 ) {
        playRound();
    }
    else {
        determineWinner();
        resetScores();
    }
}
function determineWinner() {
    //updateScores();
    if (computerScore === 5) 
        results.textContent = `You lose. Try your luck against the machine again`
    else if (playerScore === 5)
        results.textContent = `You won! Humans > computers`
    else
        results.textContent = `It's a tie... Play again if you dare >:)`
    
    
}

// Rock Button Event Listener
const rockBtn = document.getElementById('rockBtn');
rockBtn.addEventListener('click', () => {
    playerChoice = rockBtn.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    updateScores();
    
});

//Paper Button Event Listener
const paperBtn = document.getElementById('paperBtn');
paperBtn.addEventListener('click', () => {
    playerChoice = paperBtn.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    updateScores();
});

//Scissors Button Event Listener

const scissorsBtn = document.getElementById('scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playerChoice = scissorsBtn.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    updateScores();
});