

function getComputerChoice(){
    let x=Math.floor(Math.random() * 3);
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
    let test;
      let playerselect = playerSelection.toUpperCase();
      if((playerselect =='ROCK' && computerSelection =='rock') || (playerselect =='SCISSORS' && computerSelection =='scissors') ||(playerselect =='PAPER' && computerSelection =='paper')) {
                    return "it's a tie"
      }else if(playerselect =='ROCK' && computerSelection =='scissors') {
        test ==1;
        return `You Win! ${playerselect} beats ${computerSelection}`
      }  else if(playerselect =='ROCK' && computerSelection =='paper') {
        return test ==0;
        return `You lose! ${computerSelection} beats ${playerselect}`
      }else if(playerselect =='PAPER' && computerSelection =='rock') {
        return test == 1;
        return `You Win! ${playerselect} beats ${computerSelection}`
      }else if(playerselect =='PAPER' && computerSelection =='scissors') {
        return test ==0;
        return `You lose! ${computerSelection} beats ${playerselect}`
      }else if(playerselect =='SCISSORS' && computerSelection =='paper') {
        return test ==1;
        return `You Win! ${playerselect} beats ${computerSelection}`
      }else if(playerselect =='SCISSORS' && computerSelection =='rock') {
        return test ==0;
        return `You lose! ${computerSelection} beats ${playerselect}`
      }
}

function game(){
    let playerWin =0;
    let computerWin =0;

    for(let i=1;i<=5;i++){
        let playerSelection=prompt('choose between rock ,paper,scissors');
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        if(test ==1){
            playerWin++;
            console.log('the player win this round');
        }else if(test == 0){
            computerWin++;
            console.log('the computer win this round');
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


console.log(game());