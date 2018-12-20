import PreloaderView from '../views/preloader-view';

export default class PreloaderScreen {
  constructor() {
    this._view = new PreloaderView();
  }

  get element() {
    return this._view.element;
  }
}
