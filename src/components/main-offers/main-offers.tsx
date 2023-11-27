import Map from '../map/map';
import Offers from '../offers/offers';
import { selectOffersByCity } from '../../store/offers/offers-selector';
import { useAppSelector } from '../../hooks/useAppSelector';

function MainOffers() {
  const offers = useAppSelector(selectOffersByCity);

  return (
    <div className="cities__places-container container">
      <Offers offers={offers} />
      <div className="cities__right-section">
        <Map classBlock="cities" offers={offers} />
      </div>
    </div>
  );
}

export default MainOffers;
