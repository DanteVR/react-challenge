import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { history } from '@utils';
import customer from './slices/customer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  customer,
});

export { rootReducer };
