import Loader from './loader/loader';
import WelcomeScreen from './presenter/welcome-presenter';
import showScreen from './utils/show-screen';
import GameModel from './model/game-model';
import GameScreen from './presenter/game-presenter';
import FailScreen from './presenter/fail-presenter';
import SuccessScreen from './presenter/success-presenter';
import ErrorScreen from './presenter/error-presenter';
import {APP_ID} from './data/game-data';

let questions;
export default class Application {
  static start() {
    Loader.loadData()
      .then((data) => {
        questions = data;
      })
      .then(Application.showWelcome)
      .catch(Application.showError);
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

  static showFail(type) {
    const failScreen = new FailScreen(type);

    showScreen(failScreen.element);
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
