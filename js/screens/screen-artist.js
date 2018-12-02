
import showScreen from '../controllers/show-screen';
import getRandomElement from '../utils/get-random-element';
import screenWelcome from './screen-welcome';
import screenSuccess from './screen-success';
import screenFailTries from './screen-fail-tries';
import screenFailTime from './screen-fail-time';

import getElementFromTemplate from '../utils/get-elemet-from-template';
import gamePanel from './game-panel';

const templateArtist = (state, question) => {
  const panel = gamePanel(state);
  const template = `<section class="game game--artist">
    ${panel}
    <section class="game__screen">
      <h2 class="game__title">${question.title}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${question.src}"></audio>
      </div>
      <form class="game__artist">
        ${question.options.map((audio, i) => `<div class="artist">
          <input class="artist__input visually-hidden j-artist-answer" type="radio" name="answer" value="${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${audio.image}" alt="${audio.artist}">
            ${audio.artist}
          </label>
        </div>`).join(``)}
      </form>
    </section>
  </section>`;

  return getElementFromTemplate(template);
};

// const ScreenArtist = getElementFromTemplate(templateArtist);
// const buttonArtist = ScreenArtist.querySelectorAll(`.game__artist input[type=radio]`);
//
// const bindEvents = () => {
//   buttonArtist.forEach((button) => {
//     button.addEventListener(`change`, () => {
//       const resultScreen = showScreen(getRandomElement([screenSuccess, screenFailTime, screenFailTries]));
//       bindStart(resultScreen);
//     });
//   });
// };
//
// const bindStart = (screen) => {
//   const buttonAgain = screen.querySelector(`.result__replay`);
//   buttonAgain.addEventListener(`click`, () => {
//     showScreen(screenWelcome);
//   });
// };
//
// bindEvents();

export default templateArtist;
