import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/offers/offers-action';
import { selectOffersByCity, selectOffersLoadingStatus } from '../../store/offers/offers-selector';
import Loading from '../loading/loading';
import MainEmpty from '../main-empty/main-empty';
import MainOffers from '../main-offers/main-offers';
import { dropOffers } from '../../store/offers/offers-slice';

type TMainContentProps = {
  setIsOffersEmpty: (state: boolean) => void;
}

function MainContent({setIsOffersEmpty}: TMainContentProps) {
  const dispatch = useAppDispatch();

  const offersByCity = useAppSelector(selectOffersByCity);
  const offersLoadingStatus = useAppSelector(selectOffersLoadingStatus);

  useEffect(() => {
    dispatch(fetchOffers());
    return () => {
      dispatch(dropOffers());
    };
  }, [dispatch]);

  useEffect(() => {
    if (offersByCity.length !== 0) {
      setIsOffersEmpty(false);
    } else {
      setIsOffersEmpty(true);
    }
  }, [offersByCity, setIsOffersEmpty]);

  return (
    <Loading loadingStatus={offersLoadingStatus}>
      {
        offersByCity.length === 0
          ? <MainEmpty />
          : <MainOffers />
      }
    </Loading>
  );
}

export default MainContent;
