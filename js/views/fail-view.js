import AbstractView from './abstract-view';
import {FAIL} from '../data/game-gata';

export default class FailView extends AbstractView {
  constructor(type) {
    super();
    this._type = type;
  }

  get template() {
    return `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${FAIL[this._type].title}</h2>
    <p class="result__total result__total--fail">${FAIL[this._type].text}</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;
  }
}
