import { useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import GenreList from '../../components/genre-list/genre-list';
import Icon from '../../components/icon/icon';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import StartPlayingLink from '../../components/start-playing-link/start-playing-link';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks/store-hooks';
import FilmInfo from '../../types/film-info';
import { fetchFilms } from '../../store/actions';

type MainScreenProps = {
  promoFilmInfo: FilmInfo;
  films: FilmInfo[]
};

function MainScreen ({ promoFilmInfo, films }: MainScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {name, posterImage, backgroundImage, genre, released, id} = promoFilmInfo;
  const altPoster = `${name} poster`;
  const presentedFilms = useAppSelector((state) => state.filteredFilms);
  const favoriteFilmsListCount = useAppSelector((state) => state.favoriteFilms).length;

  useEffect(()=>{
    dispatch(fetchFilms({films}));
  },[dispatch, films]);

  return (
    <>
      <Icon playIconAdded/>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={altPoster} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <StartPlayingLink id={id}/>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{favoriteFilmsListCount}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>
          <FilmsList films={presentedFilms}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

export default MainScreen;
