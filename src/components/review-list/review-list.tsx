import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchComments } from '../../store/comments/comments-action';
import ReviewItem from '../review-item/review-item';
import { selectCommentsCount, selectSortedComments } from '../../store/comments/comments-selector';

function ReviewList(): ReactNode {
  const dispatch = useAppDispatch();
  const { offerId } = useParams();
  const commentsCount = useAppSelector(selectCommentsCount);
  const sortedComments = useAppSelector(selectSortedComments);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchComments(offerId));
    }
  }, [offerId, dispatch]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsCount}</span></h2>
      <ul className="reviews__list">
        {sortedComments.map((comment) => (
          <ReviewItem
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
