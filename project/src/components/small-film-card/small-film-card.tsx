import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useState, useRef } from 'react';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink : string;
  onMouseEnter: (id:number) => void
};

const INITIAL_PLAYING = false;
const NOT_PLAYING_TIME = 1000;

function SmallFilmCard({id, name, previewImage, previewVideoLink, onMouseEnter}:SmallFilmCardProps):JSX.Element{

  const [isPlaying, setPlaying] = useState(INITIAL_PLAYING);
  const timer : React.MutableRefObject<NodeJS.Timeout | undefined> = useRef();

  const handleMouseEnter = () => {
    onMouseEnter(id);
    clearTimeout(timer.current);
    timer.current = setTimeout(()=>{
      setPlaying(true);
    }, NOT_PLAYING_TIME);
  };

  const handleMouseOut = () => {
    clearTimeout(timer.current);
    setPlaying(false);
  };
  const filmLink = AppRoute.Film.replace(':id', id.toString());

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
        <VideoPlayer src={previewVideoLink} poster={previewImage} isPlaying={isPlaying} muted loop reset/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmLink}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
