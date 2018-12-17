import {COMMON_TIME} from './../data/game-data';

/**
 * Функция, которая задаёт длину индикатора таймера
 * @param {object} screen - экран
 * @param {number} time - текущее время
 */
const calcTimerArc = (screen, time) => {
  const timerCircle = screen.querySelector(`.j-timer-radius`);
  if (!timerCircle) {
    return;
  }

  const circumference = Math.round(2 * Math.PI * timerCircle.getAttribute(`r`));
  timerCircle.style.strokeDashoffset = time / COMMON_TIME * circumference;
};

export default calcTimerArc;
