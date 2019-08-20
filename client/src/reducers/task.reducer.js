import { GET_TASKS, SET_LOADING, ADD_TASKS } from '../actions/types';

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

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
