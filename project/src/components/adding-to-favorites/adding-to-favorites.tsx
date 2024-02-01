import { useAppSelector } from '../../hooks/store-hooks/store-hooks';

function AddingToFavorites():JSX.Element{
  const favoriteFilmsListCount = useAppSelector((state) => state.favoriteFilms).length;
  return(
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsListCount}</span>
    </button>
  );
}

export default AddingToFavorites;
