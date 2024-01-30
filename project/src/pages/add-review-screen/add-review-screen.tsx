import { Link, useParams } from 'react-router-dom';
import Icon from '../../components/icon/icon';
import { AppRoute } from '../../consts';
import NotFoundScreen from '../not-found/not-found';
import ReviewForm from '../../components/review-form/review-form';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';
import Background from '../../components/background/background';

function AddReviewScreen(): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const films = useAppSelector((state)=>state.films);
  const film = films.find((element) => element.id === id);
  if (!film){
    return <NotFoundScreen/>;
  }
  const {name, backgroundImage, posterImage} = film;
  const filmLink = AppRoute.Film.replace(':id', id.toString());
  const altPoster = `${name} poster`;
  return(
    <>
      <Icon/>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <Background backgroundImage={backgroundImage} alt={name}>
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
          </Background>
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
