import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks/store-hooks';
import { sendReview } from '../../store/thunk-actions';
import RatingInput from './rating-input/rating-input';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

const
  MIN_RATING = 1,
  MAX_RATING = 10;

const INITIAL_COMMENT = '';
const INITIAL_RATING = 0;

type ReviewFormProps = {
  filmId: number
}

function ReviewForm({filmId}: ReviewFormProps):JSX.Element{
  const dispatch = useAppDispatch();
  const isReviewSending = useAppSelector((state) => state.isReviewSending);
  const isSendingFailed = useAppSelector((state) => state.isSendingFailed);
  const [comment, setComment] = useState(INITIAL_COMMENT);
  const [rating, setRating] = useState(INITIAL_RATING);

  useEffect(()=>{
    let isMounted = true;

    if(isMounted && !isReviewSending && !isSendingFailed){
      setComment(INITIAL_COMMENT);
      setRating(INITIAL_RATING);
    }

    return ()=>{
      isMounted = false;
    };
  }, [isReviewSending, isSendingFailed]);

  const handleCommentChange = (evt:ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleRatingChange = (evt:ChangeEvent<HTMLInputElement>) => {
    const changedRating = Number(evt.target.value);
    setRating(changedRating);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    dispatch(sendReview(filmId, {rating, comment}));
  };

  return(
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
        <RatingInput name="rating" minRating={MIN_RATING} maxRating={MAX_RATING} rating={rating} onChange={handleRatingChange}/>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleCommentChange} value={comment}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
