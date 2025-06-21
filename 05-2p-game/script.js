"use strict";

// selecting elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.getElementById("score-1");
const current0El = document.getElementById("current-0");
const current1El = document.getElementById("current-1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

// variables
let scores; // total score
let currentScore;
let playerActive; // 0 = 1st, 1 = 2nd
let isPlaying;

function init() {
  isPlaying = true;
  scores = [0, 0];
  currentScore = 0;
  playerActive = 0;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player-winner");
  player0El.classList.add("player-active");
  player1El.classList.remove("player-active");
}

init();

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current-${playerActive}`).textContent = currentScore;
  playerActive = playerActive === 0 ? 1 : 0;

  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");
}

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    //* 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    //* 2. Display dice
    diceEl.classList.remove("hidden");
    // console.log(diceEl.src);
    diceEl.src = `dice-${dice}.svg`;

    //* 3. Check for rolled 1
    if (dice !== 1) {
      //* 4. Add dice roll to current score
      currentScore = currentScore + dice;
      //* 5. Display new current score
      // current0El.textContent = currentScore;
      document.getElementById(`current-${playerActive}`).textContent =
        currentScore;
    } else {
      // switch player()
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    //* 1. add current score to active player
    scores[playerActive] += currentScore;
    document.getElementById(`score-${playerActive}`).textContent =
      scores[playerActive];

    if (scores[playerActive] >= 20) {
      // Finish the game
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player-${playerActive}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${playerActive}`)
        .classList.remove("player-active");
      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
