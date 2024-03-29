import { configureStore } from '@reduxjs/toolkit';
import reducer from './root-reducer';
import { createAPI } from '../services/api';
import redirect from './middleware/redirect';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  }).concat(redirect)
});
