import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { TAuthData } from '../../types/auth-data';
import { TUserData } from '../../types/user-data';


const fetchCheckAuth = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/fetchCheckAuth`,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

const fetchPostLoginAction = createAsyncThunk<TUserData, TAuthData, {
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/fetchPostLoginAction`,
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    return data;
  }
);

export {fetchCheckAuth, fetchPostLoginAction};
