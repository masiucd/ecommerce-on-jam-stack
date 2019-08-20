import {GET_USERS} from '../actions/types'
const initialState = {
  users: null,
  loading: false,
  error: null,
}

export default (state= initialState,{type,payload} ) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,

      }


    default:
      return state;
  }
}