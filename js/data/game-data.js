export const APP_ID = 22101987;
export const COMMON_TIME = 300;
export const TIME_IS_EMPTY = 0;
export const LIVES = 3;
export const ONE_SECOND = 1000;
export const TIMER_RADIUS = 370;
export const FAST_ANSWER = 30;
export const SERVER_URL = `https://es.dump.academy/guess-melody`;
export const Points = {
  IS_FAST: 2,
  IS_CORRECT: 1,
  IS_INCORRECT: -2
};

export const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: LIVES,
  time: COMMON_TIME,
  questions: 10,
  points: 0,
  fast: 0
});

export const FAIL = {
  TIME: {
    title: `Увы и ах!`,
    text: `Время вышло! Вы не успели отгадать все мелодии`
  },
  TRIES: {
    title: `Какая жалость!`,
    text: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
  }
};

