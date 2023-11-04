import { TMapIcon } from './types/map';

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer'
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

export const citys = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
] as const;

export const offersTypes = [
  'apartment', 'room', 'house', 'hotel'
] as const;

export const MapIconConfig: TMapIcon = {
  Default: {
    url: '/img/pin.svg',
    width: 38,
    height: 49,
    anchorX: 19,
    anchorY: 49
  },
  Active: {
    url: '/img/pin-active.svg',
    width: 38,
    height: 49,
    anchorX: 19,
    anchorY: 49
  }
} as const;
