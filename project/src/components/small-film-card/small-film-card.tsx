import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type SmallFilmCardProps = {
  id: number;
  name: string;
  previewImage: string;
  onMouseOver: (id:number) => void
};

function SmallFilmCard({id = 0, name = '', previewImage = '', onMouseOver}:SmallFilmCardProps):JSX.Element{

  const handleMouseOver = () => onMouseOver(id);
  const filmLink = `${AppRoute.Films}${id}`;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handleMouseOver}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmLink}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
