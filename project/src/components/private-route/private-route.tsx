import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../consts';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps):JSX.Element {
  const authorisationStatus = useAppSelector((state) => state.authorisationStatus);
  return(
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to = {AppRoute.SignIn}/>
  );
}

export default PrivateRoute;
