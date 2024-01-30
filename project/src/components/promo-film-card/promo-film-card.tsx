import { useAppSelector } from '../../hooks/store-hooks/store-hooks';
import Background from '../background/background';
import FilmPresentation from '../film-presentation/film-presentation';

function PromoFilmCard():JSX.Element|null{
  const promoFilm = useAppSelector((state)=>state.promoFilm);
  if (!promoFilm){
    return null;
  }
  const {name, posterImage, backgroundImage} = promoFilm;
  const altPoster = `${name} poster`;

  return(
    <section className="film-card">
      <Background backgroundImage={backgroundImage} alt={name}/>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={altPoster} width="218" height="327" />
          </div>
          <FilmPresentation film={promoFilm}/>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmCard;
