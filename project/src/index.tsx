import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import FilmInfo from './types/film-info';
import { Genre } from './consts';

const promoFilmInfo: FilmInfo = {
  name: 'The Grand Budapest Hotel',
  genre: Genre.Drama,
  year: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilmInfo={promoFilmInfo} />
  </React.StrictMode>,
);
