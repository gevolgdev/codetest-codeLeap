import { combineReducers } from '@reduxjs/toolkit';
import userNameReducer from '../features/username/userNameSlice';


const rootReducer = combineReducers({
  userName: userNameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
