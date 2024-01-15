import { REVIEWS } from '../../../mocks/reviews';
import FilmInfo from '../../../types/film-info';
import Review from '../../../types/review';
import Reviewing from '../../reviewing/reviewing';

type ReviewsTabProps = {
  film: FilmInfo
};

const COLUMN_COMMENTS_COUNT = 3;

function ReviewsTab({film}: ReviewsTabProps):JSX.Element{
  const reviews: Review[] = REVIEWS.filter((element) => element.id >= film.id);
  const filledColumnsCount = Math.floor(reviews.length / COLUMN_COMMENTS_COUNT);
  const reviewsColumnsCount = (reviews.length % COLUMN_COMMENTS_COUNT) ? filledColumnsCount + 1 : filledColumnsCount;
  const presentedReviews = Array.from({length: reviewsColumnsCount},
    (element, index) => reviews.slice(index * COLUMN_COMMENTS_COUNT, (index + 1) * COLUMN_COMMENTS_COUNT));

  return(
    <div className="film-card__reviews film-card__row">
      {presentedReviews.map((element) => <div key={element[0].id} className="film-card__reviews-col">{element.map((item) => <Reviewing key={item.id} review={item}/>)}</div>)}
    </div>
  );
}

export default ReviewsTab;
