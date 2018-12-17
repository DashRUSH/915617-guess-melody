import WelcomeScreen from './presenter/welcome-presenter';
import showScreen from './utils/show-screen';
import GameModel from './model/game-model';
import GameScreen from './presenter/game-presenter';

export default class Application {
  static showWelcome() {
    const welcome = new WelcomeScreen();
    showScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    model.start();
    const gameScreen = new GameScreen(model);
    showScreen(gameScreen.element);
  }

  // static showStats(stats) {
  //   const statistics = new StatsScreen(stats);
  //   showScreen(statistics.element);
  // }
}
