import AbstractView from './abstract-view';
import {DEBUG, DEBUG_STYLE} from '../settings';

export default class ArtistView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this._question = question;
  }

  get template() {
    return `<section class="game__screen">
    <h2 class="game__title">${this._question.title}</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src="${this._question.src}"></audio>
    </div>
    <form class="game__artist">
      ${this._question.options.map((audio, i) => `<div class="artist" ${DEBUG && !audio.answer ? DEBUG_STYLE : ``}>
        <input class="artist__input visually-hidden j-artist-answer" type="radio" name="answer" value="${i}" id="answer-${i}">
        <label class="artist__name" for="answer-${i}">
          <img class="artist__picture" src="${audio.image}" alt="${audio.artist}">
          ${audio.artist}
        </label>
      </div>`).join(``)}
    </form>
  </section>`;
  }
}
