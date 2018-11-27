import getElementFromTemplate from '../utils/get-elemet-from-template';
import {FAIL} from '../data/game-gata';
const error = FAIL.TRIES;

const templateFailTries = `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${error.title}</h2>
    <p class="result__total result__total--fail">${error.text}</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

const ScreenFail = getElementFromTemplate(templateFailTries);

export default ScreenFail;
