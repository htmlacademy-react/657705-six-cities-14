import { useEffect } from 'react';

import {
  fetchFavoritesOffers,
  fetchOffers,
} from '../../store/offers/offers-action';
import {
  selectOffersByCity,
  selectOffersLoadingStatus,
} from '../../store/offers/offers-selector';
import Loading from '../loading/loading';
import MainEmpty from '../main-empty/main-empty';
import MainOffers from '../main-offers/main-offers';
import { dropOffers } from '../../store/offers/offers-slice';
import { selectAuthStatus } from '../../store/user/user-selector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

type TMainContentProps = {
  setIsOffersEmpty: (state: boolean) => void;
};

function MainContent({ setIsOffersEmpty }: TMainContentProps) {
  const dispatch = useAppDispatch();

  const offersByCity = useAppSelector(selectOffersByCity);
  const offersLoadingStatus = useAppSelector(selectOffersLoadingStatus);
  const authStatus = useAppSelector(selectAuthStatus);

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(fetchFavoritesOffers());
    return () => {
      dispatch(dropOffers());
    };
  }, [dispatch, authStatus]);

  useEffect(() => {
    setIsOffersEmpty(offersByCity.length === 0);
  }, [offersByCity, setIsOffersEmpty]);

  return (
    <Loading loadingStatus={offersLoadingStatus}>
      {offersByCity.length === 0 ? <MainEmpty /> : <MainOffers />}
    </Loading>
  );
}

export default MainContent;
