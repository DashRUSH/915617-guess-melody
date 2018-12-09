const screenWrapper = document.querySelector(`section.main`);

const showScreen = (screenElement) => {
  screenWrapper.innerHTML = ``;
  screenWrapper.appendChild(screenElement);
};

export default showScreen;
