import { ReactNode } from 'react';

import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import HeaderAuth from '../header-auth/header-auth';
import HeaderNoAuth from '../header-no-auth/header-no-auth';

function HeaderNav(): ReactNode {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatus.Auth
            ? <HeaderAuth />
            : <HeaderNoAuth />
        }
      </ul>
    </nav>
  );
}

export default HeaderNav;
