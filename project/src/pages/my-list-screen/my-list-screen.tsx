import FilmsList from '../../components/films-list/films-list';
import Icon from '../../components/icon/icon';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import UserBlock from '../../components/user-block/user-block';
import FilmInfo from '../../types/film-info';

type MyListScreenProps = {
  films: FilmInfo[]
};

function MyListScreen({films}: MyListScreenProps): JSX.Element {
  const myFilms = films.filter((film)=>film.isFavorite);
  return(
    <>
      <Icon/>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myFilms.length}</span></h1>
          <UserBlock/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList films={myFilms}/>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

export default MyListScreen;
