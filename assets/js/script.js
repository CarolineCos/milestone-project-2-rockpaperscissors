const buttons = document.getElementsByClassName("controls");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let choices = ["rock", "paper", "scissors"];

/** add event listener to buttons */

for(let button of buttons){
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice");
        play(playerChoice);
    }
    )}

function play(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src =`assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];
    
}

/** check winner */


function checkWinner(){
   if (computerChoice === playerChoice){
    alert("Its a draw");
   }

   if(computerChoice === "rock" && playerChoice === "paper"){
       alert("You Win");
       incrementScore(playerScore);
   }

   if(computerChoice === "rock" && playerChoice === "scissors"){
    alert("Computer Wins");
    incrementScore(computerScore);
}

    if(computerChoice === "paper" && playerChoice === "rock"){
    alert("Computer Wins");
    incrementScore(computerScore);
}
    if(computerChoice === "paper" && playerChoice === "scissors"){
    alert("You Win");
    incrementScore(playerScore);
}
    if(computerChoice === "scissors" && playerChoice === "paper"){
    alert("Computer Wins");
    incrementScore(computerScore);
}
    if(computerChoice === "scissors" && playerChoice === "rock"){
    alert("You Win");
    incrementScore(playerScore);
}
}

checkWinner();
/** increment score */

/** possibly add winner message */
