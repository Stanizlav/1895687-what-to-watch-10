import RatingInput from './rating-input/rating-input';
import { useState, ChangeEvent } from 'react';

const
  MIN_RATING = 1,
  MAX_RATING = 10;

const INITIAL_COMMENT = '';
const INITIAL_RATING = 0;

function ReviewForm():JSX.Element{
  const [review, setReview] = useState(INITIAL_COMMENT);
  const [rating, setRating] = useState(INITIAL_RATING);

  const handleCommentChange = (evt:ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (evt:ChangeEvent<HTMLInputElement>) => {
    const changedRating = Number(evt.target.value);
    setRating(changedRating);
  };

  return(
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingInput name="rating" minRating={MIN_RATING} maxRating={MAX_RATING} rating={rating} onChange={handleRatingChange}/>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleCommentChange}>{review}</textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
