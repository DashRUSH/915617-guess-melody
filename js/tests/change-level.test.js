import {assert} from 'chai';
import changeLevel from '../utils/change-level';

describe(`function changeLevel`, () => {
  it(`should return 4 when current level is 3`, () => {
    const game = {
      level: 3
    };
    assert.equal(4, changeLevel(game).level);
  });

  it(`should return 10 when current level is 9`, () => {
    const game = {
      level: 9
    };
    assert.equal(10, changeLevel(game).level);
  });

  it(`should return 0 when current level is -1`, () => {
    const game = {
      level: -1
    };
    assert.equal(0, changeLevel(game).level);
  });
});
