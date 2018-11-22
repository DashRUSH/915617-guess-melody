import screenWelcome from './../screens/screen-welcome';

const showScreen = (content) => {
  const screenWrapper = document.querySelector(`section.main`);
  screenWrapper.innerHTML = ``;
  screenWrapper.appendChild(content);
  bindEvents(content);
  return content;
};

const bindEvents = (screen) => {
  const buttonBack = screen.querySelector(`.game__back`);
  if (buttonBack) {
    buttonBack.addEventListener(`click`, (event) => {
      event.preventDefault();
      showScreen(screenWelcome);
    });
  }
};

export default showScreen;
