const hash = window.location.hash.replace(`#`, ``);

export const DEBUG = hash.toLowerCase() === `debug`;
export const DEBUG_STYLE = `style="opacity: 0.3;"`;
