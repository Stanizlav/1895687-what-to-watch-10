import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';

function AvatarIcon():JSX.Element | null{
  const user = useAppSelector((state) => state.user);

  if(!user){
    return null;
  }

  const {avatarUrl, name} = user;

  return(
    <div className="user-block__avatar">
      <Link to={AppRoute.MyList}>
        <img src={avatarUrl} alt={name} width="63" height="63" />
      </Link>
    </div>
  );
}

export default AvatarIcon;
