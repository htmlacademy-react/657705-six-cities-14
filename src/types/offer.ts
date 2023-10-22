type TCityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

type TTypeName = 'apartment' | 'room' | 'house' | 'hotel';

type THost = {
  avatarUrl: string;
  id: number | string; // FIXME: string для моков, потом только number
  isPro: boolean;
  name: string;
};

type TMapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};


type TCity = {
  location: TMapLocation;
  name: TCityName;
};

type TOffer = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  id: number | string; // FIXME: string для моков, потом только number
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TMapLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: TTypeName;
};

type TOffers = TOffer[];

export type { TCityName, TOffer, TOffers, TTypeName };
