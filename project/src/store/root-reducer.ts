import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { CommonProcess } from '../types/state';
import { ceaseSpinning, choosingGenre, insertComments, insertFilms, insertPromo, insertSimilarFilms, insertTheFilm, setAuthorised, setReviewsLoading, setSending, setSendingError, setUnauthorised, startSpinning, unsetReviewsLoading, unsetSending, unsetSendingError } from './actions';
import FilmInfo from '../types/film-info';
import { ALL_GENRES, AuthorisationStatus } from '../consts';

const initialState: CommonProcess = {
  authorisationStatus: AuthorisationStatus.Unauth,
  user: null,
  spinning: false,
  isReviewsLoading: false,
  genresList: [],
  activeGenre: ALL_GENRES,
  promoFilm: undefined,
  films: [],
  filteredFilms: [],
  favoriteFilms: [],
  browsedFilm: undefined,
  similarFilms: [],
  reviews: [],
  isReviewSending: false,
  isSendingFailed: false
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
    .addCase(insertFilms, (state, action) => {
      const { films } = action.payload;
      state.films = films;
      state.activeGenre = ALL_GENRES;
      state.genresList = getGenres(films);
      state.filteredFilms = getFilteredFilms(state);
      state.favoriteFilms = films.filter((film)=>film.isFavorite);
    })
    .addCase(insertPromo, (state, action) => {
      const { promoFilm } = action.payload;
      state.promoFilm = promoFilm;
    })
    .addCase(insertTheFilm, (state, action) => {state.browsedFilm = action.payload;})
    .addCase(insertSimilarFilms, (state, action) => {state.similarFilms = action.payload;})
    .addCase(insertComments, (state, action) => {
      const { reviews } = action.payload;
      state.reviews = reviews;
    })
    .addCase(startSpinning, (state) => {state.spinning = true;})
    .addCase(ceaseSpinning, (state) => {state.spinning = false;})
    .addCase(setReviewsLoading, (state) => {state.isReviewsLoading = true;})
    .addCase(unsetReviewsLoading, (state) => {state.isReviewsLoading = false;})
    .addCase(setAuthorised, (state, action) => {
      state.authorisationStatus = AuthorisationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(setUnauthorised, (state) => {state.authorisationStatus = AuthorisationStatus.Unauth;})
    .addCase(setSending, (state)=>{state.isReviewSending = true;})
    .addCase(unsetSending, (state)=>{state.isReviewSending = false;})
    .addCase(setSendingError, (state)=>{state.isSendingFailed = true;})
    .addCase(unsetSendingError, (state)=>{state.isSendingFailed = false;});
});

export default reducer;
