import { ChangeEvent } from 'react';
import RatingStar from './rating-star/rating-star';

const DEFAULT_INCREMENT = 1;

type RatingInputProps = {
  name: string;
  minRating: number;
  maxRating: number;
  rating: number
  increment?: number;
  onChange?: (evt:ChangeEvent<HTMLInputElement>)=>void;
};

function RatingInput({name, minRating, maxRating, rating, increment = DEFAULT_INCREMENT, onChange}:RatingInputProps):JSX.Element{
  const min = Math.min(minRating, maxRating), max = Math.max(minRating, maxRating);
  const inc = Math.floor(Math.abs(increment)) || DEFAULT_INCREMENT;
  const length = Math.floor((max - min) / inc) + 1;
  const ratingSet = Array.from({length},((element, index) => max - index * inc));
  return(
    <div className="rating">
      <div className="rating__stars" onChange={onChange}>
        {ratingSet.map((element) => <RatingStar key={element} value={element} name={name} isChecked={element === rating}/>)}
      </div>
    </div>
  );
}

export default RatingInput;
