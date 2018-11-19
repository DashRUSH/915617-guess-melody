const findActiveScreen = (activeScreen) => {
  return activeScreen;
};

const showScreen = (activeScreen = 0) => {
  const screenWrapper = document.querySelector(`section.main`);
  screenWrapper.innerHTML = ``;
  const screen = findActiveScreen(activeScreen);
  const content = document.importNode(screen.content, true);
  screenWrapper.appendChild(content);
  return activeScreen;
};

export default showScreen;
