import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/offers/offers-action';
import { selectCity, selectOffersByCity } from '../../store/offers/offers-selector';
import Loading from '../loading/loading';
import MainEmpty from '../main-empty/main-empty';
import MainOffers from '../main-offers/main-offers';

type TMainContentProps = {
  setIsOffersEmpty: (state: boolean) => void;
}

function MainContent({setIsOffersEmpty}: TMainContentProps) {
  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const offersByCity = useAppSelector(selectOffersByCity);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  useEffect(() => {
    if (offersByCity.length !== 0) {
      setIsOffersEmpty(false);
    } else {
      setIsOffersEmpty(true);
    }
  }, [offersByCity, setIsOffersEmpty]);

  return (
    <Loading>
      {
        offersByCity.length === 0
          ? <MainEmpty city={city} />
          : <MainOffers city={city} offers={offersByCity} />
      }
    </Loading>
  );
}

export default MainContent;
