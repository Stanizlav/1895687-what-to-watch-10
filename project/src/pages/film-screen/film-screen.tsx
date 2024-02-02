import { useParams } from 'react-router-dom';
import Icon from '../../components/icon/icon';
import PageFooter from '../../components/page-footer/page-footer';
import NotFoundScreen from '../not-found/not-found';
import FilmsList from '../../components/films-list/films-list';
import FilmInfoTabs from '../../components/film-info-tabs/film-info-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks/store-hooks';
import Background from '../../components/background/background';
import FilmPresentation from '../../components/film-presentation/film-presentation';
import { useEffect } from 'react';
import { downloadComments, downloadSimilarFilms, downloadTheFilm } from '../../store/thunk-actions';

const FILMS_LIKE_LIMIT = 4;

function FilmScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);
  const film = useAppSelector((state) => state.browsedFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);

  useEffect(()=>{
    dispatch(downloadTheFilm(id));
    dispatch(downloadSimilarFilms(id));
    dispatch(downloadComments(id));
  },[dispatch, id]);

  if(!film){
    return <NotFoundScreen/>;
  }

  const {name, backgroundImage} = film;
  const presentedSimilarFilms = similarFilms
    .filter((similar) => film.id !== similar.id)
    .slice(0, FILMS_LIKE_LIMIT);

  return(
    <>
      <Icon playIconAdded/>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <Background backgroundImage={backgroundImage} alt={name}/>
          <div className="film-card__wrap">
            <FilmPresentation film={film} isReviewable/>
          </div>
        </div>
        <FilmInfoTabs film={film}/>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={presentedSimilarFilms}/>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

export default FilmScreen;
