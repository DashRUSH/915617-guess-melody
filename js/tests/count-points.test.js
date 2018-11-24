import {assert} from 'chai';
import couuntPoints from './../controllers/count-points';

describe(`function countPoints`, () => {
  it(`should return -1 when number of answers less than 10`, () => {
    const answers = [
      {answer: true, time: 1000},
      {answer: true, time: 100}
    ];
    assert.equal(-1, couuntPoints(answers, 2));
  });

  it(`should return -1 when number of attempts exhausted`, () => {
    const answers = [
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000}
    ];
    assert.equal(-1, couuntPoints(answers, 0));
  });

  it(`should return 10 when user won slowly`, () => {
    const answers = [
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000}
    ];
    assert.equal(10, couuntPoints(answers, 2));
  });

  it(`should return 7 when user was wrong once`, () => {
    const answers = [
      {answer: false, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000},
      {answer: true, time: 30000}
    ];
    assert.equal(7, couuntPoints(answers, 2));
  });

  it(`should return 0 when user was fast and wrong`, () => {
    const answers = [
      {answer: false, time: 0},
      {answer: false, time: 0},
      {answer: false, time: 0},
      {answer: false, time: 0},
      {answer: false, time: 0},
      {answer: false, time: 20},
      {answer: true, time: 20},
      {answer: true, time: 20},
      {answer: true, time: 20},
      {answer: true, time: 20}
    ];
    assert.equal(-4, couuntPoints(answers, 2));
  });
});
