import {assert} from 'chai';
import changeTime from './../controllers/change-time';

describe(`function changeTime`, () => {
  it(`should return -1 when current time is 0`, () => {
    const currentTime = 0;
    assert.equal(-1, changeTime(currentTime));
  });

  it(`should return -1 when current time is -33`, () => {
    const currentTime = -33;
    assert.equal(-1, changeTime(currentTime));
  });

  it(`should return 59 when current time is 60`, () => {
    const currentTime = 60;
    assert.equal(59, changeTime(currentTime));
  });
});
