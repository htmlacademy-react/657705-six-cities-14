import { Offers } from '../../types/offer';
import OfferItem from '../offer-item/offer-item';

type OffersListProps = {
  offers: Offers;
};

function OfferList({ offers }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferItem key={offer.id} data={offer} />)}
    </div>
  );
}

export default OfferList;
