# Projects related to DOM

## Project Links

[StackBlitz](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 - Background Color Change Switcher

```javascript
const buttons = document.querySelectorAll(".button");
//console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2 - BMI Generator

```javascript
const form = document.querySelector("form");
//console.log(form);
// this useCase will give you empty value
// const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    let desc = "";
    if (bmi < 18.6) {
      desc = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      desc = "Normal Range";
    } else {
      desc = "Over Weight";
    }

    results.innerHTML = `<span>${bmi}</span> <br/> <span>${desc}</span>`;
  }
});
```

## Project 3 - Digital Clock

```javascript
const clock = document.getElementById("clock");
//or
const clock1 = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 - Guess the Number

```javascript
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
```
