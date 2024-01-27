import GenreListUnit from './genre-list-unit/genre-list-unit';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';

type GenreListProps = {
  onGenreChenge?: ()=>void;
};

function GenreList({onGenreChenge}:GenreListProps):JSX.Element{
  const genres = useAppSelector((state) => state.genresList);
  const activeGenre = useAppSelector((state) => state.activeGenre);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenreListUnit key={genre} genre={genre} isActive={genre === activeGenre} onGenreChange={onGenreChenge}/>)}
    </ul>
  );
}

export default GenreList;
