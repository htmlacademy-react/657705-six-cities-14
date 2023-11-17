import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CityName, LoadingStatus, NameSpace } from '../../const';
import { TCityName } from '../../types/city';
import { TOffer, TOfferPreview } from '../../types/offer';
import { fetchOffers } from './offers-action';

type TInitialState = {
  city: TCityName;
  data: TOfferPreview[];
  active: TOfferPreview['id'] | null;
  loadingStatus: typeof LoadingStatus[keyof typeof LoadingStatus];
};

const initialState: TInitialState = {
  city: CityName.Paris,
  data: [],
  active: null,
  loadingStatus: LoadingStatus.Idle
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ city: TCityName }>) => {
      const {city} = action.payload;
      state.city = city;
    },
    changeActiveOffer: (state, action: PayloadAction<{id: TOffer['id'] | null}>) => {
      const {id} = action.payload;
      state.active = id;
    },
    dropOffers: (state) => {
      state.data = [];
      state.active = null;
    },
    dropActiveOffer: (state) => {
      state.active = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingStatus = LoadingStatus.Idle;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.loadingStatus = LoadingStatus.Rejected;
      });
  }
});

export {offersSlice};
export const {
  changeCity,
  changeActiveOffer,
  dropOffers,
  dropActiveOffer
} = offersSlice.actions;
