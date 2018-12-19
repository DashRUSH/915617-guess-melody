import AbstractView from './abstract-view';
import inclineNouns from '../utils/incline-nouns';
import showResults from '../utils/show-results';
import setTime from '../utils/set-time';
import {LIVES, COMMON_TIME} from '../data/game-data';

export default class SuccessView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.statistic = this.state.statistic;
    this._errors = LIVES - this.state.lives;
    this._usetTime = setTime(COMMON_TIME - this.state.time);
    this._userMinutes = this._usetTime.minutes === `00` ? `` :
      inclineNouns(+this._usetTime.minutes[1], [`минуту`, `минуты`, `минут`]);
    this._userSeconds = this._usetTime.seconds === `00` ? `` :
      inclineNouns(+this._usetTime.seconds, [`секунду`, `секунды`, `секунд`]);
  }

  get template() {
    return `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За ${this._userMinutes} ${this._userSeconds} 
      вы набрали 
      ${inclineNouns(this.state.points, [`балл`, `балла`, `баллов`])} 
      (${inclineNouns(this.state.fast, [`быстрый`, `быстрых`, `быстрых`])}), совершив 
      ${inclineNouns(this._errors, [`ошибку`, `ошибки`, `ошибок`])}</p>
    <p class="result__text">${showResults(this.statistic, this.state)}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;
  }

  bindEvents() {
    const buttonReplay = this.element.querySelector(`.result__replay`);

    buttonReplay.addEventListener(`click`, () => this.bindClickReplay());
  }

  bindClickReplay() {}
}
