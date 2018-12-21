const loadAudios = (src, resolve) => {
  return new Promise(() => {
    const audio = new Audio();
    audio.src = src;
    audio.addEventListener(`loadeddata`, () => resolve(audio));
  });
};

export default loadAudios;
