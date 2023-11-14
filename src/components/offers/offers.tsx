import { useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks';
import { selectCity, selectOffersByCity } from '../../store/offers/offers-selector';
import OffersList from '../offers-list/offers-list';
import SortList from '../sort-list/sort-list';
import { TOfferPreview } from '../../types/offer';
import { TSortType } from '../../types/sort';
import { sortedOffersBy } from '../../utils/offer';

function Offers() {
  const [sortedOffers, setSortedOffers] = useState<TOfferPreview[]>([]);

  const city = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffersByCity);

  useEffect(() => {
    setSortedOffers(offers);
  }, [offers]);

  const handleTypeChange = (activeType: TSortType) => {
    setSortedOffers((prevState) => {
      if (activeType !== 'Popular') {
        return sortedOffersBy[activeType](prevState);
      }

      return offers;
    });
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <SortList
        offers={offers}
        onChange={handleTypeChange}
      />
      <OffersList
        offers={sortedOffers}
      />
    </section>
  );
}

export default Offers;
