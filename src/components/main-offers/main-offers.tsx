import { ReactNode } from 'react';

import Map from '../map/map';
import Offers from '../offers/offers';

function MainOffers(): ReactNode {
  return (
    <div className="cities__places-container container">
      <Offers />
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}

export default MainOffers;
