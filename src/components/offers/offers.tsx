import { useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCity } from '../../store/offers/offers-selector';
import OffersList from '../offers-list/offers-list';
import SortList from '../sort-list/sort-list';
import { TOfferPreview } from '../../types/offer';
import { TSortType } from '../../types/sort';
import { sortedOffersBy } from '../../utils/offer';
import { getPluralEnding } from '../../utils/utils';
import { dropActiveOffer } from '../../store/offers/offers-slice';

type TOffersProps = {
  offers: TOfferPreview[];
}

function Offers({offers}: TOffersProps) {
  const [sortedOffers, setSortedOffers] = useState<TOfferPreview[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);

  useEffect(() => {
    setSortedOffers(offers);
    dispatch(dropActiveOffer());

    if (sectionRef.current) {
      sectionRef.current.scrollTo(0, 0);
    }

  }, [offers, dispatch]);

  const handleTypeChange = (activeType: TSortType) => {
    setSortedOffers((prevState) => {
      if (activeType !== 'Popular') {
        return sortedOffersBy[activeType](prevState);
      }

      return offers;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="cities__places places"
    >
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} place{getPluralEnding(offers.length)} to stay in {city}</b>
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
