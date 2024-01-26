type RevealingButtonProps = {
  isHidden?: boolean;
  onClick?: ()=>void
};

function RevealingButton({isHidden = false, onClick}:RevealingButtonProps):JSX.Element{
  const classList = `catalog__more${isHidden ? ' visually-hidden' : ''}`;
  return(
    <div className={classList}>
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

export default RevealingButton;
