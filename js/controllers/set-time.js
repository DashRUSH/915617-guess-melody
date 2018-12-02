const setTime = (duration) => {
  let minutes = parseInt(duration / 60, 10);
  let seconds = parseInt(duration % 60, 10);

  minutes = minutes < 10 ? `0` + minutes : minutes;
  seconds = seconds < 10 ? `0` + seconds : seconds;

  return {minutes, seconds};
};

export default setTime;
