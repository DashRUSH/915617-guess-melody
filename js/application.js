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
  static async start() {
    audiosLoaded = 0;
    Application.showPreloader();
    try {
      const data = await Loader.loadData();
      questions = data.questions;
      const audios = data.audios;
      audiosLength = audios.length;
      const audioPromises = audios.map((audio) => {
        return loadAudios(audio, Application.checkAudioLoad);
      });
      await Promise.all(audioPromises);
    } catch (error) {
      Application.showError(error);
    }
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

  static async showFail(type, state) {
    try {
      await Loader.saveResults(state, APP_ID);
      const failScreen = new FailScreen(type);
      showScreen(failScreen.element);
    } catch (error) {
      Application.showError(error);
    }
  }

  static async showResult(state) {
    try {
      await Loader.saveResults(state, APP_ID);
      const statistic = await Loader.loadResults(APP_ID);
      const successScreen = new SuccessScreen(state, statistic);
      showScreen(successScreen.element);
    } catch (error) {
      Application.showError(error);
    }
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);

    showScreen(errorScreen.element);
  }
}
