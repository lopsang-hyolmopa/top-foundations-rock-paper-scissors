function game() {
  const buttons = document.querySelectorAll("button");
  const scoreList = document.querySelector(".scoreList");
  let playerWins = 0;
  let computerWins = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();
      const score = document.createElement("li");

      const result = playRound(playerSelection, computerSelection);

      if (result.includes("win")) {
        playerWins++;
      } else if (result.includes("lose")) {
        computerWins++;
      }

      score.textContent = `${result} Total Score: You - ${playerWins}, Computer - ${computerWins}`;
      scoreList.appendChild(score);

      if (playerWins === 5 || computerWins === 5) {
        declareWinner(playerWins, computerWins);
      }
    });
  });
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
    return `You win!`;
  } else {
    return `You lose!`;
  }
}

function declareWinner(playerWins, computerWins) {
  const scoreBoard = document.querySelector(".scoreBoard");
  const winnerMessage = document.createElement("p");
  scoreBoard.appendChild(winnerMessage);

  if (playerWins === 5) {
    winnerMessage.textContent = `You are the winner!`;
  } else if (computerWins === 5) {
    winnerMessage.textContent = `The computer is the winner!`;
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
