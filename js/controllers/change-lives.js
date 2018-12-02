const changeLives = (game) => {
  const livesNew = game.lives - 1;
  return Object.assign({}, game, {
    lives: livesNew
  });
};

export default changeLives;
