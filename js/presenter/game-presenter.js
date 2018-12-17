import Application from '../application';
import GameView from '../views/game-view';
import TimerView from '../views/timer-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';
import {QUESTIONS, ONE_SECOND} from '../data/game-data';
import showScreen from '../utils/show-screen';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.setScreenView();
  }

  get element() {
    return this._view.element;
  }

  setScreenView() {
    this.model.changeLevel();
    this.selectScreen();
  }

  selectScreen() {
    const currentQuestion = this.model.question;
    const level = this.model.level;
    if (!this.model.state.lives) {
      this.model.state.fail = `TRIES`;
      Application.showFail(this.model.state.fail);
    } else if (!level) {
      Application.showWelcome();
    } else if (level <= QUESTIONS.length) {
      switch (currentQuestion.type) {
        case `artist`:
          this._questionScreen = new ArtistView(this.model, currentQuestion).template;
          this._view = new GameView(this.model.state, this._questionScreen, currentQuestion.type);
          showScreen(this._view.element);
          this.startTimer();
          break;
        case `genre`:
          this._questionScreen = new GenreView(this.model, currentQuestion).template;
          this._view = new GameView(this.model.state, this._questionScreen, currentQuestion.type);
          showScreen(this._view.element);
          this.startTimer();
          break;
        default:
          throw new Error(`Неизвестный тип: ${currentQuestion.type}`);
      }
    } else {
      this.model.getStatistic();
      Application.showResult(this.model.state);
    }
    this.bindEvents();
  }

  changeScreen() {
    this.stopTimer();
    this.selectScreen();
  }

  startTimer() {
    this.model._timer = setTimeout(() => {
      const time = this.model.tick();
      if (time < 0) {
        this.stopTimer();
        this.model.state.fail = `TIME`;
        Application.showFail(this.model.state.fail);
      } else {
        this.startTimer();
        this.updateTimer();
      }
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.model._timer);
  }

  updateTimer() {
    const oldTimer = this._view.element.querySelector(`.j-timer`);
    const header = oldTimer.parentNode;
    const newTimer = new TimerView(this.model._time).element;
    header.replaceChild(newTimer, oldTimer);
  }

  bindEvents() {
    this.bindEventsGenre();
    this.bindEventsArtist();
    this.bindClickReplyLink();
  }

  bindEventsGenre() {
    const genreForm = this.element.querySelector(`.j-genre-form`);
    if (!genreForm) {
      return;
    }

    const buttonAnswer = genreForm.querySelector(`.game__submit`);
    let checkedCheckboxes;

    genreForm.addEventListener(`click`, (event) => {
      if (event.target.name === `answer`) {
        checkedCheckboxes = genreForm.querySelectorAll(`.j-genre-answer:checked`);
        buttonAnswer.disabled = !checkedCheckboxes.length;
      }
    });

    buttonAnswer.addEventListener(`click`, (event) => {
      event.preventDefault();
      const answers = Array.from(checkedCheckboxes);
      this.checkAnswerGenre(answers, this.model._time.time);
    });
  }

  bindEventsArtist() {
    const radioButtons = this.element.querySelectorAll(`.j-artist-answer`);
    if (!radioButtons) {
      return;
    }

    radioButtons.forEach((radiobutton) => {
      radiobutton.addEventListener(`change`, () => {
        const isRight = QUESTIONS[this.model.state.level - 1].options[radiobutton.value].answer;
        this.checkAnswerArtist(isRight, this.model._time.time);
      });
    });
  }

  bindClickReplyLink() {
    const linkReply = this.element.querySelector(`.game__back`);
    if (!linkReply) {
      return;
    }

    linkReply.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.stopTimer();
      Application.showWelcome();
    });
  }

  checkAnswerGenre(answers, time) {
    let result = true;
    let resultCount = 0;
    let answerCount = 0;
    const answersAll = QUESTIONS[this.model.state.level - 1].options;
    let success;

    for (const answer of answersAll) {
      if (answer.answer) {
        answerCount++;
      }
    }

    answers.forEach((answer) => {
      resultCount += QUESTIONS[this.model.state.level - 1].options[answer.value].answer;
      result *= QUESTIONS[this.model.state.level - 1].options[answer.value].answer;
    });

    if (answerCount === resultCount * result) {
      success = true;
    } else {
      success = false;
      this.model.changeLives();
    }
    this.showNextLevel(success, time);
  }

  checkAnswerArtist(isRight, time) {
    let success;
    if (isRight) {
      success = true;
    } else {
      success = false;
      this.model.changeLives();
    }
    this.showNextLevel(success, time);
  }

  showNextLevel(success, time) {
    this.model.calcPoints(success, time);
    this.model.changeLevel();
    this.changeScreen();
  }
}
