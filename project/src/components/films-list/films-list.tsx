import FilmInfo from '../../types/film-info';
import SmallFilmCard from '../small-film-card/small-film-card';
import {useState} from 'react';

const INITIAL_ID = -Infinity;

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
      {films.map(({id, name, previewImage, previewVideoLink}) =>
        (<SmallFilmCard key={id} id={id} name={name} previewImage={previewImage} previewVideoLink={previewVideoLink} onMouseEnter={handleIdChange}/>)
      )}
    </div>
  );
}

export default FilmsList;
