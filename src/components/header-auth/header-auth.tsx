import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectUserEmail } from '../../store/user/user-selector';

function HeaderAuth(): ReactNode {
  const userEmail = useAppSelector(selectUserEmail);

  return (
    <>
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">0</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default HeaderAuth;
