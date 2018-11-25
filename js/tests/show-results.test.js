import {assert} from 'chai';
import showResults from './../controllers/show-results';

describe(`function showResults`, () => {
  it(`should return message about time`, () => {
    const resultCommon = [1, 2, 3, 4, 5];
    const resultUser = {
      time: 0,
      activeAttempt: 4,
      points: 1
    };
    assert.equal(showResults(resultCommon, resultUser), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return message about attempt`, () => {
    const resultCommon = [1, 2, 3, 4, 5];
    const resultUser = {
      time: 1000,
      activeAttempt: 0,
      points: 0
    };
    assert.equal(showResults(resultCommon, resultUser), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return message about success`, () => {
    const resultCommon = [0, 2, 8, 1];
    const resultUser = {
      time: 1000,
      activeAttempt: 3,
      points: 10
    };
    assert.equal(showResults(resultCommon, resultUser), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });

  it(`should return message about success`, () => {
    const resultCommon = [];
    const resultUser = {
      time: 1000,
      activeAttempt: 3,
      points: 10
    };
    assert.equal(showResults(resultCommon, resultUser), `Вы заняли 1 место из 1 игроков. Это лучше, чем у 0% игроков`);
  });

  it(`should return message about success`, () => {
    const resultCommon = [10, 1, 8, 9];
    const resultUser = {
      time: 1000,
      activeAttempt: 3,
      points: 0
    };
    assert.equal(showResults(resultCommon, resultUser), `Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`);
  });

  it(`should return message about success`, () => {
    const resultCommon = [10, 1, -8, 9];
    const resultUser = {
      time: 1000,
      activeAttempt: 3,
      points: 0
    };
    assert.equal(showResults(resultCommon, resultUser), `Вы заняли 4 место из 5 игроков. Это лучше, чем у 20% игроков`);
  });
});
