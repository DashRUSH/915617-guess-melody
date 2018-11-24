/**
 * Функция склонения сущетвительных
 * @param {number} number - число, с которым склоняется существительное
 * @param {object} textTemplate - объект форм склонения существительных
 * @return {string} - строка из числа и соотв. существительного
 */
const inclineNouns = (number, textTemplate) => {
  const numberAbs = Math.abs(number);
  let resultText = null;

  if (numberAbs % 10 === 1) {
    resultText = textTemplate[0];
  } else if (numberAbs % 10 >= 2 && numberAbs % 10 <= 4) {
    resultText = textTemplate[1];
  } else {
    resultText = textTemplate[2];
  }

  return `${number} ${resultText}`;
};

export default inclineNouns;
