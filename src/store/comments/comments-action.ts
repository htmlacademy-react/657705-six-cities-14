import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute, NameSpace } from '../../const';
import { TComment } from '../../types/comment';
import { TOffer } from '../../types/offer';

const fetchComments = createAsyncThunk<TComment[], TOffer['id'], {
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetchComments`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export {fetchComments};
