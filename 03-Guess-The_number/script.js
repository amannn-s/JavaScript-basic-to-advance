"use strict";

/*
//* DOM: Document Object Model

console.log(document);

// to select any element in html using document object you can use a method called querySelector() and pass a className to it as a parameter

console.log(document.querySelector(".message"));
// get text content
console.log(document.querySelector(".message").textContent);
// update text content
document.querySelector(".message").textContent = "🎊 Correct Number";

// there is not text content inside input tags
// update
document.querySelector(".guess").value = 13;
// get
console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// later on we will update this line
document.querySelector(".number").textContent = secretNumber;

//* Events in JavaScript are actions or occurrences that happen in the browser, often triggered by the user or the browser itself.

// Common Examples of Events:
// click – user clicks a button
// mouseover – user moves mouse over an element
// keydown – user presses a key
// submit – form is submitted
// load – page or image is loaded

// .addEventListener("string typeOfEvent", callBackFunction)

// callbackFunc, anonyms function
document.querySelector(".check").addEventListener("click", function () {
  // whole functionality of my game
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (guess == 0) {
    document.querySelector(".message").textContent = "Enter a number 🔴";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎊";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low 👇";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High 👆";
  }
});

*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let chance = 20;
let highScore = 0;

document.querySelector(".chance").textContent = chance;
document.querySelector(".highscore").textContent = highScore;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess === 0 || guess < 1 || guess > 20) {
    displayMessage("🚫 Not a valid Number!");
  } else if (guess === secretNumber) {
    displayMessage("🥇 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (chance > highScore) {
      highScore = chance;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (chance > 1) {
      displayMessage(guess > secretNumber ? "☝️ Too high!" : "👇 Too low!");
      chance--;
      document.querySelector(".chance").textContent = chance;
    } else {
      displayMessage("😟 You lost the game!");
      chance = 0;
      document.querySelector(".chance").textContent = chance;
    }
  }

  // else if (guess > secretNumber) {
  //   if (chance > 1) {
  //     displayMessage("☝️ Too high!");
  //     chance--;
  //     document.querySelector(".chance").textContent = chance;
  //   } else {
  //     displayMessage("😟 You lost the game!");
  //     chance = 0;
  //     document.querySelector(".chance").textContent = chance;
  //   }
  // } else if (guess < secretNumber) {
  //   if (chance > 1) {
  //     displayMessage("👇 Too low!");
  //     chance--;
  //     document.querySelector(".chance").textContent = chance;
  //   } else {
  //     displayMessage("😟 You lost the game!");
  //     chance = 0;
  //     document.querySelector(".chance").textContent = chance;
  //   }
  // }
});

document.querySelector(".restart").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#ffffff";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  chance = 20;
  document.querySelector(".chance").textContent = chance;
});
