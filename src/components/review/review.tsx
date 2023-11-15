import { useAppSelector } from '../../hooks';

import { selectSortedComments } from '../../store/comments/comments-selector';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

function Review() {
  const comments = useAppSelector(selectSortedComments);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewList
        comments={comments}
      />
      <ReviewForm />
    </section>
  );
}

export default Review;
