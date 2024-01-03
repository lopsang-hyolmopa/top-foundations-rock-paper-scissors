const buttons = document.querySelectorAll("button");
const scoreBoard = document.querySelector(".scoreBoard");
const scoreList = document.querySelector(".scoreList");
const WINNING_SCORE = 5

function game() {
  let playerWins = 0;
  let computerWins = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      const computerSelection = getComputerChoice();

      const result = playRound(playerSelection, computerSelection);

      if (result.includes("win")) {
        playerWins++;
      } else if (result.includes("lose")) {
        computerWins++;
      }

      updateScore(playerWins, computerWins)      

      if (playerWins === WINNING_SCORE || computerWins === WINNING_SCORE) {
        const winner = playerWins === 5 ? `You are the winner!` : `The computer is the winner!`;
        declareWinner(winner)
          restartGame();
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

function updateScore(playerWins, computerWins) {
  const score = document.createElement("li");
  score.textContent = `${result} Total Score: You - ${playerWins}, Computer - ${computerWins}`;
  scoreList.appendChild(score);
}

function declareWinner(winner) {
  const winnerMessage = document.createElement("p");
  winnerMessage.textContent = winner
  scoreBoard.appendChild(winnerMessage);
}

function restartGame() {
  const winnerMessage = document.querySelector('p')

  scoreList.innerHTML = ""
  winnerMessage.textContent = ""
  let playerWins = 0;
  let computerWins = 0;
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
