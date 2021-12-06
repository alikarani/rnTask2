import {combineReducers} from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  postReducer: postReducer,
  authReducer: authReducer,
});
export default appReducer;
