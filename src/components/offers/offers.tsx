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
import { SortType } from '../../const';

type TOffersProps = {
  offers: TOfferPreview[];
};

function Offers({ offers }: TOffersProps) {
  const [sortedOffers, setSortedOffers] = useState<TOfferPreview[]>([]);
  const [currentSortType, setCurrentSortType] = useState<TSortType>(
    SortType.Popular
  );
  const cityChangedRef = useRef<boolean>(false);

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);

  useEffect(() => {
    cityChangedRef.current = true;
    setCurrentSortType(SortType.Popular);
  }, [city]);

  useEffect(() => {
    if (cityChangedRef.current) {
      setSortedOffers(offers);
      cityChangedRef.current = false;
    } else {
      const sorted =
        currentSortType === SortType.Popular
          ? offers
          : sortedOffersBy[currentSortType](offers);
      setSortedOffers(sorted);
    }
    dispatch(dropActiveOffer());
  }, [offers, currentSortType, dispatch]);

  const handleTypeChange = (activeType: TSortType) => {
    setCurrentSortType(activeType);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} place{getPluralEnding(offers.length)} to stay in {city}
      </b>
      <SortList
        city={city}
        currentSortType={currentSortType}
        onChange={handleTypeChange}
      />
      <OffersList offers={sortedOffers} />
    </section>
  );
}

export default Offers;
