import axios from 'axios';
import {
  GET_USERS,
  SET_LOADING,
  USER_ERROR,
  ADD_USER,
  DELETE_USER,
} from './types';

const setLoading = () => ({ type: SET_LOADING });

export const getUsers = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get('/api/users');
    dispatch({ type: GET_USERS, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_ERROR, payload: err.message });
  }
};

export const addUser = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post('api/users', formData, config);
    dispatch({ type: ADD_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_ERROR, payload: err.message });
  }
};
export const DeleteUser = id => async dispatch => {
  try {
    setLoading();
    await axios.delete(`/api/users/${id}`);
    dispatch({ type: DELETE_USER, payload: id });
  } catch (err) {
    dispatch({ type: USER_ERROR, payload: err.message });
  }
};
