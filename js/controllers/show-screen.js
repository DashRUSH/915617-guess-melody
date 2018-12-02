import changeLevel from './change-level';
import changeLives from './change-lives';
import screenWelcome from './../screens/screen-welcome';
import screenGenre from './../screens/screen-genre';
import screenArtist from './../screens/screen-artist';
import screenFail from './../screens/screen-fail';
import screenSuccess from './../screens/screen-success';
import calcPoints from '../controllers/calc-points';
import {INITIAL_STATE, QUESTIONS, allResults} from './../data/game-gata';

const screens = {
  'artist': screenArtist,
  'genre': screenGenre
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
  if (!state.lives) {
    state.fail = `TRIES`;
    return screenFail(state.fail);
  } else if (state.level > 0 && state.level <= QUESTIONS.length) {
    const questionType = QUESTIONS[state.level - 1].type;
    const screenTemplate = screens[questionType];
    return screenTemplate(state, QUESTIONS[state.level - 1]);
  } else if (state.level === 0) {
    return screenWelcome;
  }
  return screenSuccess(state, allResults);
};

const bindEvents = (state, screen) => {
  bindClickPlay(state, screen);
  bindClickBack(screen);
  bindSendGenre(state, screen);
  bindClickArtist(state, screen);
  bindClickReplay(screen);
};

const bindClickPlay = (state, screen) => {
  const buttonPlay = screen.querySelector(`.welcome__button`);
  if (!buttonPlay) {
    return;
  }

  buttonPlay.addEventListener(`click`, () => {
    const stateNew = changeLevel(state);
    showScreen(stateNew);
  });
};

const bindClickBack = (screen) => {
  const buttonBack = screen.querySelector(`.game__back`);
  if (!buttonBack) {
    return;
  }

  buttonBack.addEventListener(`click`, (event) => {
    event.preventDefault();
    showScreen(INITIAL_STATE);
  });
};

const bindSendGenre = (state, screen) => {
  const checkboxes = screen.querySelectorAll(`.j-genre-answer`);
  const buttonAnswer = screen.querySelector(`.game__submit`);
  if (!checkboxes.length) {
    return;
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener(`change`, () => {
      const answers = Array.from(checkboxes);
      const isAnswered = answers.filter((answer) => answer.checked === true).length > 0;
      buttonAnswer.disabled = !isAnswered;
    });
  });

  buttonAnswer.addEventListener(`click`, (event) => {
    event.preventDefault();
    const checkboxesArray = Array.from(checkboxes);
    const answers = checkboxesArray.filter((checkbox) => checkbox.checked === true);
    checkAnswerGenre(state, answers);
  });
};

const checkAnswerGenre = (state, answers) => {
  let result = true;
  let resultCount = 0;
  let answerCount = 0;
  const answersAll = QUESTIONS[state.level - 1].options;

  for (const answer of answersAll) {
    if (answer.answer) {
      answerCount++;
    }
  }

  answers.forEach((answer) => {
    resultCount += QUESTIONS[state.level - 1].options[answer.value].answer;
    result *= QUESTIONS[state.level - 1].options[answer.value].answer;
  });

  if (answerCount === resultCount * result) {
    let stateNew = changeLevel(state);
    stateNew = calcPoints(stateNew, true);
    showScreen(stateNew);
  } else {
    let stateNew = changeLives(state);
    stateNew = changeLevel(stateNew);
    stateNew = calcPoints(stateNew, false);
    showScreen(stateNew);
  }
};

const bindClickArtist = (state, screen) => {
  const radioButtons = screen.querySelectorAll(`.j-artist-answer`);
  if (!radioButtons.length) {
    return;
  }

  radioButtons.forEach((radiobutton) => {
    radiobutton.addEventListener(`change`, () => {
      const isRight = QUESTIONS[state.level - 1].options[radiobutton.value].answer;
      if (isRight) {
        let stateNew = changeLevel(state);
        stateNew = calcPoints(stateNew, true);
        showScreen(stateNew);
      } else {
        let stateNew = changeLives(state);
        stateNew = changeLevel(stateNew);
        stateNew = calcPoints(stateNew, false);
        showScreen(stateNew);
      }
    });
  });
};

const bindClickReplay = (screen) => {
  const buttonReply = screen.querySelector(`.result__replay`);
  if (!buttonReply) {
    return;
  }

  buttonReply.addEventListener(`click`, (event) => {
    event.preventDefault();
    showScreen(INITIAL_STATE);
  });
};

export default showScreen;
