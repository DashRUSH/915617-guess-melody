import {assert} from 'chai';
import inclineNouns from './../utils/incline-nouns';

describe(`function inclineNouns`, () => {
  it(`should return '1 минуту'`, () => {
    assert.equal(`1 минуту`, inclineNouns(1, [`минуту`, `минуты`, `минут`]));
  });

  it(`should return '2 минуты'`, () => {
    assert.equal(`2 минуты`, inclineNouns(2, [`минуту`, `минуты`, `минут`]));
  });

  it(`should return '25 секунд'`, () => {
    assert.equal(`25 секунд`, inclineNouns(25, [`секунду`, `секунды`, `секунд`]));
  });

  it(`should return '1 ошибку'`, () => {
    assert.equal(`1 ошибку`, inclineNouns(1, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return '5 ошибок'`, () => {
    assert.equal(`5 ошибок`, inclineNouns(5, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return '1000892 ошибки'`, () => {
    assert.equal(`1000892 ошибки`, inclineNouns(1000892, [`ошибку`, `ошибки`, `ошибок`]));
  });

  it(`should return '-1 минута'`, () => {
    assert.equal(`-1 минута`, inclineNouns(-1, [`минута`, `минуты`, `минут`]));
  });

  it(`should return '25 комментариев'`, () => {
    assert.equal(`25 комментариев`, inclineNouns(25, [`комментарий`, `комментария`, `комментариев`]));
  });

  it(`should return '-1.75 яблок'`, () => {
    assert.equal(`-1.75 яблок`, inclineNouns(-1.75, [`яблоко`, `яблока`, `яблок`]));
  });
});
