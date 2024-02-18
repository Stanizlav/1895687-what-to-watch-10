import { Link } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks/store-hooks';
import AvatarIcon from '../avatar-icon/avatar-icon';
import { logOut } from '../../store/thunk-actions';

function UserBlock():JSX.Element{
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector((state) => state.authorisationStatus);
  const isAuthorised = authorisationStatus === AuthorisationStatus.Auth;
  const link = isAuthorised ? '' : AppRoute.SignIn;
  const linkCaption = isAuthorised ? 'Sign out' : 'Sign in';

  const handleLogOutClick = ()=>{
    dispatch(logOut());
  };

  return(
    <ul className="user-block">
      { isAuthorised ? <li className="user-block__item"><AvatarIcon/></li> : null }
      <li className="user-block__item" onClick={isAuthorised ? handleLogOutClick : undefined}>
        <Link className="user-block__link" to={link}>{linkCaption}</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
