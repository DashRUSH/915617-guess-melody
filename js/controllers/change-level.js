const changeLevel = (game) => {
  const levelNew = game.level + 1;
  const newGame = Object.assign({}, game, {
    level: levelNew
  });

  return newGame;
};

export default changeLevel;
