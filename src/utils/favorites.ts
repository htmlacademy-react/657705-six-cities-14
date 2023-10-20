import { Offer, Offers } from '../types/offer';

function getFavoritesListData(offers: Offers) {
  const cityList: {
    [key: string]: Offer[];
  } = {};

  const favoritesList = offers.filter((item) => item.isFavorite);

  favoritesList.forEach((item) => {
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

export default getFavoritesListData;
