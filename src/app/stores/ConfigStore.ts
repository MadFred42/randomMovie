import { IMSTArray, ISimpleType, types } from 'mobx-state-tree';
import { VideoTypes } from 'shared/types/types.ts';

const ConfigStore = types
  .model('ConfigStore', {
    rating: types.string,
    genres: types.array(types.string),
    type: types.union(
      types.literal(VideoTypes.Movie),
      types.literal(VideoTypes.Show),
    ),
  })
  .actions((self) => ({
    setRating(rating: string): void {
      self.rating = rating;
    },
    setGenres(genres: IMSTArray<ISimpleType<string>>): void {
      self.genres = genres;
    },
    setType(type: VideoTypes): void {
      self.type = type;
    },
  }));

export default ConfigStore;
