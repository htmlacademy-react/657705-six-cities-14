import { createReducer } from '@reduxjs/toolkit';

import { changeCity } from './action';
import { TCityName } from '../types/city';
import { TOffer } from '../types/offer';
import { offers } from '../mocks/offers';
import { CityName } from '../const';

type TInitialState = {
  city: TCityName;
  offers: TOffer[];
};

const initialState: TInitialState = {
  city: CityName.Paris,
  offers: offers.filter((offer) => offer.city.name === CityName.Paris)
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const {city} = action.payload;

    if (city === state.city) {
      return;
    }

    state.city = city;
    state.offers = offers.filter((offer) => offer.city.name === city);
  });
});

export { reducer };
