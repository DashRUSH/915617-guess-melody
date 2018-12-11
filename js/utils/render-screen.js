import showScreen from '../utils/show-screen';
import screenWelcome from '../controllers/welcome-controller';
import screenGenre from '../controllers/genre-controller';
import screenArtist from '../controllers/artist-controller';
import screenSuccess from '../controllers/success-controller';
import screenFail from '../controllers/fail-controller';
import {QUESTIONS, allResults} from "../data/game-gata";

const screens = {
  'artist': screenArtist,
  'genre': screenGenre
};

const renderScreen = (state) => {
  let screen;
  if (!state.lives) {
    state.fail = `TRIES`;
    screen = screenFail(state.fail).element;
  } else if (state.level > 0 && state.level <= QUESTIONS.length) {
    const questionType = QUESTIONS[state.level - 1].type;
    const screenTemplate = screens[questionType];
    screen = screenTemplate(state, QUESTIONS[state.level - 1]).element;
  } else if (state.level === 0) {
    screen = screenWelcome().element;
  } else {
    screen = screenSuccess(state, allResults).element;
  }
  showScreen(screen);
  bindEvents(screen);
};

const bindEvents = (screen) => {
  bindClickReply(screen);
  bindClickBack(screen);
};

const bindClickReply = (screen) => {
  const buttonReply = screen.querySelector(`.result__replay`);
  if (!buttonReply) {
    return;
  }

  buttonReply.addEventListener(`click`, (event) => {
    event.preventDefault();
    showScreen(screenWelcome().element);
  });
};

const bindClickBack = (screen) => {
  const buttonBack = screen.querySelector(`.game__back`);
  if (!buttonBack) {
    return;
  }

  buttonBack.addEventListener(`click`, (event) => {
    event.preventDefault();
    showScreen(screenWelcome().element);
  });
};

export default renderScreen;
