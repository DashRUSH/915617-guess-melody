/**
 * Функция, которая задаёт длину индикатора таймера
 * @param {object} screen - экран
 * @param {number} timeProportion - отношение общего времени игры к оставшемуся времени
 */
const calcTimerArc = (screen, timeProportion) => {
  const timerCircle = screen.querySelector(`.j-timer-radius`);
  if (!timerCircle) {
    return;
  }

  const circumference = Math.round(2 * Math.PI * timerCircle.getAttribute(`r`));
  timerCircle.style.strokeDashoffset = circumference * timeProportion;
};

export default calcTimerArc;
