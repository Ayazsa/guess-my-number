'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Guess Number';
// console.log(document.querySelector('.message').textContent);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 5;
// let highScore = 0;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     document.querySelector('.message').textContent = ' ❌No number❌';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '✔Correct Guess✔';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = 'Too High!';
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.number').textContent = secretNumber;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = 'Too Low!';
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.number').textContent = secretNumber;
//     }
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 5;
//   document.querySelector('.message').textContent = 'start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '❌No number❌';
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✔Correct Guess✔';
    displayMessage('✔Correct Guess✔');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '!Too high!' : '!Too low!');
      // guess > secretNumber ? '!Too high!' : '!Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 5;
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
