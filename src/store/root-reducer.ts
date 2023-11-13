import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './offers/offers-slice';
import { userSlice } from './user/user-slice';
import { NameSpace } from '../const';

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.User]: userSlice.reducer
});

export {rootReducer};
