import getElementFromTemplate from '../utils/get-elemet-from-template';
import {FAIL} from '../data/game-gata';

const templateFailTries = (type) => {
  const template = `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${FAIL[type].title}</h2>
    <p class="result__total result__total--fail">${FAIL[type].text}</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;
  return getElementFromTemplate(template);
};

export default templateFailTries;
