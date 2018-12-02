const changeLevel = (game) => {
  const levelNew = game.level + 1;
  return Object.assign({}, game, {
    level: levelNew
  });
};

export default changeLevel;
