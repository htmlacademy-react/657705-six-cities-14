import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { TOffer, TOfferPreview } from '../../types/offer';
import { APIRoute, NameSpace } from '../../const';

const fetchOffer = createAsyncThunk<TOffer, TOffer['id'], {
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchOffer`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

const fetchNearestOffers = createAsyncThunk<TOfferPreview[], TOffer['id'], {
  extra: AxiosInstance;
}>(
  `${NameSpace.Offer}/fetchNearestOffers`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TOfferPreview[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export {fetchOffer, fetchNearestOffers};
