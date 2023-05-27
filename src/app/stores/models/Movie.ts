import { types } from 'mobx-state-tree';
import { string } from 'mobx-state-tree/dist/types/primitives';

const Movie = types
  .model('Movie', {
    title: types.string,
    description: types.string,
    id: types.string,
    rating: types.number,
    released: types.number,
    genre: types.array(string),
    isWatched: types.boolean,
  })
  .actions((self) => ({
    setIsWatched(): void {
      self.isWatched = true;
    },
  }))
  .views((self) => ({
    getWatchedStatus(): boolean {
      return self.isWatched;
    },
    getRating(): number {
      return self.rating;
    },
  }));

export default Movie;
