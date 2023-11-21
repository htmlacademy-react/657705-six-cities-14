import { TOfferPreview } from '../../types/offer';
import getSortedByCityOffers from '../../utils/favorites';

import PlaceCard from '../place-card/place-card';

type TFavoritesList = {
  offers: TOfferPreview[];
}

function FavoritesList({offers}: TFavoritesList) {
  const sortedByCityOffers = getSortedByCityOffers(offers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
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
                  {offersList.map((offer) => <PlaceCard key={offer.id} classBlock={'favorites'} offer={offer} isFavoriteCard />)}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesList;
