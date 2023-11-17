import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';

import { APIRoute, NameSpace } from '../../const';
import { TAuthData } from '../../types/auth-data';
import { TUserData } from '../../types/user-data';

type TError = {
  message?: string;
  statusCode?: number;
  data?: unknown; // FIXME: Плохо?
}

const fetchCheckAuth = createAsyncThunk<TUserData, undefined, {
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/fetchCheckAuth`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserData>(APIRoute.Login);
    return data;
  }
);

const fetchPostLoginAction = createAsyncThunk<TUserData, TAuthData, {
  extra: AxiosInstance;
  rejectValue: TError;
}>(
  `${NameSpace.User}/fetchPostLoginAction`,
  async ({email, password}, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
      return data;
    } catch (err) {
      const axiosError = err as AxiosError;

      return rejectWithValue({
        message: axiosError.message,
        statusCode: axiosError.response?.status,
        data: axiosError.response?.data
      });
    }
  }
);

export {fetchCheckAuth, fetchPostLoginAction};
