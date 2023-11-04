import { useState } from 'react';

import { TCityName } from '../../types/city';
import { TOffer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';

type TMainContentProps = {
  city: TCityName;
  offers: TOffer[];
}

function MainContent({city, offers}: TMainContentProps): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<TOffer | undefined>();

  function handleCardHover(id: number) {
    const currentOffer = offers.find((offer) => id === offer.id);

    if (!currentOffer) {
      return;
    }

    setHoveredOffer(currentOffer);
  }

  return (
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
  );
}

export default MainContent;