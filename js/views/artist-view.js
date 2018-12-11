import AbstractView from './abstract-view';
import PanelView from './panel-view';
import {QUESTIONS} from "../data/game-gata";
import calcPoints from "../utils/calc-points";
import renderScreen from "../utils/render-screen";
import changeLives from "../utils/change-lives";
import changeLevel from "../utils/change-level";

export default class ArtistView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this._panel = new PanelView(this.state).template;
    this._question = question;
  }

  get template() {
    return `<section class="game game--artist">
    ${this._panel}
    <section class="game__screen">
      <h2 class="game__title">${this._question.title}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${this._question.src}"></audio>
      </div>
      <form class="game__artist">
        ${this._question.options.map((audio, i) => `<div class="artist">
          <input class="artist__input visually-hidden j-artist-answer" type="radio" name="answer" value="${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${audio.image}" alt="${audio.artist}">
            ${audio.artist}
          </label>
        </div>`).join(``)}
      </form>
    </section>
  </section>`;
  }

  bindEvents() {
    const radioButtons = this.element.querySelectorAll(`.j-artist-answer`);

    radioButtons.forEach((radiobutton) => {
      radiobutton.addEventListener(`change`, () => {
        const isRight = QUESTIONS[this.state.level - 1].options[radiobutton.value].answer;
        this.checkAnswerArtist(this.state, isRight);
      });
    });
  }

  checkAnswerArtist(state, isRight) {
    let stateNew = state;
    let success;
    if (isRight) {
      success = true;
    } else {
      success = false;
      stateNew = changeLives(stateNew);
    }
    stateNew = changeLevel(stateNew);
    stateNew = calcPoints(stateNew, success);
    renderScreen(stateNew);
  }
}
