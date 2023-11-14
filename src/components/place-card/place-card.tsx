import { Link } from 'react-router-dom';
import cn from 'classnames';

import { TOfferPreview } from '../../types/offer';
import { capitalizeFirstCharacter } from '../../utils/utils';
import { AppRoute } from '../../const';
import { getRatingWidth } from '../../utils/offer';

type PlaceCardProps = {
  offer: TOfferPreview;
  onMouseOver?: (offerId: string) => void;
  isFavoriteCard: boolean;
};

function PlaceCard({ offer, isFavoriteCard, onMouseOver }: PlaceCardProps): JSX.Element {
  const {
    isPremium,
    isFavorite,
    id, price,
    title,
    type,
    previewImage,
    rating
  } = offer;

  return (
    <article
      className={
        cn('place-card', {
          'cities__card': !isFavoriteCard,
          'favorites__card': isFavoriteCard
        })
      }
      onMouseOver={() => onMouseOver && onMouseOver(id)}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div
        className={
          cn('place-card__image-wrapper', {
            'cities__image-wrapper': !isFavoriteCard,
            'favorites__image-wrapper': isFavoriteCard
          })
        }
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoriteCard ? '150' : '260'}
            height={isFavoriteCard ? '110' : '200'}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={
          cn('place-card__info', {
            'favorites__card-info': isFavoriteCard
          })
        }
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              cn('place-card__bookmark-button button', {
                'place-card__bookmark-button--active': isFavorite
              })
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstCharacter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
