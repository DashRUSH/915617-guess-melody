'use strict';

(() => {
  const templates = document.querySelectorAll(`template`);
  const screenWrapper = document.querySelector(`section.main`);
  const keyCodes = {
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39
  };
  const appWrapper = document.querySelector(`.app`);
  const arrow = document.createElement(`div`);
  arrow.classList.add(`arrows__wrap`);
  arrow.innerHTML = `<style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn j-arrow-left"><-</button>
    <button class="arrows__btn j-arrow-right">-></button>`;
  appWrapper.appendChild(arrow);

  const SCREEN_WELCOME = `welcome`;
  const SCREEN_GENRE = `game-genre`;
  const SCREEN_ARTIST = `game-artist`;
  const SCREEN_SUCCESS = `result-success`;
  const SCREEN_FAIL_TIME = `fail-time`;
  const SCREEN_FAIL_TRIES = `fail-tries`;
  const SCREEN_CONFIRM = `modal-confirm`;
  const SCREEN_ERROR = `modal-error`;

  const screenQueue = [
    SCREEN_WELCOME,
    SCREEN_GENRE,
    SCREEN_ARTIST,
    SCREEN_SUCCESS,
    SCREEN_FAIL_TIME,
    SCREEN_FAIL_TRIES,
    SCREEN_CONFIRM,
    SCREEN_ERROR
  ];

  const showScreen = (activeScreen = 0) => {
    for (let i = 0; i < screenQueue.length; i++) {
      if (templates[i].id === screenQueue[activeScreen]) {
        screenWrapper.innerHTML = ``;
        const content = document.importNode(templates[i].content, true);
        screenWrapper.appendChild(content);
      }
    }
    return activeScreen;
  };

  const changeScreenByKey = (event) => {
    if (event.keyCode === keyCodes.ARROW_LEFT && currentScreen > 0) {
      currentScreen = showScreen(--currentScreen);
    }
    if (event.keyCode === keyCodes.ARROW_RIGHT && currentScreen < screenQueue.length - 1) {
      currentScreen = showScreen(++currentScreen);
    }
  };

  const changeScreenByArrow = () => {
    const arrowLeft = document.querySelector(`.j-arrow-left`);
    const arrowRight = document.querySelector(`.j-arrow-right`);
    arrowLeft.addEventListener(`click`, () => {
      if (currentScreen > 0) {
        currentScreen = showScreen(--currentScreen);
      }
    });
    arrowRight.addEventListener(`click`, () => {
      if (currentScreen < screenQueue.length - 1) {
        currentScreen = showScreen(++currentScreen);
      }
    });
  };

  let currentScreen = showScreen();
  document.addEventListener(`keydown`, changeScreenByKey);
  changeScreenByArrow();
})();
