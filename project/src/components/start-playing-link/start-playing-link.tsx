import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type StartPlayingLinkProps = {
  id: number;
};

function StartPlayingLink({id}:StartPlayingLinkProps):JSX.Element{
  const playerLink = AppRoute.Player.replace(':id', id.toString());
  return(
    <Link to={playerLink} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default StartPlayingLink;
