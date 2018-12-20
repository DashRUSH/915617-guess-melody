import Loader from './loader/loader';
import PreloaderScreen from './presenter/preloader-presenter';
import WelcomeScreen from './presenter/welcome-presenter';
import showScreen from './utils/show-screen';
import GameModel from './model/game-model';
import GameScreen from './presenter/game-presenter';
import FailScreen from './presenter/fail-presenter';
import SuccessScreen from './presenter/success-presenter';
import ErrorScreen from './presenter/error-presenter';
import {APP_ID} from './data/game-data';
import loadAudios from './utils/load-audios';

let questions;
let audiosLength = 0;
let audiosLoaded = 0;
export default class Application {
  static start() {
    audiosLoaded = 0;
    Application.showPreloader();
    Loader.loadData()
      .then((data) => {
        questions = data.questions;
        return data.audios;
      })
      .then((audios) => {
        audiosLength = audios.length;
        audios.map((audio) => {
          loadAudios(audio, Application.checkAudioLoad);
        });
      })
      .then((audioPromises) => {
        Promise.all(audioPromises);
      })
      .catch(Application.showError);
  }

  static showPreloader() {
    const preloaderScreen = new PreloaderScreen();

    showScreen(preloaderScreen.element);
  }

  static checkAudioLoad() {
    audiosLoaded++;
    if (audiosLoaded === audiosLength) {
      Application.showWelcome();
    }
  }

  static showWelcome() {
    const welcome = new WelcomeScreen();

    showScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel(questions);
    const gameScreen = new GameScreen(model);

    showScreen(gameScreen.element);
  }

  static showFail(type, state) {
    Loader.saveResults(state, APP_ID)
      .then(() => {
        const failScreen = new FailScreen(type);
        showScreen(failScreen.element);
      });
  }

  static showResult(state) {
    Loader.saveResults(state, APP_ID)
      .then(() => Loader.loadResults(APP_ID))
      .then((statistic) => {
        const successScreen = new SuccessScreen(state, statistic);
        showScreen(successScreen.element);
      })
      .catch(Application.showError);
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);

    showScreen(errorScreen.element);
  }
}
