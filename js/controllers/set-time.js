const setTime = (duration) => {
  let minutes = duration / 60;
  let seconds = duration % 60;

  minutes = minutes < 10 ? `0` + minutes : minutes;
  seconds = seconds < 10 ? `0` + seconds : seconds;

  return {minutes, seconds};
};

export default setTime;
