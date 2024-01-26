import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { CommonProcess } from '../types/state';
import { choosingGenre, fetchFilms } from './actions';
import FilmInfo from '../types/film-info';
import { ALL_GENRES } from '../consts';

const initialState: CommonProcess = {
  genresList: [],
  activeGenre: ALL_GENRES,
  films: [],
  filteredFilms: [],
  favoriteFilms: []
};

const getGenres = (films: FilmInfo[]) => {
  const genres: string[] = [ALL_GENRES];
  films.forEach((film)=>{
    if (!genres.includes(film.genre)){
      genres.push(film.genre);
    }
  });

  return genres;
};

const getFilteredFilms = (state: CommonProcess):FilmInfo[] => {
  if(state.activeGenre === ALL_GENRES){
    return state.films;
  }
  return state.films.filter((film)=>state.activeGenre === film.genre);
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choosingGenre, (state:CommonProcess, action:PayloadAction<{genre: string}>) => {
      const { genre } = action.payload;
      state.activeGenre = genre;
      state.filteredFilms = getFilteredFilms(state);
    })
    .addCase(fetchFilms, (state, action) => {
      const { films } = action.payload;
      state.films = films;
      state.activeGenre = ALL_GENRES;
      state.genresList = getGenres(films);
      state.filteredFilms = getFilteredFilms(state);
      state.favoriteFilms = films.filter((film)=>film.isFavorite);
    });
});

export default reducer;
