import { createStore, combineReducers } from 'redux';
import login_reducer from './reducers/login_reducer.js';
import user_reducer from './reducers/user_reducer.js';
import order_reducer from './reducers/order_reducer.js';

export default createStore(
  combineReducers({
    login_reducer,
    user_reducer,
    order_reducer,
    //reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
