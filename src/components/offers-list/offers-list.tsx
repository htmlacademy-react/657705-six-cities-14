import { TOffer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: TOffer[];
  onCardHover: (id: string) => void;
};

function OffersList({ offers, onCardHover }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          isFavoriteCard={false}
          onMouseOver={(id: string) => onCardHover(id)}
        />
      ))}
    </div>
  );
}

export default OffersList;
