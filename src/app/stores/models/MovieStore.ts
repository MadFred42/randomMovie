import { types } from 'mobx-state-tree';
import Movie from './Movie.ts';

const MovieStore = types
  .model('Movies', {
    Movies: types.array(Movie),
  })
  .views((self) => ({
    getMovies() {
      return self.Movies;
    },
    getMovie(id: string) {
      return self.Movies.find((movie) => movie.id === id);
    },
  }));

export default MovieStore;
