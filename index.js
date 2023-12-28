function game() {
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    }
  }

  console.log(declareWinner(playerWins, computerWins));
}

function getPlayerChoice() {
  return prompt(`Choose: "Rock", "Paper", "Scissors"`).toLocaleLowerCase();
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) {
    return "Tied!";
  } else if (winConditions[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function declareWinner(playerWins, computerWins) {
  console.log(`Total scores - You: ${playerWins}, Computer: ${computerWins}`);
  
  if (playerWins > computerWins) {
    return `You are the winner!`;
  } else if (playerWins < computerWins) {
    return `The computer is the winner!`;
  } else {
    return `The game has been tied!`;
  }
}

game();

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     let result = "Tied";
//     return result;
//   } else {
//     if (playerSelection === "rock" && computerSelection === "paper") {
//       let result = "You lose! Paper beats Rock";
//       return result;
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//       let result = "You win! Rock beats Scissors";
//       return result;
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//       let result = "You win! Paper beats Rock";
//       return result;
//     } else if (
//       playerSelection === "paper" &&
//       computerSelection === "scissors"
//     ) {
//       let result = "You lose! Scissors beats Paper";
//       return result;
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//       let result = "You lose! Rock beats Scissors";
//       return result;
//     } else if (
//       playerSelection === "scissors" &&
//       computerSelection === "paper"
//     ) {
//       let result = "You win! Scissors beats Paper";
//       return result;
//     }
//   }
// }
