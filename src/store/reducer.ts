import { createReducer } from '@reduxjs/toolkit';

import { changeCity } from './action';
import { TCityName } from '../types/city';
import { TOffer } from '../types/offer';
import { offers } from '../mocks/offers';

type TInitialState = {
  city: TCityName;
  offers: TOffer[];
};

const initialState: TInitialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city.name === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const {city} = action.payload;

    state.city = city;
    state.offers = offers.filter((offer) => offer.city.name === city);
  });
});

export { reducer };
