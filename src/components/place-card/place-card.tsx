import { Link, useNavigate } from 'react-router-dom';
import { MouseEvent, ReactNode, memo } from 'react';
import cn from 'classnames';

import { TOfferPreview } from '../../types/offer';
import { capitalizeFirstCharacter } from '../../utils/utils';
import { getRatingWidth } from '../../utils/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPostFavoriteStatus } from '../../store/offers/offers-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { selectAuthStatus } from '../../store/user/user-selector';
import { changeActiveOffer, dropActiveOffer } from '../../store/offers/offers-slice';

type TPlaceCardProps = {
  offer: TOfferPreview;
  classBlock: string;
  onMouseOver?: boolean;
  isFavoriteCard?: boolean;
};

function PlaceCard(
  {
    offer,
    classBlock,
    isFavoriteCard = false,
    onMouseOver = false
  }: TPlaceCardProps): ReactNode {
  const {
    isPremium,
    isFavorite,
    id,
    price,
    title,
    type,
    previewImage,
    rating
  } = offer;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(selectAuthStatus);

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchPostFavoriteStatus({id, status: isFavorite}));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article
      className={`place-card ${classBlock}__card`}
      onMouseOver={() => onMouseOver && dispatch(changeActiveOffer({id}))}
      onMouseLeave={() => onMouseOver && dispatch(dropActiveOffer())}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`place-card__image-wrapper ${classBlock}__image-wrapper`}>
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
            onClick={handleFavoriteClick}
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

const PlaceCardMemo = memo(PlaceCard);

export default PlaceCardMemo;
