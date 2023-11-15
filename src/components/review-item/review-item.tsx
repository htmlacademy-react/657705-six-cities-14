import { ReactNode } from 'react';

import { TComment } from '../../types/comment';
import { getRatingWidth } from '../../utils/offer';
import { getMonthYearFromIso, getSimpleDateFromIso } from '../../utils/comment';

type TReviewItem = {
  comment: TComment;
}

function ReviewItem({comment}: TReviewItem): ReactNode {
  const {
    user,
    comment: userComment,
    rating,
    date
  } = comment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {userComment}
        </p>
        <time className="reviews__time" dateTime={getSimpleDateFromIso(date)}>{getMonthYearFromIso(date)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
