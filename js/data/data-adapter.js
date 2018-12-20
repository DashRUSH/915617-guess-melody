const adaptServerData = (data) => {
  return {
    questions: data.map((level) => {
      switch (level.type) {
        case `artist`:
          return preprocessQuestionArtist(level);
        case `genre`:
          return preprocessQuestionGenre(level);
        default:
          throw new Error(`Неизвестный тип: ${level.type}`);
      }
    }),
    audios: getAudio(data)
  };
};

const preprocessQuestionArtist = (level) => {
  const options = level.answers.map((option) => ({
    artist: option.title,
    image: option.image.url,
    answer: option.isCorrect
  }));
  return {
    type: level.type,
    title: level.question,
    src: level.src,
    options
  };
};

const preprocessQuestionGenre = (level) => {
  const options = level.answers.map((option) => ({
    src: option.src,
    answer: option.genre === level.genre
  }));
  return {
    type: level.type,
    title: level.question,
    options
  };
};

const getAudio = (data) => {
  const audios = [];
  data.map((level) => {
    switch (level.type) {
      case `artist`:
        audios.push(level.src);
        return;
      case `genre`:
        level.answers.map((options) => {
          audios.push(options.src);
        });
        return;
      default:
        throw new Error(`Неизвестный тип: ${level.type}`);
    }
  });
  return audios;
};

export default adaptServerData;
