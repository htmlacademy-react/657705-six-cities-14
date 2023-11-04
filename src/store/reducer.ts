import { createReducer } from '@reduxjs/toolkit';

import { changeCity } from './action';
import { TCityName } from '../types/city';
import { TOffer } from '../types/offer';
import { offers } from '../mocks/offers';
import { CityName } from '../const';

type TInitialState = {
  city: TCityName;
  cityOffers: TOffer[];
  offers: TOffer[];
};

const initialState: TInitialState = {
  city: CityName.Paris,
  cityOffers: offers.filter((offer) => offer.city.name === CityName.Paris),
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const {city} = action.payload;

    if (city === state.city) {
      return;
    }

    state.city = city;
    state.cityOffers = offers.filter((offer) => offer.city.name === city);
  });
});

export { reducer };
