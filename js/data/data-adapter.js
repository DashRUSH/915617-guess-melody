const adaptServerData = (data) => {
  return data.map((level) => {
    switch (level.type) {
      case `artist`:
        level = preprocessQuestionArtist(level);
        break;
      case `genre`:
        level = preprocessQuestionGenre(level);
        break;
      default:
        throw new Error(`Неизвестный тип: ${level.type}`);
    }
    return level;
  });
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

export default adaptServerData;
