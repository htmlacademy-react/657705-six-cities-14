import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { CityName, NameSpace } from '../../const';
import { TCityName } from '../../types/city';
import { TOffer, TOfferPreview } from '../../types/offer';
import { fetchOffers, fetchOffer, fetchNearOffers } from './offers-action';

type TInitialState = {
  city: TCityName;
  all: TOfferPreview[];
  active: TOfferPreview['id'] | null;
  current: TOffer | null;
  loading: boolean;
  near: TOfferPreview[];
};

const initialState: TInitialState = {
  city: CityName.Paris,
  all: [],
  active: null,
  current: null,
  near: [],
  loading: false
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
    dropOffer: (state) => {
      state.current = null;
      state.near = [];
    },
    dropOffers: (state) => {
      state.all = [];
      state.active = null;
    },
    dropActiveOffer: (state) => {
      state.active = null;
    }
  },
  //TODO: Сделать матчер
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.all = action.payload;
        state.loading = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        const {error} = action;

        state.loading = false;
        toast.error(error.message);
      })
      .addCase(fetchOffer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.current = action.payload;
        state.loading = false;
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        const {error} = action;

        state.loading = false;
        toast.error(error.message);
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.near = action.payload.slice(0, 3);
      })
      .addCase(fetchNearOffers.rejected, (_state, action) => {
        const {error} = action;

        toast.error(error.message);
      });
  }
});

export {offersSlice};
export const {
  changeCity,
  changeActiveOffer,
  dropOffer,
  dropOffers,
  dropActiveOffer
} = offersSlice.actions;
