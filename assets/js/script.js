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

   function checkWinner(computerChoice, playerChoice) {

    if (choices[computerChoice] === choices[playerChoice]){
        console.log("It's a tie");
    }
     // rock vs paper
    else if (choices[computerChoice] === "rock" && choices[playerChoice] === "paper"){
        console.log("You win");
    }
    //rock vs scissors 
    else if (choices[computerChoice] === "rock" && choices[playerChoice] === "scissors"){
        console.log("You lose");
        incrementComputerScore();
    } 
    // paper vs rock
    else if (choices[computerChoice] === "paper" && choices[playerChoice] === "rock"){
        console.log("You Win");
        incrementComputerScore();
    }
    //paper vs scissors
    else if (choices[computerChoice] === "paper" && choices[playerChoice] === "scissors"){
        console.log("You win");
        incrementPlayerScore();
        // scissors vs paper
    }
    else if (choices[computerChoice] === "sissors" && choices[playerChoice] === "paper"){
        console.log("You lose");
        incrementComputerScore();
        // scissors vs rock
    }  
    if (choices[computerChoice] === "scissors" && choices[playerChoice] === "rock" ){
        console.log("You win");
        incrementPlayerScore();
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
