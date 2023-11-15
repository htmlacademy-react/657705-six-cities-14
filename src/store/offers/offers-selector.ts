import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

const selectCity = (state: State) => state[NameSpace.Offers].city;

const selectDataLoading = (state: State) => state[NameSpace.Offers].loading;

const selectActiveOffer = (state: State) => state[NameSpace.Offers].active;

const selectOffer = (state: State) => state[NameSpace.Offers].current;

const selectNearOffers = (state: State) => state[NameSpace.Offers].near;

const selectOffersByCity = createSelector(
  [(state: State) => state[NameSpace.Offers].city, (state: State) => state[NameSpace.Offers].all],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export {
  selectOffersByCity,
  selectCity,
  selectDataLoading,
  selectActiveOffer,
  selectOffer,
  selectNearOffers
};
