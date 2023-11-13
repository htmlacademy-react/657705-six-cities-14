import { ReactNode } from 'react';

type THeaderProps = {
  children: ReactNode;
};

function Header({ children }: THeaderProps): ReactNode {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
