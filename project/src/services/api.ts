import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';
import { toast } from 'react-toastify';

const BASE_URL = 'https://11.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;
const TOKEN_HEADER = 'X-Token';

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use((config)=>{
    const token = getToken();
    if(token && config.headers){
      config.headers[TOKEN_HEADER] = token;
    }
    return config;
  });

  api.interceptors.response.use((response)=>response, (error)=>{
    if(error.response){
      const message = error.response.data.error;
      toast.warn(message);
    }
    throw error;
  });

  return api;
};
