type SmallFilmCardProps = {
  id: number;
  name: string;
  previewImage: string;
  onMouseOver: (id:number) => void
};

function SmallFilmCard({id = 0, name = '', previewImage = '', onMouseOver}:SmallFilmCardProps):JSX.Element{

  const handleMouseOver = () => onMouseOver(id);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={handleMouseOver}>
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
