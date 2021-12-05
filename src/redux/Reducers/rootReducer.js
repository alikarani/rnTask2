import { combineReducers } from 'redux';
import postReducer from './postReducer';

const appReducer = combineReducers({
  postReducer: postReducer
});
export default appReducer;
