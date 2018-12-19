import AbstractView from './abstract-view';

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this._error = error;
  }

  get template() {
    return `<section class="result result--fail">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Упс! Возникла ошибка:</h2>
    <p class="result__total result__total--fail">${this._error}</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;
  }

  bindEvents() {
    const buttonReplay = this.element.querySelector(`.result__replay`);

    buttonReplay.addEventListener(`click`, () => this.bindClickReplay());
  }

  bindClickReplay() {}
}
