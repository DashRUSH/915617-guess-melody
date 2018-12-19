import AbstractView from './abstract-view';
import PanelView from './panel-view';

export default class GameView extends AbstractView {
  constructor(state, questionScreen, type) {
    super();
    this.state = state;
    this._panel = new PanelView(this.state);
    this._panelTemplate = this._panel.template;
    this._question = questionScreen;
    this._type = type;
  }

  get template() {
    return `<section class="game game--${this._type}">
    ${this._panelTemplate}
    ${this._question}
  </section>`;
  }
}
