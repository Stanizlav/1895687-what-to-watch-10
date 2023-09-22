import { Link, useParams } from 'react-router-dom';
import Icon from '../../components/icon/icon';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FilmInfo from '../../types/film-info';
import { AppRoute } from '../../consts';
import NotFoundScreen from '../not-found/not-found';
import ReviewForm from '../../components/review-form/review-form';

type AddReviewScreenProps = {
  films: FilmInfo[]
};

function AddReviewScreen({films}:AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const film = films.find((element) => element.id === id);
  if (!film){
    return <NotFoundScreen/>;
  }
  const {name, backgroundImage, posterImage} = film;
  const filmLink = `${AppRoute.Films}${id}`;
  const altPoster = `${name} poster`;
  return(
    <>
      <Icon/>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={filmLink} className="breadcrumbs__link">{name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to="">Add review</Link>
                </li>
              </ul>
            </nav>

            <UserBlock/>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={altPoster} width="218" height="327" />
          </div>
        </div>

        <ReviewForm/>
      </section>
    </>
  );
}

export default AddReviewScreen;
