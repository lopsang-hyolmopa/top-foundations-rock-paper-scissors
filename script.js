const WINNING_SCORE = 5;
const choicesMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

let playerWins = 0;
let computerWins = 0;

function game() {
  const buttons = document.querySelectorAll(".btnContainer button");
  const roundResult = document.querySelector(".heading p");
  const restartGameBtn = document.querySelector(".restart");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = getPlayerChoice(button.id);
      const computerSelection = getComputerChoice();

      const result = playRound(playerSelection, computerSelection);
      roundResult.textContent = result;

      updateScore(result);
    });
  });

  restartGameBtn.addEventListener("click", () => {
    restartGame();
  });
}

function getPlayerChoice(buttonId) {
  const playerChoice = document.querySelector(".playerChoice");
  playerChoice.textContent = choicesMap[buttonId] || "?";

  return buttonId;
}

function getComputerChoice() {
  const computerChoice = document.querySelector(".computerChoice");

  const choices = ["rock", "paper", "scissors"];
  const finalChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice.textContent = choicesMap[finalChoice] || "?";

  return finalChoice;
}

function playRound(playerSelection, computerSelection) {
  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection === computerSelection) {
    return "It's tie!";
  } else if (winConditions[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore(result) {
  const scoreCountPlayer = document.querySelector(".scoreCountPlayer");
  const scoreCountComputer = document.querySelector(".scoreCountComputer");

  if (result.includes("win")) {
    playerWins++;
    scoreCountPlayer.textContent = playerWins;
  } else if (result.includes("lose")) {
    computerWins++;
    scoreCountComputer.textContent = computerWins;
  }

  if (playerWins === WINNING_SCORE || computerWins === WINNING_SCORE) {
    const winner =
      playerWins === WINNING_SCORE
        ? `You are the winner!`
        : `The computer is the winner!`;
    declareWinner(winner);
  }
}

function declareWinner(winner) {
  const modal = document.getElementById("myModal");

  openModal(modal, winner);
  closeModal(modal);
}

function openModal(modal, winner) {
  const winnerMessage = document.querySelector(".modal-content h3");
  const restartGameBtn = document.querySelector(".modal-content button");

  modal.style.display = "block";
  winnerMessage.textContent = winner;

  restartGameBtn.addEventListener("click", () => {
    modal.style.display = "none";
    restartGame();
  });
}

function closeModal(modal) {
  const closeModal = document.getElementsByClassName("close")[0];

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    restartGame();
  });
}

function restartGame() {
  const winnerMessage = document.querySelector(".heading h3");
  const roundResult = document.querySelector(".heading p");
  const playerChoice = document.querySelector(".playerChoice");
  const computerChoice = document.querySelector(".computerChoice");
  const scoreCountPlayer = document.querySelector(".scoreCountPlayer");
  const scoreCountComputer = document.querySelector(".scoreCountComputer");

  winnerMessage.textContent = "Pick your weapon";
  roundResult.textContent = "The player who scores 5 points first wins.";
  playerChoice.textContent = "?";
  computerChoice.textContent = "?";
  scoreCountPlayer.textContent = "0";
  scoreCountComputer.textContent = "0";
  playerWins = 0;
  computerWins = 0;
}

game();
