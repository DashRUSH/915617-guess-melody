import GameView from '../views/game-view';
// import PanelView from '../views/panel-view';
import WelcomeView from '../views/welcome-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';
import FailView from '../views/fail-view';
import SuccessView from '../views/success-view';
// import GameModel from '../model/game-model';
// import Application from '../application';
import {QUESTIONS} from '../data/game-data';
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
      this._view = new FailView(this.model.state.fail);
    } else if (!level) {
      this._view = new WelcomeView();
    } else if (level <= QUESTIONS.length) {
      switch (currentQuestion.type) {
        case `artist`:
          this._questionScreen = new ArtistView(this.model, currentQuestion).template;
          this._view = new GameView(this.model.state, this._questionScreen, currentQuestion.type);
          break;
        case `genre`:
          this._questionScreen = new GenreView(this.model, currentQuestion).template;
          this._view = new GameView(this.model.state, this._questionScreen, currentQuestion.type);
          break;
        default:
          throw new Error(`Неизвестный тип: ${currentQuestion.type}`);
      }
    } else {
      this.model.getStatistic();
      this._view = new SuccessView(this.model.state);
      // throw new Error(`Нет данных, уровень: ${level}`);
    }
    this.bindEvents();
  }

  changeScreen() {
    this.selectScreen();
    showScreen(this._view.element);
  }

  bindEvents() {
    this.bindClickPlay();
    this.bindEventsGenre();
    this.bindEventsArtist();
    this.bindClickReply();
    this.bindClickReplyLink();
  }

  bindClickPlay() {
    const buttonPlay = this.element.querySelector(`.welcome__button`);
    if (!buttonPlay) {
      return;
    }

    buttonPlay.addEventListener(`click`, () => {
      this.setScreenView();
      showScreen(this._view.element);
    });
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
      this.checkAnswerGenre(answers);
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
        this.checkAnswerArtist(isRight);
      });
    });
  }

  bindClickReply() {
    const buttonReply = this.element.querySelector(`.result__replay`);
    if (!buttonReply) {
      return;
    }

    buttonReply.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.model.start();
      this.changeScreen();
    });
  }

  bindClickReplyLink() {
    const linkReply = this.element.querySelector(`.game__back`);
    if (!linkReply) {
      return;
    }

    linkReply.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.model.start();
      this.changeScreen();
    });
  }

  checkAnswerGenre(answers) {
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
    this.showNextLevel(success);
  }

  checkAnswerArtist(isRight) {
    let success;
    if (isRight) {
      success = true;
    } else {
      success = false;
      this.model.changeLives();
    }
    this.showNextLevel(success);
  }

  showNextLevel(success) {
    this.model.changeLevel();
    this.model.calcPoints(success);
    this.changeScreen();
  }
}
