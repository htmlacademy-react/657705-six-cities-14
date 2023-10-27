import { TCity } from './city';
import { THost } from './host';
import { TMapLocation } from './map-location';
import { offersTypes } from '../const';

type TOfferType = typeof offersTypes[number];

type TOffer = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TMapLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: TOfferType;
};

export type { TOffer };
