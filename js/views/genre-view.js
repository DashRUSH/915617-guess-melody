import AbstractView from './abstract-view';
import PanelView from './panel-view';
import {QUESTIONS} from "../data/game-gata";
import calcPoints from "../utils/calc-points";
import renderScreen from "../utils/render-screen";
import changeLives from "../utils/change-lives";
import changeLevel from "../utils/change-level";

export default class GenreView extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this._panel = new PanelView(this.state).template;
    this._question = question;
  }

  get template() {
    return `<section class="game game--genre">
    ${this._panel}
    <section class="game__screen">
      <h2 class="game__title">${this._question.title}</h2>
      <form class="game__tracks j-genre-form">
        ${this._question.options.map((audio, i) => `<div class="track">
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
    </section>
  </section>`;
  }

  bindEvents() {
    const form = this.element.querySelector(`.j-genre-form`);
    const buttonAnswer = this.element.querySelector(`.game__submit`);
    let checkedCheckboxes;

    form.addEventListener(`click`, (event) => {
      if (event.target.name === `answer`) {
        checkedCheckboxes = form.querySelectorAll(`.j-genre-answer:checked`);
        buttonAnswer.disabled = !checkedCheckboxes.length;
      }
    });

    buttonAnswer.addEventListener(`click`, (event) => {
      event.preventDefault();
      const answers = Array.from(checkedCheckboxes);
      this.checkAnswerGenre(this.state, answers);
    });
  }

  checkAnswerGenre(state, answers) {
    let result = true;
    let resultCount = 0;
    let answerCount = 0;
    const answersAll = QUESTIONS[state.level - 1].options;
    let success;

    for (const answer of answersAll) {
      if (answer.answer) {
        answerCount++;
      }
    }

    answers.forEach((answer) => {
      resultCount += QUESTIONS[state.level - 1].options[answer.value].answer;
      result *= QUESTIONS[state.level - 1].options[answer.value].answer;
    });

    let stateNew = state;
    if (answerCount === resultCount * result) {
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
