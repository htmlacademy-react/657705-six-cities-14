import { ReactNode, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TComment } from '../../types/comment';
import { useAppDispatch } from '../../hooks';
import { fetchComments } from '../../store/comments/comments-action';
import ReviewItem from '../review-item/review-item';

type TReviewList = {
  comments: TComment[];
}

function ReviewList({comments}: TReviewList): ReactNode {
  const dispatch = useAppDispatch();
  const { offerId } = useParams();

  useEffect(() => {
    if (offerId) {
      dispatch(fetchComments(offerId));
    }
  }, [offerId, dispatch]);

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </ul>
  );
}

export default ReviewList;
