import Application from '../application';
import SuccessView from '../views/success-view';

export default class SuccessScreen {
  constructor(state, statistic) {
    this._view = new SuccessView(state, statistic);
    this._view.bindClickReplay = () => {
      Application.start();
    };
  }

  get element() {
    return this._view.element;
  }
}
