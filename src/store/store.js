import { createStore, combineReducers } from 'redux';
import login_reducer from './reducers/login_reducer';
import user_reducer from './reducers/user_reducer';

export default createStore(
  combineReducers({
    login_reducer,
    user_reducer,
    //reducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
