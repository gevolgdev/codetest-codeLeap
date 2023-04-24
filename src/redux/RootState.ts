import { combineReducers } from '@reduxjs/toolkit';
import userNameReducer from './reducers/userNameSlice';
import addNewPostReducer from './reducers/userPostSlice';


const rootReducer = combineReducers({
  userName: userNameReducer,
  newPost: addNewPostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
