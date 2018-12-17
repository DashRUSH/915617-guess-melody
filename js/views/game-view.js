import AbstractView from './abstract-view';
import PanelView from './panel-view';

export default class GameView extends AbstractView {
  constructor(state, questionScreen, type) {
    super();
    this.state = state;
    this._panel = new PanelView(this.state).template;
    this._question = questionScreen;
    this._type = type;
  }

  get template() {
    return `<section class="game game--${this._type}">
    ${this._panel}
    ${this._question}
  </section>`;
  }
}
