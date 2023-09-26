const getFilmRatingLevel = (rating:number) => {
  if(rating >= 9){
    return 'Brilliant';
  }
  if(rating > 8){
    return 'Very Good';
  }
  if(rating > 7){
    return 'Good';
  }
  if(rating > 6){
    return 'Not Bad';
  }
  if(rating > 4){
    return 'Bad';
  }
  return 'Not worth watching';
};

export default getFilmRatingLevel;
