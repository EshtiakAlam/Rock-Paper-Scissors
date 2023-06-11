let playerChoice;
let playerScore = 0;
let computerScore = 0;
let computerChoices = ["Rock", "Paper", "Scissors"];
let flag = 0;

const buttons = document.querySelectorAll('.btn')
const roundResult = document.querySelector('#result');
const computerHand = document.querySelector('#computer-hand');
const yourHand = document.querySelector('#your-hand');
const playerPoints = document.querySelector('#player-score');
const computerPoints = document.querySelector('#computer-score');


const finalResult = document.querySelector('#final-result');
buttons.forEach(button => { button.addEventListener('click', () => {
    let playerSelection= button.id;
    if (flag != 0){
        finalResult.textContent = '';
    }
    playRound(playerSelection,computerChoices[Math.floor(Math.random() * 3)]);
})});




function playRound(playerSelection, computerSelection){
    console.log(playerSelection)
    console.log(computerSelection)
    let hand = playerSelection + computerSelection;
    let winningCombo = ["RockScissors", "PaperRock", "ScissorsPaper"];

    if(playerSelection === computerSelection){
        computerHand.textContent = `Computer played: ${computerSelection}`;
        yourHand.textContent = `You played: ${playerSelection}`;
        roundResult.textContent = "It's a tie!";
    } else if(winningCombo.includes(hand)){
        ++playerScore;
        playerPoints.textContent = `Player Score: ${playerScore}`;
        computerHand.textContent = `Computer played: ${computerSelection}`;
        yourHand.textContent = `You played: ${playerSelection}`;
        roundResult.textContent = `You Win!`;
    } else{
        ++computerScore;
        computerPoints.textContent = `Computer Score: ${computerScore}`;
        computerHand.textContent = `Computer played: ${computerSelection}`;
        yourHand.textContent = `You played: ${playerSelection}`;
        roundResult.textContent = `You lost buddy.`;
    }
    checkWinner();
}

function checkWinner() {
    if (playerScore >= 5){
        finalResult.textContent = 'You won the face-off ';
        playerScore = 0;
        computerScore = 0;
        playerPoints.textContent = `Player Score: ${playerScore}`;
        computerPoints.textContent = `Computer Score: ${computerScore}`;
        flag = 1;
        return
    } else if(computerScore >= 5){
        finalResult.textContent = 'You can\'t even beat some binary spitting ass';
        playerScore = 0;
        computerScore = 0;
        playerPoints.textContent = `Player Score: ${playerScore}`;
        computerPoints.textContent = `Computer Score: ${computerScore}`;
        flag = 1;
        return
    }
    flag = 0

}
