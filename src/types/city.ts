import { citys } from '../const';
import { TMapLocation } from './map-location';

type TCityName = typeof citys[number];

type TCity = {
  location: TMapLocation;
  name: TCityName;
};

export type { TCity, TCityName };
