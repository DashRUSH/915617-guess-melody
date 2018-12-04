import setTime from '../controllers/set-time';
import calcCircumference from '../controllers/calc-circumference';

const gamePanel = (state) => {
  const radius = 370;
  const circumference = calcCircumference(radius);
  return `<header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line j-timer-radius" cx="390" cy="390" r="370"
                style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center; 
                stroke-dasharray: ${circumference};"/>
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">${setTime(state.time).minutes}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">${setTime(state.time).seconds}</span>
      </div>

      <div class="game__mistakes">
        ${new Array(3 - state.lives)
          .fill(`<div class="wrong"></div>`)
          .join(``)}
        ${new Array(state.lives)
          .fill(`<div class="correct"></div>`)
          .join(``)}
      </div>
    </header>`;
};

export default gamePanel;
