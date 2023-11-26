import { createSlice } from '@reduxjs/toolkit';

import { TComment } from '../../types/comment';
import { LoadingStatus, NameSpace } from '../../const';
import { fetchComments, fetchPostComment } from './comments-action';
import { TLoadingStatus } from '../../types/state';

type TInitialState = {
  all: TComment[];
  submittingStatus : TLoadingStatus;
};

const initialState: TInitialState = {
  all: [],
  submittingStatus: LoadingStatus.Idle
};

const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.all = action.payload;
      })
      .addCase(fetchPostComment.pending, (state) => {
        state.submittingStatus = LoadingStatus.Loading;
      })
      .addCase(fetchPostComment.fulfilled, (state, action) => {
        state.all.push(action.payload);
        state.submittingStatus = LoadingStatus.Idle;
      })
      .addCase(fetchPostComment.rejected, (state) => {
        state.submittingStatus = LoadingStatus.Rejected;
      });
  }
});

export {commentsSlice};
