import HeaderAuth from '../header-auth/header-auth';
import HeaderNoAuth from '../header-no-auth/header-no-auth';
import IsAuth from '../is-auth/is-auth';

function HeaderNav() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <IsAuth
          authComponent={<HeaderAuth />}
          noAuthComponent={<HeaderNoAuth />}
        />
      </ul>
    </nav>
  );
}

export default HeaderNav;
