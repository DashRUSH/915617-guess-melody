/**
 * Функция выводит результат игрока
 * @param {array} resultCommon - статистика уже пройденных игр
 * @param {object} resultUser - статистика игрока
 * @return {string} - сообщение о реультатах игрока
 */
const showResults = (resultCommon, resultUser) => {
  if (resultUser.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (resultUser.activeAttempt === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const results = resultCommon.concat(resultUser.points);
  results.sort((left, right) => right - left);
  const position = results.lastIndexOf(resultUser.points) + 1;
  const positionPercent = (results.length - position) / results.length * 100;
  return `Вы заняли ${position} место из ${results.length} игроков. Это лучше, чем у ${positionPercent}% игроков`;
};

export default showResults;
