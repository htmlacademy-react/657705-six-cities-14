import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CityName, LoadingStatus, NameSpace } from '../../const';
import { TCityName } from '../../types/city';
import { TOffer, TOfferPreview } from '../../types/offer';
import { fetchFavoritesOffers, fetchOffers, fetchPostFavoriteStatus } from './offers-action';
import { TLoadingStatus } from '../../types/state';

type TInitialState = {
  city: TCityName;
  data: TOfferPreview[];
  favorites: TOfferPreview[];
  active: TOfferPreview['id'] | null;
  loadingStatus: TLoadingStatus;
  loadingFavoritesStatus: TLoadingStatus;
};

const initialState: TInitialState = {
  city: CityName.Paris,
  data: [],
  favorites: [],
  active: null,
  loadingStatus: LoadingStatus.Idle,
  loadingFavoritesStatus: LoadingStatus.Idle,
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
      state.favorites = [];
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
      })
      .addCase(fetchFavoritesOffers.pending, (state) => {
        state.loadingFavoritesStatus = LoadingStatus.Loading;
      })
      .addCase(fetchFavoritesOffers.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.loadingFavoritesStatus = LoadingStatus.Idle;
      })
      .addCase(fetchPostFavoriteStatus.fulfilled, (state, action) => {
        const {id, isFavorite} = action.payload;

        state.data = state.data.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              isFavorite
            };
          }

          return item;
        });

        if (isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => item.id !== id);
        }
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
