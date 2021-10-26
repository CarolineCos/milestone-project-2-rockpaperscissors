const buttons = document.getElementsByClassName("controls");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let choices = ["rock", "paper", "scissors"];

// add event listener to buttons 

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
   
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    //updateScores(result);
}
//rock = 0
//paper = 1
//scissors = 2

   function checkWinner(computerChoice, playerChoice) {

    if (computerChoice === playerChoice){
        console.log("It's a tie");
    } else  if (computerChoice === "rock" && playerChoice  === "paper"){
        console.log("You win");
    } else if (computerChoice === "rock" && playerChoice === "scissors"){
        console.log("You lose");
        //incrementComputerScore();
    } else if (computerChoice === "paper" && playerChoice === "rock"){
        console.log("You lose");
       // incrementComputerScore();
    } else if (computerChoice === "paper" && playerChoice === "scissors"){
        console.log("You win");
       // incrementPlayerScore();
    } else if (computerChoice === "sissors" && playerChoice === "paper"){
        console.log("You lose");
        //incrementComputerScore();
    }  else { (computerChoice === "scissors" && playerChoice === "rock" );
        console.log("You win");
       // incrementPlayerScore();
}  
   }


 /**
     function updateScores()

        function incrementPlayerScore() {
            let oldScore =  parseInt(playerScore.innerText);
            playerScore.innerText= ++oldScore;
            
          }
          
          function incrementComputerScore() {
              let oldScore =  parseInt(computerScore.innerText);
              computerScore.innerText= ++oldScore; 

     }
     */
/** possibly add winner message */
