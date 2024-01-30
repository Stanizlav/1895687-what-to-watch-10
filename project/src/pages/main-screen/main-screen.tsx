import { useState } from 'react';
import FilmsList from '../../components/films-list/films-list';
import GenreList from '../../components/genre-list/genre-list';
import Icon from '../../components/icon/icon';
import PageFooter from '../../components/page-footer/page-footer';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';
import RevealingButton from '../../components/revealing-button/revealing-button';
import { DEFAULT_FILMS_COUNT } from '../../consts';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';

function MainScreen (): JSX.Element {
  const filteredFilms = useAppSelector((state) => state.filteredFilms);
  const [filmsLimit, setFilmsLimit] = useState(DEFAULT_FILMS_COUNT);
  const presentedFilms = filteredFilms.slice(0, filmsLimit);
  const isRevealingButtonHidden = presentedFilms.length === filteredFilms.length;

  const handleRevealingButtonClick = ()=>{
    setFilmsLimit((limit) => limit + DEFAULT_FILMS_COUNT);
  };

  const handleGenreChange = () => {
    setFilmsLimit(DEFAULT_FILMS_COUNT);
  };

  return (
    <>
      <Icon playIconAdded/>
      <PromoFilmCard/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList onGenreChenge={handleGenreChange}/>
          <FilmsList films={presentedFilms}/>
          <RevealingButton onClick={handleRevealingButtonClick} isHidden={isRevealingButtonHidden}/>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

export default MainScreen;
