import GenreView from '../views/genre-view';

export default (state, question) => {
  return new GenreView(state, question);
};
