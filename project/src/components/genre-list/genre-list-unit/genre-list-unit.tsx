import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/store-hooks/store-hooks';
import { choosingGenre } from '../../../store/actions';
import { MouseEvent } from 'react';
import { AppRoute } from '../../../consts';
import pluralize from 'pluralize';

type GenreListUnitProps = {
  genre: string,
  isActive: boolean,
};

const getGenreExtractCaption = (genre:string) => {
  pluralize.addUncountableRule(/ /);
  pluralize.addUncountableRule(/-/);
  pluralize.addUncountableRule(/&/);
  return pluralize.plural(genre);
};

function GenreListUnit({genre, isActive}:GenreListUnitProps):JSX.Element{
  const title = getGenreExtractCaption(genre);
  const classList = `catalog__genres-item${isActive ? ' catalog__genres-item--active' : ''}`;
  const dispatch = useAppDispatch();

  const handleLinkClick = (event:MouseEvent<HTMLAnchorElement>)=>{
    event.preventDefault();
    if(isActive){
      return;
    }
    dispatch(choosingGenre({genre}));
  };

  return(
    <li className={classList}>
      <Link to={AppRoute.Main} className="catalog__genres-link" onClick={handleLinkClick}>{title}</Link>
    </li>
  );
}

export default GenreListUnit;
