import {assert} from 'chai';
import countLives from './../controllers/count-lives';

describe(`function countLives`, () => {
  it(`should return -1 when number of errors is equal number of lives`, () => {
    const errors = 3;
    assert.equal(-1, countLives(errors));
  });

  it(`should return -1 when number of errors is greater than number of lives`, () => {
    const errors = 4;
    assert.equal(-1, countLives(errors));
  });

  it(`should return 3 when number of errors is 0`, () => {
    const errors = 0;
    assert.equal(3, countLives(errors));
  });

  it(`should return 1 when number of errors is 2`, () => {
    const errors = 2;
    assert.equal(1, countLives(errors));
  });
});
