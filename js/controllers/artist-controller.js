import ArtistView from '../views/artist-view';
import changeLevel from '../utils/change-level';
import renderScreen from '../utils/render-screen';
import calcPoints from '../utils/calc-points';
import changeLives from '../utils/change-lives';

export default (state, question) => {
  const screenArtist = new ArtistView(state, question);

  screenArtist.checkAnswerArtist = (state, isRight) => {
    let stateNew = state;
    let success;
    if (isRight) {
      success = true;
    } else {
      success = false;
      stateNew = changeLives(stateNew);
    }
    stateNew = changeLevel(stateNew);
    stateNew = calcPoints(stateNew, success);
    renderScreen(stateNew);
  };

  return screenArtist;
};
