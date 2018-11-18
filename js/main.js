'use strict';

class Screens {
  constructor() {
    this.templates = Array.from(document.querySelectorAll(`template`));
    this.screenWrapper = document.querySelector(`section.main`);
    this.appWrapper = document.querySelector(`.app`);
    this.currentScreen = 0;
    this.keyCodes = {
      ARROW_LEFT: 37,
      ARROW_RIGHT: 39
    };

    const SCREEN_WELCOME = `welcome`;
    const SCREEN_GENRE = `game-genre`;
    const SCREEN_ARTIST = `game-artist`;
    const SCREEN_SUCCESS = `result-success`;
    const SCREEN_FAIL_TIME = `fail-time`;
    const SCREEN_FAIL_TRIES = `fail-tries`;
    const SCREEN_CONFIRM = `modal-confirm`;
    const SCREEN_ERROR = `modal-error`;

    this.screenQueue = [
      SCREEN_WELCOME,
      SCREEN_GENRE,
      SCREEN_ARTIST,
      SCREEN_SUCCESS,
      SCREEN_FAIL_TIME,
      SCREEN_FAIL_TRIES,
      SCREEN_CONFIRM,
      SCREEN_ERROR
    ];

    this.createArrowsButtons();
    this.bindEvents();
  }

  createArrowsButtons() {
    const arrows = document.createElement(`div`);
    arrows.classList.add(`arrows__wrap`);
    arrows.innerHTML = `<style>
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
    this.appWrapper.appendChild(arrows);
  }

  bindEvents() {
    document.addEventListener(`keydown`, this.changeScreenByKey.bind(this));

    const arrowLeft = document.querySelector(`.j-arrow-left`);
    const arrowRight = document.querySelector(`.j-arrow-right`);
    arrowLeft.addEventListener(`click`, () => {
      if (this.currentScreen > 0) {
        this.currentScreen = this.showScreen(--this.currentScreen);
      }
    });
    arrowRight.addEventListener(`click`, () => {
      if (this.currentScreen < this.screenQueue.length - 1) {
        this.currentScreen = this.showScreen(++this.currentScreen);
      }
    });
  }

  changeScreenByKey(event) {
    if (event.keyCode === this.keyCodes.ARROW_LEFT && this.currentScreen > 0) {
      this.currentScreen = this.showScreen(--this.currentScreen);
    }
    if (event.keyCode === this.keyCodes.ARROW_RIGHT && this.currentScreen < this.screenQueue.length - 1) {
      this.currentScreen = this.showScreen(++this.currentScreen);
    }
  }

  showScreen(activeScreen = 0) {
    this.screenWrapper.innerHTML = ``;
    const screen = this.findActiveScreen(activeScreen);
    const content = document.importNode(screen.content, true);
    this.screenWrapper.appendChild(content);
    return activeScreen;
  }

  findActiveScreen(screenNumber) {
    return this.templates.filter((template) => template.id === this.screenQueue[screenNumber])[0];
  }
}

const screens = new Screens();
screens.showScreen();
