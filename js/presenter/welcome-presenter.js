import Application from '../application';
import WelcomeView from '../views/welcome-view';

export default class WelcomeScreen {
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
