import AbstractView from './abstract-view';

export default class ConfirmView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="modal">
    <button class="modal__close j-modal-close" type="button"><span class="visually-hidden">Закрыть</span></button>
    <h2 class="modal__title">Подтверждение</h2>
    <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
    <div class="modal__buttons">
      <button class="modal__button button j-replay">Ок</button>
      <button class="modal__button button j-cancel">Отмена</button>
    </div>
  </section>`;
  }

  bindEvents() {
    const buttonReplay = this.element.querySelector(`.j-replay`);
    buttonReplay.addEventListener(`click`, () => this.bindClickReplay());

    const buttonCancel = this.element.querySelector(`.j-cancel`);
    buttonCancel.addEventListener(`click`, () => this.bindClickCancel());

    const buttonClose = this.element.querySelector(`.j-modal-close`);
    buttonClose.addEventListener(`click`, () => this.bindClickCancel());
  }

  bindClickReplay() {}
  bindClickCancel() {}
}
