"use strict";

//selecting elements
const player0El = document.querySelector(".player--1");
const player1El = document.querySelector(".player--0");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const btnNew = document.querySelector(".btn--new");
const btnPlay = document.querySelector(".btn--play");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player-winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //If active player equals 0, switch to 1. If not, switch to 0.
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnPlay.addEventListener("click", function () {
  if (playing) {
    //Generate random number
    const number = Math.trunc(Math.random() * 7) + 1;

    //Add number to score

    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
