import { useAppSelector } from '../../hooks';
import getSortedByCityOffers from '../../utils/favorites';

import PlaceCard from '../place-card/place-card';


function FavoritesList(): JSX.Element {
  const favoritesOffers = useAppSelector((state) => state.offers);
  const sortedByCityOffers = getSortedByCityOffers(favoritesOffers);

  return (
    <ul className="favorites__list">
      {sortedByCityOffers.map(({ name, offersList, id }) => (
        <li key={id} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersList.map((offer) => <PlaceCard key={offer.id} offer={offer} isFavoriteCard />)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
