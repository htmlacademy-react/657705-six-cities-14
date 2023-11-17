import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectOffer = (state: State) => state[NameSpace.Offer].data;

const selectNearestOffers = (state: State) => state[NameSpace.Offer].nearestOffers;

const selectOfferLoadingStatus = (state: State) => state[NameSpace.Offer].loadingStatus;

const selectNearestOffersLoadingStatus = (state: State) => state[NameSpace.Offer].loadingNearesOffersStatus;

export {
  selectOffer,
  selectNearestOffers,
  selectOfferLoadingStatus,
  selectNearestOffersLoadingStatus
};
