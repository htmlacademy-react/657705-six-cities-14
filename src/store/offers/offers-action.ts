import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { TOffer, TOfferPreview } from '../../types/offer';
import { APIRoute, NameSpace } from '../../const';

const fetchOffers = createAsyncThunk<TOfferPreview[], undefined, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

const fetchOffer = createAsyncThunk<TOffer, TOffer['id'], {
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffer`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export {fetchOffers, fetchOffer};
