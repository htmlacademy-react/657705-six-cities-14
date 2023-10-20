import FavoritesList from '../../components/favorites-list/favorites-list';
import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { Offers } from '../../types/offer';

type FavoritesProps = {
  offers: Offers;
};

function Favorites({ offers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header>
        <>
          <Logo />
          <HeaderNav />
        </>
      </Header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
