import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import FilmInfo from './types/film-info';
import { FILMS } from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';

const promoFilmInfo: FilmInfo = FILMS[1];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilmInfo={promoFilmInfo} films={FILMS} />
    </Provider>
  </React.StrictMode>,
);
