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
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    if (computerChoice === playerChoice) {
        console.log("It's a tie! You both selected " + computerChoice);
    }
        else if (computerChoice == 'rock' && playerChoice == 'paper') {
            ++playerScore;
            console.log("Nice one!! You win this round - paper beats rock");
        }
        else if (computerChoice == 'rock' && playerChoice == 'scissors') {
            ++computerScore;
            console.log("You lose - rock beats scissors every time </3");
        }
        else if (computerChoice == 'paper' && playerChoice == 'scissors') {
            ++playerScore;
            console.log("Shred it uppp! You win this round - scissors beats paper");
        }
        else if (computerChoice == 'paper' && playerChoice == 'rock') {
            ++computerScore;
            console.log("Darn it... You lose this round - paper beats rock");
        }
        else if (computerChoice == 'scissors' && playerChoice == 'rock') {
            ++playerScore;
            console.log("Great choice! You win - rock beats scissors");
        }
        else if (computerChoice == 'scissors' && playerChoice == 'paper') {
            ++computerScore;
            console.log("Close but no cigar... You lose - scissors beats paper");
        }
}

function resetScores() {
    computerScore = 0;
    playerScore = 0;
}

function determineWinner() {
    if (playerScore < computerScore) 
        console.log("You lose. Try your luck agains the machine again.");
    else if (playerScore > computerScore)
        console.log("You won! Humans > computers");
    else
        console.log("It's a tie... Play again if you dare >:)");
}


function game() {

}