const numberOfQuestions = 10;
const answerTime = 30000;

/**
 * Функция вычисляет число набранных очков
 * @param {object} answers - ответы пользователя
 * @param {number} activeAttempt - число оставшихся попыток
 * @return {number} - Число набранных очков/ошибка
 */
const countPoints = (answers, activeAttempt) => {
  if (answers.length < numberOfQuestions || activeAttempt <= 0) {
    return -1;
  }

  let points = 0;

  answers.forEach((answer) => {
    if (!answer.answer) {
      points -= 2;
    } else {
      points += answer.time / answerTime >= 1 ? 1 : 2;
    }
  });

  return points;
};

export default countPoints;
