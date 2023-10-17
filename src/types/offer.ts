type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

type TypeName = 'apartment' | 'room' | 'house' | 'hotel';

type Host = {
  avatarUrl: string;
  id: number | string; // FIXME: string для моков, потом только number
  isPro: boolean;
  name: string;
};

type MapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};


type City = {
  location: MapLocation;
  name: CityName;
};

type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number | string; // FIXME: string для моков, потом только number
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: MapLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: TypeName;
};

type Offers = Offer[];

export type { Offer, Offers, CityName, TypeName };
