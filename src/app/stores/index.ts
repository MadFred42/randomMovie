import { types } from 'mobx-state-tree';
import MovieStore from './MovieStore.ts';
import ConfigStore from './ConfigStore.ts';
import { VideoTypes } from 'shared/types/types.ts';

const RootStore = types.model('RootStore', {
  movies: types.optional(MovieStore, {}),
  config: types.optional(ConfigStore, {
    rating: '10',
    type: VideoTypes.Movie,
    genres: ['Comedy'],
  }),
});

export default RootStore;
