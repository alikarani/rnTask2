import * as types from '../types';
import { get, post } from '../../Api/index';
import { endpoints } from '../../Api/configs';

export const getPost = () => {
  return async (dispatch) => {
    try {
      const response = await get(endpoints.post);
      dispatch({ type: types.GET_POST, payload: response });
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const createPost = (data) => {
  return async (dispatch) => {
    try {
      const response = await post(endpoints.post, data, false);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};