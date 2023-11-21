import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserEmail } from '../../store/user/user-selector';
import { fetchLogoutAuth } from '../../store/user/user-action';
import { selectFavoritesOffers } from '../../store/offers/offers-selector';

function HeaderAuth() {
  const dispatch = useAppDispatch();

  const userEmail = useAppSelector(selectUserEmail);
  const favoritesCount = useAppSelector(selectFavoritesOffers);

  const handleLogoutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(fetchLogoutAuth());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
          {/* FIXME: Проверять загрузку */}
          <span className="header__favorite-count">{favoritesCount.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          onClick={handleLogoutClick}
          className="header__nav-link"
          href="#"
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default HeaderAuth;
