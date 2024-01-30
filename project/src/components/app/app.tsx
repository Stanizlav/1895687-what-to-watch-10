import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks/store-hooks';
import { downloadFilms, downloadPromo } from '../../store/thunk-actions';
import Spinner from '../spinner/spinner';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const spinning = useAppSelector((state) => state.spinning);
  useEffect(()=>{
    dispatch(downloadFilms());
    dispatch(downloadPromo());
  },[dispatch]);

  if(spinning){
    return (<Spinner/>);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ AppRoute.Main } element={ <MainScreen/> } />
        <Route path={ AppRoute.SignIn }element={ <SignInScreen/> } />
        <Route path={ AppRoute.MyList } element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListScreen/>
          </PrivateRoute>
        }
        />
        <Route path={ AppRoute.Film } element={ <FilmScreen/> } />
        <Route path={ AppRoute.AddReview } element={ <AddReviewScreen/> } />
        <Route path={ AppRoute.Player } element={ <PlayerScreen/> } />
        <Route path={ AppRoute.Other } element={ <NotFoundScreen/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
