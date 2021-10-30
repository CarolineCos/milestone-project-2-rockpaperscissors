const buttons = document.getElementsByClassName("controls");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let choices = ["rock", "paper", "scissors"];
let playerCount = 0;
let computerCount = 0;

/** add event listener to buttons */

for(let button of buttons){
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice");
        play(playerChoice);
    }
)};

function play(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);
    computerImage.src =`assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];
   
    checkWinner(choices[computerChoice], choices[playerChoice]);
}

   function checkWinner(computerChoice, playerChoice) {
   
    if (computerChoice === playerChoice){
        document.getElementById('winner').innerText="Its a tie!";

    } else if (computerChoice === "rock" && playerChoice === "paper"){
        document.getElementById('winner').innerText="You Win!";
        incrementPlayerScore(); 
        
    } else if (computerChoice === "rock" && playerChoice === "scissors"){
        document.getElementById('winner').innerText="Computer Wins!";
        incrementComputerScore();

    } else if (computerChoice === "paper" && playerChoice === "rock"){
        document.getElementById('winner').innerText="Computer Wins!";
        incrementComputerScore();

    } else if (computerChoice === "paper" && playerChoice === "scissors"){
        document.getElementById('winner').innerText="You Win!";
        incrementPlayerScore();

    } else if (computerChoice === "scissors" && playerChoice === "paper"){
        document.getElementById('winner').innerText="Computer Wins!";
        incrementComputerScore();

    } else { (computerChoice === "scissors" && playerChoice === "rock") ;
        document.getElementById('winner').innerText="You Win!";
         incrementPlayerScore();
    }  
  
   }

function incrementPlayerScore(){
    
    ++playerCount;
    playerScore.innerText = playerCount;
}

function incrementComputerScore(){
    ++computerCount;
    computerScore.innerText = computerCount;    
}

  