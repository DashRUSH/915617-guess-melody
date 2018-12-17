/**
 * Функция склонения сущетвительных
 * @param {number} number - число, с которым склоняется существительное
 * @param {object} textTemplate - объект форм склонения существительных
 * @return {string} - строка из числа и соотв. существительного
 */
const inclineNouns = (number, textTemplate) => {
  let numberAbs = Math.abs(number) % 100;
  let resultText = null;

  if (numberAbs >= 5 && numberAbs <= 20) {
    resultText = textTemplate[2];
  } else {
    numberAbs %= 10;
    if (numberAbs === 1) {
      resultText = textTemplate[0];
    } else if (numberAbs >= 2 && numberAbs <= 4) {
      resultText = textTemplate[1];
    } else {
      resultText = textTemplate[2];
    }
  }

  return `${number} ${resultText}`;
};

export default inclineNouns;
