//make list of options
//get cpu selection
//get player selection - ask for input, lower case input
//compare selection
//make win/lose/tie options
//make score
//make loop for 5 times

const selection = ["rock", "paper", "scissors"]

function getComputerChoice() {
   const choice = selection[Math.floor(Math.random()*selection.length)];
   return choice
}

function getPlayerChoice() {
   const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
   return playerChoice
}

function playRound(player, computer) {
   if (player == computer) {
      return alert("It's a tie!");
   }
   else if (player =="rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
      return alert(player + " beats " + computer + "! You Win! :) ");
   }
   else if (computer =="rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper") {
      return alert(computer + " beats " + player + "! You Lose! :( ");
   }
   else { 
      return alert(player + " is not an option.")
   }
 }
 
const player = getPlayerChoice();
const computer = getComputerChoice();
console.log(playRound(player, computer));
