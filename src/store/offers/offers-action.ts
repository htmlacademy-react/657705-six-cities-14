import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { TOffer, TOfferPreview } from '../../types/offer';
import { APIRoute, NameSpace } from '../../const';

type TFavoriteStatus = {
  id: TOfferPreview['id'];
  status: boolean;
}

const fetchOffers = createAsyncThunk<TOfferPreview[], undefined, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

const fetchFavoritesOffers = createAsyncThunk<TOfferPreview[], undefined, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchFavoritesOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferPreview[]>(APIRoute.Favorites);
    return data;
  }
);

const fetchPostFavoriteStatus = createAsyncThunk<TOffer, TFavoriteStatus, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetchPostFavoriteStatus`,
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<TOffer>(`${APIRoute.Favorites}/${id}/${Number(!status)}`);
    return data;
  }
);

export {
  fetchOffers,
  fetchFavoritesOffers,
  fetchPostFavoriteStatus
};
