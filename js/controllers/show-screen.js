import screenWelcome from './../screens/screen-welcome';
import screenGenre from './../screens/screen-genre';

const screens = {
  'screenWelcome': screenWelcome,
  'screenGenre': screenGenre
};

const showScreen = (state) => {
  const screenWrapper = document.querySelector(`section.main`);
  screenWrapper.innerHTML = ``;
  const content = renderScreen(state);
  screenWrapper.appendChild(content);
  bindEvents(state, content);
  return content;
};

const renderScreen = (state) => {
  const screen = `screen${state.level}`;
  return screens[screen];
};

const bindEvents = (state, screen) => {
  bindClickPlay(state, screen);
  bindClickBack(screen);
};

const bindClickPlay = (state, screen) => {
  const buttonPlay = screen.querySelector(`.welcome__button`);
  if (!buttonPlay) {
    return;
  }

  buttonPlay.addEventListener(`click`, () => {
    // showScreen(screenGenre);
  });
};

const bindClickBack = (screen) => {
  const buttonBack = screen.querySelector(`.game__back`);
  if (!buttonBack) {
    return;
  }

  buttonBack.addEventListener(`click`, (event) => {
    event.preventDefault();
    showScreen(screenWelcome);
  });
};

export default showScreen;
