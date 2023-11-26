import { TMapIcon } from './types/map';

export const BASE_URL = 'https://14.design.pages.academy';
export const REQUEST_TIMEOUT = 5000;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

export const cities = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
] as const;

export const offersTypes = [
  'apartment', 'room', 'house', 'hotel'
] as const;

export const LoadingStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Rejected: 'rejected'
} as const;

export const StarRating = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly'
} as const;

export const SortType = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated: 'Top rated first'
} as const;

export const NameSpace = {
  Offers: 'OFFERS',
  Offer: 'OFFER',
  User: 'USER',
  Comments: 'COMMENTS',
  Favorites: 'FAVORITES'
} as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: 'not-found'
} as const;

export const APIRoute = {
  Offers: '/six-cities/offers',
  Favorites: '/six-cities/favorite',
  Login: '/six-cities/login',
  Comments: '/six-cities/comments',
  Logout: '/six-cities/logout'
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
