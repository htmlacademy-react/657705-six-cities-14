import cn from 'classnames';
import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import { capitalizeFirstCharacter } from '../../utils/utils';

type PlaceCardProps = {
  offer: TOffer;
  onMouseOver?: (activeOffer: TOffer) => void;
  isFavoriteCard: boolean;
};

function PlaceCard({ offer, isFavoriteCard, onMouseOver }: PlaceCardProps): JSX.Element {
  return (
    <article
      className={
        cn('place-card', {
          'cities__card': !isFavoriteCard,
          'favorites__card': isFavoriteCard
        })
      }
      //FIXME: Другая проверка?
      onMouseOver={() => onMouseOver && onMouseOver(offer)}
    >
      {
        offer.isPremium &&
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
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
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
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              cn('place-card__bookmark-button button', {
                'place-card__bookmark-button--active': offer.isFavorite
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
            <span style={{ width: `${isFavoriteCard ? '100%' : '80%'}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstCharacter(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
