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
    const TIME_ISEMPTY = 0;
    if (this.time >= TIME_ISEMPTY) {
      this._time--;
    }
    return this._time;
  }
}
