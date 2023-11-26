import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus, NameSpace } from '../../const';
import { fetchCheckAuth, fetchLogoutAuth, fetchPostLoginAction } from './user-action';
import { dropToken, saveToken } from '../../services/token';
import { TAuthStatus } from '../../types/authorization';

type TInitialState = {
  authorizationStatus: TAuthStatus;
  email: string | null;
};

const initialState: TInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        const {email} = action.payload;

        state.email = email;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchPostLoginAction.fulfilled, (state, action) => {
        const {email, token} = action.payload;

        state.email = email;
        state.authorizationStatus = AuthorizationStatus.Auth;
        saveToken(token);
      })
      .addCase(fetchLogoutAuth.fulfilled, (state) => {
        state.email = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        dropToken();
      });
  }
});

export {userSlice};
