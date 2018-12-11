const changeLives = (state) => {
  const livesNew = state.lives - 1;
  return Object.assign({}, state, {
    lives: livesNew
  });
};

export default changeLives;
