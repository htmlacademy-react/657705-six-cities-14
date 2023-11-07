import { createSelector } from '@reduxjs/toolkit';
import { State } from '../types/state';

const selectOffersByCity = createSelector(
  [(state: State) => state.city, (state: State) => state.offers],
  (city, offers) => offers.filter((offer) => offer.city.name === city)
);

export {selectOffersByCity};
