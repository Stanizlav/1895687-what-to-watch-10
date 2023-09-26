import FilmInfo from '../../types/film-info';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';

const INITIAL_ID = 0;

type FilmsListProps = {
  films: FilmInfo[]
};

function FilmsList({films}:FilmsListProps): JSX.Element {
  const [, setCurrentId] = useState(INITIAL_ID);

  const handleIdChange = (id:number)=>{
    setCurrentId(id);
  };

  return(
    <div className="catalog__films-list">
      { films.map((item) => SmallFilmCard({...item, onMouseEnter:handleIdChange}))}
    </div>
  );
}

export default FilmsList;
