import { createReducer } from '@reduxjs/toolkit';

import { changeCity, loadOffers, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { TCityName } from '../types/city';
import { TOffer } from '../types/offer';
import { AuthorizationStatus, CityName } from '../const';
import { TAuthorizationStatus } from '../types/authorization';

type TInitialState = {
  city: TCityName;
  offers: TOffer[];
  authorizationStatus: TAuthorizationStatus;
  isOffersDataLoading: boolean;
};

const initialState: TInitialState = {
  city: CityName.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;

      if (city === state.city) {
        return;
      }

      state.city = city;
    })

    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })

    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
