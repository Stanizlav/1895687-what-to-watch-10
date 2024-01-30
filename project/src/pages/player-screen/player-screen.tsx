import { useParams, useNavigate } from 'react-router-dom';
import Icon from '../../components/icon/icon';
import NotFoundScreen from '../not-found/not-found';
import getTimeInfo from '../../utils/get-time-info';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';

function PlayerScreen(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const id = Number(params.id);
  const films = useAppSelector((state)=>state.films);
  const film = films.find((element)=>element.id === id);
  if(!film){
    return <NotFoundScreen/>;
  }
  const { runTime } = film;
  const { hours, minutes } = getTimeInfo(runTime);
  const formattedDuration = `${hours}:${minutes}:00`;
  const handleExitClick = () => {
    navigate(-1);
  };
  return(
    <>
      <Icon/>
      <div className="player">
        <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

        <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler"
                style={{
                  left: '30%'
                }}
              >
                Toggler
              </div>
            </div>
            <div className="player__time-value">{formattedDuration}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerScreen;
