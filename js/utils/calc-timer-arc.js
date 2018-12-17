import {COMMON_TIME} from './../data/game-data';

/**
 * Функция, которая задаёт длину индикатора таймера
 * @param {number} time - текущее время
 * @return {number} strokeDashoffset - значение stroke-dashoffset
 */
const calcTimerArc = (time) => {
  const timerCircle = document.querySelector(`.j-timer-radius`);
  if (!timerCircle) {
    return 0;
  }

  const circumference = Math.round(2 * Math.PI * timerCircle.getAttribute(`r`));
  return circumference - time * circumference / COMMON_TIME;
};

export default calcTimerArc;
