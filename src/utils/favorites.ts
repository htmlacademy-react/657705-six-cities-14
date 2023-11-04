import { TOffer } from '../types/offer';

function getSortedByCityOffers(offers: TOffer[]) {
  const cityList: {
    [key: string]: TOffer[];
  } = {};

  const favoritesOffers = offers.filter((item) => item.isFavorite);

  favoritesOffers.forEach((item) => {
    if (!cityList[item.city.name]) {
      cityList[item.city.name] = [];
    }

    cityList[item.city.name].push(item);
  });

  return Object.keys(cityList).map((cityName) => ({
    id: (Date.now() + Math.random()).toString(36),
    name: cityName,
    offersList: cityList[cityName]
  }));
}

export default getSortedByCityOffers;
