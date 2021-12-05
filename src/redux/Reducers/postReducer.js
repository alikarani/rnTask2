import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.postReducer;

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
