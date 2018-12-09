const changeLevel = (state) => {
  const levelNew = state.level + 1;
  return Object.assign({}, state, {
    level: levelNew
  });
};

export default changeLevel;
