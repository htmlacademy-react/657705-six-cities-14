import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';

import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH, StarRating } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPostComment } from '../../store/comments/comments-action';
import { selectOffer } from '../../store/offers/offers-selector';
import { selectLoadingStatus } from '../../store/comments/comments-selector';

function ReviewForm() {
  const dispatch = useAppDispatch();

  const offer = useAppSelector(selectOffer);
  const loading = useAppSelector(selectLoadingStatus);

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    if (formValid) {
      e.preventDefault();
      dispatch(fetchPostComment({comment, rating, offerId: offer?.id}));
    }
  };

  useEffect(() => {
    const commentValid =
      comment.length >= MIN_COMMENT_LENGTH && comment.length <= MAX_COMMENT_LENGTH;
    const ratingValid = rating !== 0;

    setFormValid(commentValid && ratingValid);

  }, [comment, rating]);

  return (
    <form
      onSubmit={handleSubmitForm}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(StarRating).reverse().map(([value, title]) => (
          <Fragment key={title}>
            <input
              onChange={handleRatingChange}
              checked={value === rating}
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              disabled={loading === 'loading'}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={handleCommentChange}
        value={comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={loading === 'loading'}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe
        your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formValid || loading === 'loading'}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
