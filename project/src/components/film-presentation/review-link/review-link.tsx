import { Link } from 'react-router-dom';
import { AppRoute } from '../../../consts';

type ReviewLinkProps = {
  id: number
}

function ReviewLink({id}:ReviewLinkProps):JSX.Element{
  const reviewLink = AppRoute.AddReview.replace(':id', id.toString());
  return (<Link to={reviewLink} className="btn film-card__button">Add Review</Link>);
}

export default ReviewLink;
