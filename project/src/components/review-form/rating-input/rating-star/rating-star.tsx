type RatingStarProps = {
  value: number;
  name: string;
  isChecked?: boolean
};

function RatingStar({value, name, isChecked = false}:RatingStarProps):JSX.Element{
  const id = `star-${value}`;
  return(
    <>
      <input className="rating__input" id={id} type="radio" name={name} value={value} checked={isChecked} />
      <label className="rating__label" htmlFor={id}>Rating {value}</label>
    </>
  );
}

export default RatingStar;
