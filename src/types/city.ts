import { cities } from '../const';
import { TMapLocation } from './map-location';

type TCityName = typeof cities[number];

type TCity = {
  location: TMapLocation;
  name: TCityName;
};

export type { TCity, TCityName };
