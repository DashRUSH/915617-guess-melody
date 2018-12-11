import getElementFromTemplate from '../utils/get-elemet-from-template';

export default class AbstractView {
  get template() {
    throw new Error(`Разметка не задана!`);
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bindEvents();
    }

    return this._element;
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bindEvents() {}
}
