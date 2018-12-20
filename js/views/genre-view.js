import AbstractView from './abstract-view';
import {DEBUG, DEBUG_STYLE} from '../settings';

export default class GenreView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this._question = question;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this._question.title}</h2>
    <form class="game__tracks j-genre-form">
      ${this._question.options.map((audio, i) => `<div class="track" ${DEBUG && !audio.answer ? DEBUG_STYLE : ``}>
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio src="${audio.src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden j-genre-answer" type="checkbox" name="answer" value="${i}" id="answer-${i}">
          <label class="game__check" for="answer-${i}">Отметить</label>
        </div>
      </div>`).join(``)}
      <button class="game__submit button" type="submit" disabled>Ответить</button>
    </form>
  </section>`;
  }
}
