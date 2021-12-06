import * as types from '../types';
import {get, post} from '../../Api/index';
import {endpoints} from '../../Api/configs';

export const login = data => {
  return async dispatch => {
    try {
      const response = await get(
        endpoints.login + `/${data?.email}/${data?.password}`,
      );
      dispatch({type: types.GET_LOGIN, payload: response});
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      dispatch({type: types.GET_LOGOUT});
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
