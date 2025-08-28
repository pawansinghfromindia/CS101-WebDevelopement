let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numOfGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // simply validate if guess is between 1 to 100 or not
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 101");
  } else {
    prevGuess.push(guess);
    if (numOfGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check whether num is low or High or equal to that randomNumber?
  if (guess === randomNumber) {
    displayMessage(`You guesses it right!!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  // Clean the value + update guess[] + remaining update
  // this is basically a clean up method
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numOfGuess++;
  remaining.innerHTML = `${10 - numOfGuess}`;
}

function displayMessage(message) {
  // directly interact with DOM Manipulation
  // print message
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //to end the game
  //clear user inputs
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 style="border:1px solid white; border-radius: 5px" id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  // to start the new game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numOfGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
