import { combineReducers } from 'redux';
import taskReducer from './task.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  taskState: taskReducer,
  userState: userReducer,
});
