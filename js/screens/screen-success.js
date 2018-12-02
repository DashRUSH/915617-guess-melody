import getElementFromTemplate from '../utils/get-elemet-from-template';
import inclineNouns from '../utils/incline-nouns';
import showResults from '../controllers/show-results';

const templateSuccess = (state, statistic) => {
  const errors = 3 - state.lives;
  const template = `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За 5 минут вы набрали ${state.points} баллов (0 быстрых), совершив ${inclineNouns(errors, [`ошибку`, `ошибки`, `ошибок`])}</p>
    <p class="result__text">${showResults(statistic, state)}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;

  return getElementFromTemplate(template);
};

export default templateSuccess;
