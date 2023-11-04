import { useState } from 'react';

import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';

import { useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offer';
import TabsList from '../../components/tabs-list/tabs-list';

function Main(): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<TOffer | undefined>();

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  function handleCardHover(id: number) {
    const currentOffer = offers.find((offer) => id === offer.id);

    if (!currentOffer) {
      return;
    }

    setHoveredOffer(currentOffer);
  }

  return (
    <div className="page page--gray page--main">
      <Header>
        <>
          <Logo />
          <HeaderNav />
        </>
      </Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <TabsList cityName={city} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/* places__options--opened */}
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList
                offers={offers}
                onCardHover={handleCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                hoveredOffer={hoveredOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
