

function getComputerChoice(){
  let x= Math.floor(Math.random() * 3);
  console.log(x);
  if (x == 0){
    return 'rock';
  }else if(x == 1){
    return 'paper';
  }else {
    return 'scissors';
  }
}

function playRound(playerSelection,computerSelection){
  let playerselect = playerSelection.toUpperCase();
  if((playerselect =='ROCK' && computerSelection =='rock') || 
    (playerselect =='SCISSORS' && computerSelection =='scissors') ||
    (playerselect =='PAPER' && computerSelection =='paper')) {
    return 2
  }else if(playerselect =='ROCK' && computerSelection =='scissors') {
    return 1;
  }  else if(playerselect =='ROCK' && computerSelection =='paper') {
    return 0;
  }else if(playerselect =='PAPER' && computerSelection =='rock') {
    return 1;
  }else if(playerselect =='PAPER' && computerSelection =='scissors') {
    return 0;
  }else if(playerselect =='SCISSORS' && computerSelection =='paper') {
    return 1;
  }else if(playerselect =='SCISSORS' && computerSelection =='rock') {
    return 0;
  }
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

let playerWin = 0;
let botWin = 0;

if (!resultDisplay) {
  console.error('Result display with ID "result" not found');
} else {
  rockButton.addEventListener('click', function() {
    const botChoice = getComputerChoice();
    console.log(botChoice);
    let whoWins = playRound('rock',botChoice);
    if(whoWins ==1){
      playerWin++;
      resultDisplay.textContent = "You won!";
    }else if(whoWins == 0){
      botWin++;
      resultDisplay.textContent = "Bot won!";
    }else{
      resultDisplay.textContent = "It's a tie!";
    }
    scoreDisplay.textContent = `Player: ${playerWin} Bot: ${botWin}`;
    if (playerWin == 5) {
      resultDisplay.textContent = "You won the game!";
      rockButton.style.display = "none";
      paperButton.style.display = "none";
      scissorsButton.style.display = "none";
    } else if (botWin == 5) {
      resultDisplay.textContent = "Bot won the game!";
      rockButton.style.display = "none";
      paperButton.style.display = "none";
      scissorsButton.style.display = "none";
    }
  });
  }

paperButton.addEventListener('click', function() {
  const botChoice = getComputerChoice();
  console.log(botChoice);
  let whoWins = playRound('paper',botChoice);
    if(whoWins ==1){
      resultDisplay.textContent = "You won!";
      playerWin++;
    }else if(whoWins== 0){
      botWin++;
      resultDisplay.textContent = "Bot won!";
    }else{
      playerWin++;botWin++;
      resultDisplay.textContent = "It's a tie!";
    }
    scoreDisplay.textContent = `Player: ${playerWin} Bot: ${botWin}`;
    if (playerWin == 5) {
      resultDisplay.textContent = "You won the game!";
      rockButton.style.display = "none";
      paperButton.style.display = "none";
      scissorsButton.style.display = "none";
    } else if (botWin == 5) {
      resultDisplay.textContent = "Bot won the game!";
      rockButton.style.display = "none";
      paperButton.style.display = "none";
      scissorsButton.style.display = "none";
    }
});

scissorsButton.addEventListener('click', function() {
  const botChoice = getComputerChoice();
  console.log(botChoice);
  let whoWins = playRound('scissors',botChoice);
    if(whoWins ==1){
      playerWin++;
      resultDisplay.textContent = "You won!";

    }else if(whoWins == 0){
      botWin++;
      resultDisplay.textContent = "Bot won!";
    }else{
      playerWin++;botWin++;
      resultDisplay.textContent = "It's a tie!";
    }
    scoreDisplay.textContent = `Player: ${playerWin} Bot: ${botWin}`;
    if (playerWin == 5) {
      resultDisplay.textContent = "You won the game!";
      rockButton.style.display = "none";
      paperButton.style.display = "none";
      scissorsButton.style.display = "none";
    } else if (botWin == 5) {
      resultDisplay.textContent = "Bot won the game!";
      rockButton.style.display = "none";
      paperButton.style.display = "none";
      scissorsButton.style.display = "none";
    }
});

