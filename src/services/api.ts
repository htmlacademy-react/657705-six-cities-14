import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

import { AppRoute, BASE_URL, REQUEST_TIMEOUT } from '../const';
import { getToken } from './token';
import browserHistory from '../browser-history';
import { toast } from 'react-toastify';

type DetailMessageType = {
  type: string;
  message: string;
};

function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response?.status === 404) {
        browserHistory.push(AppRoute.NotFound);
      }

      if (error.response?.status !== 401) {
        toast.error(error.message);
      }

      throw error;
    }
  );

  return api;
}

export { createApi };
