import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { TOfferPreview } from '../../types/offer';
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

export {fetchOffers};
