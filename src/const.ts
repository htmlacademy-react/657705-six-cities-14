import { TMapIcon } from './types/map-icon';

//FIXME: Разбить на разные файлы?

export const BASE_URL = 'https://14.design.pages.academy';
export const REQUEST_TIMEOUT = 5000;

export const cities = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
] as const;

export const offersTypes = [
  'apartment', 'room', 'house', 'hotel'
] as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer'
} as const;

export const APIRoute = {
  Offers: '/six-cities/offers',
  Login: '/six-cities/login'
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

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

export const CityName = Object.fromEntries(
  cities.map((city) => [city, city])
) as Record<typeof cities[number], typeof cities[number]>;
