//make list of options
//get cpu selection
//get player selection - ask for input, lower case input
//compare selection
//make win/lose/tie options
//make score
//make loop for 5 times

const selection = ["rock", "paper", "scissors"]
playerScore = 0
computerScore = 0



function getComputerChoice() {
   const choice = selection[Math.floor(Math.random() * selection.length)];
   return choice
}

function getPlayerChoice() {
   let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
   return playerChoice
}

function playRound(player, computer) {
   if (player == computer) {
      return alert("It's a tie!");
   }
   else if (player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper") {
      playerScore++;
      return alert(player + " beats " + computer + "! You Win! :) ");
   }
   else if (computer == "rock" && player == "scissors" || computer == "paper" && player == "rock" || computer == "scissors" && player == "paper") {
      computerScore++;
      return alert(computer + " beats " + player + "! You Lose! :( ");
   }
   else {
      return alert(player + " is not an option.")
   }
}
function playGame() {
   for (let round = 0; round < 5; round++) {
      let player = getPlayerChoice();
      let computer = getComputerChoice();
      console.log(player + " vs " + computer);
      playRound(player, computer);
      pScore = "Player: " + playerScore;
      cScore = "Computer: " + computerScore;
      console.log(pScore, cScore)
   }
   score = (pScore + " " + cScore);

   if (playerScore > computerScore) {
      return alert("You win! Final result: " + score);
   }
   else if (computerScore > playerScore) {
      return alert("Sorry you lose. Try again! Final Result: " + score);
   }
   else if (computerScore == playerScore) {
      return alert("Draw! Final result: " + score);
   }
}

console.log(playGame());
