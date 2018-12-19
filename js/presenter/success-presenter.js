import Application from '../application';
import SuccessView from '../views/success-view';

export default class SuccessScreen {
  constructor(state) {
    this._view = new SuccessView(state);
    this._view.bindClickReplay = () => {
      Application.showWelcome();
    };
  }

  get element() {
    return this._view.element;
  }
}
