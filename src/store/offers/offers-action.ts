import { createAsyncThunk } from '@reduxjs/toolkit';

import { State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { TOffer } from '../../types/offer';
import { APIRoute, NameSpace } from '../../const';

const fetchOffers = createAsyncThunk<TOffer[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    return data;
  }
);

export {fetchOffers};
