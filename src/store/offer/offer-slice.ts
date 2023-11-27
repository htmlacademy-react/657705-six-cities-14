import { createSlice } from '@reduxjs/toolkit';

import { LoadingStatus, NameSpace } from '../../const';
import { TOffer, TOfferPreview } from '../../types/offer';
import { fetchNearestOffers, fetchOffer } from './offer-action';
import { fetchPostFavoriteStatus } from '../offers/offers-action';
import { TLoadingStatus } from '../../types/state';

type TInitialState = {
  data: TOffer | null;
  nearestOffers: TOfferPreview[];
  loadingStatus: TLoadingStatus;
  loadingNearesOffersStatus: TLoadingStatus;
};

const initialState: TInitialState = {
  data: null,
  nearestOffers: [],
  loadingStatus: LoadingStatus.Idle,
  loadingNearesOffersStatus: LoadingStatus.Idle,
};

const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.data = null;
      state.nearestOffers = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loadingStatus = LoadingStatus.Idle;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.loadingStatus = LoadingStatus.Rejected;
      })
      .addCase(fetchNearestOffers.pending, (state) => {
        state.loadingNearesOffersStatus = LoadingStatus.Loading;
      })
      .addCase(fetchNearestOffers.fulfilled, (state, action) => {
        state.nearestOffers = action.payload.slice(0, 3);
        state.loadingNearesOffersStatus = LoadingStatus.Idle;
      })
      .addCase(fetchNearestOffers.rejected, (state) => {
        state.loadingNearesOffersStatus = LoadingStatus.Rejected;
      })
      .addCase(fetchPostFavoriteStatus.fulfilled, (state, action) => {
        const { isFavorite } = action.payload;

        if (state.data) {
          state.data.isFavorite = isFavorite;
        }
      });
  },
});

export { offerSlice };
export const { dropOffer } = offerSlice.actions;
