import { combineReducers } from '@reduxjs/toolkit';

import { offersSlice } from './offers/offers-slice';
import { userSlice } from './user/user-slice';
import { NameSpace } from '../const';
import { commentsSlice } from './comments/comments-slice';

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer
});

export {rootReducer};
