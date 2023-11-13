import { ReactNode } from 'react';

import { TOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { useAppDispatch } from '../../hooks';
import { changeActiveOffer } from '../../store/offers/offers-slice';

type TOffersListProps = {
  offers: TOffer[];
};

function OffersList({ offers }: TOffersListProps): ReactNode {
  const dispatch = useAppDispatch();

  function onCardHover(id: TOffer['id']) {
    dispatch(changeActiveOffer({id}));
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          isFavoriteCard={false}
          onMouseOver={(id: TOffer['id']) => onCardHover(id)}
        />
      ))}
    </div>
  );
}

export default OffersList;
