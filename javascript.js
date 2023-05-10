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

function game(){

    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound(prompt(), getComputerChoice())
        console.log(result)
        if(result.includes("Win")) playerScore++
    }
}

game()