import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks/store-hooks';
import { downloadFavoriteFilms, setFavoriteStatus } from '../../store/thunk-actions';
import FilmInfo from '../../types/film-info';

type AddingToFavoritesProps = {
  film: FilmInfo
}

function AddingToFavorites({film}:AddingToFavoritesProps):JSX.Element{
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const isFavorite = favoriteFilms.filter((favorite) => favorite.id === film.id).length !== 0;
  const captionImg = isFavorite ? '#in-list' : '#add';

  useEffect(()=>{
    dispatch(downloadFavoriteFilms());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(setFavoriteStatus(film.id, !isFavorite));
  };

  return(
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={captionImg}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default AddingToFavorites;
