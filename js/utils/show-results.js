import {TIME_IS_EMPTY} from '../data/game-data';

/**
 * Функция выводит результат игрока
 * @param {array} resultCommon - статистика уже пройденных игр
 * @param {object} state - статистика игрока
 * @return {string} - сообщение о реультатах игрока
 */
const showResults = (resultCommon, state) => {
  const ERROR_TIME = `Время вышло! Вы не успели отгадать все мелодии`;
  const ERROR_LIVE = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  if (state.time === TIME_IS_EMPTY) {
    return ERROR_TIME;
  }

  if (state.activeAttempt === 0) {
    return ERROR_LIVE;
  }

  resultCommon.sort((left, right) => right - left);
  const position = resultCommon.lastIndexOf(state.points) + 1;
  const positionPercent = Math.round((resultCommon.length - position) / resultCommon.length * 100);
  return `Вы заняли ${position} место из ${resultCommon.length} игроков. Это лучше, чем у ${positionPercent}% игроков`;
};

export default showResults;
