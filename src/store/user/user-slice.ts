import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationStatus, NameSpace } from '../../const';
import { TAuthorizationStatus } from '../../types/authorization';
import { fetchCheckAuth, fetchPostLoginAction } from './user-action';
import { saveToken } from '../../services/token';
import { toast } from 'react-toastify';

type TInitialState = {
  authorizationStatus: TAuthorizationStatus;
  email: string | null;
};

const initialState: TInitialState = {
  authorizationStatus:  AuthorizationStatus.Unknown,
  email: null
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
      })
      .addCase(fetchPostLoginAction.fulfilled, (state, action) => {
        const {email, token} = action.payload;

        state.email = email;
        saveToken(token);
      })
      .addCase(fetchPostLoginAction.rejected, (state, action) => {
        console.log(action);
        toast.error(action.error.message);
      });
  }
});

export {userSlice};
