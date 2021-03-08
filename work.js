/*
'🎉Correct Number!','⛔ No Number!', '📈 Too high!', '📉 Too low!'
document.querySelector('.score').textContent = 5; // задаем число для <span class="score">
document.querySelector('.guess').value = 23; // .value используем для <input type="number" class="guess"
console.log(document.querySelector('.guess').value); // вводимое число class="guess"
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // создаем рандомную переменную 'secretNumber'
let score = 20; // создаем переменную 'score' с количеством попыток
let highscore = 0; // переменная с последним колличеством попыток

//функция срабатывает при нажатии кнопки 'Check', сравнивая введённое число с 'secretNumber'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // переводим 'string' в Number

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When player wins
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    // условие объявляющее 'highscore'
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When score too high
  } else if (secretNumber < guess) {
    if (score > 1) {
      // второй сценарий для объявлении '💥 You lost the GAME!' при окончании  попыток 'score'
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; // отнимаем от переменной 'score' одну единицу, при не правильной попытки
      document.querySelector('.score').textContent = score; // обновляем значение 'score'
    } else {
      document.querySelector('.message').textContent = '💥 You lost the GAME!';
      document.querySelector('.score').textContent = 0;
    }

    //When score too low
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--; // отнимаем от переменной 'score' одну единицу, при не правильной попытки
      document.querySelector('.score').textContent = score; // обновляем значение 'score'
    } else {
      document.querySelector('.message').textContent = '💥 You lost the GAME!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const mainGuesse = document.querySelector('input').guess;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // переносим сюда 'secretNumber' что-б при нажатии 'Again!' менялось число

  document.querySelector('.guess').value = mainGuesse;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
