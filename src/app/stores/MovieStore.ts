import { types } from 'mobx-state-tree';

const Movie = types.model('Movie', {
  title: types.string,
  description: types.string,
  id: types.string,
  rating: types.number,
  released: types.number,
  genres: types.array(types.string),
  isWatched: types.boolean,
});

const MovieStore = types
  .model('Movies', {
    Movies: types.maybe(types.array(Movie)),
  })
  .views((self) => ({
    getMovies() {
      return self.Movies;
    },
    getMovie(id: string) {
      return self.Movies?.find((movie) => movie.id === id);
    },
  }));

export default MovieStore;
