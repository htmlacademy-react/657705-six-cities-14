import { AuthorizationStatus } from '../const';

export type TAuthData = {
  email: string;
  password: string;
};

export type TAuthStatus =
  (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
