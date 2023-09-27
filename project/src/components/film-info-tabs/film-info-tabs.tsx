import FilmInfo from '../../types/film-info';
import getFilmRatingLevel from '../../utils/get-film-rating-level';

type FilmInfoTabsProps = {
  film: FilmInfo;
};

function FilmInfoTabs({film}:FilmInfoTabsProps):JSX.Element{
  const {name, posterImage, description, rating, scoresCount, director, starring} = film;
  const altPoster = `${name} poster`;

  return(
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={posterImage} alt={altPoster} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className="film-nav__item film-nav__item--active">
                <a href="#" className="film-nav__link">Overview</a>
              </li>
              <li className="film-nav__item">
                <a href="#" className="film-nav__link">Details</a>
              </li>
              <li className="film-nav__item">
                <a href="#" className="film-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

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

            <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and others</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmInfoTabs;
