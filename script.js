'use strict';
const body = document.querySelector('body');
const message = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const scoreText = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const again = document.querySelector('.again');
const secretNumEl = document.querySelector('.number');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highscoreNumber = 0;

const bodyColor = color => (body.style.backgroundColor = color);
const userMessage = messageText => (message.textContent = messageText);

const decrement = () => {
  scoreNumber--;
  scoreText.textContent = scoreNumber;
};

const setHighscore = () => {
  if (scoreNumber > highscoreNumber) {
    highscoreNumber = scoreNumber;
    highscore.textContent = highscoreNumber;
  }
};

const resetGame = () => {
  secretNumEl.textContent = '?';
  bodyColor('#222');
  scoreNumber = 20;
  scoreText.textContent = scoreNumber;
  userMessage('Start guessing...');
  guessInput.value = '';
};

checkButton.addEventListener('click', function () {
  // If an input is defined
  if (guessInput.value) {
    // And if user looses
    if (scoreNumber === 1 && guessInput.value !== secretNumber) {
      userMessage('Game over!');
      bodyColor('red');
      scoreText.textContent = 0;

      // If user input is too high
    } else if (secretNumber < guessInput.value) {
      userMessage('Number is too high! 📈');
      bodyColor('red');
      setTimeout(() => {
        bodyColor('#222');
      }, 100);
      decrement();

      // If user input is too low
    } else if (secretNumber > guessInput.value) {
      userMessage('Number is too low! 📉');
      bodyColor('red');
      setTimeout(() => {
        bodyColor('#222');
      }, 100);
      decrement();

      // If user wins
    } else {
      userMessage('Number is correct! 🍾');
      bodyColor('green');
      secretNumEl.textContent = secretNumber;
      setHighscore();
    }

    // If user input is undefined
  } else {
    userMessage('You need to input a number!');
  }
});

again.addEventListener('click', resetGame);
