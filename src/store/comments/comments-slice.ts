import { createSlice } from '@reduxjs/toolkit';

import { TComment } from '../../types/comment';
import { NameSpace } from '../../const';
import { fetchComments, fetchPostComment } from './comments-action';

type TInitialState = {
  all: TComment[];
  submittingStatus : 'idle' | 'loading' | 'rejected';
};

const initialState: TInitialState = {
  all: [],
  submittingStatus: 'idle'
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
        state.submittingStatus = 'loading';
      })
      .addCase(fetchPostComment.fulfilled, (state, action) => {
        state.all.push(action.payload);
        state.submittingStatus = 'idle';
      })
      .addCase(fetchPostComment.rejected, (state) => {
        state.submittingStatus = 'rejected';
      });
  }
});

export {commentsSlice};
