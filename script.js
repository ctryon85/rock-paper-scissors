
// Rock-Paper-Scissors Game Logic
const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let round = 0;
const totalRounds = 5;              
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const roundDiv = document.getElementById('round');
const restartBtn = document.getElementById('restartBtn');
const choiceImages = document.querySelectorAll('#choices img');     
const playerChoiceSpan = document.getElementById('playerChoice');
const computerChoiceSpan = document.getElementById('computerChoice');   
const finalResultDiv = document.getElementById('finalResult');  
const gameContainer = document.getElementById('gameContainer');
const choicesDiv = document.getElementById('choices');
const scoreContainer = document.getElementById('scoreContainer');
const roundContainer = document.getElementById('roundContainer');   
const finalResultContainer = document.getElementById('finalResultContainer');
const restartContainer = document.getElementById('restartContainer');   
const updateScore = () => {
    scoreDiv.textContent = `Score - You: ${playerScore} | Computer: ${computerScore}`;
};
const updateRound = () => {
    roundDiv.textContent = `Round: ${round} / ${totalRounds}`;
};
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    updateScore();
    updateRound();
    resultDiv.textContent = '';
    finalResultDiv.textContent = '';
    playerChoiceSpan.textContent = '-';
    computerChoiceSpan.textContent = '-';
    choiceImages.forEach(img => img.classList.remove('selected'));
    gameContainer.style.display = 'block';
    finalResultContainer.style.display = 'none';
    restartContainer.style.display = 'none';
}
const getComputerChoice = () => {       
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const playRound = (playerChoice) => {           
    if (round >= totalRounds) return; // Prevent further play if game is over
    const computerChoice = getComputerChoice();
    playerChoiceSpan.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceSpan.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    let roundResult = '';
    if (playerChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        roundResult = 'You win this round!';
    } else {
        computerScore++;
        roundResult = 'Computer wins this round!';
    }
    round++;
    resultDiv.textContent = roundResult;
    updateScore();
    updateRound();
    if (round === totalRounds) {
        endGame();  
    
    }
}

