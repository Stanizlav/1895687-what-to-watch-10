import FilmInfo from '../../../types/film-info';
import getFilmRatingLevel from '../../../utils/get-film-rating-level';

type OverviewTabProps = {
  film: FilmInfo
};

const ACTORS_COUNT_TO_SHOW = 4;

function OverviewTab({film}:OverviewTabProps):JSX.Element{
  const {description, rating, scoresCount, director, starring} = film;
  const actorsToShow = starring.slice(0, ACTORS_COUNT_TO_SHOW).join(', ');
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRatingLevel(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {actorsToShow} and others</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
