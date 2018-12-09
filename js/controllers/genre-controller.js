import GenreView from '../views/genre-view';
import changeLevel from '../utils/change-level';
import renderScreen from '../utils/render-screen';
import calcPoints from '../utils/calc-points';
import changeLives from '../utils/change-lives';
import {QUESTIONS} from "../data/game-gata";

export default (state, question) => {
  const screenGenre = new GenreView(state, question);

  screenGenre.checkAnswerGenre = (state, answers) => {
    let result = true;
    let resultCount = 0;
    let answerCount = 0;
    const answersAll = QUESTIONS[state.level - 1].options;
    let success;

    for (const answer of answersAll) {
      if (answer.answer) {
        answerCount++;
      }
    }

    answers.forEach((answer) => {
      resultCount += QUESTIONS[state.level - 1].options[answer.value].answer;
      result *= QUESTIONS[state.level - 1].options[answer.value].answer;
    });

    let stateNew = state;
    if (answerCount === resultCount * result) {
      success = true;
    } else {
      success = false;
      stateNew = changeLives(stateNew);
    }
    stateNew = changeLevel(stateNew);
    stateNew = calcPoints(stateNew, success);

    renderScreen(stateNew);
  };

  return screenGenre;
};
