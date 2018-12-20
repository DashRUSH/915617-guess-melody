import AbstractView from './abstract-view';

export default class PreloaderView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="welcome welcome--loader">
      <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
      <div class="seq-preloader">
        <svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg" class="seq-preload-indicator">
        <g>
          <path class="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/>
          <path class="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/>
          <path class="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/>
        </g>
      </svg>
      </div>
      <h2 class="welcome__rules-title">Правила игры</h2>
      <p class="welcome__text">Правила просты:</p>
      <ul class="welcome__rules-list">
        <li>За 5 минут нужно ответить на все вопросы.</li>
        <li>Можно допустить 3 ошибки.</li>
      </ul>
      <p class="welcome__text">Удачи!</p>
    </section>`;
  }
}
