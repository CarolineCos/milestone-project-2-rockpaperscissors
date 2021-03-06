# Rock Paper Scissors

The purpose of building this game is to demonstrate my knowledge and understanding of javaScript by manipulating the DOM to create an interactive project. The game itself is a simple rock paper scissors game. It has an area of choices for the player to choose their move, a placeholder image which changes depending on the players choice and the computers random choice. The score area increments the scores as appropiate and a simple rules section in the footer

## Screenshots of project
<img width="762" alt="rock-paper-scissors-responsive" src="https://user-images.githubusercontent.com/87449935/139578979-65df38d9-2403-4173-898d-2636b5937320.png">

# User Experience

When designing this game I was mindful that this is a fun distraction for the visitor so I wanted it to be a bright, fun and simple game.

* The game is set up to be user friendly
* The images display the users and computers choice.
* There is a message displaying the winner and the scores are also incrementing to keep track of the winner.

# Wireframes of website

I used balsamiq to create wireframes for this project.

My inital wireframe for the game was:

<img width="560" alt="Wireframe" src="https://user-images.githubusercontent.com/87449935/139580684-90579cb4-7226-4c82-a3b2-bf9cb40cdaef.png">

However I felt that the design, as I was building it, was too busy so I changed the layout of the choices and score area and adjusted the rule area by removing 'rules' to make it clean and more user friendly.

# Features

### Surface
  
  I wanted the look of the game to be fun, bright and inviting. To achieve this, I choose to use the following to acheive the asthetic desired.
  
 #### Background Colour: 
  * lightblue
  * RBG - rgb(173, 216, 230)
  * Hex - 99CCCC
      
 #### Game area and choices colour:
  * lightcoral
  * RGB - rgb(240, 128, 128)
  * Hex - #F08080

#### Font
 *  font-family: "indie flower", roboto
  
### Heading

* The Rock, Paper, Scissors Heading.
  * At the top centre of the page the user will be able to see the name of the game apon opening the page

<img width="945" alt="Heading" src="https://user-images.githubusercontent.com/87449935/139582119-055fa089-7e17-4ec5-bb0a-3f4487f21906.png">

### Choices Area

* The choice area features three buttons for the player to select, the background colour the buttons are the same as the game area to link the two features.

<img width="946" alt="Choices Area" src="https://user-images.githubusercontent.com/87449935/139582424-6adf9974-1e08-4d58-b517-be2b3eecf05d.png">

* The buttons turn gray when hovered over to indicate a possible choice:

<img width="945" alt="Hover feature" src="https://user-images.githubusercontent.com/87449935/139582889-b5f55b56-a48f-455d-aabf-ee6a1edd941b.png">

### Messages Area

* This Feature displays who won the game with one of three messages
  * It's a tie
  * You Won!
  * Computer Wins!

<img width="949" alt="Message area" src="https://user-images.githubusercontent.com/87449935/139583177-ac42c31f-1260-4383-a1ac-d03e6988ba18.png">

### Game Area

The game Area has two seperate features. 

It also has a  'Lets Play!' heading above the scores.

#### Scores 

The Score area keeps a tally of the scores that is recorded above the players and computers images:

<img width="947" alt="2021-10-31 (10)" src="https://user-images.githubusercontent.com/87449935/139583408-ab050764-0cc5-435a-905a-6c629d3c1f31.png">

#### Images

The images used were from google images (publicdomainvectors.org) and inspired by code institute as I liked the simplicity of their choice.

<img width="944" alt="Placeholder-image" src="https://user-images.githubusercontent.com/87449935/139583922-1f07e991-3771-46d1-a90c-f02154f47436.png">

I then cut the main placeholder image for the choice selection images:

<img width="948" alt="choice-image" src="https://user-images.githubusercontent.com/87449935/139583935-f203e8e8-579c-4c98-837f-b17d4c614933.png">

### Rules/Footer

The rules of the game are placed in the footer:

<img width="948" alt="footer" src="https://user-images.githubusercontent.com/87449935/139585422-c0682dd1-41a4-4de8-aa20-d1de44ee3f7f.png">

# Technology

## HTML

To give stucture to the game

## CSS

This was used to add style to the game.

## javaScript

This was used to provide the game with interactivity for the player to engage with the game.

## MediaQuery

This was used to make the game responsive to different screens.

## Google Fonts

To provide a attractive font for the game.

## Wireframes

I used Balsamiq as a tool to make the wireframe.

## Github

To save the project and make it publicly available.

## Gitpod

This was just as the code editor to build the game.

# Testing

## HTML testing

I used the HTML validator to check any possible issue with my code. 

A couple of issues were highlighted which I amended:
  * No headings in the game area - I added a 'Let's play!' heading.
  * Pargraphs and heading tags were used in spans - footer and scores.

[W3C validater Html](https://validator.w3.org/)

<img width="950" alt="W3C Validater-RPS" src="https://user-images.githubusercontent.com/87449935/139586751-1ac36a8a-b161-4276-bd0a-5edb299f8b43.png">
## CSS testing

No errors found:

[Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcarolinecos.github.io%2Fmilestone-project-2-rockpaperscissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

<img width="946" alt="Jigsaw-cssValidator" src="https://user-images.githubusercontent.com/87449935/139586581-9419524a-d56f-4f51-b418-d2324e5cf4bd.png">

## Lighthouse check

[Lighthouse Report](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fcarolinecos.github.io%2Fmilestone-project-2-rockpaperscissors%2F)

<img width="947" alt="Lighthouse Check" src="https://user-images.githubusercontent.com/87449935/139586979-4c7e8c10-d5e3-4e52-b062-56fc1b25eb56.png">

# Deployment

The project was deployed on Github Pages. I used Gitpod to commit changes and I push the project to Github.

### Deploying the project

* Log into Github
* Open repository required
* Click on Settings
* Scroll down the settings and find Github pages
* Click on link
* From source click 'Branch' and save.
* Page is deployed after auto refresh
*  Your site is ready to be published at https://carolinecos.github.io/milestone-project-2-rockpaperscissors/



# Credits

## Contents

I used the idea provided by Code institute.

The intial code for the player selection and random computer choice as well as the image selector is the code institutes.

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
   
   
   I did edit the play function to suit my purposes.
   
   I also took inspiration from the Love Maths project for alignement of the game 
   and incrementing the scores which i needed to amend for functionallity purposes
   
  Thank you for your inspiration and for the Code Institues full template!
  
  ## Help and Hints
  
   I used the below resourses to guide and clarify some of code.
   
 * [W3 Schools](https://www.w3schools.com/)
 * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 * Random google searchs 

  I would also like to thank @ JulieADCL for her guidance with incrementing the scores code



