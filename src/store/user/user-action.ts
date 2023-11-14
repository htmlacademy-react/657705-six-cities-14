import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { State } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';


const fetchCheckAuth = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  }
);

export {fetchCheckAuth};
