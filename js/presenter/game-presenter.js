import Application from '../application';
import GameView from '../views/game-view';
import TimerView from '../views/timer-view';
import ArtistView from '../views/artist-view';
import GenreView from '../views/genre-view';
import ConfirmView from '../views/confirm-view';
import {ONE_SECOND, TIME_IS_EMPTY} from '../data/game-data';
import showScreen from '../utils/show-screen';

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._timerOn = 0;
    this._classPlay = `track__button--play`;
    this._classPause = `track__button--pause`;
    this._setScreenView();
  }

  get element() {
    return this._view.element;
  }

  _setScreenView() {
    this.model.changeLevel();
    this._selectScreen();
  }

  _selectScreen() {
    this._setScreen();
    this.bindEvents();
  }

  _setScreen() {
    const lives = this.model.state.lives;
    const level = this.model.level;
    const questions = this.model.questions;
    const currentQuestion = this.model.question;
    if (!lives) {
      this.model.state.fail = `TRIES`;
      Application.showFail(this.model.state.fail, this.model.state);
      return;
    }
    if (!level) {
      Application.showWelcome();
      return;
    }
    if (level <= questions.length) {
      this._selectQuestionScreen(currentQuestion);
      return;
    }
    Application.showResult(this.model.state);
  }

  _selectQuestionScreen(question) {
    switch (question.type) {
      case `artist`:
        this._questionScreen = new ArtistView(this.model, question).template;
        break;
      case `genre`:
        this._questionScreen = new GenreView(this.model, question).template;
        break;
    }
    this._showQuestionScreen(this.model.state, this._questionScreen, question.type);
  }

  _showQuestionScreen(state, questionScreen, type) {
    this._view = new GameView(state, questionScreen, type);
    showScreen(this._view.element);
    if (!this._timerOn) {
      this._startTimer();
    }
    this._timerOn = 1;
  }

  _changeScreen() {
    this._selectScreen();
  }

  _startTimer() {
    this.model._timer = setTimeout(() => {
      this.model.tick();
      const time = this.model.time;
      if (time < TIME_IS_EMPTY) {
        this.model.state.fail = `TIME`;
        Application.showFail(this.model.state.fail);
      } else {
        this._startTimer();
        this._updateTimer();
      }
    }, ONE_SECOND);
  }

  _stopTimer() {
    clearTimeout(this.model._timer);
  }

  _updateTimer() {
    const oldTimer = this._view.element.querySelector(`.j-timer`);
    const header = oldTimer.parentNode;
    const newTimer = new TimerView(this.model._time).element;
    header.replaceChild(newTimer, oldTimer);
  }

  bindEvents() {
    this._bindEventsGenre();
    this._bindEventsArtist();
    this._bindClickReplyLink();
    this._bindClickAudioButton();
  }

  _bindEventsGenre() {
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
      this._checkAnswerGenre(answers, this.model._time.time);
    });
  }

  _bindEventsArtist() {
    const radioButtons = this.element.querySelectorAll(`.j-artist-answer`);
    if (!radioButtons) {
      return;
    }

    const questions = this.model.questions;
    radioButtons.forEach((radiobutton) => {
      radiobutton.addEventListener(`change`, () => {
        const success = questions[this.model.state.level - 1].options[radiobutton.value].answer;
        this._checkAnswerArtist(success, this.model._time.time);
      });
    });
  }

  _checkAnswerGenre(answers, time) {
    let result = true;
    let resultCount = 0;
    let answerCount = 0;
    const questions = this.model.questions;
    const answersAll = questions[this.model.state.level - 1].options;

    for (const answer of answersAll) {
      if (answer.answer) {
        answerCount++;
      }
    }

    answers.forEach((answer) => {
      resultCount += questions[this.model.state.level - 1].options[answer.value].answer;
      result *= questions[this.model.state.level - 1].options[answer.value].answer;
    });

    const success = answerCount === resultCount * result;
    if (!success) {
      this.model.changeLives();
    }

    this._showNextLevel(success, time);
  }

  _checkAnswerArtist(success, time) {
    if (!success) {
      this.model.changeLives();
    }
    this._showNextLevel(success, time);
  }

  _showNextLevel(success, time) {
    this.model.calcPoints(success, time);
    this.model.changeLevel();
    this._changeScreen();
  }

  _bindClickAudioButton() {
    const buttonsPlay = this.element.querySelectorAll(`.track__button`);
    if (!buttonsPlay) {
      return;
    }

    this._playAudio(buttonsPlay[0], buttonsPlay[0].parentNode.querySelector(`audio`));

    buttonsPlay.forEach((buttonPlay) => {
      buttonPlay.addEventListener(`click`, (event) => {
        const buttonClicked = event.currentTarget;
        const audioCurrent = buttonClicked.parentNode.querySelector(`audio`);
        const method = buttonClicked.classList.contains(this._classPlay) ? `_playAudio` : `_pauseAudio`;
        this._pausePreviousAudio(buttonsPlay, buttonClicked, method);
        this[method](buttonClicked, audioCurrent);
      });
    });
  }

  _playAudio(button, audio) {
    const promisePlay = audio.play();

    promisePlay
      .then(() => {
        button.classList.add(this._classPause);
        button.classList.remove(this._classPlay);
      })
      .catch(() => {
        audio.pause();
      });
  }

  _pauseAudio(button, audio) {
    audio.pause();
    button.classList.add(this._classPlay);
    button.classList.remove(this._classPause);
  }

  _pausePreviousAudio(buttons, buttonCurrent, method) {
    buttons.forEach((button) => {
      if (button !== buttonCurrent && method === `_playAudio`) {
        this._pauseAudio(button, button.parentNode.querySelector(`audio`));
      }
    });
  }

  _bindClickReplyLink() {
    const linkReply = this.element.querySelector(`.game__back`);
    if (!linkReply) {
      return;
    }

    const confirmView = new ConfirmView();
    linkReply.addEventListener(`click`, (event) => {
      event.preventDefault();
      this._stopTimer();
      showScreen(confirmView.element);
    });

    confirmView.bindClickReplay = () => {
      Application.showWelcome();
    };

    confirmView.bindClickCancel = () => {
      this._selectScreen();
      this._updateTimer();
      this._startTimer();
    };
  }
}
