import { ReactNode } from 'react';

import { TOfferPreview } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type TOffersListProps = {
  offers: TOfferPreview[];
};

function OffersList({ offers }: TOffersListProps): ReactNode {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          classBlock='cities'
          onMouseOver
        />
      ))}
    </div>
  );
}

export default OffersList;
