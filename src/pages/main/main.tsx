import cn from 'classnames';
import { ReactNode, useState } from 'react';

import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';

import TabsList from '../../components/tabs-list/tabs-list';
import MainContent from '../../components/main-content/main-content';

function Main(): ReactNode {
  const [isOffersEmpty, setIsOffersEmpty] = useState<boolean>(true);

  return (
    <div className="page page--gray page--main">
      <Header>
        <>
          <Logo />
          <HeaderNav />
        </>
      </Header>
      <main
        className={
          cn('page__main page__main--index', {
            'page__main--index-empty': isOffersEmpty
          })
        }
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TabsList />
          </section>
        </div>
        <div className="cities">
          <MainContent
            setIsOffersEmpty={setIsOffersEmpty}
          />
        </div>
      </main>
    </div>
  );
}

export default Main;
