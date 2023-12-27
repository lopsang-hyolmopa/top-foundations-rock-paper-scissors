// function game() {
//     for(let i=0; i<5; i++) {

//     }
// }

function getPlayerChoice() {
  return (finalChoice = prompt(
    `Choose: "Rock", "Paper", "Scissors"`
  ).toLowerCase());
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return (finalChoice = choices[Math.floor(Math.random() * choices.length)]);
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playGround(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // console.log("Tied!");
    let result = "Tied";
    return result;
  } else {
    if (playerSelection === "rock" && computerSelection === "paper") {
      let result = "You lose! Paper beats Rock";
      return result;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      let result = "You win! Rock beats Scissors";
      return result;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      let result = "You win! Paper beats Rock";
      return result;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      let result = "You lose! Scissors beats Paper";
      return result;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      let result = "You lose! Rock beats Scissors";
      return result;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      let result = "You win! Scissors beats Paper";
      return result;
    }
  }
}

console.log(playGround(playerSelection, computerSelection));

// console.log(`Computer Choice:`, getComputerChoice())
// console.log(`Player Choice:`, getPlayerChoice())
