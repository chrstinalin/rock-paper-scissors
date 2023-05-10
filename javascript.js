function getComputerChoice(){
    
    let selection = Math.floor(Math.random() * 3);
    switch(selection){
        case 0: return "rock"
        case 1: return "scissors"
        default: return "paper"
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase()
    var move = {"rock":"scissors", "paper":"rock", "scissors":"paper"}

    if(move[playerSelection] === computerSelection) return `You Win! ${playerSelection} beats ${computerSelection}` // player wins
    else if(move[computerSelection] === playerSelection) return `You Lose! ${computerSelection} beats ${playerSelection}` // computer wins
    else return `Tie!` // tie
}

const buttons = document.querySelectorAll('.button');
let playerScore = 0, computerScore = 0;

buttons.forEach(button => button.addEventListener('click', function(event){

    const text = document.querySelector('.textbox');
    const result = playRound(button.id, getComputerChoice());

    text.textContent = result;
    if(result.includes('Win')) playerScore++;
    else if(result.includes('Lose')) computerScore++;

    const scoreboard = document.querySelector('.scoreboard');
    scoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

    if(playerScore > 4){
        scoreboard.textContent = 'Player Wins! Press any button to continue.';
        playerScore = 0, computerScore = 0;
    }
    if(computerScore > 4){
        scoreboard.textContent = 'Computer Wins. Press any button to continue.'
        playerScore = 0, computerScore = 0;
    }

}));