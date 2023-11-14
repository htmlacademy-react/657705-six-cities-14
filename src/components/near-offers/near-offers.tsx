import { ReactNode } from 'react';

import PlaceCard from '../place-card/place-card';
import { TOfferPreview } from '../../types/offer';

type TNearOffersProps = {
  nearOffers: TOfferPreview[];
}

function NearOffers({ nearOffers}: TNearOffersProps): ReactNode {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearOffers.map((offer) => (
            <PlaceCard
              key={offer.id}
              classBlock='near-places'
              offer={offer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NearOffers;
