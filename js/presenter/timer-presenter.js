import {TIME_IS_EMPTY} from '../data/game-data';

export default class Timer {
  constructor(time) {
    if (typeof time !== `number` || time < 0) {
      throw new Error(`Неверный формат времени: ${typeof time} ${time}`);
    }

    this._time = time;
  }

  get time() {
    return this._time;
  }

  tick() {
    if (this.time >= TIME_IS_EMPTY) {
      this._time--;
    }
    return this._time;
  }
}
