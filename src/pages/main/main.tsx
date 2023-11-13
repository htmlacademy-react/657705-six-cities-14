import cn from 'classnames';
import { useEffect } from 'react';

import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';

import { useAppDispatch, useAppSelector } from '../../hooks';
import TabsList from '../../components/tabs-list/tabs-list';
import MainContent from '../../components/main-content/main-content';
import MainEmpty from '../../components/main-empty/main-empty';
import { selectOffersByCity } from '../../store/offers/offers-selector';
import { fetchOffers } from '../../store/offers/offers-action';
import { NameSpace } from '../../const';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const city = useAppSelector((state) => state[NameSpace.Offers].city);
  const cityOffers = useAppSelector(selectOffersByCity);

  const offersIsEmpty: boolean = cityOffers.length === 0;

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

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
            'page__main--index-empty': offersIsEmpty
          })
        }
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TabsList cityName={city} />
          </section>
        </div>
        <div className="cities">
          {
            offersIsEmpty
              ? <MainEmpty city={city} />
              : <MainContent city={city} offers={cityOffers} />
          }
        </div>
      </main>
    </div>
  );
}

export default Main;
