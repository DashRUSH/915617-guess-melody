const changeTime = (seconds) => {
  if (seconds <= 0) {
    return -1;
  }

  return seconds - 1;
};

export default changeTime;
