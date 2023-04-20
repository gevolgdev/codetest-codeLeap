import { combineReducers } from '@reduxjs/toolkit';
import userNameReducer from '../features/userNameSlice';
import addNewPostReducer from '../features/userPostSlice';


const rootReducer = combineReducers({
  userName: userNameReducer,
  newPost: addNewPostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
