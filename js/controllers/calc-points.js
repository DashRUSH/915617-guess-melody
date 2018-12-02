const calcPoints = (state, success) => {
  if (success) {
    state.points += 1;
  } else {
    state.points -= 2;
  }

  return state;
};

export default calcPoints;
