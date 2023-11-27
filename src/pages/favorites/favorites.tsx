import { useEffect } from 'react';
import cn from 'classnames';

import FavoritesList from '../../components/favorites-list/favorites-list';
import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesOffers } from '../../store/offers/offers-action';
import Loading from '../../components/loading/loading';
import {
  selectFavoritesOffers,
  selectFavoritesOffersLoadingStatus,
} from '../../store/offers/offers-selector';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadingStatus = useAppSelector(selectFavoritesOffersLoadingStatus);
  const favoritesOffers = useAppSelector(selectFavoritesOffers);

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  return (
    <div
      className={cn('page', {
        'page--favorites-empty': favoritesOffers.length === 0,
      })}
    >
      <Header>
        <>
          <Logo />
          <HeaderNav />
        </>
      </Header>
      <Loading loadingStatus={loadingStatus}>
        {favoritesOffers.length === 0 ? (
          <FavoritesEmpty />
        ) : (
          <FavoritesList offers={favoritesOffers} />
        )}
      </Loading>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
