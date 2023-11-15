import { createSlice } from '@reduxjs/toolkit';
import { TComment } from '../../types/comment';
import { NameSpace } from '../../const';
import { fetchComments } from './comments-action';

type TInitialState = {
  all: TComment[];
};

const initialState: TInitialState = {
  all: []
};

const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.all = action.payload;
      });
  }
});

export {commentsSlice};
