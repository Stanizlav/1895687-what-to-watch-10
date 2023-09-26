import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useState } from 'react';
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
  let timer: NodeJS.Timeout;

  const handleMouseEnter = () => {
    onMouseEnter(id);
    timer = setTimeout(()=>{
      setPlaying(true);
    }, NOT_PLAYING_TIME);
  };
  const handleMouseOut = () => {
    clearTimeout(timer);
    setPlaying(false);
  };
  const filmLink = `${AppRoute.Films}${id}`;

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
      <div className="small-film-card__image">
        {/* <img src={previewImage} alt={name} width="280" height="175" /> */}
        <VideoPlayer src={previewVideoLink} poster={previewImage} isPlaying={isPlaying} muted loop reset/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmLink}>{name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
