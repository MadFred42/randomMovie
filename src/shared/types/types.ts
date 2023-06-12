export enum VideoTypes {
  Movie = 'movie',
  Show = 'show',
}

export interface ConfigObject {
  rating: string;
  genres: string[];
  type: VideoTypes;
}
