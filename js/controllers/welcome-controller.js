import WelcomeView from '../views/welcome-view';
import changeLevel from '../utils/change-level';
import renderScreen from '../utils/render-screen';

export default () => {
  const screenWelcome = new WelcomeView();

  screenWelcome.bindClickPlay = () => {
    const stateNew = changeLevel(screenWelcome.state);
    renderScreen(stateNew);
  };

  return screenWelcome;
};
