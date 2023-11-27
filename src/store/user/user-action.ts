import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { APIRoute, NameSpace } from '../../const';
import { TUserData } from '../../types/user-data';
import { TAuthData } from '../../types/authorization';

const fetchCheckAuth = createAsyncThunk<
  TUserData,
  undefined,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.User}/fetchCheckAuth`, async (_arg, { extra: api }) => {
  const { data } = await api.get<TUserData>(APIRoute.Login);
  return data;
});

const fetchPostLoginAction = createAsyncThunk<
  TUserData,
  TAuthData,
  {
    extra: AxiosInstance;
  }
>(
  `${NameSpace.User}/fetchPostLoginAction`,
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<TUserData>(APIRoute.Login, {
      email,
      password,
    });
    return data;
  }
);

const fetchLogoutAuth = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>(`${NameSpace.User}/fetchLogoutAuth`, async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
});

export { fetchCheckAuth, fetchPostLoginAction, fetchLogoutAuth };
