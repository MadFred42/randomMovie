import { types } from 'mobx-state-tree';
import MovieStore from './MovieStore.ts';

const RootStore = types.model('RootStore', {
  movies: types.optional(MovieStore, {}),
});

export default RootStore;
