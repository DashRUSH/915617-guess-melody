import AbstractView from './abstract-view';
import inclineNouns from '../utils/incline-nouns';
import showResults from '../utils/show-results';
import {LIVES} from "../data/game-gata";

export default class SuccessView extends AbstractView {
  constructor(state, statistic) {
    super();
    this.state = state;
    this.statistic = statistic;
    this._errors = LIVES - this.state.lives;
  }

  get template() {
    return `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За 5 минут вы набрали ${this.state.points} баллов (0 быстрых), совершив 
      ${inclineNouns(this._errors, [`ошибку`, `ошибки`, `ошибок`])}</p>
    <p class="result__text">${showResults(this.statistic, this.state)}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;
  }
}
