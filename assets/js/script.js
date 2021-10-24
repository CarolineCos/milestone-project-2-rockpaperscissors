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
   
    let result = checkWinner(choices[computer], choices[playerChoice]);

    updateScores(result);
}

/**
 * rock === 0
 * paper === 1
 * scissors == 2
 */

   function checkWinner(choices[computerChoice], choices[playerChoice]) {

    if (choices[computerChoice] === choices[playerChoice]){
        alert("It's a tie");
    } 
     // rock vs paper
    else if (choices[computerChoice]===0 && choices[playerChoice] === 1){
        alert("You win");
        incrementPlayerScore();
    }
    //rock vs scissors 
    else if (choices[computerChoice]===0 && choices[playerChoice] === 2){
        alert("You lose");
        incrementComputerScore();
    } 
    //paper vs scissors
    else if (choices[computerChoice]===1 && choices[playerChoice] === 2){
        alert("You win");
        incrementPlayerScore();
        // scissors vs paper
    } else if (choices[computerChoice]===2 && choices[playerChoice] === 1){
        alert("You lose");
        incrementComputerScore();
        // scissors vs rock
    } else if (choices[computerChoice]===2 && choices[playerChoice] === 0){
        alert("You win");
        incrementPlayerScore();

     }
   }

   function updateScores() {

    function incrementPlayerScore() {
      let oldScore =  parseInt(playerScore.innerText);
      playerScore.innerText= ++oldScore;
      
    }
    
    function incrementComputerScore() {
        let oldScore =  parseInt(computerScore.innerText);
        computerScore.innerText= ++oldScore;                       
     }
   }
    
/** possibly add winner message */
