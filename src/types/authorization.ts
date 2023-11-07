import { AuthorizationStatus } from '../const';

export type TAuthorizationStatus = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
