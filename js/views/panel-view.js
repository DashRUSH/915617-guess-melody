import AbstractView from './abstract-view';
import {LIVES} from '../data/game-data';
import TimerView from './timer-view';

export default class PanelView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
    this._radius = 370;
    this._timer = new TimerView(this._state).template;
  }

  get template() {
    return `<header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      ${this._timer}

      <div class="game__mistakes">
        ${new Array(LIVES - this._state.lives)
      .fill(`<div class="wrong"></div>`)
      .join(``)}
        ${new Array(this._state.lives)
      .fill(`<div class="correct"></div>`)
      .join(``)}
      </div>
    </header>`;
  }
}
