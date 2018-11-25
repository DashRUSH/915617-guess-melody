const numberOfLives = 3;

/**
 * Функция подсчёта жизней игрока
 * @param {number} errors - число ошибок
 * @return {number} - число оставшихся жизней игрока/код выхода из игры
 */
const countLives = (errors) => {
  if (errors >= numberOfLives) {
    return -1;
  }

  return numberOfLives - errors;
};

export default countLives;
