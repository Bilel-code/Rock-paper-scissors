

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
      if((playerselect =='ROCK' && computerSelection =='rock') || (playerselect =='SCISSORS' && computerSelection =='scissors') ||(playerselect =='PAPER' && computerSelection =='paper')) {
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
/*
function game(){
    let playerWin =0;
    let computerWin =0;

    for(let i=1;i<=5;i++){
        let playerSelection=prompt('choose between rock ,paper,scissors');
        let computerSelection = getComputerChoice();
        let test =playRound(playerSelection,computerSelection); 
        if(test ==1){
            playerWin++;
            console.log('the player win this round');
        }else if(test == 0){
            computerWin++;
            console.log('the computer win this round');
        }else if(test ==2){
            console.log('its a tie');
        }
    }
    if(playerWin<computerWin){
        return 'computer Win the game'
    }else if(playerWin>computerWin){
        return 'player Win the game'

    }else {
        return 'its a tie'
    }
}
*/
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const result = document.getElementById('result');

if (!result) {
  console.error('Element with ID "result" not found');
}



if (!rockButton) {
  console.error('Button with ID "rock" not found');
} else {
  rockButton.addEventListener('click', function() {
    const botChoice = getComputerChoice();
    let whoWins = playRound('rock',botChoice);
    if(whoWins == 1) {
      result.innerHTML = 'Player Won!';
    } else if(whoWins == 0) {
      result.innerHTML = 'Bot Won!';
    } else {
      result.innerHTML = 'Tie!';
    }
  });
}

paperButton.addEventListener('click', function() {
  const botChoice = getComputerChoice();
  let whoWins = playRound('paper',botChoice);
  if(whoWins == 1) {
    result.innerHTML = 'Player Won!';
  } else if(whoWins == 0) {
    result.innerHTML = 'Bot Won!';
  } else {
    result.innerHTML = 'Tie!';
  }
});

scissorsButton.addEventListener('click', function() {
  const botChoice = getComputerChoice();
  let whoWins = playRound('scissors',botChoice);
  if(whoWins == 1) {
    result.innerHTML = 'Player Won!';
  } else if(whoWins == 0) {
    result.innerHTML = 'Bot Won!';
  } else {
    result.innerHTML = 'Tie!';
  }
});
/*
function playRound(playerSelection) {
  console.log(`Player selection: "${playerSelection}"`);
}*/