'use strict';
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const bodyColor = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.score').textContent = 10;

// Functions
const getMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const createNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const tryAgain = function () {
  score = 10;
  // что-б при нажатии Again сразу менялся "secretNumber"
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  getMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  bodyColor.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

// Events
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    getMessage('⛔ No Number!');
  } else if (secretNumber === guess) {
    bodyColor.style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    getMessage('🎉Currect Number!');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess to high or to low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      getMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      getMessage('💥 You Lost the Game!');
      document.querySelector('.score').textContent = 0;
      bodyColor.style.backgroundColor = '#990000';
    }
  }
});

again.addEventListener('click', tryAgain);
