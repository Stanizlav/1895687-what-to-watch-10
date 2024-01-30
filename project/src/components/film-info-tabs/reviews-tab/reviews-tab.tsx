import { useAppSelector } from '../../../hooks/store-hooks/store-hooks';
import Reviewing from '../../reviewing/reviewing';
import Spinner from '../../spinner/spinner';

const COLUMN_COMMENTS_COUNT = 3;

function ReviewsTab():JSX.Element{
  const isReviewsLoading = useAppSelector((state)=>state.isReviewsLoading);
  const reviews = useAppSelector((state)=>state.reviews);
  const filledColumnsCount = Math.floor(reviews.length / COLUMN_COMMENTS_COUNT);
  const reviewsColumnsCount = (reviews.length % COLUMN_COMMENTS_COUNT) ? filledColumnsCount + 1 : filledColumnsCount;
  const presentedReviews = Array.from({length: reviewsColumnsCount},
    (element, index) => reviews.slice(index * COLUMN_COMMENTS_COUNT, (index + 1) * COLUMN_COMMENTS_COUNT));

  if(isReviewsLoading){
    return <Spinner/>;
  }

  return(
    <div className="film-card__reviews film-card__row">
      {presentedReviews.map((element) => <div key={element[0].id} className="film-card__reviews-col">{element.map((item) => <Reviewing key={item.id} review={item}/>)}</div>)}
    </div>
  );
}

export default ReviewsTab;
