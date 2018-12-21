/**
 * Функция склонения сущетвительных
 * @param {number} number - число, с которым склоняется существительное
 * @param {object} textTemplate - объект форм склонения существительных
 * @return {string} - строка из числа и соотв. существительного
 */
const inclineNouns = (number, textTemplate) => {
  let numberAbs = Math.abs(number) % 100;

  if (numberAbs >= 5 && numberAbs <= 20) {
    return `${number} ${textTemplate[2]}`;
  }

  numberAbs %= 10;
  if (numberAbs === 1) {
    return `${number} ${textTemplate[0]}`;
  }

  if (numberAbs >= 2 && numberAbs <= 4) {
    return `${number} ${textTemplate[1]}`;
  }

  return `${number} ${textTemplate[2]}`;
};

export default inclineNouns;
