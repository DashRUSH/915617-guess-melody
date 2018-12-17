import WelcomeView from '../views/welcome-view';
import Application from '../application';

export default class GameScreen {
  constructor() {
    this._view = new WelcomeView();
    this._view.bindClickPlay = () => {
      Application.showGame();
    };
  }

  get element() {
    return this._view.element;
  }
}
