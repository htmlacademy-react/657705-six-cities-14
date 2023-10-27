import { useEffect, useState } from 'react';
import { TOffer, TOffers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: TOffers;
};

function OffersList({ offers }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | number>();

  // useEffect(() => {
  //   if (activeCard) {
  //     // FIXME: Не забыть убрать
  //     // eslint-disable-next-line no-console
  //     console.log('Активная карточка - ', activeCard);
  //   }
  // }, [activeCard]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          isFavoriteCard={false}
          onMouseOver={(activeOffer: TOffer) => setActiveCard(activeOffer.id)}
        />
      ))}
    </div>
  );
}

export default OffersList;
