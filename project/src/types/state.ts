import FilmInfo from './film-info';
import { store } from '../store';
import Review from './review';
import { AuthorisationStatus } from '../consts';
import User from './user';

export type ApplicationProcess = {
  genre: string
};

export type CommonProcess = {
  authorisationStatus: AuthorisationStatus,
  user: User | null,
  spinning: boolean,
  isReviewsLoading: boolean,
  genresList: string[],
  activeGenre: string,
  promoFilm: FilmInfo | undefined,
  films: FilmInfo[],
  filteredFilms: FilmInfo[],
  favoriteFilms: FilmInfo[],
  browsedFilm: FilmInfo | undefined,
  similarFilms: FilmInfo[],
  reviews: Review[],
  isReviewSending: boolean,
  isSendingFailed: boolean
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
