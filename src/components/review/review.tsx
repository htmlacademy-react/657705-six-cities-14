import IsAuth from '../is-auth/is-auth';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

function Review() {
  return (
    <section className="offer__reviews reviews">
      <ReviewList />
      <IsAuth authComponent={<ReviewForm />} noAuthComponent={null} />
    </section>
  );
}

export default Review;
