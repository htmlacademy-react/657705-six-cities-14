import { TOfferPreview } from '../types/offer';
import { TSortedKeys } from '../types/sort';

//FIXME: Убрать в константы?
const STARS_COUNT = 5;

function getRatingWidth(rating: number) {
  return `${(100 * Math.round(rating)) / STARS_COUNT}%`;
}

function sortByRating(a: TOfferPreview, b: TOfferPreview) {
  return b.rating - a.rating;
}

function sortLowToHigh(a: TOfferPreview, b: TOfferPreview) {
  return a.price - b.price;
}

function sortHighToLow(a: TOfferPreview, b: TOfferPreview) {
  return b.price - a.price;
}

const sortedOffersBy: Record<TSortedKeys, (offers: TOfferPreview[]) => TOfferPreview[]> = {
  HighToLow: (offers: TOfferPreview[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: TOfferPreview[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: TOfferPreview[]) => offers.slice().sort(sortByRating)
};

export {sortedOffersBy, getRatingWidth};
