import { cities } from '../const';
import { TMapLocation } from './map';

export type TCityName = (typeof cities)[number];

export type TCity = {
  location: TMapLocation;
  name: TCityName;
};
