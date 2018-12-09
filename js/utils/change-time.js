const changeTime = (duration) => {
  if (duration <= 0) {
    return -1;
  }

  return duration - 1;
};

export default changeTime;
