import { combineReducers } from '@reduxjs/toolkit';

import { offersSlice } from './offers/offers-slice';
import { userSlice } from './user/user-slice';
import { NameSpace } from '../const';
import { commentsSlice } from './comments/comments-slice';
import { offerSlice } from './offer/offer-slice';

const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
});

export { rootReducer };
