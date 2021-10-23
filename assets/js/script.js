const buttons = document.getElementsByClassName("controls");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let choices = ["rock", "paper", "scissors"];
let playerChoice 
let computerChoice

/** add event listener to buttons */

for(let button of buttons){
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice");
        play(playerChoice);
     } 
)

    checkWinner();
}

function play(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    computerChoice = Math.floor(Math.random() * 3);
    computerImage.src =`assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];
   
}



function checkWinner(){
    
        }



    
/** increment score */

function incrementPlayerScore(){
    let oldScore = playerScore.innerHTML;
    playerScore.innerHTML = ++oldScore;
}

function incrementComputerScore(){
    let oldScore = computerScore.innerHTML;
    computerScore.innerHTML = ++oldScore;
}


/** possibly add winner message */
