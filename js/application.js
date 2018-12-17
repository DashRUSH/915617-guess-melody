import WelcomeScreen from './presenter/welcome-presenter';
import showScreen from './utils/show-screen';
import GameModel from './model/game-model';
import GameScreen from './presenter/game-presenter';
import FailScreen from './presenter/fail-presenter';
import SuccessScreen from './presenter/success-presenter';

export default class Application {
  static showWelcome() {
    const welcome = new WelcomeScreen();

    showScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);

    showScreen(gameScreen.element);
  }

  static showFail(type) {
    const failScreen = new FailScreen(type);

    showScreen(failScreen.element);
  }

  static showResult(state) {
    const successScreen = new SuccessScreen(state);

    showScreen(successScreen.element);
  }
}
