import {
  GET_TASKS,
  SET_LOADING,
  ADD_TASKS,
  DELETE_TASKS,
  TASKS_ERROR,
  SET_CURRENT,
  UPDATE_TASK,
} from '../actions/types';

const initialState = {
  tasks: null,
  loading: false,
  current: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };

    case ADD_TASKS:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
        loading: false,
      };
    case DELETE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === payload._id ? payload : task
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case TASKS_ERROR:
      return {
        ...payload,
        error: payload,
      };
    default:
      return state;
  }
};
