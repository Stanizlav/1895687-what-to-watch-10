import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import FilmInfo from '../types/film-info';
import AdditionalUrl from '../types/additional-url';
import { ceaseSpinning, insertComments, insertFilms, insertPromo, insertSimilarFilms, insertTheFilm, redirection, setAuthorised, setReviewsLoading, setSending, setSendingError, setUnauthorised, startSpinning, unsetReviewsLoading, unsetSending, unsetSendingError } from './actions';
import { toast } from 'react-toastify';
import ApiErrorMessage from '../types/api-error-message';
import Review from '../types/review';
import AuthData from '../types/auth-data';
import { removeToken, saveToken } from '../services/token';
import { AppRoute } from '../consts';

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
  await api.get<FilmInfo>(AdditionalUrl.Promo)
    .then((response)=>{
      const promoFilm = response.data;
      dispatch(insertPromo({promoFilm}));
    })
    .catch(()=>{
      const promoFilm = undefined;
      dispatch(insertPromo({promoFilm}));
      toast.warn(ApiErrorMessage.PromoDownload);
    });
};

export const downloadTheFilm = (id:number) => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  await api.get<FilmInfo>(`${AdditionalUrl.Films}/${id}`)
    .then((response)=>{
      dispatch(insertTheFilm(response.data));
    })
    .catch(()=>{
      dispatch(insertTheFilm(undefined));
      toast.warn(ApiErrorMessage.TheFilmDownload);
    });
};

export const downloadSimilarFilms = (id:number) => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  await api.get<FilmInfo[]>(AdditionalUrl.SimilarFilms.replace(':id', id.toString()))
    .then((response)=>{
      dispatch(insertSimilarFilms(response.data));
    })
    .catch(()=>{
      dispatch(insertSimilarFilms([]));
      toast.warn(ApiErrorMessage.TheFilmDownload);
    });
};

export const downloadComments = (id:number) => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
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

export const sendReview = (id: number, data: {comment: string, rating: number}) =>
  async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
    dispatch(setSending());
    await api.post<Review[]>(`${AdditionalUrl.Comments}/${id}`, data)
      .then((response)=>{
        dispatch(insertComments({reviews: response.data}));
        dispatch(unsetSendingError());
      })
      .catch(()=>{
        dispatch(setSendingError());
        toast.warn(ApiErrorMessage.ReviewSend);
      })
      .finally(()=>{dispatch(unsetSending());});
  };

export const authorisationCheck = () => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  await api.get(AdditionalUrl.Login)
    .then((response)=>{
      dispatch(setAuthorised(response.data));
    })
    .catch(()=>{
      dispatch(setUnauthorised());
    });
};

export const logIn = (authData: AuthData) => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  await api.post(AdditionalUrl.Login, authData)
    .then((response)=>{
      const {token} = response.data;
      saveToken(token);
      dispatch(setAuthorised(response.data));
      dispatch(redirection(AppRoute.Main));
    })
    .catch(()=>{
      toast.warn(ApiErrorMessage.Login);
    });
};

export const logOut = () => async (dispatch: AppDispatch, getState: () => State, api: AxiosInstance) => {
  await api.delete(AdditionalUrl.Logout)
    .then(()=>{
      dispatch(setUnauthorised());
      removeToken();
    })
    .catch(()=>{
      toast.warn(ApiErrorMessage.Logout);
    });
};
