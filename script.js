'use strict';
//--------Handling Events ------
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✌ Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //-------When there is no input -----------
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '✌ Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.number').style.width = '30rem';
    // displayMessage('correct Number');
  } else if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    // displayMessage('.Highscore').textContent = highScore
  }
  //
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⚡To High' : '🔅Two Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '👎 You Lost the game!';
    // displayMessage('👎 You Lost the game!');
    document.querySelector('.score').textContent = 0;
    console.log('Hello world');
  }
});

//------------ Again ---------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Starting message.....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
