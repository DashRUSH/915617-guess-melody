import getElementFromTemplate from '../utils/get-elemet-from-template';
import gamePanel from './game-panel';

const templateGenre = (state, question) => {
  const panel = gamePanel(state);
  const template = `<section class="game game--genre">
    ${panel}
    <section class="game__screen">
      <h2 class="game__title">${question.title}</h2>
      <form class="game__tracks">
        ${question.options.map((audio, i) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src="${audio.src}"></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden j-genre-answer" type="checkbox" name="answer" value="${i}" id="answer-${i}">
            <label class="game__check" for="answer-${i}">Отметить</label>
          </div>
        </div>`).join(``)}
        <button class="game__submit button" type="submit" disabled>Ответить</button>
      </form>
    </section>
  </section>`;

  return getElementFromTemplate(template);
};

export default templateGenre;
