import {INITIAL_STATE, COMMON_TIME, FAST_ANSWER, Points} from '../data/game-data';
import Timer from '../presenter/timer-presenter';

export default class GameModel {
  constructor(questions) {
    this.start(questions);
  }

  get state() {
    return this._state;
  }

  get level() {
    return this._state.level;
  }

  get lives() {
    return this._state.lives;
  }

  get questions() {
    return this._questions;
  }

  get question() {
    return this._questions[this._state.level - 1];
  }

  start(questions) {
    this._state = INITIAL_STATE;
    this._questions = questions;
    this._time = new Timer(this._state.time);
    this._answerTime = [COMMON_TIME];
  }

  changeLevel() {
    const levelNew = this._state.level + 1;
    this._state = Object.assign({}, this._state, {
      level: levelNew
    });
  }

  changeLives() {
    this._state.lives -= 1;
  }

  calcPoints(success, time) {
    if (success) {
      const timeDiff = this._answerTime[this._state.level - 1] - time;
      this._answerTime.push(time);
      if (timeDiff < FAST_ANSWER) {
        this._state.points += Points.IS_FAST;
        this._state.fast++;
        return;
      }
      this._state.points += Points.IS_CORRECT;
      return;
    }
    this._state.points += Points.IS_INCORRECT;
  }

  tick() {
    this._state.time = this._time.tick();
  }

  getTime() {
    return this._state.time;
  }
}
