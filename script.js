const buttons = document.querySelectorAll(".btnContainer button");
const restartGameBtn = document.querySelector(".restart");
const modal = document.getElementById("myModal");
const WINNING_SCORE = 5;
let playerWins = 0;
let computerWins = 0;

restartGameBtn.addEventListener("click", () => {
  restartGame()
})

function game() {
  const roundResult = document.querySelector(".heading p");
  const playerChoice = document.querySelector(".playerChoice");
  const scoreCountPlayer = document.querySelector(".scoreCountPlayer");
  const scoreCountComputer = document.querySelector(".scoreCountComputer");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;

      if (button.id === "rock") {
        playerChoice.textContent = "✊";
      } else if (button.id === "paper") {
        playerChoice.textContent = "✋";
      } else if (button.id === "scissors") {
        playerChoice.textContent = "✌";
      } else {
        playerChoice.textContent = "?";
      }

      const computerSelection = getComputerChoice();

      const result = playRound(playerSelection, computerSelection);
      roundResult.textContent = result;

      if (result.includes("win")) {
        playerWins++;
        scoreCountPlayer.textContent = playerWins;
      } else if (result.includes("lose")) {
        computerWins++;
        scoreCountComputer.textContent = computerWins;
      }

      if (playerWins === WINNING_SCORE || computerWins === WINNING_SCORE) {
        const winner =
          playerWins === 5
            ? `You are the winner!`
            : `The computer is the winner!`;
        declareWinner(winner);
      }
    });
  });
}

function getComputerChoice() {
  const computerChoice = document.querySelector(".computerChoice");

  const choices = ["rock", "paper", "scissors"];
  finalChoice = choices[Math.floor(Math.random() * choices.length)];

  if (finalChoice == "rock") {
    computerChoice.textContent = "✊";
  } else if ((finalChoice = "paper")) {
    computerChoice.textContent = "✋";
  } else if ((finalChoice = "scissors")) {
    computerChoice.textContent = "✌";
  } else {
    computerChoice.textContent = "?";
  }
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

function declareWinner(winner) {
  const closeModal = document.getElementsByClassName("close")[0];
  const restartGameBtn = document.querySelector(".modal-content button");

  modal.style.display = "block";
  const winnerMessage = document.querySelector(".modal-content h3");
  winnerMessage.textContent = winner;

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    restartGame()
  })

  restartGameBtn.addEventListener("click", () => {
    modal.style.display = "none";
    restartGame()
  })
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
  playerChoice.textContent = "?"
  computerChoice.textContent = "?"
  scoreCountPlayer.textContent = "0"
  scoreCountComputer.textContent = "0"
  playerWins = 0;
  computerWins = 0;
}

game();
