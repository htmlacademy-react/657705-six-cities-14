import { TCity } from './city';
import { THost } from './host';
import { offersTypes } from '../const';
import { TMapLocation } from './map';

type TOfferType = typeof offersTypes[number];

export type TOfferPreview = {
  id: string;
  title: string;
  type: TOfferType;
  price: number;
  city: TCity;
  location: TMapLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type TOffer = TOfferPreview & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}
