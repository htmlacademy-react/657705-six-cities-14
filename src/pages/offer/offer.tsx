import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import HeaderNav from '../../components/header-nav/header-nav';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import OfferContent from '../../components/offer-content/offer-content';
import Loading from '../../components/loading/loading';
import {
  selectOffer,
  selectOfferLoadingStatus,
} from '../../store/offer/offer-selector';
import { fetchOffer } from '../../store/offer/offer-action';
import { dropOffer } from '../../store/offer/offer-slice';
import { fetchFavoritesOffers } from '../../store/offers/offers-action';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

function Offer() {
  const dispatch = useAppDispatch();

  const { offerId } = useParams();
  const offer = useAppSelector(selectOffer);
  const offerLoadingStatus = useAppSelector(selectOfferLoadingStatus);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchFavoritesOffers());
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  return (
    <div className="page">
      <Header>
        <>
          <Logo />
          <HeaderNav />
        </>
      </Header>
      <main className="page__main page__main--offer">
        <Loading loadingStatus={offerLoadingStatus}>
          {offer && <OfferContent offer={offer} />}
        </Loading>
      </main>
    </div>
  );
}

export default Offer;
