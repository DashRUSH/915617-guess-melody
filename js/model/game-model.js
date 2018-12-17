import {INITIAL_STATE, QUESTIONS, allResults} from "../data/game-data";

export default class GameModel {
  constructor() {
    this.start();
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

  get question() {
    return QUESTIONS[this._state.level - 1];
  }

  start() {
    this._state = INITIAL_STATE;
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

  setFailType(type) {
    this._state = Object.assign({}, this._state, {
      fail: type
    });
  }

  calcPoints(success) {
    if (success) {
      this._state.points += 1;
    } else {
      this._state.points -= 2;
    }
  }

  getStatistic() {
    this._state.statistic = allResults;
  }
}
