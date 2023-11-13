import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { CityName, NameSpace } from '../../const';
import { TCityName } from '../../types/city';
import { TOffer } from '../../types/offer';
import { fetchOffers } from './offers-action';

type TInitialState = {
  city: TCityName;
  data: TOffer[];
  loading: boolean;
};

const initialState: TInitialState = {
  city: CityName.Paris,
  data: [],
  loading: false
};

const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ city: TCityName }>) => {
      const {city} = action.payload;
      state.city = city;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        const {error} = action;

        state.loading = false;
        toast.error(error.message);
      });
  }
});

export {offersSlice};
export const {changeCity} = offersSlice.actions;
