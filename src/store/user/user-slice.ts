import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus, NameSpace } from '../../const';
import { TAuthorizationStatus } from '../../types/authorization';
import { fetchCheckAuth } from './user-action';

type TInitialState = {
  authorizationStatus: TAuthorizationStatus;
};

const initialState: TInitialState = {
  authorizationStatus:  AuthorizationStatus.Unknown
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchCheckAuth.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export {userSlice};
