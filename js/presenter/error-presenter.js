import Application from '../application';
import ErrorView from '../views/error-view';

export default class ErrorScreen {
  constructor(error) {
    this._view = new ErrorView(error);
    this._view.bindClickReplay = () => {
      Application.start();
    };
  }

  get element() {
    return this._view.element;
  }
}
