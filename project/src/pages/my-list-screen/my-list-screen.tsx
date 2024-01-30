import FilmsList from '../../components/films-list/films-list';
import Icon from '../../components/icon/icon';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks/store-hooks/store-hooks';

function MyListScreen(): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  return(
    <>
      <Icon/>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
          <UserBlock/>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <FilmsList films={favoriteFilms}/>
        </section>
        <PageFooter/>
      </div>
    </>
  );
}

export default MyListScreen;
