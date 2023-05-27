import { ConfigPage, MoviesListPage } from '../../pages';
import { MoviePage } from '../../pages';
import { RandomizerPage } from '../../pages';
import { RouteObject } from 'react-router-dom';

export enum RouteNames {
  RANDOMIZER = '/randomizer',
  MOVIE = '/movie:id',
  MOVIES = '/movies',
  CONFIG = '/',
}
export const PUBLIC_ROUTES: RouteObject[] = [
  { path: RouteNames.MOVIES, element: <MoviesListPage /> },
  { path: RouteNames.MOVIE, element: <MoviePage /> },
  { path: RouteNames.RANDOMIZER, element: <RandomizerPage /> },
  { path: RouteNames.CONFIG, element: <ConfigPage /> },
];
