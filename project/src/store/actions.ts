import { createAction } from '@reduxjs/toolkit';
import NameSpace from '../types/name-space';
import FilmInfo from '../types/film-info';

export const choosingGenre = createAction<{genre: string}>(`${NameSpace.Application}/choosing-genre`);
export const fetchFilms = createAction<{films: FilmInfo[]}>(`${NameSpace.Data}/fetching-films`);
