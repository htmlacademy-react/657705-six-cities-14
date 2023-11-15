import { ReactNode, useEffect } from 'react';
import cn from 'classnames';

import { TOffer } from '../../types/offer';
import { getRatingWidth } from '../../utils/offer';
import { capitalizeFirstCharacter, getPluralEnding } from '../../utils/utils';
import NearOffers from '../near-offers/near-offers';
import Map from '../map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectNearOffers } from '../../store/offers/offers-selector';
import { fetchNearOffers } from '../../store/offers/offers-action';
import Review from '../review/review';

type TOfferContentProps = {
  offer: TOffer;
}

function OfferContent({offer}: TOfferContentProps): ReactNode {
  const nearOffers = useAppSelector(selectNearOffers);
  const dispatch = useAppDispatch();

  const {
    id,
    images,
    isPremium,
    isFavorite,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description
  } = offer;

  useEffect(() => {
    dispatch(fetchNearOffers(id));
  }, [dispatch, id]);

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              isPremium &&
          <div className="offer__mark">
            <span>Premium</span>
          </div>
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button
                className={cn('offer__bookmark-button button', {
                  'offer__bookmark-button--active': isFavorite
                })}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: getRatingWidth(rating) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalizeFirstCharacter(type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedroom{getPluralEnding(bedrooms)}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adult{getPluralEnding(maxAdults)}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => (
                  <li key={good} className="offer__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                {
                  host.isPro &&
                  <span className="offer__user-status">
                    Pro
                  </span>
                }
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <Review />
          </div>
        </div>
        {
          nearOffers.length !== 0 &&
          <Map
            classBlock='offer'
            offers={nearOffers}
            offer={offer}
          />
        }
      </section>
      {
        nearOffers.length !== 0 &&
        <NearOffers
          nearOffers={nearOffers}
        />
      }
    </>
  );
}

export default OfferContent;