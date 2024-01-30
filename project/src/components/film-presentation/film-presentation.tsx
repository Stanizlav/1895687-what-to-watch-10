import FilmInfo from '../../types/film-info';
import StartPlayingLink from '../start-playing-link/start-playing-link';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';
import ReviewLink from './review-link/review-link';

type FilmPresentationProps = {
  film: FilmInfo,
  isReviewable?: boolean
}

function FilmPresentation({film, isReviewable = false}: FilmPresentationProps):JSX.Element{
  const favoriteFilmsListCount = useAppSelector((state) => state.favoriteFilms).length;
  const {name, genre, released, id, } = film;
  return(
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
        {isReviewable ? <ReviewLink id={id}/> : null}
      </div>
    </div>
  );
}

export default FilmPresentation;
