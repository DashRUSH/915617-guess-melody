import AbstractView from './abstract-view';
import calcCircumference from '../utils/calc-circumference';
import setTime from '../utils/set-time';
import calcTimerArc from '../utils/calc-timer-arc';
import {TIMER_RADIUS} from '../data/game-data';

export default class TimerView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
    this._radius = TIMER_RADIUS;
  }

  get template() {
    const circumference = calcCircumference(this._radius);
    return `<div class="j-timer">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line j-timer-radius" cx="390" cy="390" r="${this._radius}"
                style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center;
                stroke-dasharray: ${circumference}; stroke-dashoffset: ${calcTimerArc(this._state.time)} "/>
      </svg>
    
      <div class="timer__value ${this._isGameEnding(this._state.time) ? `timer__value--finished` : ``}" 
        xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">${setTime(this._state.time).minutes}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">${setTime(this._state.time).seconds}</span>
      </div>
    </div>`;
  }

  get time() {
    return this._state.time;
  }

  _isGameEnding(time) {
    const ENDING_TIME = 30;
    return time <= ENDING_TIME;
  }
}
