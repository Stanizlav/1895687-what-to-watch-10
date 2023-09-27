import { Link, useParams } from 'react-router-dom';
import Icon from '../../components/icon/icon';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import UserBlock from '../../components/user-block/user-block';
import FilmInfo from '../../types/film-info';
import NotFoundScreen from '../not-found/not-found';
import FilmsList from '../../components/films-list/films-list';
import FilmInfoTabs from '../../components/film-info-tabs/film-info-tabs';

type FilmScreenProps = {
  films: FilmInfo[]
};

const FILMS_LIKE_COUNT = 4;

function FilmScreen({films}:FilmScreenProps): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const film = films.find((element)=>element.id === id);
  if(!film){
    return <NotFoundScreen/>;
  }

  const {name, backgroundImage, genre, released } = film;
  const myFilmsListCount = films.filter((unit)=>unit.isFavorite).length;
  const filmsLikeThis = films.filter((element) => (element.genre === genre) && element.id !== id).slice(0, FILMS_LIKE_COUNT);
  return(
    <>
      <Icon playIconAdded/>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myFilmsListCount}</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <FilmInfoTabs film={film}/>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={filmsLikeThis}/>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

export default FilmScreen;
