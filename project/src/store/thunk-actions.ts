import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import FilmInfo from '../types/film-info';
import AdditionalUrl from '../types/additional-url';
import { ceaseSpinning, insertComments, insertFilms, insertPromo, setReviewsLoading, startSpinning, unsetReviewsLoading } from './actions';
import { toast } from 'react-toastify';
import ApiErrorMessage from '../types/api-error-message';
import Review from '../types/review';

export const downloadFilms = () => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  dispatch(startSpinning());
  await api.get<FilmInfo[]>(AdditionalUrl.Films)
    .then((response)=>{
      const films = response.data;
      dispatch(insertFilms({films}));
    })
    .catch(()=>{
      dispatch(insertFilms({films: []}));
      toast.warn(ApiErrorMessage.FilmsDownload);
    })
    .finally(()=>{
      dispatch(ceaseSpinning());
    });
};

export const downloadPromo = () => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  dispatch(startSpinning());
  await api.get<FilmInfo>(AdditionalUrl.Promo)
    .then((response)=>{
      const promoFilm = response.data;
      dispatch(insertPromo({promoFilm}));
    })
    .catch(()=>{
      const promoFilm = undefined;
      dispatch(insertPromo({promoFilm}));
      toast.warn(ApiErrorMessage.PromoDownload);
    })
    .finally(()=>{
      dispatch(ceaseSpinning());
    });
};

export const downloadComments = (id:number) => async (dispatch: AppDispatch, getState: ()=>State, api: AxiosInstance) => {
  const url = `${AdditionalUrl.Comments}/${id}`;
  dispatch(setReviewsLoading());
  await api.get<Review[]>(url)
    .then((response)=>{
      dispatch(insertComments({reviews: response.data}));
    })
    .catch(()=>{
      dispatch(insertComments({reviews: []}));
      toast.warn(ApiErrorMessage.CommentsDownload);
    })
    .finally(()=>{
      dispatch(unsetReviewsLoading());
    });
};
