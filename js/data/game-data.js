export const COMMON_TIME = 300;
export const TIME_IS_EMPTY = 0;
export const LIVES = 3;
export const ONE_SECOND = 1000;
export const TIMER_RADIUS = 370;
export const FAST_ANSWER = 30;
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

export const QUESTIONS = [
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        answer: true
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        answer: true
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        answer: false
      },
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        answer: true
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://placehold.it/134x134`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        answer: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        answer: true
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        answer: true
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        answer: false
      },
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        answer: true
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://placehold.it/134x134`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        answer: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        answer: true
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        answer: true
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        answer: false
      },
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        answer: true
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://placehold.it/134x134`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        answer: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        answer: true
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        answer: true
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        answer: false
      },
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        answer: true
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://placehold.it/134x134`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        answer: false
      }
    ]
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `In the Land of Rhinoplasty`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        answer: true
      },
      {
        artist: `Audionautix`,
        name: `Travel Light`,
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        answer: true
      },
      {
        artist: `Riot`,
        name: `	Level Plane`,
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        answer: false
      },
    ]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    options: [
      {
        artist: `Kevin MacLeod`,
        name: `Long Stroll`,
        image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        answer: true
      },
      {
        artist: `Quincas Moreira`,
        name: `Firefly`,
        image: `http://placehold.it/134x134`,
        answer: false
      },
      {
        artist: `Jingle Punks`,
        name: `Lucky Day`,
        image: `https://i.vimeocdn.com/portrait/992615_300x300`,
        answer: false
      }
    ]
  }
];

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

export const allResults = [3, 2, 1];
