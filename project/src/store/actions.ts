import { createAction } from '@reduxjs/toolkit';
import NameSpace from '../types/name-space';
import FilmInfo from '../types/film-info';
import Review from '../types/review';
import User from '../types/user';
import { AppRoute, REDIRECT_ACTION_TYPE } from '../consts';

export const choosingGenre = createAction<{genre: string}>(`${NameSpace.Application}/choosing-genre`);
export const insertFilms = createAction<{films: FilmInfo[]}>(`${NameSpace.Data}/films-insertion`);
export const insertPromo = createAction<{promoFilm: FilmInfo | undefined}>(`${NameSpace.Data}/promo-film-insertion`);
export const insertComments = createAction<{reviews: Review[]}>(`${NameSpace.Data}/comments-insertion`);
export const startSpinning = createAction(`${NameSpace.Data}/start-spinning`);
export const ceaseSpinning = createAction(`${NameSpace.Data}/cease-spinning`);
export const setReviewsLoading = createAction(`${NameSpace.Data}/reviews-start-loading`);
export const unsetReviewsLoading = createAction(`${NameSpace.Data}/reviews-stop-loading`);
export const setAuthorised = createAction<User>(`${NameSpace.User}/getting-authorised`);
export const setUnauthorised = createAction(`${NameSpace.User}/getting-unauthorised`);
export const redirection = createAction<AppRoute>(REDIRECT_ACTION_TYPE);
