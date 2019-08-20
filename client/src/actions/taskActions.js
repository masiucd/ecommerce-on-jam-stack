import axios from 'axios';
import {
  GET_TASKS,
  TASKS_ERROR,
  ADD_TASKS,
  SET_LOADING,
  DELETE_TASKS,
  UPDATE_TASK,
  SET_CURRENT,
} from './types';

const setLoading = () => ({ type: SET_LOADING });

export const getTasks = () => async dispatch => {
  setLoading();
  try {
    const res = await axios.get('/api/tasks');
    dispatch({ type: GET_TASKS, payload: res.data });
  } catch (err) {
    dispatch({ type: TASKS_ERROR, payload: err.message });
  }
};

export const addTask = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post(`/api/tasks`, formData, config);
    dispatch({ type: ADD_TASKS, payload: res.data });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.message,
    });
  }
};

export const deleteTask = id => async dispatch => {
  try {
    setLoading();
    await axios.delete(`/api/tasks/${id}`);
    dispatch({ type: DELETE_TASKS, payload: id });
  } catch (err) {
    dispatch({ type: TASKS_ERROR, payload: err.message });
  }
};

export const updateTask = task => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.put(`/api/tasks/${task._id}`, task, config);
    dispatch({ type: UPDATE_TASK, payload: res.data });
  } catch (err) {
    dispatch({ type: TASKS_ERROR, payload: err.message });
  }
};

export const setCurrent = task => ({ type: SET_CURRENT, payload: task });
