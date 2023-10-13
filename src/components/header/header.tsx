type HeaderProps = {
  children: JSX.Element;
};

function Header({ children }: HeaderProps): JSX.Element {
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
