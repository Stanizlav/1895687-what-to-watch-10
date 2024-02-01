import { Middleware } from '@reduxjs/toolkit';
import { REDIRECT_ACTION_TYPE } from '../../consts';
import browserHistory from '../../services/browser-history';

const redirect : Middleware = (store) => (next) => (action) =>{
  if(action.type === REDIRECT_ACTION_TYPE){
    browserHistory.push(action.payload);
  }
  next(action);
};

export default redirect;
