async function loadAudios(src, resolve) {
  const audio = new Audio();
  audio.src = src;
  return await audio.addEventListener(`loadeddata`, () => resolve(audio));
}

export default loadAudios;
