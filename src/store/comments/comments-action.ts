import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute, NameSpace } from '../../const';
import { TComment } from '../../types/comment';
import { TOffer } from '../../types/offer';
import { TCommentData } from '../../types/comment-data';

const fetchComments = createAsyncThunk<TComment[], TOffer['id'], {
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetchComments`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

const fetchPostComment = createAsyncThunk<TComment, TCommentData, {
  extra: AxiosInstance;
}>(
  `${NameSpace.Comments}/fetchPostComment`,
  async ({comment, offerId, rating}, {extra: api}) => {
    const {data} = await api.post<TComment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  }
);

export {
  fetchComments,
  fetchPostComment
};
