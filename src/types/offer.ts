import { TCity } from './city';
import { THost } from './host';
import { TMapLocation } from './map-location';
import { offersTypes } from '../const';

type TOfferType = typeof offersTypes[number];

type TOfferPreview = {
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

type TOffer = TOfferPreview & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}

export type { TOffer, TOfferPreview };
