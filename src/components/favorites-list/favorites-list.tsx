import { TOffer } from '../../types/offer';
import getFavoritesListData from '../../utils/favorites';

import PlaceCard from '../place-card/place-card';

type FavoritesListProps = {
  offers: TOffer[];
};

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

  const favorites = getFavoritesListData(offers);

  return (
    <ul className="favorites__list">
      {favorites.map(({ name, offersList, id }) => (
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
