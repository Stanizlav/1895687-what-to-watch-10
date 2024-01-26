import FilmInfo from './film-info';
import { store } from '../store';

export type ApplicationProcess = {
  genre: string
};

export type CommonProcess = {
  genresList: string[],
  activeGenre: string,
  films: FilmInfo[],
  filteredFilms: FilmInfo[],
  favoriteFilms: FilmInfo[]
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
