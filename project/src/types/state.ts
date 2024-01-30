import FilmInfo from './film-info';
import { store } from '../store';
import Review from './review';

export type ApplicationProcess = {
  genre: string
};

export type CommonProcess = {
  spinning: boolean,
  isReviewsLoading: boolean,
  genresList: string[],
  activeGenre: string,
  promoFilm: FilmInfo | undefined,
  films: FilmInfo[],
  filteredFilms: FilmInfo[],
  favoriteFilms: FilmInfo[],
  reviews: Review[]
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
