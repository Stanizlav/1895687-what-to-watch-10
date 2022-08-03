import MainScreen from '../../pages/main-screen/main-screen';
import FilmInfo from '../../types/film-info';


type AppScreenProps = {
  promoFilmInfo: FilmInfo
};

function App({promoFilmInfo}:AppScreenProps): JSX.Element {
  return (
    <MainScreen promoFilmInfo={promoFilmInfo}/>
  );
}

export default App;
