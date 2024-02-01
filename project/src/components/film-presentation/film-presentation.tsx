import FilmInfo from '../../types/film-info';
import StartPlayingLink from '../start-playing-link/start-playing-link';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';
import ReviewLink from './review-link/review-link';
import { AuthorisationStatus } from '../../consts';
import AddingToFavorites from '../adding-to-favorites/adding-to-favorites';

type FilmPresentationProps = {
  film: FilmInfo,
  isReviewable?: boolean
}

function FilmPresentation({film, isReviewable = false}: FilmPresentationProps):JSX.Element{
  const authorisationStatus = useAppSelector((state) => state.authorisationStatus);
  const isAuthorised = authorisationStatus === AuthorisationStatus.Auth;
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
        { isAuthorised ? <AddingToFavorites/> : null }
        { isAuthorised && isReviewable ? <ReviewLink id={id}/> : null}
      </div>
    </div>
  );
}

export default FilmPresentation;
