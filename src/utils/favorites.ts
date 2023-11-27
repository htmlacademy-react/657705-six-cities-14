import { TOfferPreview } from '../types/offer';

function getSortedByCityOffers(offers: TOfferPreview[]) {
  const cityList: {
    [key: string]: TOfferPreview[];
  } = {};

  offers.forEach((item) => {
    if (!cityList[item.city.name]) {
      cityList[item.city.name] = [];
    }

    cityList[item.city.name].push(item);
  });

  return Object.keys(cityList).map((cityName) => ({
    id: (Date.now() + Math.random()).toString(36),
    name: cityName,
    offersList: cityList[cityName],
  }));
}

export default getSortedByCityOffers;
